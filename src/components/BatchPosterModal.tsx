"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";

export function openBatchPosterModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-batch-poster"));
  }
}

export function BatchPosterModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Automatically pop up when site opens
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEvent = () => handleOpen();
    window.addEventListener("open-batch-poster", handleEvent);

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-open-batch-poster]")) {
        e.preventDefault();
        handleOpen();
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("open-batch-poster", handleEvent);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [handleOpen]);

  // Handle ESC key & scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    "Hi Gaurav, I saw the official New Batch Announcement banner and would like to reserve a seat in the upcoming 5–7 student cohort."
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Official Batch Announcement Poster"
      className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in cursor-pointer"
        aria-hidden="true"
      />

      {/* Pure Image Format Shape (Sharp edges, no rounded corners, no card wrappers) */}
      <div className="relative z-10 w-full max-w-[540px] my-auto animate-in zoom-in-95 duration-200">
        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 w-9 h-9 sm:w-10 sm:h-10 bg-black/90 hover:bg-black text-white hover:text-amber-400 shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-30 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* The Exact Image in its Proper Shape */}
        <a
          href={`https://wa.me/919960886075?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-square shadow-2xl cursor-pointer group bg-black"
          title="Click to inquire via WhatsApp"
        >
          <Image
            src="/images/official-gwg-banner.jpg"
            alt="German With Gaurav - Official Batch Announcement"
            fill
            priority
            sizes="(max-width: 640px) 95vw, 540px"
            className="object-contain"
          />
        </a>

        {/* Minimal clean action bar below */}
        <div className="mt-2.5 flex items-center justify-between text-xs text-white/80 px-1">
          <a
            href={`https://wa.me/919960886075?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-amber-400" />
            <span>Click image to chat on WhatsApp →</span>
          </a>

          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white transition-colors cursor-pointer text-xs"
          >
            Close ✕
          </button>
        </div>
      </div>
    </div>
  );
}
