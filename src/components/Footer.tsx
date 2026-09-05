"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Mail, MapPin, ExternalLink, Plus, Minus } from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "./SocialIcons";

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    quickLinks: false,
    courses: false,
    contact: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Upper Footer: Main Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5 pb-4 md:pb-0 border-b border-slate-100 md:border-b-0">
            <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
              <Image
                src="/logo.png"
                alt="German With Gaurav Logo"
                width={160}
                height={55}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Founded by Gaurav Raghuvanshi with over 19+ years of German teaching expertise. Dedicated to helping students, engineers, and healthcare professionals master real-world German and pass Goethe-Zertifikat examinations with complete confidence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600 flex items-center justify-center transition-colors text-slate-500 shadow-2xs"
                aria-label="Follow German With Gaurav on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600 flex items-center justify-center transition-colors text-slate-500 shadow-2xs"
                aria-label="Subscribe to German With Gaurav on YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600 flex items-center justify-center transition-colors text-slate-500 shadow-2xs"
                aria-label="Connect with German With Gaurav on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (Collapsible Accordion on Mobile) */}
          <div className="border-b border-slate-100 md:border-b-0">
            <button
              type="button"
              onClick={() => toggleSection("quickLinks")}
              className="w-full py-4 md:py-0 flex items-center justify-between text-left focus:outline-none md:pointer-events-none md:cursor-default"
              aria-expanded={openSections.quickLinks}
            >
              <h3 className="text-sm font-bold text-[#08175e] uppercase tracking-wider md:mb-4">
                Quick Links
              </h3>
              <span className="md:hidden w-7 h-7 rounded-full bg-slate-100 hover:bg-amber-50 flex items-center justify-center transition-colors shrink-0">
                {openSections.quickLinks ? (
                  <Minus className="w-3.5 h-3.5 text-amber-600 stroke-[2.5]" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-[#08175e] stroke-[2.5]" />
                )}
              </span>
            </button>

            <div className={`${openSections.quickLinks ? "block pb-4" : "hidden"} md:block`}>
              <ul className="space-y-2.5 text-sm pt-1 md:pt-0">
                <li>
                  <Link href="/" className="hover:text-[#08175e] hover:font-medium transition-colors block py-0.5">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#08175e] hover:font-medium transition-colors block py-0.5">
                    About Gaurav
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-[#08175e] hover:font-medium transition-colors block py-0.5">
                    Courses Overview
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="hover:text-[#08175e] hover:font-medium transition-colors block py-0.5">
                    People at GWG
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#08175e] hover:font-medium transition-colors block py-0.5">
                    Blog &amp; Articles
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#08175e] hover:font-medium transition-colors block py-0.5">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#08175e] hover:font-medium transition-colors block py-0.5">
                    Contact Us
                  </Link>
                </li>
                <li className="pt-1.5">
                  <Link
                    href="/book-a-free-demo"
                    className="text-amber-600 hover:text-amber-700 font-bold transition-colors inline-flex items-center gap-1"
                  >
                    <span>Book Free Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: German Courses (Collapsible Accordion on Mobile) */}
          <div className="border-b border-slate-100 md:border-b-0">
            <button
              type="button"
              onClick={() => toggleSection("courses")}
              className="w-full py-4 md:py-0 flex items-center justify-between text-left focus:outline-none md:pointer-events-none md:cursor-default"
              aria-expanded={openSections.courses}
            >
              <h3 className="text-sm font-bold text-[#08175e] uppercase tracking-wider md:mb-4">
                Courses
              </h3>
              <span className="md:hidden w-7 h-7 rounded-full bg-slate-100 hover:bg-amber-50 flex items-center justify-center transition-colors shrink-0">
                {openSections.courses ? (
                  <Minus className="w-3.5 h-3.5 text-amber-600 stroke-[2.5]" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-[#08175e] stroke-[2.5]" />
                )}
              </span>
            </button>

            <div className={`${openSections.courses ? "block pb-4" : "hidden"} md:block`}>
              <ul className="space-y-2.5 text-sm pt-1 md:pt-0">
                <li>
                  <Link href="/courses/a1-german" className="hover:text-[#08175e] hover:font-medium transition-colors flex items-center justify-between py-0.5">
                    <span>A1 German</span>
                    <span className="text-[11px] bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded text-amber-700 font-bold">Beginner</span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/a2-german" className="hover:text-[#08175e] hover:font-medium transition-colors flex items-center justify-between py-0.5">
                    <span>A2 German</span>
                    <span className="text-[11px] bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded text-amber-700 font-bold">Elementary</span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/b1-german" className="hover:text-[#08175e] hover:font-medium transition-colors flex items-center justify-between py-0.5">
                    <span>B1 German</span>
                    <span className="text-[11px] bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded text-amber-700 font-bold">Intermediate</span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-slate-600 hover:text-[#08175e] hover:font-medium transition-colors block py-0.5">
                    All Batch Schedules
                  </Link>
                </li>
                <li>
                  <Link href="/learn-german" className="text-slate-600 hover:text-[#08175e] hover:font-medium transition-colors block py-0.5">
                    CEFR Roadmap Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Contact Info (Collapsible Accordion on Mobile) */}
          <div className="border-b border-slate-100 md:border-b-0">
            <button
              type="button"
              onClick={() => toggleSection("contact")}
              className="w-full py-4 md:py-0 flex items-center justify-between text-left focus:outline-none md:pointer-events-none md:cursor-default"
              aria-expanded={openSections.contact}
            >
              <h3 className="text-sm font-bold text-[#08175e] uppercase tracking-wider md:mb-4">
                Contact Academy
              </h3>
              <span className="md:hidden w-7 h-7 rounded-full bg-slate-100 hover:bg-amber-50 flex items-center justify-center transition-colors shrink-0">
                {openSections.contact ? (
                  <Minus className="w-3.5 h-3.5 text-amber-600 stroke-[2.5]" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-[#08175e] stroke-[2.5]" />
                )}
              </span>
            </button>

            <div className={`${openSections.contact ? "block pb-4" : "hidden"} md:block`}>
              <ul className="space-y-3 text-sm pt-1 md:pt-0">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    1129, The Collection, New Kalyani Nagar, Wadgaon Sheri Road, Pune – 411014, Maharashtra, India
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-[#08175e] transition-colors text-xs font-mono font-medium">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#08175e] transition-colors text-xs font-medium">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors shadow-2xs"
                  >
                    <span>Direct WhatsApp Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Legal & Copyright */}
      <div className="border-t border-slate-100 bg-slate-50/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} German With Gaurav. All rights reserved. Founded by Gaurav Raghuvanshi.</p>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-[#08175e] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#08175e] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-[#08175e] transition-colors">
              Refund Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[#08175e] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
