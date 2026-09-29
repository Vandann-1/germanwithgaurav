import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BatchPosterModal } from "@/components/BatchPosterModal";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "German With Gaurav | Premium German Language Academy",
    template: "%s | German With Gaurav",
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  keywords: [
    "German Language Academy",
    "German With Gaurav",
    "Gaurav Raghuvanshi",
    "A1 German course",
    "A2 German course",
    "B1 German course",
    "Goethe-Zertifikat preparation",
    "Learn German online India",
    "German classes Pune",
    "German for engineers and professionals",
    "German university language requirements",
  ],
  authors: [{ name: "Gaurav Raghuvanshi", url: siteConfig.url }],
  creator: "Gaurav Raghuvanshi",
  publisher: "German With Gaurav",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "German With Gaurav | Premium German Language Academy",
    description: siteConfig.description,
    images: [
      {
        url: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
        width: 1200,
        height: 630,
        alt: "German With Gaurav - Learn German with Clarity and Confidence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "German With Gaurav | Premium German Language Academy",
    description: siteConfig.description,
    images: [
      "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-[#faf9f6] text-[#121826] antialiased font-sans overflow-x-hidden selection:bg-red-50 selection:text-red-900">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
        <BatchPosterModal />
      </body>
    </html>
  );
}
