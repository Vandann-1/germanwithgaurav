import { MetadataRoute } from "next";
import { coursesData } from "@/data/coursesData";
import { blogArticles, blogCategories } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://germanwithgaurav.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/learn-german",
    "/blog",
    "/faq",
    "/people",
    "/contact",
    "/book-a-free-demo",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/courses") || route === "/book-a-free-demo" ? 0.9 : 0.8,
  }));

  // Course routes
  const courseRoutes = coursesData.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Blog article routes
  const articleRoutes = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Category archive routes
  const categoryRoutes = blogCategories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...articleRoutes, ...categoryRoutes];
}
