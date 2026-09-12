"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Bundle the worker locally instead of fetching from a CDN — avoids version
// mismatches with the installed pdfjs-dist and the blank first-paint while
// the CDN script downloads.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

// Placeholder data since certificates images aren't fully specified
const CERTIFICATES = [
  { id: 1, title: "Machine Learning", issuer: "Coursera / Google", date: "2024", file: "/assets/certificates/Machine Learning.pdf", desc: "Comprehensive Machine Learning certification." },
  { id: 2, title: "Google AI", issuer: "Google", date: "2024", file: "/assets/certificates/Google AI.pdf", desc: "Google AI learning path certification." },
  { id: 3, title: "Copilot Best Practices", issuer: "Microsoft", date: "2024", file: "/assets/certificates/Copilot Best Practices, Ethics and Regulatory Implications.pdf", desc: "Best practices, ethics and regulatory implications for using Microsoft Copilot." },
  { id: 4, title: "AI for App Building", issuer: "Microsoft", date: "2024", file: "/assets/certificates/AI for App Building Sertification.pdf", desc: "Certification for AI App Building." },
  { id: 5, title: "AI Efficiencies & Governance", issuer: "Microsoft", date: "2024", file: "/assets/certificates/AIEfficienciesandGovernance_Badge20260725-21-tn06uc.pdf", desc: "Badge and certification for AI Efficiencies and Governance." },
  { id: 6, title: "Intro to Generative AI", issuer: "Google", date: "2024", file: "/assets/certificates/Introduction to Generative AI Learning Path.pdf", desc: "Generative AI learning path certification." },
  { id: 7, title: "Responsible AI & Risk Management", issuer: "Microsoft", date: "2024", file: "/assets/certificates/ResponsibleAIandRiskManagement_Badge20260724-20-36jmdw.pdf", desc: "Certification for Responsible AI practices." },
  { id: 8, title: "Your Everyday AI Companion", issuer: "Microsoft", date: "2024", file: "/assets/certificates/Your Everyday AI Companion.pdf", desc: "Everyday AI Companion certification." }
];

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const displayedCerts = showAll ? CERTIFICATES : CERTIFICATES.slice(0, 3);

  const openCert = (cert: typeof CERTIFICATES[0]) => {
    setSelectedCert(cert);
    const mainScroll = document.getElementById('main-scroll');
    if (mainScroll) mainScroll.style.scrollSnapType = 'none';
  };
  const closeCert = () => {
    setSelectedCert(null);
    const mainScroll = document.getElementById('main-scroll');
    if (mainScroll) mainScroll.style.scrollSnapType = 'y mandatory';
  };

  return (
    <div id="certificates" className="w-full">
      <div className="w-full">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {displayedCerts.map((cert) => (
              <motion.div 
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-surface border border-outline-variant rounded-[20px] overflow-hidden group hover:border-primary transition-all duration-300"
              >
                <div className="h-[200px] bg-surface-dim relative overflow-hidden border-b border-outline-variant/50 flex items-center justify-center">
                  <div className="w-full h-full relative overflow-hidden group pointer-events-none bg-white flex items-center justify-center">
                    <Document file={cert.file} loading={<div className="w-full h-full bg-surface-container animate-pulse" />}>
                      <Page pageNumber={1} width={400} renderTextLayer={false} renderAnnotationLayer={false} className="opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100" />
                    </Document>
                  </div>
                  {/* Click overlay */}
                  <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => openCert(cert)} />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[18px] font-bold text-on-surface mb-1">{cert.title}</h3>
                  <p className="text-[14px] font-semibold text-on-surface-variant mb-4">{cert.issuer} • {cert.date}</p>
                  
                  <button 
                    onClick={() => openCert(cert)}
                    className="w-full py-2.5 rounded-xl border border-primary text-primary text-[11px] font-bold uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {CERTIFICATES.length > 3 && (
          <motion.div
            layout
            className="flex justify-center mt-8 mb-4"
          >
            <button 
              onClick={() => {
                setShowAll(!showAll);
                if (showAll) {
                  const el = document.getElementById('certificates');
                  if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="px-10 py-4 bg-surface-container-highest border-2 border-outline-variant text-on-surface rounded-full text-[13px] font-bold tracking-[0.06em] uppercase hover:border-primary hover:text-primary transition-all shadow-md"
            >
              {showAll ? "↑ Show Less" : "View All Certificates →"}
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => closeCert()}
              className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm z-[2000]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
              animate={{ opacity: 1, y: "-50%", scale: 1, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              className="fixed top-1/2 left-1/2 w-[95%] max-w-[800px] max-h-[90vh] bg-surface rounded-[24px] overflow-hidden z-[2010] shadow-2xl border border-outline-variant flex flex-col"
              style={{ x: "-50%", y: "-50%" }}
            >
              {/* Close button always on top */}
              <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-outline-variant shrink-0">
                <div>
                  <h3 className="font-display text-[20px] md:text-[24px] font-bold text-on-surface">{selectedCert.title}</h3>
                  <p className="text-[13px] font-semibold text-primary mt-0.5">Issued by {selectedCert.issuer} • {selectedCert.date}</p>
                </div>
                <button 
                  onClick={() => closeCert()}
                  className="p-2.5 rounded-full bg-surface-container hover:bg-surface-container-highest border border-outline-variant text-on-surface-variant hover:text-on-surface transition-all shrink-0 ml-4"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 min-h-[260px] md:min-h-[420px] bg-surface-dim relative flex flex-col overflow-hidden items-center p-4 overflow-y-auto">
                <Document file={selectedCert.file} loading={<div className="w-full h-[400px] bg-surface-container animate-pulse rounded-md" />}>
                  <Page pageNumber={1} width={isMobile ? window.innerWidth * 0.85 : 600} renderTextLayer={false} renderAnnotationLayer={false} className="shadow-lg border border-outline-variant/30 bg-white" />
                </Document>
              </div>
              <div className="px-6 py-4 shrink-0">
                <p className="text-[13px] md:text-[15px] leading-[1.7] text-on-surface-variant mb-4">
                  {selectedCert.desc}
                </p>
                <div className="flex gap-3">
                  <a
                    href={selectedCert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-primary text-on-primary rounded-xl text-[12px] font-bold uppercase tracking-wider hover:bg-primary-hover transition-colors text-center"
                  >
                    Open PDF
                  </a>
                  <button
                    onClick={() => closeCert()}
                    className="flex-1 py-3 bg-surface-container text-on-surface border border-outline-variant rounded-xl text-[12px] font-bold uppercase tracking-wider hover:bg-surface-container-highest transition-colors"
                  >
                    Close
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
