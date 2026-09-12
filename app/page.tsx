"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// react-pdf pulls in pdfjs-dist, which touches browser-only APIs (DOMMatrix)
// at module load — evaluating that during server-side prerendering crashes
// the build. Loading it client-only avoids that, and also fixes the empty
// certificate thumbnails on first paint (nothing to hydrate/mismatch).
const Certificates = dynamic(() => import("@/components/Certificates"), {
  ssr: false,
  loading: () => (
    <section id="certificates" className="min-h-[100dvh] bg-surface-container" />
  ),
});

export default function Home() {
  return (
    <>
      <main id="main-scroll" className="relative h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-proximity scroll-smooth">
        <div className="grid-pattern absolute inset-0 z-[-1]" />
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Certificates Section */}
        <Certificates />

        {/* Gallery / Playground Section */}
        <Gallery />

        {/* Tools strip */}
        <TechStack />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
        
      </main>
    </>
  );
}
