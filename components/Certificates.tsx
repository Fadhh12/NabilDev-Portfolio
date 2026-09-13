"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, CheckCircle2, FileText } from "lucide-react";

interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  file: string;
  desc: string;
  tag: string;
  bg: string;
  tape: string;
  rot: number;
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: 1,
    title: "Machine Learning",
    issuer: "Google & DeepLearning.AI",
    date: "2024",
    file: "/assets/certificates/Machine Learning.pdf",
    desc: "Comprehensive Machine Learning specialization covering supervised learning, neural networks, and decision trees.",
    tag: "AI & ML",
    bg: "#fef08a",
    tape: "#bfdbfe",
    rot: -2,
  },
  {
    id: 2,
    title: "Google AI Essentials",
    issuer: "Google",
    date: "2024",
    file: "/assets/certificates/Google AI.pdf",
    desc: "Foundational concepts of artificial intelligence, generative AI prompting, and responsible AI workflows.",
    tag: "Generative AI",
    bg: "#a7f3d0",
    tape: "#fbcfe8",
    rot: 2,
  },
  {
    id: 3,
    title: "Copilot Best Practices & Ethics",
    issuer: "Microsoft",
    date: "2024",
    file: "/assets/certificates/Copilot Best Practices, Ethics and Regulatory Implications.pdf",
    desc: "Ethical deployment, regulatory implications, and workflow acceleration using Microsoft Copilot.",
    tag: "Ethics & LLMs",
    bg: "#bfdbfe",
    tape: "#fef08a",
    rot: -1.5,
  },
  {
    id: 4,
    title: "AI for App Building",
    issuer: "Microsoft",
    date: "2024",
    file: "/assets/certificates/AI for App Building Sertification.pdf",
    desc: "Architecting and implementing AI capabilities into production applications and cloud services.",
    tag: "Full-Stack AI",
    bg: "#fce7f3",
    tape: "#a7f3d0",
    rot: 2.5,
  },
  {
    id: 5,
    title: "AI Efficiencies & Governance",
    issuer: "Microsoft",
    date: "2024",
    file: "/assets/certificates/AIEfficienciesandGovernance_Badge20260725-21-tn06uc.pdf",
    desc: "Verified badge for AI system efficiencies, auditing mechanisms, and enterprise data governance.",
    tag: "Governance",
    bg: "#ddd6fe",
    tape: "#bfdbfe",
    rot: -2,
  },
  {
    id: 6,
    title: "Intro to Generative AI",
    issuer: "Google Cloud",
    date: "2024",
    file: "/assets/certificates/Introduction to Generative AI Learning Path.pdf",
    desc: "Learning path certification on Large Language Models, Attention mechanisms, and Transformer architectures.",
    tag: "LLMs",
    bg: "#fed7aa",
    tape: "#fbcfe8",
    rot: 1.5,
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div className="w-full">
      {/* ── Certificates Cards Grid (Scrapbook Washi Tape Style) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
        {CERTIFICATES.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0, y: -6 }}
            style={{ rotate: cert.rot }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
            onClick={() => setSelectedCert(cert)}
            className="relative p-6 bg-white border-2 border-[#191510] shadow-[5px_5px_0_#191510] cursor-pointer flex flex-col justify-between select-none group"
          >
            {/* Washi Tape at Top */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 z-10 opacity-90 shadow-sm border border-black/20"
              style={{
                background: cert.tape,
                transform: `rotate(${cert.rot > 0 ? -3 : 3}deg)`,
              }}
            />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4 mt-1">
                <span
                  className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm border border-[#191510]"
                  style={{ background: cert.bg, color: "#191510" }}
                >
                  {cert.tag}
                </span>
                <span className="text-[12px] font-bold font-mono-accent text-[#7a7066]">
                  {cert.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <h4 className="font-display text-[21px] font-bold text-[#191510] leading-tight mb-2 group-hover:text-[#2563eb] transition-colors">
                {cert.title}
              </h4>
              <p className="text-[14px] text-[#7a7066] font-semibold mb-4">
                {cert.issuer}
              </p>

              <p className="text-[13px] text-[#191510]/80 line-clamp-2 leading-relaxed">
                {cert.desc}
              </p>
            </div>

            {/* Bottom Stamp / CTA */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t-2 border-[#191510]/15">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#10b981] font-mono-accent">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#191510] group-hover:underline flex items-center gap-1">
                Details <Award className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Certificate Detail Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-[2000] bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="fixed inset-0 z-[2001] flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="pointer-events-auto bg-[#f0ece0] border-2 border-[#191510] shadow-[8px_8px_0_#191510] p-6 sm:p-8 max-w-lg w-full relative flex flex-col gap-5"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Washi Tape on Modal Header */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 z-10 opacity-90 shadow-sm border border-black/20"
                  style={{ background: selectedCert.tape }}
                />

                <div className="flex items-start justify-between mt-2">
                  <div>
                    <span
                      className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm border border-[#191510]"
                      style={{ background: selectedCert.bg }}
                    >
                      {selectedCert.tag}
                    </span>
                    <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-[#191510] mt-2 leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[13px] text-[#7a7066] font-mono-accent mt-1">
                      Issued by {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 border-2 border-[#191510] hover:bg-[#191510] hover:text-white transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="bg-white p-4 border border-[#191510]/20 rounded-sm">
                  <p className="text-[14px] leading-relaxed text-[#191510]/90">
                    {selectedCert.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#191510]/15 text-[#10b981] font-mono-accent text-[12px] font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Official Credential Verified &amp; Archived</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <a
                    href={selectedCert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] text-white text-[12px] font-bold uppercase tracking-wider rounded-sm border-2 border-[#191510] shadow-[2px_2px_0_#191510] hover:translate-y-[-2px] transition-all"
                  >
                    <FileText className="w-4 h-4" /> View Certificate PDF <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-5 py-2.5 bg-[#191510] text-white text-[12px] font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
