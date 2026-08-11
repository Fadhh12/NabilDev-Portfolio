"use client";

import Nav from "@/components/Nav";
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
      <Nav />
      
      <main className="min-h-screen relative overflow-hidden">
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
