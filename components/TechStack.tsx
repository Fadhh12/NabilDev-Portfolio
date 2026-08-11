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
    title: "MODERN WEB DEVELOPMENT",
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
    title: "DATABASE & CLOUD INFRASTRUCTURE",
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
    <section id="stack" className="py-16 md:py-24 border-t border-outline-variant w-full bg-transparent relative z-10 snap-start min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface-variant mb-4"
          >
            — What I Use
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(32px,5vw,56px)] font-black tracking-[-0.04em] text-on-surface"
          >
            Tech Stack & Tools
          </motion.h2>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-8">
          {TECH_DATA.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="flex flex-col items-center w-[45%] md:w-[30%] lg:w-auto"
            >
              <h3 className="text-[10px] font-bold tracking-[0.1em] text-on-surface-variant uppercase mb-6 text-center h-8 flex items-end">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3.5 w-full max-w-[220px]">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-4 px-5 py-3.5 rounded-full bg-surface-container/60 backdrop-blur-sm border border-outline-variant shadow-sm hover:border-primary hover:shadow-[0_4px_12px_rgba(163,230,53,0.15)] transition-all cursor-default group"
                    >
                      <Icon className="w-[18px] h-[18px] text-on-surface-variant group-hover:text-primary transition-colors" strokeWidth={2.5} />
                      <span className="text-sm font-bold text-on-surface tracking-wide group-hover:text-primary transition-colors">
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
