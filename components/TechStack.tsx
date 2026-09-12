"use client";

import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiTypescript, SiPhp, SiOpenjdk,
  SiNextdotjs, SiReact, SiNodedotjs, SiFlask, SiTailwindcss,
  SiTensorflow, SiOpencv, SiGooglegemini, SiLangchain,
  SiMysql, SiPostgresql, SiSqlite, SiFirebase,
  SiGit, SiGithub, SiFigma, SiVercel,
} from "react-icons/si";

const STACK = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Java", Icon: SiOpenjdk, color: "#5382A1" },
  { name: "Next.js", Icon: SiNextdotjs, color: "var(--ca-ink)" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Flask", Icon: SiFlask, color: "var(--ca-ink)" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
  { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
  { name: "Gemini API", Icon: SiGooglegemini, color: "#8E75B2" },
  { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "var(--ca-ink)" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", Icon: SiVercel, color: "var(--ca-ink)" },
];

const TAPE_COLORS = ["var(--ca-yellow-soft)", "var(--ca-mint)", "var(--ca-cyan)", "var(--ca-pink-soft)"];

export default function TechStack() {
  const loopItems = [...STACK, ...STACK];

  return (
    <section id="stack" className="py-14 md:py-16 border-y border-outline-variant w-full bg-surface relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand text-[22px] text-on-surface-variant"
        >
          the stack behind it
        </motion.span>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 46, ease: "linear", repeat: Infinity }}
        >
          {loopItems.map((tool, i) => (
            <span
              key={`${tool.name}-${i}`}
              className="washi-tape shrink-0 flex items-center gap-2.5 pl-4 pr-5 py-3 shadow-md whitespace-nowrap rotate-[-1.5deg] even:rotate-[1.5deg]"
              style={{ background: TAPE_COLORS[i % TAPE_COLORS.length] }}
            >
              <tool.Icon className="w-[18px] h-[18px] shrink-0" style={{ color: tool.color }} />
              <span className="text-[13px] font-bold text-on-surface">{tool.name}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
