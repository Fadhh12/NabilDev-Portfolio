"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main-scroll" className="relative h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
        <div className="grid-pattern absolute inset-0 z-[-1]" />
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Certificates Section */}
        <Certificates />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
        
      </main>
    </>
  );
}
