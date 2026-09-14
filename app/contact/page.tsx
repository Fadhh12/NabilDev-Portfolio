"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Mail, Check, Copy } from "lucide-react";
import BackButton from "@/components/BackButton";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!message.trim()) return;
      setStep(2);
    } else {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${email || "Client"}`);
      const body = encodeURIComponent(`${message}\n\nSender Email: ${email}`);
      // Open direct web Gmail compose in new tab to guarantee notification & inbox delivery
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Nabilbiel12@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
      // Fallback mailto trigger as well
      window.location.href = `mailto:Nabilbiel12@gmail.com?subject=${subject}&body=${body}`;
      setSent(true);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("Nabilbiel12@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="min-h-screen pt-20 sm:pt-24 pb-20 relative overflow-x-hidden flex flex-col justify-center items-center"
      style={{ background: "#e8e4da" }}
    >
      {/* ── Background Notebook Grid ── */}
      <div className="grid-pattern fixed inset-0 z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
        {/* Tombol Kembali */}
        <div className="w-full max-w-xl">
          <BackButton label="← Kembali ke Beranda" />
        </div>

        {/* ── Center Stage: Polaroids + Form ── */}
        <div className="relative w-full flex items-center justify-center">

          {/* Left Polaroid with Tape (Screenshot 1) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="hidden lg:block absolute left-2 xl:left-8 top-12 z-20 select-none cursor-pointer"
          >
            {/* Washi tape top-left */}
            <div
              className="absolute -top-3.5 left-4 w-12 h-6 z-30 opacity-85 shadow-sm"
              style={{ background: "#93c5fd", transform: "rotate(-25deg)" }}
            />
            {/* Washi tape top-right */}
            <div
              className="absolute -top-3.5 right-4 w-12 h-6 z-30 opacity-85 shadow-sm"
              style={{ background: "#fef08a", transform: "rotate(15deg)" }}
            />

            <div className="bg-white p-3.5 pb-5 shadow-2xl border border-black/20 w-[200px] xl:w-[220px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8e4da]">
                <Image
                  src="/assets/images/PUFA Computer Science BEM.jpeg"
                  alt="Random shot"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <p className="font-hand text-[15px] text-center text-[#191510] mt-3 font-bold">
                Random shot
              </p>
            </div>
          </motion.div>

          {/* Center Contact Form Box (Screenshot 1) */}
          <div className="flex flex-col items-center max-w-[480px] w-full">

            {/* "say hi" annotation on top with curved underline */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-hand text-[22px] text-[#7a7066] mb-1 inline-flex flex-col items-center"
            >
              <span>say hi</span>
              <svg width="44" height="6" viewBox="0 0 44 6" fill="none">
                <path d="M2 4.5C12 1.5 32 1.5 42 4.5" stroke="#191510" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* CONTACT Box with 4 blue corner anchor handles (Screenshot 1) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="relative p-2 px-8 sm:px-12 border-2 border-[#191510] bg-transparent select-none mb-4"
            >
              {/* 4 Blue corner anchor squares */}
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#2563eb] border border-white" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#2563eb] border border-white" />
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#2563eb] border border-white" />
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#2563eb] border border-white" />

              <h1 className="font-pixel uppercase text-[48px] sm:text-[68px] leading-[1.0] tracking-tight text-[#191510]">
                CONTACT
              </h1>
            </motion.div>

            {/* Yellow Notepad Card (Screenshot 1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full bg-[#fed7aa]/80 sm:bg-[#fef08a] border-2 border-[#191510] p-6 sm:p-8 shadow-[6px_6px_0_#191510] relative"
            >
              <h2 className="font-mono-accent text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#191510] leading-snug mb-5">
                GOT A PROJECT, A HARD PROBLEM, OR JUST WANT TO SAY HI? SEND IT OVER. I READ EVERY MESSAGE.
              </h2>

              {sent ? (
                <div className="py-8 text-center">
                  <span className="text-3xl mb-2 block">⚡</span>
                  <h3 className="font-pixel text-[20px] text-[#191510] mb-2">Message Prepared!</h3>
                  <p className="text-[13px] text-[#191510]/85">
                    Your email client should open shortly, or email me directly at{" "}
                    <a href="mailto:Nabilbiel12@gmail.com" className="font-bold underline">
                      Nabilbiel12@gmail.com
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {step === 1 ? (
                    <div>
                      <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me a story, or a project idea..."
                        rows={4}
                        className="w-full bg-transparent border-0 resize-none font-hand text-[18px] sm:text-[20px] text-[#191510] placeholder-[#7a7066]/70 focus:outline-none focus:ring-0 leading-relaxed"
                      />
                      <div className="flex justify-start mt-2">
                        <button
                          type="submit"
                          className="px-5 py-2 bg-[#191510] text-white font-bold font-mono-accent text-[11px] tracking-wider uppercase hover:bg-[#2563eb] transition-colors border border-[#191510] cursor-pointer"
                        >
                          NEXT (1/2)
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address..."
                        className="w-full bg-transparent border-b-2 border-[#191510] py-2 font-mono-accent text-[14px] text-[#191510] placeholder-[#7a7066] focus:outline-none mb-4"
                      />
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-4 py-2 border border-[#191510] text-[#191510] font-mono-accent text-[11px] font-bold uppercase hover:bg-black/10 cursor-pointer"
                        >
                          BACK
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2 bg-[#191510] text-white font-bold font-mono-accent text-[11px] tracking-wider uppercase hover:bg-[#2563eb] transition-colors border border-[#191510] cursor-pointer"
                        >
                          SEND MESSAGE ↗
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </motion.div>

            {/* Below Card: Open to new work + Email + Social Pills (Screenshot 1) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex flex-col items-center text-center gap-3"
            >
              <p className="font-hand text-[17px] sm:text-[19px] text-[#191510] flex items-center gap-2">
                <span>→</span> Open to new work and good problems
              </p>

              <a
                href="mailto:Nabilbiel12@gmail.com"
                className="font-mono-accent text-[13px] sm:text-[14px] font-bold text-[#2563eb] hover:underline"
              >
                Nabilbiel12@gmail.com
              </a>

              {/* Social Pills (Screenshot 1) */}
              <div className="flex items-center gap-3 mt-3 bg-white/90 border-2 border-[#191510] px-4 py-2.5 rounded-xl shadow-md">
                <a
                  href="https://www.linkedin.com/in/nabil-fadhlur-rahman-686794320/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 hover:text-[#2563eb] transition-colors text-[#191510] text-[11px] font-bold font-mono-accent uppercase tracking-wider"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-[#eab308]" /> LINKEDIN
                </a>
                <span className="text-[#191510]/30 font-bold">·</span>
                <a
                  href="https://github.com/Fadhh12"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 hover:text-[#2563eb] transition-colors text-[#191510] text-[11px] font-bold font-mono-accent uppercase tracking-wider"
                >
                  <FaGithub className="w-3.5 h-3.5 text-[#ec4899]" /> GITHUB
                </a>
                <span className="text-[#191510]/30 font-bold">·</span>
                <a
                  href="https://www.instagram.com/nabil_biel/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 hover:text-[#2563eb] transition-colors text-[#191510] text-[11px] font-bold font-mono-accent uppercase tracking-wider"
                >
                  <FaInstagram className="w-3.5 h-3.5 text-[#10b981]" /> INSTAGRAM
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Polaroid with Tape (Screenshot 1) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="hidden lg:block absolute right-2 xl:right-8 top-12 z-20 select-none cursor-pointer"
          >
            {/* Washi tape top-left */}
            <div
              className="absolute -top-3.5 left-4 w-12 h-6 z-30 opacity-85 shadow-sm"
              style={{ background: "#93c5fd", transform: "rotate(20deg)" }}
            />
            {/* Washi tape top-right */}
            <div
              className="absolute -top-3.5 right-4 w-12 h-6 z-30 opacity-85 shadow-sm"
              style={{ background: "#fef08a", transform: "rotate(-15deg)" }}
            />

            <div className="bg-white p-3.5 pb-5 shadow-2xl border border-black/20 w-[200px] xl:w-[220px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8e4da]">
                <Image
                  src="/assets/images/poto nabil.jpeg"
                  alt="what is this"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <p className="font-hand text-[15px] text-center text-[#191510] mt-3 font-bold">
                what is this
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
