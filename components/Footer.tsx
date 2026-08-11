"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-inverse-surface border-t border-outline/20 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="font-display text-[20px] font-extrabold text-inverse-on-surface tracking-tight">
            NabilDev.
          </div>
          <div className="text-[12px] font-semibold text-outline-variant mt-1">
            © {year} M Nabil Fadhlur Rahman. All Rights Reserved.
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/nabilfadh" target="_blank" rel="noreferrer" className="text-[12px] font-bold tracking-[0.08em] uppercase text-outline-variant hover:text-primary-light transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mnabilfadh" target="_blank" rel="noreferrer" className="text-[12px] font-bold tracking-[0.08em] uppercase text-outline-variant hover:text-primary-light transition-colors">
            LinkedIn
          </a>
          <a href="mailto:Nabilbiel12@gmail.com" className="text-[12px] font-bold tracking-[0.08em] uppercase text-outline-variant hover:text-primary-light transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
