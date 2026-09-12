"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
            {/* Blinking smiley — the "unique" playful touch from the reference */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md"
              style={{ background: "var(--ca-yellow)" }}
              aria-hidden
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <circle className="blink-eye" cx="11" cy="15" r="2.4" fill="var(--ca-ink)" />
                <circle className="blink-eye" cx="23" cy="15" r="2.4" fill="var(--ca-ink)" />
                <path d="M9 21c2.5 3 11.5 3 16 0" stroke="var(--ca-ink)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="font-mono-accent text-[11px] tracking-[0.15em] uppercase text-on-surface-variant mb-3">
              say hi
            </div>
            <h2 className="font-pixel uppercase text-[clamp(32px,6vw,64px)] leading-[1.25] tracking-tight text-on-surface mb-6">
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

              <a href="https://github.com/Fadhh12" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <FaGithub className="w-[18px] h-[18px] group-hover:fill-on-primary transition-all" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">GitHub</div>
                  <div className="text-[15px] font-bold text-on-surface group-hover:text-primary transition-colors">Fadhh12</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/nabil-fadhlur-rahman-686794320/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <FaLinkedin className="w-[18px] h-[18px] group-hover:fill-on-primary transition-all" />
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

        {/* ── Closing band: big pixel wordmark + socials ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-[28px] px-6 sm:px-12 py-10 sm:py-14 text-center"
          style={{ background: "var(--ca-yellow)" }}
        >
          <h3 className="font-pixel uppercase text-[clamp(36px,8vw,88px)] leading-[1.2] tracking-tight text-on-surface">
            Contact
          </h3>
          <a href="mailto:Nabilbiel12@gmail.com" className="inline-block mt-2 text-[13px] font-bold uppercase tracking-[0.15em] text-on-surface border-b-2 border-on-surface pb-1 hover:opacity-70 transition-opacity">
            Drop a line ↗
          </a>

          <div className="flex items-center justify-center gap-4 mt-10">
            {[
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/nabil-fadhlur-rahman-686794320/", label: "LinkedIn" },
              { Icon: FaGithub, href: "https://github.com/Fadhh12", label: "GitHub" },
              { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <s.Icon className="w-5 h-5 text-on-surface" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
