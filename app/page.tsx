"use client";

import IntroSplash from "@/components/IntroSplash";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <IntroSplash />
      <main id="main-scroll" className="relative h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-proximity scroll-smooth">
        <div className="grid-pattern absolute inset-0 z-[-1]" />

        {/* Hero Section */}
        <Hero />

        {/* About Section — includes Main Bio / Story / Work / Certificates tabs */}
        <About />

        {/* Projects Section */}
        <Projects />

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
