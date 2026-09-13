"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-gaurav-raghuvanshi" },
  { label: "Courses", href: "/courses" },
  { label: "Learn German", href: "/learn-german" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Prevent background scrolling while mobile menu is open
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

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu if window is resized to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-[1000] w-full bg-white border-b border-slate-200/80">
      <nav aria-label="Main Navigation">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] lg:h-[80px] flex items-center justify-between">
          
          {/* Logo: Official Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center focus:outline-none shrink-0"
            aria-label="German With Gaurav Home"
          >
            <Image
              src="/logo.png"
              alt="German With Gaurav Official Logo"
              width={160}
              height={50}
              priority
              className="h-10 sm:h-12 w-auto object-contain shrink-0 hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    active
                      ? "text-[#08175e] font-bold"
                      : "text-slate-700 hover:text-[#08175e] font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/book-a-free-demo"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#08175e] hover:bg-[#050f42] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#08175e] focus:ring-offset-2"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle Button: Smooth 3-line hamburger morphing to X */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#08175e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08175e] rounded-lg"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-4 flex flex-col justify-between items-center relative">
              <span
                className={`block h-0.5 w-6 bg-[#08175e] rounded-full transition-transform duration-200 ease-out origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#08175e] rounded-full transition-all duration-150 ease-out ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#08175e] rounded-full transition-transform duration-200 ease-out origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>

        </div>
      </nav>

      {/* Mobile Navigation Menu: Begins strictly below navbar at top-[72px] */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed top-[72px] left-0 w-full h-[calc(100dvh-72px)] bg-white z-[999] overflow-y-auto flex flex-col justify-between animate-menu-open border-t border-slate-100"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Vertical Navigation Links */}
          <div className="py-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full py-4 px-6 text-[19px] text-[#08175e] hover:bg-slate-50 transition-colors border-b border-slate-100 ${
                    active ? "font-bold bg-slate-50/70" : "font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Footer CTA: Book Free Demo */}
          <div className="py-6 px-5 border-t border-slate-100 bg-white mt-auto shrink-0">
            <Link
              href="/book-a-free-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-[calc(100%-40px)] mx-auto h-14 flex items-center justify-center rounded-2xl font-bold text-base text-white bg-[#08175e] hover:bg-[#050f42] transition-colors shadow-sm active:scale-98"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}



