"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "./SocialIcons";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Upper Footer: Balanced 4-Column Medium Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Brand & Direct Contact */}
          <div className="space-y-3.5">
            <Link href="/" className="inline-block focus:outline-none" aria-label="German With Gaurav Home">
              <Image
                src="/logo.png"
                alt="German With Gaurav Logo"
                width={150}
                height={42}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Online German language academy (A1–B1) by Gaurav Raghuvanshi. Interactive batches of 5–7 students with focused Goethe-Zertifikat preparation.
            </p>

            {/* Compact Direct Contact */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-slate-950 font-mono font-medium transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-slate-950 font-medium transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-red-600 text-slate-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#0077b5] text-slate-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">
              Courses
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/courses/a1" className="hover:text-slate-950 transition-colors flex items-center justify-between">
                  <span>A1 German (Beginner)</span>
                  <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">A1</span>
                </Link>
              </li>
              <li>
                <Link href="/courses/a2" className="hover:text-slate-950 transition-colors flex items-center justify-between">
                  <span>A2 German (Elementary)</span>
                  <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">A2</span>
                </Link>
              </li>
              <li>
                <Link href="/courses/b1" className="hover:text-slate-950 transition-colors flex items-center justify-between">
                  <span>B1 German (Intermediate)</span>
                  <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">B1</span>
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-slate-950 font-semibold transition-colors flex items-center gap-1 text-slate-800">
                  <span>All Courses Overview</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/learning-paths" className="hover:text-slate-950 transition-colors">
                  Goal-Driven Learning Paths
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore & Guides */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">
              Explore
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-slate-950 transition-colors">
                  About Gaurav Raghuvanshi
                </Link>
              </li>
              <li>
                <Link href="/method" className="hover:text-slate-950 transition-colors">
                  The GWG Method
                </Link>
              </li>
              <li>
                <Link href="/learn-german" className="hover:text-slate-950 transition-colors">
                  CEFR Levels Roadmap
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-slate-950 transition-colors">
                  Resources &amp; Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-slate-950 transition-colors">
                  German Learning Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-slate-950 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">
              Connect &amp; Legal
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/book-demo" className="text-amber-700 hover:text-amber-800 font-bold transition-colors flex items-center gap-1">
                  <span>Book Free Demo Session</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 font-bold transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp Consultation</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-950 transition-colors">
                  Contact Academy
                </Link>
              </li>
              <li className="pt-1.5 border-t border-slate-100">
                <Link href="/privacy-policy" className="hover:text-slate-950 text-xs text-slate-500 transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-950 text-xs text-slate-500 transition-colors block">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-slate-950 text-xs text-slate-500 transition-colors block">
                  Refund &amp; Batch Transfer Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Clean, Compact & Perfectly Aligned */}
      <div className="border-t border-slate-200 bg-slate-50/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} German With Gaurav. All rights reserved.</p>
          
          <p className="text-slate-600 font-medium">
            Created by <span className="font-bold text-slate-900">V2 Labs Global</span>
          </p>

          <p className="text-slate-500 text-[11px] sm:text-xs">
            Pune, Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
}
