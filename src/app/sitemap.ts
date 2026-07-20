import { MetadataRoute } from "next";
import { servicesData } from "@/utils/servicesData";
import { areasList } from "@/utils/areasData";
import { projectsData } from "@/utils/projectsData";
import { blogData } from "@/utils/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vagdevienterprises.com";

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/areas",
    "/projects",
    "/gallery",
    "/blog",
    "/search",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Service Category Routes (Only Invisible Grills has a category landing page)
  const categoryRoutes = ["/services/invisible-grills"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  // 3. Dynamic Service Pages (5 Services)
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 3.1. Dynamic Locality-Service Landing Pages (64 pages)
  const targetLocalities = ["adyar", "velachery", "omr", "ecr", "anna-nagar", "t-nagar", "porur", "tambaram"];
  const localityServiceRoutes: { url: string; lastModified: Date; changeFrequency: "monthly"; priority: number }[] = [];
  
  Object.keys(servicesData).forEach((serviceSlug) => {
    targetLocalities.forEach((localitySlug) => {
      localityServiceRoutes.push({
        url: `${baseUrl}/services/${serviceSlug}/${localitySlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    });
  });

  // 4. Dynamic Area Pages (14 Areas in Chennai)
  const areaRoutes = areasList.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 5. Dynamic Project Case Studies (3 Projects in Chennai)
  const projectRoutes = Object.keys(projectsData).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 6. Dynamic Blog Posts (3 Articles in Chennai)
  const blogRoutes = Object.keys(blogData).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...localityServiceRoutes,
    ...areaRoutes,
    ...projectRoutes,
    ...blogRoutes
  ];
}


