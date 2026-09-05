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
    ];
  },
};

export default nextConfig;
