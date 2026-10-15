"use client";

import { useState } from "react";
import Link from "next/link";
import {
  RiPhoneLine,
  RiMailLine,
  RiMapPin2Line,
  RiWhatsappLine,
  RiSendPlaneLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

/* ── Contact info items ─────────────────────────────────────── */
const CONTACT_ITEMS = [
  {
    icon: <RiPhoneLine />,
    label: "Phone",
    value: "+1 435 345 6645",
    sub: "Mon–Sat: 9:00 AM – 8:00 PM",
    href: "tel:+14353456645",
  },
  {
    icon: <RiMailLine />,
    label: "Email",
    value: "info@pujavdhi.com",
    sub: "Mon–Sat: 9:00 AM – 8:00 PM",
    href: "mailto:info@pujavdhi.com",
  },
  {
    icon: <RiMapPin2Line />,
    label: "Location",
    value: "Sacred Land of India",
    sub: "Serving Worldwide",
    href: "#",
  },
  {
    icon: <RiWhatsappLine />,
    label: "WhatsApp",
    value: "+1 435 345 6645",
    sub: "Mon–Sat: 9:00 AM – 8:00 PM",
    href: "https://wa.me/14353456645",
  },
];

/* ── Component ───────────────────────────────────────────────── */
export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    if (!consent) e.consent = "Please accept to continue";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24" aria-label="Contact Us">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ══ LEFT: Get In Touch panel ══ */}
          <AnimateOnScroll variant="fade-right">
            <div className="bg-[#FDF3EB] rounded-2xl p-8 h-full flex flex-col gap-7">

              {/* Header */}
              <div>
                <p className="mb-1 text-[14px] font-bold uppercase tracking-[0.1em] text-[#FF6A00]">
                  Reach Out
                </p>
                <h2 className="text-[26px] sm:text-[28px] font-semibold text-[#1a1a1a] leading-tight">
                  Get In Touch
                </h2>
                <p className="mt-2 text-[14px] font-medium text-[#4b5563] leading-relaxed">
                  We'd love to hear from you. Fill in the form or contact us directly.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#F0E0CF]" />

              {/* Contact items */}
              <ul className="flex flex-col gap-5">
                {CONTACT_ITEMS.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      {/* Icon circle */}
                      <span className="flex-shrink-0 w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-[#FF6A00] text-[20px] transition-colors duration-200 group-hover:bg-[#FF6A00] group-hover:text-white">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-[13px] font-bold text-[#1a1a1a] leading-snug group-hover:text-[#FF6A00] transition-colors duration-200">
                          {item.label}
                        </p>
                        <p className="text-[13px] font-medium text-[#4b5563] leading-snug">
                          {item.value}
                        </p>
                        <p className="text-[11px] font-medium text-[#9ca3af] leading-snug">
                          {item.sub}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </AnimateOnScroll>

          {/* ══ RIGHT: Contact Form ══ */}
          <AnimateOnScroll variant="fade-left" delay={100}>
            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center text-center gap-5 py-20 px-8 bg-[#FFF8F3] rounded-2xl border border-[#F0EBE3]">
                <RiCheckboxCircleLine className="text-[#FF6A00] text-[56px]" />
                <h3 className="text-[22px] font-bold text-[#1a1a1a]">Message Sent!</h3>
                <p className="text-[14px] font-medium text-[#4b5563] max-w-xs leading-relaxed">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); setConsent(false); }}
                  className="mt-2 inline-flex items-center justify-center rounded-md border border-[#FF6A00] px-6 py-2.5 text-[14px] font-semibold text-[#FF6A00] hover:bg-[#FFF0E6] transition-colors duration-200"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[13px] font-semibold text-[#1a1a1a]">
                      Full Name <span className="text-[#FF6A00]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="What's your name?"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-[14px] font-medium text-[#1a1a1a] placeholder:text-[#9ca3af] outline-none transition-colors duration-200 focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10 ${errors.name ? "border-red-400 bg-red-50" : "border-[#E5E7EB] bg-white"}`}
                    />
                    {errors.name && <p className="text-[12px] text-red-500 font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[13px] font-semibold text-[#1a1a1a]">
                      Phone <span className="text-[#9ca3af] font-normal text-[12px]">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] font-medium text-[#1a1a1a] placeholder:text-[#9ca3af] outline-none transition-colors duration-200 focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[13px] font-semibold text-[#1a1a1a]">
                    Email Address <span className="text-[#FF6A00]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="What's your email?"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 text-[14px] font-medium text-[#1a1a1a] placeholder:text-[#9ca3af] outline-none transition-colors duration-200 focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10 ${errors.email ? "border-red-400 bg-red-50" : "border-[#E5E7EB] bg-white"}`}
                  />
                  {errors.email && <p className="text-[12px] text-red-500 font-medium">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[13px] font-semibold text-[#1a1a1a]">
                    Message <span className="text-[#FF6A00]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 text-[14px] font-medium text-[#1a1a1a] placeholder:text-[#9ca3af] outline-none transition-colors duration-200 focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10 resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-[#E5E7EB] bg-white"}`}
                  />
                  {errors.message && <p className="text-[12px] text-red-500 font-medium">{errors.message}</p>}
                </div>

                {/* Consent */}
                <div className="flex flex-col gap-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (errors.consent) setErrors((prev) => { const n = { ...prev }; delete n.consent; return n; });
                      }}
                      className="mt-[3px] w-4 h-4 accent-[#FF6A00] flex-shrink-0"
                    />
                    <span className="text-[13px] font-medium text-[#4b5563] leading-relaxed">
                      I consent to use of provided personal data for the purpose of responding to the request as described in{" "}
                      <Link href="/privacy-policy" className="text-[#FF6A00] font-semibold hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      which I have read. I may withdraw my consent at any time.
                    </span>
                  </label>
                  {errors.consent && <p className="text-[12px] text-red-500 font-medium pl-7">{errors.consent}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="self-start inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6A00] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#e55f00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6A00]"
                >
                  <RiSendPlaneLine className="text-[16px]" />
                  Send Message
                </button>

              </form>
            )}
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
