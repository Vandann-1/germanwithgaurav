"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Calendar, ShieldCheck } from "lucide-react";

export function DemoBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    currentLevel: "Absolute Beginner (Zero Knowledge)",
    reason: "Career & Job in Germany",
    preferredCourse: "A1 German",
    preferredTime: "Evening (7:00 PM – 8:30 PM IST)",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Phone, Email).");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-400 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          Demo Session Reserved, {formData.name}!
        </h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
          We have received your booking request for <strong>{formData.preferredCourse}</strong>. Gaurav or our academic counselor will contact you via WhatsApp/Phone at <strong className="text-slate-900">{formData.phone}</strong> to confirm your slot ({formData.preferredTime}).
        </p>
        <div className="p-4 bg-white rounded-2xl border border-emerald-200 max-w-md mx-auto text-xs text-slate-600">
          <p className="font-bold text-slate-800 mb-1">What happens during the demo?</p>
          <ul className="text-left space-y-1 list-disc pl-4">
            <li>1-on-1 German phonetics and pronunciation diagnostic</li>
            <li>Overview of our small-batch schedule and licensed materials</li>
            <li>Custom study roadmap based on your university or job timeline</li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              phone: "",
              email: "",
              currentLevel: "Absolute Beginner (Zero Knowledge)",
              reason: "Career & Job in Germany",
              preferredCourse: "A1 German",
              preferredTime: "Evening (7:00 PM – 8:30 PM IST)",
              message: "",
              honeypot: "",
            });
          }}
          className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shadow"
        >
          Book for a Friend / Colleague
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-amber-300 shadow-xl space-y-6">
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          Reserve Your Free 1-on-1 Demo Class
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Strictly limited slots. Free 10-minute proficiency diagnostic with Gaurav Raghuvanshi.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="demo-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Your Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="demo-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Priya Patil"
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="demo-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            id="demo-phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="demo-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="demo-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="priya@example.com"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Current German Level & Reason for Learning */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="demo-currentLevel" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Current German Level
          </label>
          <select
            id="demo-currentLevel"
            name="currentLevel"
            value={formData.currentLevel}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="Absolute Beginner (Zero Knowledge)">Absolute Beginner (Zero knowledge)</option>
            <option value="A1 Completed (Want A2)">A1 Completed (Targeting A2)</option>
            <option value="A2 Completed (Want B1)">A2 Completed (Targeting B1)</option>
            <option value="Self-study / Duolingo">Self-study / Apps (Want structure)</option>
          </select>
        </div>

        <div>
          <label htmlFor="demo-reason" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Reason for Learning German
          </label>
          <select
            id="demo-reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="Career & Job in Germany">Career &amp; Job in Germany</option>
            <option value="Higher Education / Masters in Germany">Higher Education / Masters in Germany</option>
            <option value="Goethe Exam Certification">Goethe Exam Certification</option>
            <option value="Opportunity Card (Chancenkarte)">Opportunity Card (Chancenkarte)</option>
            <option value="Family Reunion Visa">Family Reunion Visa</option>
            <option value="Personal Interest & Hobby">Personal Interest &amp; Hobby</option>
          </select>
        </div>
      </div>

      {/* Preferred Course & Preferred Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="demo-course" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Course
          </label>
          <select
            id="demo-course"
            name="preferredCourse"
            value={formData.preferredCourse}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="A1 German">A1 German Course (Beginner)</option>
            <option value="A2 German">A2 German Course (Elementary)</option>
            <option value="B1 German">B1 German Course (Intermediate)</option>
            <option value="Need Guidance">Need Level Assessment First</option>
          </select>
        </div>

        <div>
          <label htmlFor="demo-time" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Batch Time
          </label>
          <select
            id="demo-time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="Morning (8:00 AM – 9:30 AM IST)">Morning (8:00 AM – 9:30 AM IST)</option>
            <option value="Afternoon (2:00 PM – 3:30 PM IST)">Afternoon (2:00 PM – 3:30 PM IST)</option>
            <option value="Evening (7:00 PM – 8:30 PM IST)">Evening (7:00 PM – 8:30 PM IST)</option>
            <option value="Weekend Intensive">Weekend Intensive Batch</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="demo-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Any specific questions for Gaurav?
        </label>
        <textarea
          id="demo-message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. When is the next batch starting? I am planning to move to Munich in September..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-y"
        />
      </div>

      {/* CTA */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 px-6 rounded-xl font-bold text-base bg-amber-400 text-slate-950 hover:bg-amber-500 shadow-md hover:shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Reserving Your Seat...</span>
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            <span>Book Free Demo</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>100% Free Consultation. No payment or credit card required.</span>
      </div>
    </form>
  );
}
