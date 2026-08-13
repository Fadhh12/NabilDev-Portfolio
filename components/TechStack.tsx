"use client";

import { motion } from "framer-motion";
import { 
  Code, Terminal, FileCode, Coffee, Layout, Globe, Server, Palette, 
  Brain, Bot, Cpu, Eye, MessageSquare, Database, Cloud, HardDrive, 
  GitBranch, GitCommit, PenTool, Book, Box, ShieldCheck, Zap
} from "lucide-react";

const TECH_DATA = [
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "Python", icon: Terminal },
      { name: "JavaScript", icon: FileCode },
      { name: "TypeScript", icon: Code },
      { name: "Java", icon: Coffee },
      { name: "C++", icon: Code },
      { name: "PHP", icon: Server },
      { name: "Dart", icon: Layout },
    ]
  },
  {
    title: "WEB & MOBILE DEV",
    skills: [
      { name: "React", icon: Globe },
      { name: "Next.js", icon: Globe },
      { name: "Node.js", icon: Server },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Laravel", icon: Server },
      { name: "Flutter", icon: Layout },
    ]
  },
  {
    title: "AI & MACHINE LEARNING",
    skills: [
      { name: "TensorFlow", icon: Brain },
      { name: "PyTorch", icon: Bot },
      { name: "Scikit-learn", icon: Cpu },
      { name: "Computer Vision", icon: Eye },
      { name: "NLP", icon: MessageSquare },
    ]
  },
  {
    title: "DATABASE & CLOUD",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Supabase", icon: HardDrive },
      { name: "Firebase", icon: Zap },
      { name: "Google Cloud", icon: Cloud },
      { name: "Vercel", icon: ShieldCheck },
    ]
  },
  {
    title: "TOOLS & DESIGN",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitCommit },
      { name: "Figma", icon: PenTool },
      { name: "Jupyter Notebook", icon: Book },
      { name: "Blender 3D", icon: Box },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="stack" className="min-h-[100dvh] py-12 border-t border-outline-variant w-full bg-transparent relative z-10 snap-start snap-always overflow-y-auto overflow-x-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface-variant mb-4"
          >
            What I Use
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(32px,5vw,56px)] font-black tracking-[-0.04em] text-on-surface"
          >
            Tech Stack &amp; Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15 }}
            className="text-[15px] text-on-surface-variant mt-3 max-w-md mx-auto"
          >
            Technologies and tools I use to build production-ready products.
          </motion.p>
        </div>

        {/* Tech Columns - 1 col mobile, 2 col sm, full row lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-8 w-full lg:justify-center">
          {TECH_DATA.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="flex flex-col items-center w-full lg:w-auto"
            >
              <h3 className="text-[10px] md:text-[9px] font-bold tracking-[0.12em] text-primary uppercase mb-5 text-center h-auto lg:h-8 flex items-end">
                {category.title}
              </h3>
              <div className="flex flex-col gap-2.5 w-full max-w-full sm:max-w-[210px] mx-auto">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-surface-container/60 backdrop-blur-sm border border-outline-variant shadow-sm hover:border-primary/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all cursor-default group"
                    >
                      <Icon className="w-[16px] h-[16px] text-on-surface-variant group-hover:text-primary transition-colors shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] font-semibold text-on-surface tracking-wide group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
