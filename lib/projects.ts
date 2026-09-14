/**
 * Single source of truth for project data — shared by the Home "Featured
 * Projects" stack, the editorial /projects archive, and each project's
 * /projects/[slug] case-study page.
 *
 * IMPORTANT: this is real portfolio content. Don't invent projects, metrics,
 * team members, or outcomes here — only reshape/derive from what exists.
 */

export interface ProjectSlide {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ProjectTheme {
  bg: string;
  fg: string;
  tabBg: string;
  tabFg: string;
  tape: string;
}

export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  desc: string;
  github: string | null;
  demo: string | null;
  techStack: string[];
  theme: ProjectTheme;
  slides: ProjectSlide[];
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Raw content — unchanged from the original single-file list, only the
// `slug` field is new (derived, not invented).
const RAW_PROJECTS: Omit<ProjectItem, "slug">[] = [
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
      { id: 1, title: "Student Dashboard", description: "Career path picker with quick actions and streak stats", image: "/assets/projects/AI Roadmap Adaptive E-Learning/Screenshot_75.png" },
      { id: 2, title: "Interactive Lesson", description: "Video lesson player with course content and live Q&A", image: "/assets/projects/AI Roadmap Adaptive E-Learning/Screenshot_76.png" },
      { id: 3, title: "Career Path Selection", description: "Choose a target role to generate a personalized roadmap", image: "/assets/projects/AI Roadmap Adaptive E-Learning/Screenshot_77.png" },
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
    category: "Automotive Marketplace",
    date: "2025",
    desc: "Custom motorcycle marketplace and workshop platform based in Bekasi, featuring a filterable build catalog, pre-order request flow, and customer testimonials.",
    github: "https://github.com/Fadhh12",
    demo: "https://marwa-id.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    theme: { bg: "#0369a1", fg: "#ffffff", tabBg: "#075985", tabFg: "#ffffff", tape: "#bae6fd" },
    slides: [
      { id: 1, title: "Landing Page", description: "Hero banner showcasing the custom motorcycle collection", image: "/assets/projects/Marwa.id/homepage.png" },
      { id: 2, title: "Motor Catalog", description: "Filterable catalog of custom motorcycles", image: "/assets/projects/Marwa.id/catalog.png" },
      { id: 3, title: "About / Legacy", description: "Workshop story, stats and trust signals", image: "/assets/projects/Marwa.id/about us.png" },
      { id: 4, title: "Why Choose Us", description: "Legal documentation and unit guarantees", image: "/assets/projects/Marwa.id/why choose us.png" },
      { id: 5, title: "Pre-Order Custom Build", description: "Custom build request form with budget and reference upload", image: "/assets/projects/Marwa.id/pre-ouder.png" },
      { id: 6, title: "Customer Testimonials", description: "Verified buyer reviews and shop location map", image: "/assets/projects/Marwa.id/testimoni.png" },
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
      { id: 3, title: "Mobile Chat View", description: "Responsive chat answering student transfer requirements", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/Screenshot_73.png" },
      { id: 4, title: "Intent Router Logic", description: "Rule-based fallback before hitting the vector DB / LLM", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/ray-so-export.png" },
      { id: 5, title: "Chat UI Components", description: "Typing indicator and AI-suggested follow-up questions", image: "/assets/projects/Jarvis AI Context-Aware University Assistant utilizing RAG Architecture with Multi-Model LLM Support (Llama 3.2 & Gemini)/ray-so-export (1).png" },
    ],
  },
  {
    id: 6,
    title: "Design Anything",
    category: "Design Tool",
    date: "Sep 2024",
    desc: "Creative browser-based editor for quick image editing and AI-assisted generation, with a distraction-free workflow for turning ideas into visuals.",
    github: "https://github.com/Fadhh12",
    demo: null,
    techStack: ["React", "Redux", "Canvas API", "Tailwind CSS", "TypeScript"],
    theme: { bg: "#ec4899", fg: "#ffffff", tabBg: "#db2777", tabFg: "#ffffff", tape: "#fbcfe8" },
    slides: [
      { id: 1, title: "Landing Page", description: "Homepage hero with quick access to the editor", image: "/assets/projects/Design Anything/Screenshot_75.png" },
      { id: 2, title: "Image Upload", description: "Drag-and-drop panel for importing an image to edit", image: "/assets/projects/Design Anything/Screenshot_76.png" },
      { id: 3, title: "AI Text-to-Image", description: "Generate visuals from a text prompt inside the editor", image: "/assets/projects/Design Anything/Screenshot_77.png" },
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
      { id: 1, title: "Landing Page", description: "Awareness-focused homepage for the recycling platform", image: "/assets/projects/Real-time Trash Detection/Screenshot_75.png" },
      { id: 2, title: "Live Camera Scan", description: "Real-time webcam detection identifying a waste item", image: "/assets/projects/Real-time Trash Detection/Screenshot_79.png" },
      { id: 3, title: "Sample Detections", description: "YOLO bounding boxes across glass, plastic, metal and paper", image: "/assets/projects/Real-time Trash Detection/Screenshot_76.png" },
      { id: 4, title: "Confusion Matrix", description: "Per-class classification accuracy breakdown", image: "/assets/projects/Real-time Trash Detection/Screenshot_80.png" },
      { id: 5, title: "Training Metrics", description: "Loss curves and precision/recall across training epochs", image: "/assets/projects/Real-time Trash Detection/Screenshot_78.png" },
      { id: 6, title: "Educational Content", description: "In-app guide on plastic waste decomposition and reuse", image: "/assets/projects/Real-time Trash Detection/Screenshot_77.png" },
    ],
  },
  {
    id: 8,
    title: "PU Suites",
    category: "Hospitality & Booking",
    date: "May 2024",
    desc: "Hotel reservation and management system for PU Suites — a public booking site with room catalog and live reservation flow, backed by an admin dashboard for bookings, payments, and revenue reporting.",
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
    desc: "Creative upcycling community platform where users share DIY craft tutorials, rate ideas, and turn everyday waste into new creations.",
    github: "https://github.com/Fadhh12",
    demo: null,
    techStack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    theme: { bg: "#f97316", fg: "#ffffff", tabBg: "#ea580c", tabFg: "#ffffff", tape: "#fed7aa" },
    slides: [
      { id: 1, title: "Landing Page", description: "Hero page inviting users to upload upcycled craft ideas", image: "/assets/projects/Recreo/Screenshot_75.png" },
      { id: 2, title: "Our Goals", description: "Mission statement and impact highlights", image: "/assets/projects/Recreo/Screenshot_76.png" },
      { id: 3, title: "Community Feedback", description: "Ratings and reviews from platform users", image: "/assets/projects/Recreo/Screenshot_77.png" },
      { id: 4, title: "About Us", description: "Team story and creative-reuse vision", image: "/assets/projects/Recreo/Screenshot_78.png" },
      { id: 5, title: "Craft Tutorial Gallery", description: "Step-by-step upcycling tutorials and ideas", image: "/assets/projects/Recreo/Screenshot_80.png" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = RAW_PROJECTS.map((p) => ({ ...p, slug: slugify(p.title) }));

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): ProjectItem | undefined {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return PROJECTS[(idx + 1) % PROJECTS.length];
}

/**
 * Case-study copy for each project's detail page — Problem / Solution /
 * Process / Result. Written by hand per project, grounded only in what the
 * project actually does (desc, tech stack, screenshots above) — no invented
 * clients, metrics, or team members. Every project here is solo work (the
 * codebase has no team/collaborator data for any of them), so role is
 * derived generically from the tech stack rather than asserted per project.
 */
export interface CaseStudy {
  problem: string;
  solution: string;
  process: string[];
  result: string;
}

const CASE_STUDIES: Record<number, CaseStudy> = {
  1: {
    problem:
      "Most online courses follow one fixed path for every learner, regardless of background — it's hard to know what to learn next to reach a specific role.",
    solution:
      "An adaptive e-learning platform (Next.js, PostgreSQL) where the OpenAI API turns a chosen career path into a personalized roadmap, backed by interactive skill assessments.",
    process: [
      "Mapped the career-path → curriculum data model, then built the dashboard and lesson player in Next.js/Tailwind.",
      "Wired the OpenAI API to turn a chosen role into a step-by-step roadmap and interactive assessments.",
      "Iterated on the student dashboard, lesson player, and path-selection flows shown above.",
    ],
    result:
      "A working adaptive learning flow — from picking a career path to a generated roadmap and an interactive lesson player — running on Next.js and PostgreSQL.",
  },
  2: {
    problem:
      "Manual visual inspection on a production line is slow and inconsistent, and operators need an answer in real time, not after a batch review.",
    solution:
      "An enterprise camera-verification system that runs computer-vision defect detection live, surfaces automated PASS/FAIL verdicts on a dashboard, and adds an AI assistant chatbot for operators.",
    process: [
      "Built the live camera inspection pipeline with Node.js/Express and MongoDB.",
      "Designed a dark-mode operations dashboard for fleet metrics and inspection KPIs.",
      "Curated the dataset training gallery for part classification, then layered in the VeriAssist chatbot for operators.",
      "Added webhook and hardware integration settings for camera feed configuration.",
    ],
    result:
      "A functioning real-time inspection dashboard: live camera feed, automated PASS/FAIL verdicts, dataset tooling, and an in-app assistant — deployed and demoable.",
  },
  3: {
    problem:
      "Recruiters reviewing large volumes of CVs against a job description struggle to compare candidates consistently and quickly.",
    solution:
      "An AI recruitment platform that scores and labels candidates (Strong Match / Consider / Not a Fit) against configurable job criteria, using multi-model LLM evaluation.",
    process: [
      "Built job posting and job-criteria creation flows so scoring weights are configurable per role.",
      "Integrated multi-model LLM evaluation to score and label uploaded CVs.",
      "Designed the recruiter dashboard and candidate insight report to surface the AI's reasoning, not just a score.",
    ],
    result:
      "A deployed recruiter dashboard where job postings, AI-scored candidates, and generated insight reports all work end to end.",
  },
  4: {
    problem:
      "A custom-motorcycle workshop had no online presence — customers couldn't browse past builds or request a custom order without visiting in person.",
    solution:
      "A marketplace site with a filterable build catalog, a pre-order request flow for custom builds, and a testimonials section.",
    process: [
      "Built the landing page and filterable motor catalog.",
      "Added the pre-order form for custom build requests, including budget and reference upload.",
      "Built out the About/Legacy and Why-Choose-Us trust sections, plus customer testimonials.",
    ],
    result:
      "A live, deployed marketplace site covering catalog browsing through to a working pre-order request form.",
  },
  5: {
    problem:
      "New and transferring students have campus-specific questions that a generic chatbot can't answer accurately.",
    solution:
      "A RAG-based assistant with multi-model LLM support (Llama 3.2 and Gemini) and a rule-based intent router that falls back before hitting the vector DB or LLM, keeping answers grounded in campus data.",
    process: [
      "Built the FastAPI backend and VectorDB retrieval layer for RAG.",
      "Implemented the intent router so simple queries skip the vector DB/LLM when a rule-based answer is confident enough.",
      "Built the chat UI for desktop and mobile with typing indicators and suggested follow-up questions, and wired up switching between Llama 3.2 and Gemini.",
    ],
    result:
      "A deployed RAG assistant answering campus queries across desktop and mobile, with two swappable LLM backends.",
  },
  6: {
    problem:
      "Quick image edits and AI-generated visuals usually require jumping between separate heavyweight tools, breaking flow for fast iteration.",
    solution:
      "A browser-based editor combining manual image editing with AI text-to-image generation in one distraction-free workspace.",
    process: [
      "Built the Canvas API-based image editor and upload flow.",
      "Integrated AI text-to-image generation directly into the editor.",
      "Used Redux to manage editor and generation state across the workflow.",
    ],
    result:
      "A working browser editor covering upload, manual editing, and AI-generated visuals in a single flow.",
  },
  7: {
    problem:
      "Manual waste sorting is slow and error-prone; automated sorting needs a model that can classify waste types from a live camera feed in real time.",
    solution:
      "A YOLO/PyTorch object-detection pipeline, served via Flask/OpenCV, that classifies waste into categories — glass, plastic, metal, paper — from a live webcam feed.",
    process: [
      "Trained and evaluated the YOLO model, tracked via loss curves, precision/recall, and a per-class confusion matrix.",
      "Built the real-time webcam detection pipeline with OpenCV/Flask.",
      "Added educational in-app content on plastic waste decomposition and reuse.",
    ],
    result:
      "A working real-time detector with measured per-class accuracy (confusion matrix, precision/recall curves), a live camera demo, and educational content.",
  },
  8: {
    problem:
      "A small hotel needs both a public booking experience for guests and an internal way to track reservations, payments, and revenue.",
    solution:
      "A reservation system pairing a public room-catalog and booking site with an admin dashboard for bookings, payments, and revenue reporting.",
    process: [
      "Built the public site: home, about/rooms overview, full room catalog, and reservation form.",
      "Built the admin dashboard for booking metrics, room-type split, and profit charts.",
      "Connected the contact/booking flow so guest reservations reach the admin side.",
    ],
    result:
      "A deployed hotel booking system with a working public reservation flow and a functioning admin dashboard.",
  },
  9: {
    problem:
      "People upcycling household waste into crafts had no shared place to post tutorials, get feedback, or find ideas from others doing the same thing.",
    solution:
      "A community platform for sharing DIY upcycling tutorials, rating ideas, and browsing a craft gallery.",
    process: [
      "Built the landing page and mission/impact section (Our Goals).",
      "Built the craft tutorial gallery and the community feedback/ratings system on Firebase.",
      "Added the About Us section covering the platform's story and creative-reuse vision.",
    ],
    result:
      "A working community platform: landing page, tutorial gallery, and a ratings/feedback system backed by Firebase.",
  },
};

export function getCaseStudy(project: ProjectItem): CaseStudy {
  return (
    CASE_STUDIES[project.id] ?? {
      problem: project.desc,
      solution: project.desc,
      process: ["Design", "Development", "Testing & iteration"],
      result: project.desc,
    }
  );
}

export interface RoleInfo {
  type: "Individual Project" | "Team Project";
  teamSize?: number;
  description: string;
}

/** Role / team info per project, as given directly by Nabil — team size and
 * personal responsibilities aren't inferrable from the codebase, so this is
 * sourced from him rather than derived or invented. */
const ROLE_DATA: Record<number, RoleInfo> = {
  1: {
    type: "Team Project",
    teamSize: 4,
    description: "Team of 4. I worked as Backend Engineer, and handled project reporting.",
  },
  2: {
    type: "Team Project",
    teamSize: 3,
    description:
      "Team of 3. I worked across Frontend development, logistics, reporting, and dataset sourcing.",
  },
  3: {
    type: "Individual Project",
    description: "Designed and built independently, end to end — UI/UX, the AI evaluation logic, and deployment.",
  },
  4: {
    type: "Individual Project",
    description: "Designed and built independently, end to end — UI/UX, the frontend implementation, and deployment.",
  },
  5: {
    type: "Team Project",
    teamSize: 3,
    description: "Team of 3. I worked as the AI Engineer, building the RAG pipeline and LLM integration.",
  },
  6: {
    type: "Team Project",
    teamSize: 3,
    description: "Team of 3. I worked as AI Engineer, and handled project reporting.",
  },
  7: {
    type: "Team Project",
    teamSize: 3,
    description: "Team of 3. I worked as AI Engineer, and handled project reporting.",
  },
  8: {
    type: "Team Project",
    teamSize: 2,
    description: "Team of 2. I worked as Project Manager and Full-Stack Developer.",
  },
  9: {
    type: "Team Project",
    teamSize: 15,
    description:
      "A social project with a 15-person team across different roles. I worked as a Developer and as PIC (person in charge) for public relations / community outreach.",
  },
};

export function getRoleCopy(project: ProjectItem): RoleInfo {
  return (
    ROLE_DATA[project.id] ?? {
      type: "Individual Project",
      description: "Designed and built independently, end to end.",
    }
  );
}
