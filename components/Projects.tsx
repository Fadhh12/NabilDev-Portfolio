"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ExternalLink, GitCommit, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Carousel from "./Carousel";

const PROJECTS = [
  {
    title: "AI Roadmap Adaptive E-Learning",
    category: "EdTech & AI",
    desc: "Adaptive E-Learning platform utilizing AI for personalized roadmaps.",
    github: "https://github.com/nabilfadh",
    demo: null,
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI"],
    slides: [
      { id: 1, title: "Dashboard", description: "Main User Dashboard", image: "/assets/projects/AI Roadmap Adaptive E-Learning/Screenshot_75.png" },
      { id: 2, title: "Roadmap View", description: "AI Generated Roadmap", image: "/assets/projects/AI Roadmap Adaptive E-Learning/Screenshot_76.png" },
      { id: 3, title: "Lesson Interface", description: "Interactive Learning", image: "/assets/projects/AI Roadmap Adaptive E-Learning/Screenshot_77.png" }
    ]
  },
  {
    title: "Camera AI-VeriVision",
    category: "Enterprise",
    desc: "Comprehensive enterprise dashboard and workflow management system.",
    github: null,
    demo: null,
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    slides: [
      { id: 1, title: "Admin Workflow", description: "Workflow Dashboard", image: "/assets/projects/Astra Projects/Admin_Workflow.png" },
      { id: 2, title: "Dark Dashboard", description: "Dark Mode Interface", image: "/assets/projects/Astra Projects/Dashboard_dark.png" },
      { id: 3, title: "Live Monitor", description: "Real-time Monitoring", image: "/assets/projects/Astra Projects/Live_monitor.png" },
      { id: 4, title: "Integration", description: "Integration Page", image: "/assets/projects/Astra Projects/Integration_Page.png" },
      { id: 5, title: "ChatBot", description: "AI Chat Interface", image: "/assets/projects/Astra Projects/ChatBot.png" },
    ]
  },
  {
    title: "Design Anything",
    category: "Design Tool",
    desc: "A creative platform for various design tools and canvas editing.",
    github: "https://github.com/nabilfadh",
    demo: null,
    techStack: ["React", "Redux", "Canvas API", "Tailwind CSS"],
    slides: [
      { id: 1, title: "Editor", description: "Main Design Interface", image: "/assets/projects/Design Anything/Screenshot_75.png" },
      { id: 2, title: "Tools", description: "Design Tools Overview", image: "/assets/projects/Design Anything/Screenshot_76.png" },
      { id: 3, title: "Export", description: "Export Options", image: "/assets/projects/Design Anything/Screenshot_77.png" }
    ]
  },
  {
    title: "Jarvis AI Assistant",
    category: "Generative AI",
    desc: "Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support.",
    github: "https://github.com/nabilfadh",
    demo: null,
    techStack: ["Python", "Llama 3", "Gemini", "RAG", "FastAPI", "VectorDB"],
    slides: [
      { id: 1, title: "Chat Interface", description: "RAG Powered Chat", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/Screenshot (337).png" },
      { id: 2, title: "Settings", description: "LLM Model Configuration", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/Screenshot (338).png" },
      { id: 3, title: "Architecture", description: "System Flow", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/ray-so-export (1).png" },
    ]
  },
  {
    title: "Real-time Trash Detection",
    category: "Computer Vision",
    desc: "Real-time object detection system for automated trash sorting using YOLO.",
    github: "https://github.com/nabilfadh",
    demo: null,
    techStack: ["Python", "YOLO", "PyTorch", "OpenCV"],
    slides: [
      { id: 1, title: "Detection Feed", description: "Live Camera Feed", image: "/assets/projects/Real-time Trash Detection/Screenshot_75.png" },
      { id: 2, title: "Metrics", description: "Accuracy Metrics", image: "/assets/projects/Real-time Trash Detection/Screenshot_76.png" },
      { id: 3, title: "Results", description: "Detection Results", image: "/assets/projects/Real-time Trash Detection/Screenshot_77.png" },
    ]
  },
  {
    title: "Recreo",
    category: "Mobile App",
    desc: "A lifestyle and recreation mobile application for events and activities.",
    github: "https://github.com/nabilfadh",
    demo: null,
    techStack: ["React Native", "Expo", "Firebase", "Node.js"],
    slides: [
      { id: 1, title: "Landing Page", description: "Recreo Landing Page", image: "/assets/projects/Recreo/Screenshot_75.png" },
      { id: 2, title: "Features", description: "App Features", image: "/assets/projects/Recreo/Screenshot_76.png" },
      { id: 3, title: "Explore", description: "Explore Section", image: "/assets/projects/Recreo/Screenshot_77.png" },
    ]
  },
  {
    title: "PU Suites",
    category: "Web App",
    desc: "Management system and analytics dashboard for PU Suites property.",
    github: "https://github.com/nabilfadh",
    demo: null,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    slides: [
      { id: 1, title: "Suite Overview", description: "Suite Management", image: "/assets/projects/pu_suites/Screenshot (347).png" },
      { id: 2, title: "Booking", description: "Booking Interface", image: "/assets/projects/pu_suites/Screenshot (349).png" },
      { id: 3, title: "Dashboard", description: "Analytics Dashboard", image: "/assets/projects/pu_suites/Screenshot (351).png" },
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openProject = (project: typeof PROJECTS[0]) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    const mainScroll = document.getElementById('main-scroll');
    if (mainScroll) mainScroll.style.scrollSnapType = 'none';
  };

  const closeProject = () => {
    setSelectedProject(null);
    const mainScroll = document.getElementById('main-scroll');
    if (mainScroll) mainScroll.style.scrollSnapType = 'y mandatory';
  };

  const visibleProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="min-h-[100dvh] py-12 pb-16 bg-transparent relative z-10 w-full overflow-y-auto overflow-x-hidden snap-start snap-always flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block text-[11px] font-bold tracking-[0.1em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4"
            >
              My Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-display text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.03em] text-on-surface"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
          </div>

          {PROJECTS.length > 3 && (
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 border border-outline-variant text-on-surface-variant rounded-full text-[11px] font-bold tracking-[0.08em] uppercase hover:border-primary hover:text-primary transition-all"
            >
              {showAllProjects ? "Show Less" : "View All"}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          )}
        </div>

        {/* Project Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative"
            >
              {/* Folder Tab */}
              <div className="absolute -top-3 left-4 bg-surface-container border border-outline-variant/50 border-b-0 px-4 py-1.5 rounded-t-lg text-[10px] font-bold text-primary tracking-wider uppercase z-0 shadow-sm flex items-center gap-1.5">
                <Folder className="w-3 h-3" />
                {project.category}
              </div>

              {/* Folder Body */}
              <div
                className="bg-surface-container border border-outline-variant/50 rounded-2xl rounded-tl-none p-5 relative z-10 shadow-lg hover:border-primary/40 hover:shadow-xl transition-all h-full flex flex-col cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-[17px] font-bold text-on-surface leading-tight pr-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-on-surface-variant hover:text-primary transition-colors">
                        <GitCommit className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-on-surface-variant hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[13px] text-on-surface-variant mb-4 flex-grow line-clamp-2">
                  {project.desc}
                </p>

                <div className="h-[160px] w-full rounded-xl overflow-hidden bg-surface relative isolate mb-4">
                  <Carousel
                    items={project.slides}
                    baseWidth={320}
                    autoplay={true}
                    autoplayDelay={4000 + (idx * 500)}
                    loop={false}
                    pauseOnHover={true}
                  />
                </div>
                
                <div className="w-full py-2.5 rounded-xl border border-primary text-primary text-[11px] font-bold uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-colors text-center mt-auto">
                  View Details
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show Less button — always visible below the grid */}
        {showAllProjects && PROJECTS.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => {
                setShowAllProjects(false);
                const el = document.getElementById("projects");
                if (el) el.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-8 py-3.5 bg-surface-container-highest border-2 border-outline-variant text-on-surface rounded-full text-[12px] font-bold tracking-[0.08em] uppercase hover:border-primary hover:text-primary transition-all shadow-md"
            >
              ↑ Show Less
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => closeProject()}
              className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm z-[2000]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
              animate={{ opacity: 1, y: "-50%", scale: 1, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              className="fixed top-1/2 left-1/2 w-[95%] max-w-[1000px] h-[90vh] max-h-[700px] bg-surface rounded-[24px] overflow-hidden z-[2010] shadow-2xl border border-outline-variant flex flex-col md:flex-row"
              style={{ x: "-50%", y: "-50%" }}
            >
              <button
                onClick={() => closeProject()}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Image Viewer */}
              <div className="w-full md:w-[60%] h-[300px] md:h-full bg-surface-dim relative flex flex-col">
                <div className="flex-1 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      {selectedProject.slides[currentSlide]?.image ? (
                        <img
                          src={selectedProject.slides[currentSlide].image}
                          alt={selectedProject.slides[currentSlide].title}
                          className="w-full h-full object-contain bg-black/90"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-on-surface-variant text-sm">No image</div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                    <div className="font-bold text-white text-sm">{selectedProject.slides[currentSlide]?.title}</div>
                    <div className="text-white/80 text-xs">{selectedProject.slides[currentSlide]?.description}</div>
                  </div>

                  {selectedProject.slides.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                        disabled={currentSlide === 0}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/80 disabled:opacity-30 text-white rounded-full transition-all backdrop-blur-sm"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setCurrentSlide(prev => Math.min(selectedProject.slides.length - 1, prev + 1))}
                        disabled={currentSlide === selectedProject.slides.length - 1}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/80 disabled:opacity-30 text-white rounded-full transition-all backdrop-blur-sm"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {selectedProject.slides.length > 1 && (
                  <div className="flex justify-center gap-2 py-3 bg-surface-dim">
                    {selectedProject.slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-2 rounded-full transition-all duration-200 ${
                          i === currentSlide ? 'w-5 bg-primary' : 'w-2 bg-outline-variant hover:bg-primary/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-[40%] p-6 md:p-8 flex flex-col overflow-y-auto">
                <h3 className="font-display text-[28px] font-bold text-on-surface leading-tight mb-2">
                  {selectedProject.title}
                </h3>
                <div className="inline-flex items-center px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-[11px] font-bold tracking-wider uppercase text-primary w-fit mb-6">
                  {selectedProject.category}
                </div>

                <div className="mb-6">
                  <h4 className="text-[14px] font-bold text-on-surface mb-2">Project Overview</h4>
                  <p className="text-[15px] leading-[1.7] text-on-surface-variant">{selectedProject.desc}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-[14px] font-bold text-on-surface mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack?.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-[12px] text-on-surface font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto pt-6">
                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 border border-outline-variant text-on-surface rounded-xl text-[12px] font-bold uppercase tracking-wider hover:bg-surface-container-highest hover:text-primary transition-all">
                        <GitCommit className="w-4 h-4" /> Code
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-on-primary rounded-xl text-[12px] font-bold uppercase tracking-wider hover:bg-primary-hover transition-all">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                  <button 
                    onClick={() => closeProject()}
                    className="w-full py-3 border border-outline-variant text-on-surface-variant rounded-xl text-[12px] font-bold uppercase tracking-wider hover:bg-surface-container hover:text-on-surface transition-colors mt-2 md:hidden"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
