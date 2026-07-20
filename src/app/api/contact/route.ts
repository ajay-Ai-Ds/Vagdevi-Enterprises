import { NextResponse } from "next/server";
import * as z from "zod";

// Zod Schema matching client-side validation
const serverContactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  location: z.string().min(2).max(100),
  service: z.string().min(2).max(100),
  message: z.string().max(1000).optional(),
});

// Extremely simple, in-memory rate limiting map
// Maps IP Address -> Timestamp[] of submissions
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Simple input sanitization function to strip common HTML tags (XSS block)
function sanitizeString(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export async function POST(request: Request) {
  try {
    // Get client IP address for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    
    // Rate Limiting Logic
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recentRequests = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW);
    
    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many requests. Please try again after a minute." },
        { status: 429 }
      );
    }
    
    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);

    const body = await request.json();
    
    // Server-side Zod validation
    const result = serverContactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data submission." },
        { status: 400 }
      );
    }

    // Input sanitization to prevent XSS payloads
    const name = sanitizeString(result.data.name);
    const phone = sanitizeString(result.data.phone);
    const location = sanitizeString(result.data.location);
    const service = sanitizeString(result.data.service);
    const message = result.data.message ? sanitizeString(result.data.message) : "";

    console.log("Validated & Sanitized Submission Received:", {
      name,
      phone,
      location,
      service,
      message,
      submittedAt: new Date().toISOString(),
    });

    // Zero-dependency email notification using Resend API
    // Automatically runs if RESEND_API_KEY is added to environment variables
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Vagdevi Enterprises Website <onboarding@resend.dev>",
            to: "vagdevienterprises@gmail.com",
            subject: `🔥 New Lead: ${name} (${service})`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                <h2 style="color: #0f2747; border-bottom: 2px solid #f97316; padding-bottom: 8px;">New Website Lead Received</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 150px;">Name:</td>
                    <td style="padding: 8px 0; color: #0f2747;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
                    <td style="padding: 8px 0; color: #0f2747;"><a href="tel:${phone}" style="color: #f97316; font-weight: bold; text-decoration: none;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #475569;">Locality:</td>
                    <td style="padding: 8px 0; color: #0f2747;">${location}, Chennai</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
                    <td style="padding: 8px 0; color: #0f2747; font-weight: bold;">${service}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #475569; vertical-align: top;">Message:</td>
                    <td style="padding: 8px 0; color: #0f2747; white-space: pre-wrap;">${message || "No message provided."}</td>
                  </tr>
                </table>
                <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
                  Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} (IST) from Vagdevi Enterprises website.
                </div>
              </div>
            `,
          }),
        });

        if (!response.ok) {
          const errorMsg = await response.text();
          console.error("Resend API email transmission error:", errorMsg);
        } else {
          console.log("Email notification successfully transmitted to vagdevienterprises@gmail.com");
        }
      } catch (emailErr) {
        console.error("Failed sending email notification:", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY not found in environment variables. Email notification was skipped.");
    }

    return NextResponse.json({ success: true, message: "Quote request successfully processed." });
  } catch (error) {
    console.error("Server-side contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}

