"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");

    // Simulate sending — replace with real API call (EmailJS, Formspree, etc.)
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="min-h-[100dvh] py-10 pb-28 lg:pb-10 bg-surface-container-highest relative z-10 w-full overflow-x-hidden snap-start snap-always flex flex-col justify-center">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* ─── Left: CTA Copy ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono-accent text-[11px] tracking-[0.15em] uppercase text-on-surface-variant mb-3">
              say hi
            </div>
            <h2 className="font-display uppercase text-[clamp(40px,7vw,84px)] leading-[0.92] tracking-[-0.02em] text-on-surface mb-6">
              Let&apos;s talk
            </h2>
            <p className="text-[15px] leading-[1.65] text-on-surface-variant mb-6 max-w-[480px]">
              Got a project, a hard problem, or just want to say hi? Send it over — I read every message and usually reply within 24 hours.
            </p>

            {/* Comment bubble, scrapbook style */}
            <div className="flex items-start gap-3 mb-8 max-w-[440px]">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 relative">
                <Image src="/assets/images/foto.jpg" alt="Nabil" fill className="object-cover" sizes="44px" />
              </div>
              <div className="bg-surface border border-outline-variant rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="text-[13px] font-bold text-on-surface mb-0.5">Nabil Fadhlur Rahman</div>
                <p className="text-[13px] leading-[1.6] text-on-surface-variant">
                  Open to internships, full-time roles, and interesting conversations about hard problems in AI and software.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-5">
              <a href="mailto:Nabilbiel12@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-on-primary transition-all">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">Email</div>
                  <div className="text-[15px] font-bold text-on-surface group-hover:text-primary transition-colors">Nabilbiel12@gmail.com</div>
                </div>
              </a>

              <a href="https://github.com/nabilfadh" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:fill-on-primary transition-all">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">GitHub</div>
                  <div className="text-[15px] font-bold text-on-surface group-hover:text-primary transition-colors">Fadhh12</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/nabil-fadhlur-rahman-686794320/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:fill-on-primary transition-all">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">LinkedIn</div>
                  <div className="text-[15px] font-bold text-on-surface group-hover:text-primary transition-colors">Nabil Fadhlur Rahman</div>
                </div>
              </a>
            </div>

            {/* CV Download */}
            <a
              href="/assets/cv/Nabil_CV_General_Professional.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 border-2 border-outline-variant text-on-surface rounded-xl font-bold text-[13px] hover:border-primary hover:text-primary transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </motion.div>

          {/* ─── Right: Contact Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="bg-surface-container border border-outline-variant rounded-[24px] p-8 md:p-10 flex flex-col gap-5 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-surface border border-outline-variant rounded-xl text-[14px] text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-surface border border-outline-variant rounded-xl text-[14px] text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Hi Nabil, I'd love to collaborate on..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-surface border border-outline-variant rounded-xl text-[14px] text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold text-[14px] tracking-wide hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(25,21,16,0.25)] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Message Sent!
                  </>
                ) : status === "error" ? (
                  "Something went wrong. Try again."
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-[12px] text-on-surface-variant">
                I usually respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
