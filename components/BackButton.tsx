"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ label = "Kembali ke Beranda" }: { label?: string }) {
  return (
    <div className="w-full flex items-center justify-start mb-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0ece0] text-[#191510] text-[12px] font-bold uppercase tracking-wider border-2 border-[#191510] rounded-sm shadow-[3px_3px_0_#191510] hover:bg-[#facc15] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#191510] active:translate-y-0 active:shadow-[1px_1px_0_#191510] transition-all font-mono-accent cursor-pointer group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>{label}</span>
      </Link>
    </div>
  );
}
