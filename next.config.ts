import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "germanwithgaurav.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/people-at-gwg",
        destination: "/people",
        permanent: true,
      },
      {
        source: "/people-at-gwg/",
        destination: "/people",
        permanent: true,
      },
      {
        source: "/blog-how-much-german-do-you-need-to-work-in-germany",
        destination: "/blog/how-much-german-do-you-need-to-work-in-germany",
        permanent: true,
      },
      {
        source: "/blog-how-much-german-do-you-need-to-work-in-germany/",
        destination: "/blog/how-much-german-do-you-need-to-work-in-germany",
        permanent: true,
      },
      {
        source: "/german-language-levels-explained-a1-to-c2",
        destination: "/blog/german-language-levels-explained-a1-to-c2",
        permanent: true,
      },
      {
        source: "/german-language-levels-explained-a1-to-c2/",
        destination: "/blog/german-language-levels-explained-a1-to-c2",
        permanent: true,
      },
      {
        source: "/how-long-does-it-take-to-reach-b1-level",
        destination: "/blog/how-long-does-it-take-to-reach-b1-level",
        permanent: true,
      },
      {
        source: "/how-long-does-it-take-to-reach-b1-level/",
        destination: "/blog/how-long-does-it-take-to-reach-b1-level",
        permanent: true,
      },
      {
        source: "/is-learning-german-worth-it-in-2026",
        destination: "/blog/is-learning-german-worth-it-in-2026",
        permanent: true,
      },
      {
        source: "/is-learning-german-worth-it-in-2026/",
        destination: "/blog/is-learning-german-worth-it-in-2026",
        permanent: true,
      },
      {
        source: "/blog/top-7-reasons-why-learning-german-boosts-your-career",
        destination: "/blog/is-learning-german-worth-it-in-2026",
        permanent: true,
      },
      {
        source: "/course",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/course/",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/course/a1-german",
        destination: "/courses/a1-german",
        permanent: true,
      },
      {
        source: "/course/a1-german/",
        destination: "/courses/a1-german",
        permanent: true,
      },
      {
        source: "/course/a2-german",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/course/a2-german/",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/course/b1-german",
        destination: "/courses/b1-german",
        permanent: true,
      },
      {
        source: "/course/b1-german/",
        destination: "/courses/b1-german",
        permanent: true,
      },
      {
        source: "/course/a1",
        destination: "/courses/a1-german",
        permanent: true,
      },
      {
        source: "/course/a1/",
        destination: "/courses/a1-german",
        permanent: true,
      },
      {
        source: "/course/a2",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/course/a2/",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/course/b1",
        destination: "/courses/b1-german",
        permanent: true,
      },
      {
        source: "/course/b1/",
        destination: "/courses/b1-german",
        permanent: true,
      },
      {
        source: "/course/german-a1",
        destination: "/courses/a1-german",
        permanent: true,
      },
      {
        source: "/course/german-a1/",
        destination: "/courses/a1-german",
        permanent: true,
      },
      {
        source: "/course/german-a2",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/course/german-a2/",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/course/german-b1",
        destination: "/courses/b1-german",
        permanent: true,
      },
      {
        source: "/course/german-b1/",
        destination: "/courses/b1-german",
        permanent: true,
      },
      {
        source: "/course/:path*",
        destination: "/courses/:path*",
        permanent: true,
      },
      {
        source: "/courses/a1",
        destination: "/courses/a1-german",
        permanent: true,
      },
      {
        source: "/courses/a2",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/courses/b1",
        destination: "/courses/b1-german",
        permanent: true,
      },
      {
        source: "/courses/german-a1",
        destination: "/courses/a1-german",
        permanent: true,
      },
      {
        source: "/courses/german-a1/",
        destination: "/courses/a1-german",
        permanent: true,
      },
      {
        source: "/courses/german-a2",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/courses/german-a2/",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/courses/german-b1",
        destination: "/courses/b1-german",
        permanent: true,
      },
      {
        source: "/courses/german-b1/",
        destination: "/courses/b1-german",
        permanent: true,
      },
      {
        source: "/category/uncategorized",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/uncategorized/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/benefit-for-german",
        destination: "/category/benefits-of-learning-german",
        permanent: true,
      },
      {
        source: "/category/benefit-for-german/",
        destination: "/category/benefits-of-learning-german",
        permanent: true,
      },
      {
        source: "/category/tips-for-learning-german",
        destination: "/category/german-learning-tips",
        permanent: true,
      },
      {
        source: "/category/tips-for-learning-german/",
        destination: "/category/german-learning-tips",
        permanent: true,
      },
      {
        source: "/about-gaurav",
        destination: "/about-gaurav-raghuvanshi",
        permanent: true,
      },
      {
        source: "/about-gaurav/",
        destination: "/about-gaurav-raghuvanshi",
        permanent: true,
      },
      // Google Sitelinks & Legacy WordPress Slugs
      {
        source: "/faqs",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/faqs/",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/frequently-asked-questions",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/frequently-asked-questions/",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/a1-vs-a2-german-level",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/a1-vs-a2-german-level/",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/a1-vs-a2-german-whats-the-difference",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/a1-vs-a2-german-whats-the-difference/",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/blog/a1-vs-a2-german-whats-the-difference",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/blog/a1-vs-a2-german-whats-the-difference/",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/a1-vs-a2-german-what-is-the-difference",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/a1-vs-a2-german-what-is-the-difference/",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/a1-vs-a2-german",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/a1-vs-a2-german/",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/a1-vs-a2",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/a1-vs-a2/",
        destination: "/blog/a1-vs-a2-german-level",
        permanent: true,
      },
      {
        source: "/beginners-guide-to-german-cases",
        destination: "/blog/beginners-guide-to-german-cases",
        permanent: true,
      },
      {
        source: "/beginners-guide-to-german-cases/",
        destination: "/blog/beginners-guide-to-german-cases",
        permanent: true,
      },
      {
        source: "/a-beginners-guide-to-german-cases",
        destination: "/blog/beginners-guide-to-german-cases",
        permanent: true,
      },
      {
        source: "/a-beginners-guide-to-german-cases/",
        destination: "/blog/beginners-guide-to-german-cases",
        permanent: true,
      },
      {
        source: "/german-cases",
        destination: "/blog/beginners-guide-to-german-cases",
        permanent: true,
      },
      {
        source: "/german-cases/",
        destination: "/blog/beginners-guide-to-german-cases",
        permanent: true,
      },
      {
        source: "/new-a2-morning-batch",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/new-a2-morning-batch/",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/a2-morning-batch",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/a2-morning-batch/",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/blog/new-a2-morning-batch",
        destination: "/courses/a2-german",
        permanent: true,
      },
      {
        source: "/blog/new-a2-morning-batch/",
        destination: "/courses/a2-german",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
