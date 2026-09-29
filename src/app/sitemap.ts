import { MetadataRoute } from "next";
import { coursesData } from "@/data/coursesData";
import { learningPathsData } from "@/data/learningPathsData";
import { blogArticles, blogCategories } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://germanwithgaurav.com";

  // Static canonical routes
  const staticRoutes = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/courses", priority: 0.95, changeFrequency: "weekly" as const },
    { route: "/learning-paths", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/method", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/book-demo", priority: 0.95, changeFrequency: "weekly" as const },
    { route: "/resources", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/learn-german", priority: 0.85, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/sitemap", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.5, changeFrequency: "yearly" as const },
    { route: "/refund-policy", priority: 0.5, changeFrequency: "yearly" as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date("2026-09-29"),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // Course routes (/courses/a1, /courses/a2, /courses/b1)
  const courseRoutes = coursesData.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  // Learning path routes (/learning-paths/everyday-german, etc.)
  const learningPathRoutes = learningPathsData.map((path) => ({
    url: `${baseUrl}/learning-paths/${path.slug}`,
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

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...learningPathRoutes,
    ...articleRoutes,
    ...categoryRoutes,
  ];
}
