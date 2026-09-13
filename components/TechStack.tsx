"use client";

import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiTypescript, SiPhp, SiOpenjdk,
  SiNextdotjs, SiReact, SiNodedotjs, SiFlask, SiTailwindcss,
  SiTensorflow, SiOpencv, SiGooglegemini, SiLangchain,
  SiMysql, SiPostgresql, SiSqlite, SiFirebase,
  SiGit, SiGithub, SiFigma, SiVercel,
  SiPytorch, SiFastapi, SiDocker, SiMongodb,
  SiHuggingface, SiRedux, SiStreamlit, SiExpress,
  SiUbuntu, SiPostman, SiCplusplus, SiMeta,
} from "react-icons/si";

const STACK = [
  // AI & ML
  { name: "Python",       Icon: SiPython,       color: "#3776AB", bg: "#fef08a" },
  { name: "PyTorch",      Icon: SiPytorch,      color: "#EE4C2C", bg: "#fed7aa" },
  { name: "TensorFlow",   Icon: SiTensorflow,   color: "#FF6F00", bg: "#fed7aa" },
  { name: "OpenCV",       Icon: SiOpencv,       color: "#5C3EE8", bg: "#ddd6fe" },
  { name: "Gemini API",   Icon: SiGooglegemini, color: "#8E75B2", bg: "#ede9fe" },
  { name: "Hugging Face", Icon: SiHuggingface,  color: "#FFD21E", bg: "#d1fae5" },
  { name: "LangChain",    Icon: SiLangchain,    color: "#1C3C3C", bg: "#a7f3d0" },
  { name: "Llama 3",      Icon: SiMeta,         color: "#0466C8", bg: "#bfdbfe" },

  // Frontend & UI
  { name: "TypeScript",   Icon: SiTypescript,   color: "#3178C6", bg: "#bfdbfe" },
  { name: "JavaScript",   Icon: SiJavascript,   color: "#D97706", bg: "#fef08a" },
  { name: "Next.js",      Icon: SiNextdotjs,    color: "#191510", bg: "#e5e7eb" },
  { name: "React",        Icon: SiReact,        color: "#0284C7", bg: "#a7f3d0" },
  { name: "Redux",        Icon: SiRedux,        color: "#764ABC", bg: "#ede9fe" },
  { name: "Tailwind CSS", Icon: SiTailwindcss,  color: "#0284C7", bg: "#bfdbfe" },
  { name: "Figma",        Icon: SiFigma,        color: "#F24E1E", bg: "#fecdd3" },

  // Backend & APIs
  { name: "FastAPI",      Icon: SiFastapi,      color: "#009688", bg: "#ccfbf1" },
  { name: "Flask",        Icon: SiFlask,        color: "#191510", bg: "#fef08a" },
  { name: "Node.js",      Icon: SiNodedotjs,    color: "#15803D", bg: "#bbf7d0" },
  { name: "Express",      Icon: SiExpress,      color: "#191510", bg: "#e5e7eb" },
  { name: "PHP",          Icon: SiPhp,          color: "#777BB4", bg: "#fce7f3" },
  { name: "Java",         Icon: SiOpenjdk,      color: "#5382A1", bg: "#fef08a" },
  { name: "C++",          Icon: SiCplusplus,    color: "#00599C", bg: "#e0f2fe" },
  { name: "Streamlit",    Icon: SiStreamlit,    color: "#FF4B4B", bg: "#fee2e2" },

  // Databases & Cloud
  { name: "MongoDB",      Icon: SiMongodb,      color: "#47A248", bg: "#dcfce7" },
  { name: "PostgreSQL",   Icon: SiPostgresql,   color: "#4169E1", bg: "#c7d2fe" },
  { name: "MySQL",        Icon: SiMysql,        color: "#4479A1", bg: "#bfdbfe" },
  { name: "SQLite",       Icon: SiSqlite,       color: "#003B57", bg: "#e0f2fe" },
  { name: "Firebase",     Icon: SiFirebase,     color: "#D97706", bg: "#fef08a" },

  // DevOps & Tools
  { name: "Docker",       Icon: SiDocker,       color: "#2496ED", bg: "#e0f2fe" },
  { name: "Git",          Icon: SiGit,          color: "#F05032", bg: "#fecaca" },
  { name: "GitHub",       Icon: SiGithub,       color: "#191510", bg: "#e5e7eb" },
  { name: "Ubuntu / Linux", Icon: SiUbuntu,     color: "#E95420", bg: "#ffedd5" },
  { name: "Postman",      Icon: SiPostman,      color: "#FF6C37", bg: "#fed7aa" },
  { name: "Vercel",       Icon: SiVercel,       color: "#191510", bg: "#f3f4f6" },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-24 w-full relative z-10 border-t-2 border-[#191510]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-hand text-[24px] text-[#7a7066] mb-1">
            the stack behind my work
          </p>
          <div className="inline-block border-2 border-[#191510] px-8 py-2 bg-[#f0ece0] shadow-[3px_3px_0_#191510]">
            <h2 className="font-pixel text-[clamp(28px,5vw,46px)] tracking-tight text-[#191510] uppercase">
              Tech Stack
            </h2>
          </div>
        </motion.div>

        {/* Multi-row washi-tape badge grid — with interactive hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3.5 justify-center max-w-5xl mx-auto"
        >
          {STACK.map((tool, i) => (
            <motion.span
              key={tool.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.25 }}
              whileHover={{ scale: 1.1, rotate: 0, y: -4 }}
              className="washi-tape shrink-0 flex items-center gap-2 pl-4 pr-5 py-2.5 shadow-md whitespace-nowrap border-2 border-[#191510] cursor-pointer select-none"
              style={{
                background: tool.bg,
                transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
              }}
            >
              <tool.Icon className="w-[18px] h-[18px] shrink-0" style={{ color: tool.color }} />
              <span className="text-[13.5px] font-bold text-[#191510] font-mono-accent">
                {tool.name}
              </span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
