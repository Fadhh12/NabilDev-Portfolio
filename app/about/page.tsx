"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 relative overflow-x-hidden">
      {/* ── Background Pattern ── */}
      <div className="grid-pattern fixed inset-0 z-[-1] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Tombol Kembali */}
        <BackButton label="← Kembali ke Beranda" />

        {/* ── Page Header (Screenshot 2: ABOUT) ── */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-pixel uppercase text-[clamp(48px,11vw,96px)] tracking-tight text-[#191510]"
          >
            ABOUT
          </motion.h1>
        </div>

        {/* ── 1. MAIN BIO SECTION (Screenshot 2) ── */}
        <div className="relative mb-20">
          {/* Section Tag */}
          <div className="mb-3">
            <span className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-sm border-2 border-[#191510] shadow-[2px_2px_0_#191510]"
              style={{ background: "#fef08a", color: "#191510" }}
            >
              MAIN BIO
            </span>
          </div>

          {/* Hand-drawn Outline Box */}
          <div className="relative p-6 sm:p-10 md:p-12 border-2 border-[#f97316] rounded-xl bg-[#f0ece0]/60 shadow-[4px_4px_0_#f97316]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

              {/* Left Column (8 cols): Bio text */}
              <div className="md:col-span-8">
                <p className="font-hand text-[clamp(22px,3.2vw,30px)] leading-[1.5] text-[#191510] mb-6">
                  I&apos;m an <strong className="text-[#2563eb]">AI engineer &amp; developer</strong> who gets a little too excited about making complicated things feel simple. ✨ I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone&apos;s day easier. 🎨
                </p>

                <div className="space-y-4 text-[14.5px] sm:text-[15.5px] leading-[1.75] text-[#191510]/85">
                  <p>
                    I spend most days between two worlds: training and evaluating <strong className="text-[#191510]">AI/ML models</strong>, and shipping the <strong className="text-[#191510]">full-stack web apps</strong> that put them in front of real people.
                  </p>
                  <p>
                    Currently an Informatics undergraduate at <strong className="text-[#191510]">President University</strong> with a 3.65 GPA, awarded the prestigious <strong className="text-[#191510]">Jababeka Academic Scholarship</strong>. From real-time object detection systems to multi-model RAG assistants, I believe good software should feel like second nature.
                  </p>
                </div>
              </div>

              {/* Right Column (4 cols): Polaroid with blue tape + NABIL tag (Screenshot 2) */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                  {/* Blue washi tape top-left */}
                  <div
                    className="absolute -top-3.5 left-4 w-14 h-6 z-20 opacity-90 shadow-sm"
                    style={{ background: "#93c5fd", transform: "rotate(-10deg)" }}
                  />
                  {/* Blue washi tape top-right */}
                  <div
                    className="absolute -top-3.5 right-4 w-14 h-6 z-20 opacity-90 shadow-sm"
                    style={{ background: "#93c5fd", transform: "rotate(15deg)" }}
                  />

                  {/* Polaroid Frame */}
                  <div className="bg-white p-3 pb-5 shadow-2xl border border-black/20 w-[190px] sm:w-[220px]">
                    <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e8e4da]">
                      <Image
                        src="/assets/images/poto nabil 1.jpeg"
                        alt="Nabil Fadhlur Rahman"
                        fill
                        className="object-cover"
                        sizes="220px"
                      />
                    </div>
                    <p className="font-hand text-[15px] text-center text-[#191510] mt-3 font-bold">
                      2026
                    </p>
                  </div>

                  {/* NABIL Yellow Pill Tag at bottom right */}
                  <span className="absolute -bottom-3 -right-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm border-2 border-[#191510] shadow-[2px_2px_0_#191510]"
                    style={{ background: "#facc15", color: "#191510" }}
                  >
                    NABIL
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Highlight Cards inside Main Bio Box (Screenshot 2) */}
            <div className="mt-10 pt-8 border-t-2 border-[#191510]/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm border-2 border-[#191510] bg-[#fef08a] shadow-[3px_3px_0_#191510]">
                <p className="text-[13.5px] leading-relaxed text-[#191510]">
                  Right now I&apos;m building Jarvis AI &amp; enterprise camera verification platforms that turn complex AI pipelines into smooth, usable tools.
                </p>
              </div>
              <div className="p-4 rounded-sm border-2 border-[#191510] bg-[#fed7aa] shadow-[3px_3px_0_#191510]">
                <p className="text-[13.5px] leading-relaxed text-[#191510]">
                  When I&apos;m not training models or coding interfaces, I explore computer vision research, read ML papers, or organize tech events at campus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. STORY SECTION (Screenshot 3) ── */}
        <div className="relative mb-20">
          <div className="mb-3">
            <span className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-sm border-2 border-[#191510] shadow-[2px_2px_0_#191510]"
              style={{ background: "#ec4899", color: "#ffffff" }}
            >
              STORY
            </span>
          </div>

          <div className="relative p-6 sm:p-10 border-2 border-[#ec4899] rounded-xl bg-[#f0ece0]/60 shadow-[4px_4px_0_#ec4899]">
            <div className="flex flex-col gap-8 max-w-2xl mx-auto">

              {/* Story 1: Blue Card */}
              <div className="relative p-6 rounded-sm border-2 border-[#191510] shadow-[4px_4px_0_#191510] rotate-[-1deg]"
                style={{ background: "#bfdbfe" }}
              >
                {/* Washi tape */}
                <div className="absolute -top-3 left-8 w-16 h-6 z-10 opacity-85 shadow-sm" style={{ background: "#fef08a" }} />
                <h3 className="font-bold text-[19px] text-[#191510] mb-2">Start with the why</h3>
                <p className="text-[14px] leading-relaxed text-[#191510]/85">
                  Before I train a model or write a single route, I want to know what problem we&apos;re actually solving and who it&apos;s for. Solid architecture starts with better questions.
                </p>
                <span className="absolute -right-2 sm:-right-36 top-1/2 -translate-y-1/2 font-hand text-[18px] text-[#7a7066] hidden sm:block">
                  ← questions before code.
                </span>
              </div>

              {/* Story 2: Yellow Card */}
              <div className="relative p-6 rounded-sm border-2 border-[#191510] shadow-[4px_4px_0_#191510] rotate-[1.5deg]"
                style={{ background: "#fef08a" }}
              >
                {/* Washi tape */}
                <div className="absolute -top-3 right-8 w-16 h-6 z-10 opacity-85 shadow-sm" style={{ background: "#bfdbfe" }} />
                <h3 className="font-bold text-[19px] text-[#191510] mb-2">Design for real people</h3>
                <p className="text-[14px] leading-relaxed text-[#191510]/85">
                  Computationally robust means nothing if the screen in front of someone is confusing. I build systems that hold up under the hood and still feel obvious to use.
                </p>
                <span className="absolute -left-2 sm:-left-36 top-1/2 -translate-y-1/2 font-hand text-[18px] text-[#7a7066] hidden sm:block">
                  no confusing screens! →
                </span>
              </div>

              {/* Story 3: Green Card */}
              <div className="relative p-6 rounded-sm border-2 border-[#191510] shadow-[4px_4px_0_#191510] rotate-[-1deg]"
                style={{ background: "#a7f3d0" }}
              >
                {/* Washi tape */}
                <div className="absolute -top-3 left-10 w-16 h-6 z-10 opacity-85 shadow-sm" style={{ background: "#fbcfe8" }} />
                <h3 className="font-bold text-[19px] text-[#191510] mb-2">Iterate until it shines</h3>
                <p className="text-[14px] leading-relaxed text-[#191510]/85">
                  The best systems come from constant iteration and active user feedback. I test, listen, and cut until only what truly matters is left.
                </p>
                <span className="absolute -right-2 sm:-right-36 top-1/2 -translate-y-1/2 font-hand text-[18px] text-[#7a7066] hidden sm:block">
                  ← collaborate &amp; ship.
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ── 3. WORK SECTION (Screenshot 3) ── */}
        <div className="relative mb-20">
          <div className="mb-3">
            <span className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-sm border-2 border-[#191510] shadow-[2px_2px_0_#191510]"
              style={{ background: "#2563eb", color: "#ffffff" }}
            >
              WORK &amp; LEADERSHIP
            </span>
          </div>

          <div className="relative p-6 sm:p-10 border-2 border-[#2563eb] rounded-xl bg-[#f0ece0]/60 shadow-[4px_4px_0_#2563eb]">
            <div className="divide-y-2 divide-[#191510]/15">
              {[
                { role: "Google Student Ambassador", org: "Google · President University", date: "Apr 2026 – Present" },
                { role: "Vice Officer, Student Welfare", org: "BEM Computer Science (PUFA)", date: "Sep 2025 – Present" },
                { role: "IT Support Specialist", org: "PT. Beritahu Media Digital Teknologi", date: "Jun – Aug 2024" },
                { role: "B.Sc. Informatics (GPA 3.65)", org: "President University · Jababeka Scholar", date: "Sep 2024 – Present" },
                { role: "High School Diploma", org: "Pesantren Hidayatunnajah", date: "Jul 2020 – May 2023" },
              ].map((item, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#2563eb] rounded-sm shrink-0" />
                    <div>
                      <h4 className="font-bold text-[16px] text-[#191510]">{item.role}</h4>
                      <p className="text-[13px] text-[#7a7066]">{item.org}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-[#191510] text-white text-[11px] font-mono-accent font-bold uppercase tracking-wider rounded-sm shrink-0">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── Contact Section (LET'S TALK) & Footer (Screenshot 4) ── */}
      <Contact />
      <Footer />
    </div>
  );
}
