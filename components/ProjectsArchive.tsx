"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

/**
 * Editorial project archive for the /projects page — large type, large
 * visuals, generous whitespace, asymmetrical alternating layout. Distinct
 * from the Home stacked/merged cards by design (see Hero/Projects vs here).
 */
export default function ProjectsArchive() {
  return (
    <div className="w-full" style={{ background: "var(--ed-bg)" }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ── Archive header ── */}
        <header className="pt-16 sm:pt-24 pb-14 sm:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-hand text-[22px] sm:text-[26px] mb-2"
            style={{ color: "var(--ed-muted)" }}
          >
            selected work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display uppercase text-[clamp(2.75rem,9vw,7rem)] leading-[0.86] tracking-[-0.02em]"
            style={{ color: "var(--ed-ink)" }}
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-5 max-w-[520px] text-[14px] sm:text-[15px] font-bold tracking-wide"
            style={{ color: "var(--ed-muted)" }}
          >
            {PROJECTS.length} projects — AI products, computer vision, and full-stack platforms.
          </motion.p>
        </header>

        {/* ── Archive list ── */}
        <div>
          {PROJECTS.map((project, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            const reversed = idx % 2 === 1;
            return (
              <article
                key={project.id}
                className="py-14 sm:py-20 border-t"
                style={{ borderColor: "var(--ed-line)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <Link href={`/projects/${project.slug}`} className="block relative w-full aspect-[16/10] overflow-hidden rounded-sm border" style={{ borderColor: "var(--ed-line)" }}>
                      <Image
                        src={project.slides[0].image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </Link>
                  </motion.div>

                  {/* Info */}
                  <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="font-mono-accent text-[13px] font-bold tracking-widest"
                      style={{ color: "var(--ed-accent)" }}
                    >
                      PROJECT {num}
                    </motion.span>

                    <motion.h2
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.06 }}
                      className="font-display uppercase text-[clamp(1.75rem,3.6vw,3rem)] leading-[0.95] tracking-tight mt-2"
                      style={{ color: "var(--ed-ink)" }}
                    >
                      {project.title}
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-[12px] font-bold uppercase tracking-wider"
                      style={{ color: "var(--ed-muted)" }}
                    >
                      <span>{project.date}</span>
                      <span aria-hidden>·</span>
                      <span>{project.category}</span>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.14 }}
                      className="mt-4 text-[14px] sm:text-[15px] leading-[1.65] max-w-[440px]"
                      style={{ color: "var(--ed-ink)" }}
                    >
                      {project.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.18 }}
                      className="flex flex-wrap gap-2 mt-5"
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm border"
                          style={{ borderColor: "var(--ed-line)", color: "var(--ed-muted)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.22 }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 mt-7 text-[12px] font-bold uppercase tracking-widest border-b-2 pb-1 hover:opacity-70 transition-opacity"
                        style={{ borderColor: "var(--ed-ink)", color: "var(--ed-ink)" }}
                      >
                        View Case Study <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
