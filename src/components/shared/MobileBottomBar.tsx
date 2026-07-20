"use client";

import { Phone, MessageSquare } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] px-4 py-3.5 flex gap-3 xl:hidden">
      {/* Phone Button */}
      <a
        href="tel:+918019091366"
        className="flex-1 flex items-center justify-center gap-2 bg-orange-700 text-white font-bold py-3.5 rounded-xl active:scale-98 transition-all shadow-md active:shadow-sm text-sm min-h-[48px]"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918019091366?text=Hi%20Vagdevi%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20invisible%20grills%2Fsports%20nets."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 text-white font-bold py-3.5 rounded-xl active:scale-98 transition-all shadow-md active:shadow-sm text-sm min-h-[48px]"
      >
        <MessageSquare className="w-4 h-4 fill-white/10" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

