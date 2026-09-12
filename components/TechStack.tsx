"use client";

import { motion } from "framer-motion";

const TOOLS = [
  "Python", "JavaScript", "TypeScript", "Java", "C++", "PHP", "Dart",
  "React", "Next.js", "Node.js", "Tailwind CSS", "Laravel", "Flutter",
  "TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP",
  "MySQL", "PostgreSQL", "Supabase", "Firebase", "Google Cloud", "Vercel",
  "Git", "GitHub", "Figma", "Jupyter Notebook", "Blender 3D",
];

export default function TechStack() {
  // Duplicate the list so the marquee loop is seamless.
  const loopItems = [...TOOLS, ...TOOLS];

  return (
    <section id="stack" className="py-14 md:py-16 border-y border-outline-variant w-full bg-surface relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-accent text-[11px] tracking-[0.15em] uppercase text-on-surface-variant"
        >
          built with
        </motion.span>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, ease: "linear", repeat: Infinity }}
        >
          {loopItems.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="shrink-0 px-5 py-2.5 rounded-full border border-outline-variant bg-surface-container-low text-[13px] font-semibold text-on-surface-variant whitespace-nowrap"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
