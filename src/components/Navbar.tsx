"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import {
  ChevronDown,
  ArrowRight,
  BookOpen,
  Compass,
  GraduationCap,
  Award,
  HelpCircle,
  FileText,
  Sparkles,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";

const MarqueeTag = "marquee" as unknown as React.ElementType;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordions, setMobileAccordions] = useState<Record<string, boolean>>({
    courses: false,
    learningPaths: false,
    resources: false,
  });

  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const navRef = useRef<HTMLElement>(null);

  // Close menus on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close desktop dropdowns on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isCoursesActive = pathname.startsWith("/courses");
  const isLearningPathsActive = pathname.startsWith("/learning-paths");
  const isAboutActive = pathname === "/about" || pathname === "/about-gaurav-raghuvanshi";
  const isResourcesActive =
    pathname.startsWith("/resources") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/category") ||
    pathname === "/faq" ||
    pathname === "/learn-german";

  return (
    <header className="sticky top-0 z-[100] w-full academic-nav-glass transition-all shadow-sm">
      {/* Top Batch Alert Strip - Yellow Marquee on Dark Red Background */}
      <div
        data-open-batch-poster
        className="bg-[#8b0000] text-yellow-300 py-2 px-3 overflow-hidden cursor-pointer select-none hover:bg-[#7a0000] transition-colors"
        title="Click to view Official Batch Announcement & Schedule"
      >
        <MarqueeTag
          behavior="scroll"
          direction="left"
          scrollamount="7"
          className="text-xs sm:text-[13px] font-bold text-yellow-300 tracking-wide cursor-pointer font-montserrat flex items-center"
        >
          <span className="inline-flex items-center gap-4">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-300 animate-pulse" />
            <span className="font-extrabold text-yellow-300 uppercase tracking-wider">
              NEW COHORTS STARTING SOON:
            </span>
            <span className="text-white font-medium">
              Small live online batches strictly capped at 5–7 students for A1, A2 &amp; B1.
            </span>
            <span className="text-yellow-400 font-black">✦</span>
            <span className="text-white font-medium">
              Trained personally by Gaurav Raghuvanshi (19+ Years Mentorship).
            </span>
            <span className="text-yellow-400 font-black">✦</span>
            <span className="font-extrabold text-yellow-200 underline underline-offset-4 decoration-yellow-400 hover:text-white transition-colors">
              👉 Click Here to View Official Batch Notice &amp; Schedule 👈
            </span>
            <span className="text-yellow-400 font-black">✦</span>
            <span className="text-white font-medium">
              Guaranteed 100% active speaking time in every 90-minute session.
            </span>
            <span className="text-yellow-400 font-black">✦</span>
            <span className="text-yellow-300 font-bold">
              Reserve your seat via WhatsApp: +91 99608 86075
            </span>
            <span className="text-yellow-400 font-black">✦</span>
          </span>
        </MarqueeTag>
      </div>

      <nav ref={navRef} aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3.5 focus:outline-none shrink-0 group"
            aria-label="German With Gaurav Home"
          >
            <div className="relative h-11 w-auto aspect-[3.2/1] flex items-center">
              <Image
                src="/logo.png"
                alt="German With Gaurav"
                width={150}
                height={46}
                priority
                className="h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </div>
            <div className="hidden sm:block border-l border-[#e5e2da] pl-3.5 py-0.5">
              <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Language Academy
              </span>
              <span className="block text-[10px] font-semibold text-[#b91c1c]">
                Live Mentorship
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* 1. Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("courses")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "courses" ? null : "courses")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  isCoursesActive || openDropdown === "courses"
                    ? "text-[#121826] bg-[#ede8df]/70"
                    : "text-[#475569] hover:text-[#121826] hover:bg-[#ede8df]/40"
                }`}
                aria-expanded={openDropdown === "courses"}
                aria-haspopup="true"
              >
                <span>Courses</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === "courses" ? "rotate-180 text-[#b91c1c]" : "text-[#64748b]"
                  }`}
                />
              </button>

              {openDropdown === "courses" && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-menu-open">
                  <div className="bg-[#faf9f6] rounded-xl border border-[#e5e2da] shadow-xl p-2 space-y-1">
                    <Link
                      href="/courses/a1"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <span className="w-8 h-8 rounded-md bg-[#b91c1c]/10 text-[#b91c1c] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        A1
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          A1 German
                        </p>
                        <p className="text-xs text-[#64748b]">Beginner foundation &amp; Goethe A1 prep</p>
                      </div>
                    </Link>

                    <Link
                      href="/courses/a2"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <span className="w-8 h-8 rounded-md bg-[#b91c1c]/10 text-[#b91c1c] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        A2
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          A2 German
                        </p>
                        <p className="text-xs text-[#64748b]">Conversational fluency &amp; past tenses</p>
                      </div>
                    </Link>

                    <Link
                      href="/courses/b1"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <span className="w-8 h-8 rounded-md bg-[#b91c1c]/10 text-[#b91c1c] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        B1
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          B1 German
                        </p>
                        <p className="text-xs text-[#64748b]">Independent workplace &amp; study fluency</p>
                      </div>
                    </Link>

                    <div className="pt-1 border-t border-[#e5e2da]">
                      <Link
                        href="/courses"
                        className="flex items-center justify-between p-2 text-xs font-bold text-[#121826] hover:text-[#b91c1c] transition-colors rounded-md"
                      >
                        <span>All Courses &amp; Schedules</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Learning Paths Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("paths")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "paths" ? null : "paths")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  isLearningPathsActive || openDropdown === "paths"
                    ? "text-[#121826] bg-[#ede8df]/70"
                    : "text-[#475569] hover:text-[#121826] hover:bg-[#ede8df]/40"
                }`}
                aria-expanded={openDropdown === "paths"}
                aria-haspopup="true"
              >
                <span>Learning Paths</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === "paths" ? "rotate-180 text-[#b91c1c]" : "text-[#64748b]"
                  }`}
                />
              </button>

              {openDropdown === "paths" && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-menu-open">
                  <div className="bg-[#faf9f6] rounded-xl border border-[#e5e2da] shadow-xl p-2 space-y-1">
                    <Link
                      href="/learning-paths/everyday-german"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <Compass className="w-5 h-5 text-[#b91c1c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          Everyday German
                        </p>
                        <p className="text-xs text-[#64748b]">Daily life, social confidence &amp; spouse visas</p>
                      </div>
                    </Link>

                    <Link
                      href="/learning-paths/professional-german"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <BookOpen className="w-5 h-5 text-[#b91c1c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          Professional German
                        </p>
                        <p className="text-xs text-[#64748b]">Corporate emails, interviews &amp; Opportunity Cards</p>
                      </div>
                    </Link>

                    <Link
                      href="/learning-paths/study-in-germany"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <GraduationCap className="w-5 h-5 text-[#b91c1c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          Study in Germany
                        </p>
                        <p className="text-xs text-[#64748b]">University admission &amp; student jobs</p>
                      </div>
                    </Link>

                    <Link
                      href="/learning-paths/goethe-exam-preparation"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <Award className="w-5 h-5 text-[#b91c1c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          Goethe Exam Preparation
                        </p>
                        <p className="text-xs text-[#64748b]">Module simulations for A1, A2 &amp; B1 success</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. About Gaurav Direct Link */}
            <Link
              href="/about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isAboutActive
                  ? "text-[#121826] bg-[#ede8df]/70"
                  : "text-[#475569] hover:text-[#121826] hover:bg-[#ede8df]/40"
              }`}
            >
              About Gaurav
            </Link>

            {/* 4. Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "resources" ? null : "resources")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  isResourcesActive || openDropdown === "resources"
                    ? "text-[#121826] bg-[#ede8df]/70"
                    : "text-[#475569] hover:text-[#121826] hover:bg-[#ede8df]/40"
                }`}
                aria-expanded={openDropdown === "resources"}
                aria-haspopup="true"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === "resources" ? "rotate-180 text-[#b91c1c]" : "text-[#64748b]"
                  }`}
                />
              </button>

              {openDropdown === "resources" && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-menu-open">
                  <div className="bg-[#faf9f6] rounded-xl border border-[#e5e2da] shadow-xl p-2 space-y-1">
                    <Link
                      href="/blog"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <FileText className="w-4 h-4 text-[#b91c1c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          Blog &amp; Articles
                        </p>
                        <p className="text-xs text-[#64748b]">In-depth educational guides</p>
                      </div>
                    </Link>

                    <Link
                      href="/resources"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <Sparkles className="w-4 h-4 text-[#b91c1c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          German Guides
                        </p>
                        <p className="text-xs text-[#64748b]">Case blueprints, tenses &amp; grammar rules</p>
                      </div>
                    </Link>

                    <Link
                      href="/method"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <Compass className="w-4 h-4 text-[#b91c1c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          The GWG Method
                        </p>
                        <p className="text-xs text-[#64748b]">Understand • Practice • Speak • Master</p>
                      </div>
                    </Link>

                    <Link
                      href="/faq"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#ede8df] transition-colors group"
                    >
                      <HelpCircle className="w-4 h-4 text-[#b91c1c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors">
                          FAQs
                        </p>
                        <p className="text-xs text-[#64748b]">Answers on batches, exams &amp; timings</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Desktop Right Side CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg font-semibold text-xs text-[#121826] bg-[#ede8df]/80 hover:bg-[#ede8df] border border-[#d5d0c5] transition-colors"
              aria-label="Direct WhatsApp consultation"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#15803d]" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-lg font-bold text-xs tracking-wide uppercase text-white bg-[#121826] hover:bg-[#b91c1c] transition-colors shadow-xs"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-[#121826] rounded-lg border border-[#e5e2da] bg-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#b91c1c]" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer (Zero Horizontal Overflow) */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#faf9f6] z-50 overflow-y-auto border-t border-[#e5e2da] animate-menu-open flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="p-4 space-y-2">
            
            {/* Mobile Accordion: Courses */}
            <div className="border border-[#e5e2da] rounded-xl overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("courses")}
                className="w-full px-4 py-3.5 flex items-center justify-between text-left font-bold text-sm text-[#121826]"
              >
                <span>Courses</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#64748b] transition-transform ${
                    mobileAccordions.courses ? "rotate-180 text-[#b91c1c]" : ""
                  }`}
                />
              </button>

              {mobileAccordions.courses && (
                <div className="px-4 pb-3 pt-1 space-y-2 border-t border-[#f7f5f0] text-sm">
                  <Link
                    href="/courses/a1"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    A1 German Course (Beginner)
                  </Link>
                  <Link
                    href="/courses/a2"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    A2 German Course (Elementary)
                  </Link>
                  <Link
                    href="/courses/b1"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    B1 German Course (Intermediate)
                  </Link>
                  <Link
                    href="/courses"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#b91c1c] font-bold"
                  >
                    All Courses &amp; Syllabi →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Accordion: Learning Paths */}
            <div className="border border-[#e5e2da] rounded-xl overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("learningPaths")}
                className="w-full px-4 py-3.5 flex items-center justify-between text-left font-bold text-sm text-[#121826]"
              >
                <span>Learning Paths</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#64748b] transition-transform ${
                    mobileAccordions.learningPaths ? "rotate-180 text-[#b91c1c]" : ""
                  }`}
                />
              </button>

              {mobileAccordions.learningPaths && (
                <div className="px-4 pb-3 pt-1 space-y-2 border-t border-[#f7f5f0] text-sm">
                  <Link
                    href="/learning-paths/everyday-german"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    Everyday German
                  </Link>
                  <Link
                    href="/learning-paths/professional-german"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    Professional German
                  </Link>
                  <Link
                    href="/learning-paths/study-in-germany"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    Study in Germany
                  </Link>
                  <Link
                    href="/learning-paths/goethe-exam-preparation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    Goethe Exam Preparation
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Link: About Gaurav */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-4 py-3.5 font-bold text-sm text-[#121826] bg-white border border-[#e5e2da] rounded-xl hover:text-[#b91c1c]"
            >
              About Gaurav Raghuvanshi
            </Link>

            {/* Mobile Accordion: Resources */}
            <div className="border border-[#e5e2da] rounded-xl overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("resources")}
                className="w-full px-4 py-3.5 flex items-center justify-between text-left font-bold text-sm text-[#121826]"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#64748b] transition-transform ${
                    mobileAccordions.resources ? "rotate-180 text-[#b91c1c]" : ""
                  }`}
                />
              </button>

              {mobileAccordions.resources && (
                <div className="px-4 pb-3 pt-1 space-y-2 border-t border-[#f7f5f0] text-sm">
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    Blog &amp; Articles
                  </Link>
                  <Link
                    href="/resources"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    German Guides &amp; Resources
                  </Link>
                  <Link
                    href="/method"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    The GWG Method
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#475569] hover:text-[#b91c1c] font-medium"
                  >
                    Frequently Asked Questions
                  </Link>
                </div>
              )}
            </div>

          </div>

          {/* Mobile Bottom Actions */}
          <div className="p-4 border-t border-[#e5e2da] bg-white space-y-3 mt-auto">
            <button
              type="button"
              data-open-batch-poster
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#8b0000] to-[#b91c1c] shadow-xs cursor-pointer font-montserrat"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>View Official Batch Poster</span>
            </button>

            <Link
              href="/book-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide uppercase text-white bg-[#121826] hover:bg-[#b91c1c] transition-colors"
            >
              Book Free Demo
            </Link>

            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-[#121826] bg-[#ede8df] hover:bg-[#e2dcd0] border border-[#d5d0c5] transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#15803d]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
