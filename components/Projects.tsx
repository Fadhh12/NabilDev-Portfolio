"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, GitCommit, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface SlideItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  date: string;
  desc: string;
  github: string | null;
  demo: string | null;
  techStack: string[];
  theme: { bg: string; fg: string; tabBg: string; tabFg: string; tape: string };
  slides: SlideItem[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "AI Roadmap E-Learning",
    category: "EdTech & AI",
    date: "Mar 2025",
    desc: "Adaptive E-Learning platform utilizing AI for personalized roadmaps, interactive skill assessments, and dynamic curriculum generation.",
    github: "https://github.com/Fadhh12",
    demo: null,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "PostgreSQL"],
    theme: { bg: "#2563eb", fg: "#ffffff", tabBg: "#1d4ed8", tabFg: "#ffffff", tape: "#93c5fd" },
    slides: [
      { id: 1, title: "Student Dashboard", description: "Main personalized learning dashboard", image: "/assets/projects/AI Roadmap Adaptive E-Learning/Screenshot_75.png" },
      { id: 2, title: "Roadmap View", description: "AI generated node-based curriculum path", image: "/assets/projects/AI Roadmap Adaptive E-Learning/Screenshot_76.png" },
      { id: 3, title: "Interactive Lesson", description: "Dynamic quiz and assessment module", image: "/assets/projects/AI Roadmap Adaptive E-Learning/Screenshot_77.png" },
    ],
  },
  {
    id: 2,
    title: "Camera AI-VeriVision",
    category: "Enterprise AI",
    date: "Jan 2025",
    desc: "Enterprise-grade AI camera verification system with real-time defect detection, live inspection dashboard, automated PASS/FAIL verdicts, and an AI operator assistant chatbot.",
    github: null,
    demo: "https://camera-ai-veri-vision.vercel.app/",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Computer Vision", "Tailwind CSS"],
    theme: { bg: "#18181b", fg: "#ffffff", tabBg: "#27272a", tabFg: "#ffffff", tape: "#e5e7eb" },
    slides: [
      { id: 1, title: "Live Camera Inspection", description: "Real-time AI camera defect detection", image: "/assets/projects/Astra Projects/Live_monitor.png" },
      { id: 2, title: "Dark Operations Dashboard", description: "Fleet metrics and inspection KPI counters", image: "/assets/projects/Astra Projects/Dashboard_dark.png" },
      { id: 3, title: "Dataset Training Gallery", description: "Part classification & sample annotations", image: "/assets/projects/Astra Projects/Dataset_Page1.png" },
      { id: 4, title: "Inspection Verdicts", description: "PASS / FAIL confidence ratings & logs", image: "/assets/projects/Astra Projects/Result_page.png" },
      { id: 5, title: "Integration & Hardware", description: "Webhook and camera feed configuration", image: "/assets/projects/Astra Projects/Integration_Page.png" },
      { id: 6, title: "AI VeriAssist Chatbot", description: "Contextual assistant for line operators", image: "/assets/projects/Astra Projects/ChatBot.png" },
    ],
  },
  {
    id: 3,
    title: "HireLens AI",
    category: "HR Tech & AI",
    date: "2025",
    desc: "AI-powered recruitment intelligence platform that analyzes CVs, matches candidates to job descriptions, and provides structured hiring insights using multi-model LLM evaluation.",
    github: "https://github.com/Fadhh12",
    demo: "https://hirelens-ai-app.vercel.app/",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    theme: { bg: "#059669", fg: "#ffffff", tabBg: "#047857", tabFg: "#ffffff", tape: "#6ee7b7" },
    slides: [
      { id: 1, title: "Recruiter Dashboard", description: "Overview of active jobs and AI match-label distribution", image: "/assets/projects/Herlens-AI/Screenshot_5.png" },
      { id: 2, title: "Job Postings", description: "Manage active job listings across departments", image: "/assets/projects/Herlens-AI/herlens job.png" },
      { id: 3, title: "Create Job Criteria", description: "Define required skills and AI scoring weights", image: "/assets/projects/Herlens-AI/herlesn addjob.png" },
      { id: 4, title: "AI Candidate Scoring", description: "Ranked candidates labeled Strong Match, Consider, or Not a Fit", image: "/assets/projects/Herlens-AI/Screenshot_4.png" },
      { id: 5, title: "Candidate Insight Report", description: "AI-generated CV summary and skill-fit breakdown", image: "/assets/projects/Herlens-AI/Screenshot_6.png" },
    ],
  },
  {
    id: 4,
    title: "Marwa-id",
    category: "Web Platform",
    date: "2025",
    desc: "Modern web platform for a community or organization with clean design, rich content management, and a smooth user experience built for Indonesian audiences.",
    github: "https://github.com/Fadhh12",
    demo: "https://marwa-id.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    theme: { bg: "#0369a1", fg: "#ffffff", tabBg: "#075985", tabFg: "#ffffff", tape: "#bae6fd" },
    slides: [
      { id: 1, title: "Landing Page", description: "Hero and main content sections", image: "/assets/projects/pu_suites/Screenshot (347).png" },
      { id: 2, title: "Content Section", description: "Organized information layout", image: "/assets/projects/pu_suites/Screenshot (349).png" },
      { id: 3, title: "Community Features", description: "Engagement and interaction modules", image: "/assets/projects/pu_suites/Screenshot (351).png" },
    ],
  },
  {
    id: 5,
    title: "Jarvis AI Assistant",
    category: "Generative AI",
    date: "Nov 2024",
    desc: "Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini) for intelligent campus queries.",
    github: "https://github.com/Fadhh12",
    demo: "https://jarvis-ai-presuniv.vercel.app/",
    techStack: ["Python", "Llama 3.2", "Gemini API", "FastAPI", "VectorDB", "RAG"],
    theme: { bg: "#eab308", fg: "#191510", tabBg: "#ca8a04", tabFg: "#ffffff", tape: "#fef08a" },
    slides: [
      { id: 1, title: "Campus Chat Interface", description: "RAG powered campus Q&A interaction", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/Screenshot (337).png" },
      { id: 2, title: "Multi-Model Config", description: "Switching between Llama 3.2 and Gemini", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/Screenshot (338).png" },
      { id: 3, title: "Student Inquiry Flow", description: "Academic calendar and course schedule lookup", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/Screenshot_73.png" },
      { id: 4, title: "RAG Vector Architecture", description: "Semantic chunking & vector retrieval pipeline", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/ray-so-export (1).png" },
      { id: 5, title: "LLM Pipeline Engine", description: "Context injection and evaluation logic", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/ray-so-export.png" },
    ],
  },
  {
    id: 6,
    title: "Design Anything",
    category: "Design Tool",
    date: "Sep 2024",
    desc: "Creative browser-based platform for multi-layered design tools, SVG vector canvas editing, custom exports, and fluid layout manipulation.",
    github: "https://github.com/Fadhh12",
    demo: null,
    techStack: ["React", "Redux", "Canvas API", "Tailwind CSS", "TypeScript"],
    theme: { bg: "#ec4899", fg: "#ffffff", tabBg: "#db2777", tabFg: "#ffffff", tape: "#fbcfe8" },
    slides: [
      { id: 1, title: "Canvas Artboard", description: "Vector editing and layer transform panel", image: "/assets/projects/Design Anything/Screenshot_75.png" },
      { id: 2, title: "Design Tool Palette", description: "Typography, brush & shape inspectors", image: "/assets/projects/Design Anything/Screenshot_76.png" },
      { id: 3, title: "Export & Render", description: "SVG and multi-resolution PNG export", image: "/assets/projects/Design Anything/Screenshot_77.png" },
    ],
  },
  {
    id: 7,
    title: "Real-time Trash Detection",
    category: "Computer Vision",
    date: "Jul 2024",
    desc: "Real-time object detection and categorization system for automated smart city waste sorting using trained YOLO models and high-fps video pipeline.",
    github: "https://github.com/Fadhh12",
    demo: null,
    techStack: ["Python", "YOLO", "PyTorch", "OpenCV", "Flask"],
    theme: { bg: "#0d9488", fg: "#ffffff", tabBg: "#0f766e", tabFg: "#ffffff", tape: "#99f6e4" },
    slides: [
      { id: 1, title: "Live Detection Feed", description: "YOLO bounding boxes with class confidence", image: "/assets/projects/Real-time Trash Detection/Screenshot_75.png" },
      { id: 2, title: "Confusion Matrix", description: "Multi-class validation benchmarks", image: "/assets/projects/Real-time Trash Detection/Screenshot_76.png" },
      { id: 3, title: "Precision-Recall Curves", description: "Model convergence metrics across epochs", image: "/assets/projects/Real-time Trash Detection/Screenshot_77.png" },
      { id: 4, title: "Batch Inference", description: "Performance under diverse lighting conditions", image: "/assets/projects/Real-time Trash Detection/Screenshot_78.png" },
      { id: 5, title: "F1 Score Analysis", description: "Optimal confidence threshold tuning", image: "/assets/projects/Real-time Trash Detection/Screenshot_79.png" },
      { id: 6, title: "Classification Summary", description: "Waste category breakdown output", image: "/assets/projects/Real-time Trash Detection/Screenshot_80.png" },
    ],
  },
  {
    id: 8,
    title: "PU Suites",
    category: "Enterprise System",
    date: "May 2024",
    desc: "Integrated academic and administrative suite designed to simplify student portals, course registration, and faculty workflows at President University.",
    github: "https://github.com/Fadhh12",
    demo: "https://pu-suites.infinityfreeapp.com/",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Laravel"],
    theme: { bg: "#7c3aed", fg: "#ffffff", tabBg: "#6d28d9", tabFg: "#ffffff", tape: "#ddd6fe" },
    slides: [
      { id: 1, title: "Home Page", description: "Luxury hotel landing experience with hero booking CTA", image: "/assets/projects/pu_suites/Screenshot_9.png" },
      { id: 2, title: "About & Rooms Overview", description: "Legacy section, stats and quick room previews", image: "/assets/projects/pu_suites/Screenshot_10.png" },
      { id: 3, title: "Rooms & Suites", description: "Full room catalog with categories and booking buttons", image: "/assets/projects/pu_suites/Screenshot (357).png" },
      { id: 4, title: "Reservation Form", description: "Guest information and reservation details modal", image: "/assets/projects/pu_suites/Screenshot (349).png" },
      { id: 5, title: "Contact & Booking", description: "Dedicated contact page with full reservation form", image: "/assets/projects/pu_suites/Screenshot (351).png" },
      { id: 6, title: "Admin Dashboard", description: "Booking metrics, room-type split and profit charts", image: "/assets/projects/pu_suites/Screenshot_11.png" },
    ],
  },
  {
    id: 9,
    title: "Recreo",
    category: "Creative Community",
    date: "Feb 2024",
    desc: "Interactive community and event engagement hub connecting campus creators, showcasing student projects, and organizing activities.",
    github: "https://github.com/Fadhh12",
    demo: null,
    techStack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    theme: { bg: "#f97316", fg: "#ffffff", tabBg: "#ea580c", tabFg: "#ffffff", tape: "#fed7aa" },
    slides: [
      { id: 1, title: "Community Feed", description: "Upcoming creator events and gatherings", image: "/assets/projects/Recreo/Screenshot_75.png" },
      { id: 2, title: "Event Registration", description: "Ticket reservation and guest check-in", image: "/assets/projects/Recreo/Screenshot_76.png" },
      { id: 3, title: "Project Showcase", description: "Spotlight on community members and work", image: "/assets/projects/Recreo/Screenshot_77.png" },
      { id: 4, title: "Creator Profiles", description: "Portfolio links and skill tags", image: "/assets/projects/Recreo/Screenshot_78.png" },
      { id: 5, title: "Activity Gallery", description: "Memories, photos, and highlight reels", image: "/assets/projects/Recreo/Screenshot_80.png" },
    ],
  },
];

/**
 * Individual Project Card with sticky stack + puzzle merge/unmerge zoom
 */
function ProjectCard({
  project,
  index,
  total,
  onOpenModal,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  onOpenModal: (project: ProjectItem, slideIndex?: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure scroll progress for this specific card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Scale down slightly when being overlapped by the next card (puzzle merge effect)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  // Smooth opacity and scaling for sticky behavior
  const cardTop = 64 + index * 12; // slight cascading tab offset

  return (
    <div
      ref={containerRef}
      className="sticky w-full flex items-center justify-center py-6 min-h-[90dvh]"
      style={{
        top: `${cardTop}px`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{ scale }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div
          className="relative rounded-sm overflow-hidden border-2 border-[#191510] shadow-[8px_8px_0_#191510] transition-transform duration-300"
          style={{ background: project.theme.bg, color: project.theme.fg }}
        >
          {/* Top Folder Tabs (Photo 1 exact layout) */}
          <div className="flex items-center border-b-2 border-[#191510] bg-black/10 overflow-x-auto no-scrollbar">
            {PROJECTS.map((p, pIdx) => {
              const isCurrent = p.id === project.id;
              return (
                <div
                  key={p.id}
                  className="px-5 sm:px-7 py-3 text-[11px] sm:text-[12px] font-bold tracking-widest uppercase flex items-center gap-2 border-r-2 border-[#191510] shrink-0"
                  style={{
                    background: isCurrent ? p.theme.tabBg : "rgba(0,0,0,0.25)",
                    color: isCurrent ? p.theme.tabFg : "rgba(255,255,255,0.7)",
                  }}
                >
                  <span className="text-[10px]">{isCurrent ? "✦" : "+"}</span>
                  Project 0{pIdx + 1}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-10 md:p-12 items-center">
            {/* Left Col (5 cols): Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase opacity-85 mb-3 font-mono-accent">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  {project.date}
                </div>

                <h3 className="font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-tight mb-4 drop-shadow-sm">
                  {project.title}
                </h3>

                <p className="text-[14px] sm:text-[15px] leading-[1.65] opacity-90 mb-6 max-w-[440px]">
                  {project.desc}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => onOpenModal(project)}
                    className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest border-b-2 pb-1 hover:opacity-75 transition-opacity font-mono-accent cursor-pointer"
                    style={{ borderColor: "currentColor" }}
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-full border-2 border-white/40 hover:border-white transition-colors"
                    >
                      <GitCommit className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-sm border-2 border-white/60 hover:bg-white hover:text-[#191510] transition-all font-mono-accent"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Category & Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-black text-white rounded-sm border border-white/30">
                  {project.category}
                </span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-sm border"
                    style={{
                      borderColor: project.theme.fg === "#ffffff" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)",
                      background: "rgba(0,0,0,0.15)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col (7 cols): Multi-Screen Mockup Collage Frame (Photo 1 layout) */}
            <div className="lg:col-span-7 relative">
              {/* Taped Frame Container */}
              <div className="relative p-3 sm:p-4 bg-white/95 rounded-sm border-4 border-white shadow-2xl">
                {/* Washi tape top-left */}
                <div
                  className="absolute -top-3 left-[15%] w-16 h-6 z-20 opacity-85 shadow-sm"
                  style={{
                    background: project.theme.tape,
                    transform: "rotate(-3deg)",
                    border: "1px dashed rgba(0,0,0,0.2)",
                  }}
                />
                {/* Washi tape top-right */}
                <div
                  className="absolute -top-3 right-[15%] w-16 h-6 z-20 opacity-85 shadow-sm"
                  style={{
                    background: "#fef08a",
                    transform: "rotate(2deg)",
                    border: "1px dashed rgba(0,0,0,0.2)",
                  }}
                />

                {/* Collage Grid: Dynamic responsive collage of UI/app mockups */}
                <div
                  className={clsx(
                    "grid gap-2.5 sm:gap-3 bg-[#e8e4da] p-2 sm:p-3 rounded-sm",
                    project.slides.length === 2 ? "grid-cols-2" :
                    project.slides.length === 3 ? "grid-cols-2 sm:grid-cols-3" :
                    project.slides.length === 4 ? "grid-cols-2" :
                    "grid-cols-2 sm:grid-cols-3"
                  )}
                >
                  {project.slides.map((slide, sIdx) => {
                    const isProminent = (project.slides.length === 3 && sIdx === 0) || (project.slides.length === 5 && sIdx === 0);
                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.03, zIndex: 10 }}
                        onClick={() => onOpenModal(project, sIdx)}
                        className={clsx(
                          "group relative rounded-sm overflow-hidden bg-white border border-[#191510]/20 shadow-md cursor-pointer",
                          isProminent ? "col-span-2 sm:col-span-1 aspect-[16/10] sm:aspect-[3/4]" : "aspect-[3/4]"
                        )}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 45vw, 240px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                          <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight font-hand drop-shadow">
                            {slide.title}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between mt-2 pt-2 px-1 text-[#191510] font-mono-accent text-[11px] font-bold opacity-75">
                  <span>✦ {project.slides.length} SCREENS / MOCKUPS</span>
                  <span className="flex items-center gap-1 cursor-pointer hover:underline" onClick={() => onOpenModal(project)}>
                    <Maximize2 className="w-3 h-3" /> Expand
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects({ showAll = false }: { showAll?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  const openModal = (project: ProjectItem, slideIndex = 0) => {
    setSelectedProject(project);
    setSelectedSlideIndex(slideIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative z-10 w-full overflow-x-hidden pb-32">
      {/* ── Section Header ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-28 pb-8 text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand text-[24px] text-[#7a7066] mb-1"
        >
          explore my work!
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-pixel uppercase text-[clamp(36px,7vw,68px)] leading-[1.1] tracking-tight text-[#191510] inline-block border-b-2 border-[#191510] pb-2"
        >
          {showAll ? "All Projects" : "Featured Projects"}
        </motion.h2>
        <p className="text-[13px] text-[#7a7066] font-mono-accent uppercase tracking-wider mt-3">
          scroll to merge &amp; separate project cards
        </p>
      </div>

      {/* ── Sticky Stacked Project Cards (Puzzle Merge / Unmerge) ── */}
      <div className="relative w-full">
        {displayedProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            total={displayedProjects.length}
            onOpenModal={openModal}
          />
        ))}
      </div>

      {/* Link to view all projects if on home page */}
      {!showAll && (
        <div className="flex justify-center mt-12 relative z-30">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#191510] text-white font-bold text-[13px] tracking-widest uppercase border-2 border-[#191510] shadow-[4px_4px_0_#7a7066] hover:bg-[#2563eb] transition-all"
          >
            View All Projects ({PROJECTS.length}) →
          </Link>
        </div>
      )}

      {/* ── High-Res Preview Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[2001] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
            >
              <div
                className="pointer-events-auto bg-[#f0ece0] border-2 border-[#191510] rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 flex flex-col gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between border-b-2 border-[#191510] pb-4">
                  <div>
                    <span className="px-3 py-1 bg-[#191510] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display text-[26px] sm:text-[34px] font-bold text-[#191510] mt-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-[13px] text-[#7a7066] font-mono-accent">
                      {selectedProject.date} • {selectedProject.techStack.join(", ")}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-sm border-2 border-[#191510] hover:bg-[#191510] hover:text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Selected Image */}
                <div className="relative w-full h-[320px] sm:h-[450px] bg-black/10 rounded-sm overflow-hidden border-2 border-[#191510]">
                  <Image
                    src={selectedProject.slides[selectedSlideIndex]?.image || selectedProject.slides[0].image}
                    alt={selectedProject.slides[selectedSlideIndex]?.title || selectedProject.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 900px"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#191510]/85 text-white px-4 py-2 rounded-sm text-[12px] font-mono-accent">
                    {selectedProject.slides[selectedSlideIndex]?.title}: {selectedProject.slides[selectedSlideIndex]?.description}
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {selectedProject.slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSlideIndex(idx)}
                      className={`relative w-24 h-16 rounded-sm overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        selectedSlideIndex === idx ? "border-[#2563eb] scale-105 shadow-md" : "border-[#191510]/30 opacity-70"
                      }`}
                    >
                      <Image src={s.image} alt={s.title} fill className="object-cover" sizes="96px" />
                    </button>
                  ))}
                </div>

                {/* Modal Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t-2 border-[#191510]">
                  <p className="text-[14px] text-[#191510]/90 max-w-xl">
                    {selectedProject.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#191510] text-[#191510] font-bold text-[12px] tracking-wider uppercase hover:bg-[#191510] hover:text-white transition-colors"
                      >
                        <GitCommit className="w-3.5 h-3.5" /> GitHub
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#2563eb] bg-[#2563eb] text-white font-bold text-[12px] tracking-wider uppercase hover:bg-[#1d4ed8] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                    <button
                      onClick={closeModal}
                      className="px-6 py-2 bg-[#191510] text-white font-bold text-[12px] tracking-wider uppercase hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
