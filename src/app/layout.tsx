import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08175e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Learn German Online with Gaurav Raghuvanshi | German With Gaurav",
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
    "German language courses",
    "German With Gaurav",
    "Gaurav Raghuvanshi",
    "A1 German course",
    "A2 German course",
    "B1 German course",
    "Goethe exam preparation",
    "Learn German online India",
    "German classes Pune",
    "German for Indian students",
    "German for engineers and professionals",
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
    title: "Learn German Online with Gaurav Raghuvanshi | German With Gaurav",
    description: siteConfig.description,
    images: [
      {
        url: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
        width: 1200,
        height: 630,
        alt: "German With Gaurav - Learn German with Gaurav Raghuvanshi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn German Online with Gaurav Raghuvanshi | German With Gaurav",
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
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full scroll-smooth overflow-x-hidden`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800 antialiased font-sans overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
