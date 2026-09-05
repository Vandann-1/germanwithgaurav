import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact German With Gaurav | Pune Language Academy",
  description:
    "Get in touch with German With Gaurav. Have questions regarding our online German courses, batch schedules, or Goethe exam preparation? Contact our Pune team.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us" }];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3.5 py-1 rounded-full">
            WE ARE HERE TO HELP
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Get in Touch with German With Gaurav
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our online German language courses, batch schedules, or Goethe examination preparation? Reach out today.
          </p>
        </div>
      </section>

      {/* Contact Grid: Form & Official Info */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Cards & Business Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Quick Chat */}
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-6 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Instant WhatsApp Support</h3>
                    <p className="text-xs text-emerald-800 font-medium">Fastest response directly from our team</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chat with Gaurav or our counselors directly on WhatsApp for quick inquiries regarding seat availability, fees, or upcoming batches.
                </p>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-colors shadow"
                >
                  <span>Chat on WhatsApp (+91 99608 86075)</span>
                </a>
              </div>

              {/* Direct Academy Info */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs space-y-5">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Academy Contact Information
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Call Us</strong>
                      <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="text-slate-600 hover:text-amber-700 font-mono">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Email</strong>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 hover:text-amber-700 block">
                        {siteConfig.contact.email}
                      </a>
                      <a href={`mailto:${siteConfig.contact.alternateEmail}`} className="text-slate-400 hover:text-amber-700 text-xs block">
                        {siteConfig.contact.alternateEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Academy Address (Pune)</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        {siteConfig.contact.address.street}, {siteConfig.contact.address.city} – {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.state}, {siteConfig.contact.address.country}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Operating Hours</strong>
                      <span className="text-slate-600 block">
                        Monday – Saturday: 9:00 AM – 8:00 PM IST
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    Official Social Channels
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
