"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// IntroSplash is client-only — runs on each page visit
const IntroSplash = dynamic(() => import("@/components/IntroSplash"), { ssr: false });

export default function Home() {
  return (
    <>
      <IntroSplash />

      {/* ── Ruled notebook paper background ── */}
      <div className="grid-pattern fixed inset-0 z-[-1] pointer-events-none" />

      {/* ── Main content flow ── */}
      <main className="relative w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Preview (Photo 2 layout) */}
        <About />
        <div className="flex justify-center -mt-10 mb-16 relative z-30">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#191510] text-white font-bold text-[13px] tracking-widest uppercase border-2 border-[#191510] shadow-[4px_4px_0_#7a7066] hover:bg-[#2563eb] transition-all"
          >
            Read My Full Story &amp; Experience →
          </Link>
        </div>

        {/* 3. Featured Projects (Top 3 Best) */}
        <Projects showAll={false} />

        {/* 4. Tech Stack */}
        <TechStack />

        {/* 5. Contact (LET'S TALK with scoped spotlight lens) */}
        <Contact />

        {/* 6. Footer */}
        <Footer />
      </main>
    </>
  );
}
