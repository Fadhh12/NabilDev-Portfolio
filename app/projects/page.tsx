"use client";

import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 relative overflow-x-hidden">
      <div className="grid-pattern fixed inset-0 z-[-1] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <BackButton label="← Kembali ke Beranda" />
      </div>

      {/* ── Main Projects Component (All Projects + Collage Screens) ── */}
      <Projects showAll={true} />

      {/* ── Contact & Footer ── */}
      <Contact />
      <Footer />
    </div>
  );
}
