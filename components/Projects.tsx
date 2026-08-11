"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ExternalLink, GitCommit, X } from "lucide-react";
import Carousel, { CarouselItemData } from "./Carousel";

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
    title: "Astra Projects",
    category: "Enterprise",
    desc: "Comprehensive enterprise dashboard and workflow management.",
    github: null,
    demo: null,
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    slides: [
      { id: 1, title: "Admin Workflow", description: "Workflow Dashboard", image: "/assets/projects/Astra Projects/Admin_Workflow.png" },
      { id: 2, title: "Dark Dashboard", description: "Dark Mode Interface", image: "/assets/projects/Astra Projects/Dashboard_dark.png" },
      { id: 3, title: "Live Monitor", description: "Real-time Monitoring", image: "/assets/projects/Astra Projects/Live_monitor.png" },
      { id: 4, title: "Integration", description: "Integration Page", image: "/assets/projects/Astra Projects/Integration_Page.png" },
      { id: 5, title: "ChatBot", description: "AI Chat Interface", image: "/assets/projects/Astra Projects/ChatBot.png" },
      { id: 6, title: "Architecture", description: "Data Flow Diagram", image: "/assets/projects/Astra Projects/DFD_lvl0.png" }
    ]
  },
  {
    title: "Design Anything",
    category: "Design",
    desc: "A creative platform for various design tools.",
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
      { id: 3, title: "System Overview", description: "Architecture Diagram", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/ray-so-export (1).png" },
      { id: 4, title: "Architecture Detail", description: "System Flow", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/ray-so-export.png" },
      { id: 5, title: "More Settings", description: "Advanced Configuration", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/Screenshot_73.png" }
    ]
  },
  {
    title: "Real-time Trash Detection",
    category: "Computer Vision",
    desc: "Real-time object detection system for automated trash sorting.",
    github: "https://github.com/nabilfadh",
    demo: null,
    techStack: ["Python", "YOLO", "PyTorch", "OpenCV"],
    slides: [
      { id: 1, title: "Detection Feed", description: "Live Camera Feed", image: "/assets/projects/Real-time Trash Detection/Screenshot_75.png" },
      { id: 2, title: "Metrics", description: "Accuracy Metrics", image: "/assets/projects/Real-time Trash Detection/Screenshot_76.png" },
      { id: 3, title: "Results", description: "Detection Results", image: "/assets/projects/Real-time Trash Detection/Screenshot_77.png" },
      { id: 4, title: "Overview", description: "System Overview", image: "/assets/projects/Real-time Trash Detection/Screenshot_78.png" },
      { id: 5, title: "Process", description: "Detection Process", image: "/assets/projects/Real-time Trash Detection/Screenshot_79.png" },
      { id: 6, title: "Dashboard", description: "Analytics", image: "/assets/projects/Real-time Trash Detection/Screenshot_80.png" }
    ]
  },
  {
    title: "Recreo",
    category: "Web App",
    desc: "A lifestyle and recreation application.",
    github: "https://github.com/nabilfadh",
    demo: null,
    techStack: ["React Native", "Expo", "Firebase", "Node.js"],
    slides: [
      { id: 1, title: "Landing Page", description: "Recreo Landing Page", image: "/assets/projects/Recreo/Screenshot_75.png" },
      { id: 2, title: "Features", description: "App Features", image: "/assets/projects/Recreo/Screenshot_76.png" },
      { id: 3, title: "Explore", description: "Explore Section", image: "/assets/projects/Recreo/Screenshot_77.png" },
      { id: 4, title: "Discover", description: "Discover Section", image: "/assets/projects/Recreo/Screenshot_78.png" },
      { id: 5, title: "Details", description: "Event Details", image: "/assets/projects/Recreo/Screenshot_79.png" },
      { id: 6, title: "Profile", description: "User Profile", image: "/assets/projects/Recreo/Screenshot_80.png" }
    ]
  },
  {
    title: "PU Suites",
    category: "Web App",
    desc: "Management system and dashboard for PU Suites.",
    github: "https://github.com/nabilfadh",
    demo: null,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    slides: [
      { id: 1, title: "Suite Overview", description: "Suite Management", image: "/assets/projects/pu_suites/Screenshot (347).png" },
      { id: 2, title: "Booking", description: "Booking Interface", image: "/assets/projects/pu_suites/Screenshot (349).png" },
      { id: 3, title: "Dashboard", description: "Analytics Dashboard", image: "/assets/projects/pu_suites/Screenshot (351).png" },
      { id: 4, title: "User Menu", description: "User Configuration", image: "/assets/projects/pu_suites/Screenshot (352).png" },
      { id: 5, title: "Settings", description: "System Settings", image: "/assets/projects/pu_suites/Screenshot (353).png" },
      { id: 6, title: "Reports", description: "Financial Reports", image: "/assets/projects/pu_suites/Screenshot (354).png" }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <section id="projects" className="py-16 md:py-24 bg-transparent relative z-10 w-full overflow-hidden snap-start min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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
        
        {/* Project Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Folder Tab */}
              <div className="absolute -top-3 left-4 bg-surface-container border border-outline-variant/50 border-b-0 px-4 py-1.5 rounded-t-lg text-[10px] font-bold text-primary tracking-wider uppercase z-0 shadow-sm flex items-center gap-1.5">
                <Folder className="w-3 h-3" />
                {project.category}
              </div>
              
              {/* Folder Body */}
              <div 
                className="bg-surface-container border border-outline-variant/50 rounded-2xl rounded-tl-none p-5 relative z-10 shadow-lg hover:border-primary/40 transition-colors h-full flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-xl font-bold text-on-surface leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
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
                
                <p className="text-[13px] text-on-surface-variant mb-5 flex-grow">
                  {project.desc}
                </p>
                
                {/* Carousel Container */}
                <div className="h-[220px] w-full rounded-xl overflow-hidden bg-surface relative isolate">
                  <Carousel
                    items={project.slides}
                    baseWidth={320}
                    autoplay={true}
                    autoplayDelay={4000 + (idx * 500)} // Stagger autoplay
                    loop={false}
                    pauseOnHover={true}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View Details Button */}
        {PROJECTS.length > 6 && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-sm shadow-lg hover:shadow-primary/25 transition-all"
            >
              {showAllProjects ? "Show Less" : "View All Projects"}
            </motion.button>
          </div>
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
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm z-[2000]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
              animate={{ opacity: 1, y: "-50%", scale: 1, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              className="fixed top-1/2 left-1/2 w-[90%] max-w-[900px] h-[90vh] max-h-[600px] bg-surface rounded-[24px] overflow-hidden z-[2010] shadow-2xl border border-outline-variant flex flex-col md:flex-row"
              style={{ x: "-50%", y: "-50%" }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Left Side: Carousel */}
              <div className="w-full md:w-[55%] h-[300px] md:h-full bg-transparent relative flex items-center justify-center p-4">
                <Carousel
                  items={selectedProject.slides}
                  baseWidth={320}
                  autoplay={true}
                  autoplayDelay={3000}
                  loop={false}
                  pauseOnHover={true}
                />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-[45%] p-6 md:p-8 flex flex-col overflow-y-auto">
                <h3 className="font-display text-[28px] font-bold text-on-surface leading-tight mb-2">
                  {selectedProject.title}
                </h3>
                <div className="inline-flex items-center justify-center px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-[11px] font-bold tracking-wider uppercase text-primary w-fit mb-6">
                  {selectedProject.category}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-[14px] font-bold text-on-surface mb-2">Project Overview</h4>
                  <p className="text-[15px] leading-[1.7] text-on-surface-variant">
                    {selectedProject.desc}
                  </p>
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

                <div className="flex gap-4 mt-auto pt-6">
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
