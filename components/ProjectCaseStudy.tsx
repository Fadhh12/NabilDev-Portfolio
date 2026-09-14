"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, GitCommit, ExternalLink } from "lucide-react";
import { getAdjacentProject, getCaseStudy, getRoleCopy, type ProjectItem } from "@/lib/projects";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <motion.div {...fadeUp} className="flex items-baseline gap-3 mb-5">
      <span className="font-mono-accent text-[13px] font-bold" style={{ color: "var(--ed-accent)" }}>
        {n}
      </span>
      <h2
        className="font-display uppercase text-[clamp(1.5rem,3vw,2.25rem)] tracking-tight"
        style={{ color: "var(--ed-ink)" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default function ProjectCaseStudy({ project }: { project: ProjectItem }) {
  const caseStudy = getCaseStudy(project);
  const role = getRoleCopy(project);
  const next = getAdjacentProject(project.slug);
  const [heroSlide, ...restSlides] = project.slides;

  return (
    <article style={{ background: "var(--ed-bg)" }}>
      {/* ── Back link ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
          style={{ color: "var(--ed-muted)" }}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All Projects
        </Link>
      </div>

      {/* ── Title block ── */}
      <header className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-10 sm:pb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-accent text-[13px] font-bold tracking-widest"
          style={{ color: "var(--ed-accent)" }}
        >
          {project.category} · {project.date}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="font-display uppercase text-[clamp(2.5rem,8vw,6rem)] leading-[0.88] tracking-[-0.02em] mt-2"
          style={{ color: "var(--ed-ink)" }}
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 max-w-[620px] text-[15px] sm:text-[16px] leading-[1.65]"
          style={{ color: "var(--ed-ink)" }}
        >
          {project.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-wrap items-center gap-3 mt-6"
        >
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-white rounded-sm hover:opacity-90 transition-opacity"
              style={{ background: "var(--ed-ink)" }}
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-bold uppercase tracking-widest border rounded-sm hover:opacity-70 transition-opacity"
              style={{ borderColor: "var(--ed-line)", color: "var(--ed-ink)" }}
            >
              <GitCommit className="w-3.5 h-3.5" /> GitHub
            </a>
          )}
        </motion.div>
      </header>

      {/* ── Full-width hero visual ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full relative aspect-[16/9] sm:aspect-[21/9]"
      >
        <Image
          src={heroSlide.image}
          alt={heroSlide.title}
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ── 01 Overview ── */}
        <section className="py-16 sm:py-20 border-t" style={{ borderColor: "var(--ed-line)" }}>
          <SectionLabel n="01" title="Overview" />
          <motion.div {...fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[820px]">
            {[
              { label: "Title", value: project.title },
              { label: "Year", value: project.date },
              { label: "Category", value: project.category },
              { label: "Type", value: role.type },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--ed-muted)" }}>
                  {item.label}
                </p>
                <p className="text-[14px] sm:text-[15px] font-bold mt-1" style={{ color: "var(--ed-ink)" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div {...fadeUp} className="flex flex-wrap gap-2 mt-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-sm border"
                style={{ borderColor: "var(--ed-line)", color: "var(--ed-muted)" }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </section>

        {/* ── 02 Problem ── */}
        <section className="py-16 sm:py-20 border-t" style={{ borderColor: "var(--ed-line)" }}>
          <SectionLabel n="02" title="Problem Statement" />
          <motion.p
            {...fadeUp}
            className="max-w-[680px] text-[16px] sm:text-[19px] leading-[1.6] font-medium"
            style={{ color: "var(--ed-ink)" }}
          >
            {caseStudy.problem}
          </motion.p>
        </section>

        {/* ── 03 Solution ── */}
        <section className="py-16 sm:py-20 border-t" style={{ borderColor: "var(--ed-line)" }}>
          <SectionLabel n="03" title="Solution" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.p
              {...fadeUp}
              className="lg:col-span-6 text-[15px] sm:text-[16px] leading-[1.65]"
              style={{ color: "var(--ed-ink)" }}
            >
              {caseStudy.solution}
            </motion.p>
            {restSlides[0] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 relative w-full aspect-[4/3] rounded-sm overflow-hidden border"
                style={{ borderColor: "var(--ed-line)" }}
              >
                <Image src={restSlides[0].image} alt={restSlides[0].title} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
              </motion.div>
            )}
          </div>
        </section>

        {/* ── 04 Process ── */}
        <section className="py-16 sm:py-20 border-t" style={{ borderColor: "var(--ed-line)" }}>
          <SectionLabel n="04" title="Process" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-[900px]">
            {caseStudy.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex gap-4"
              >
                <span className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none shrink-0" style={{ color: "var(--ed-line)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] sm:text-[15px] leading-[1.6] pt-1" style={{ color: "var(--ed-ink)" }}>
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 05 My Role ── */}
        <section className="py-16 sm:py-20 border-t" style={{ borderColor: "var(--ed-line)" }}>
          <SectionLabel n="05" title="My Role" />
          <motion.div {...fadeUp} className="flex flex-col sm:flex-row sm:items-start gap-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-[12px] font-bold uppercase tracking-widest text-white shrink-0 w-fit"
              style={{ background: "var(--ed-ink)" }}
            >
              {role.type}
            </span>
            <p className="text-[15px] sm:text-[16px] leading-[1.65] max-w-[620px]" style={{ color: "var(--ed-ink)" }}>
              {role.description}
            </p>
          </motion.div>
        </section>

        {/* ── 06 Result ── */}
        <section className="py-16 sm:py-20 border-t" style={{ borderColor: "var(--ed-line)" }}>
          <SectionLabel n="06" title="Result" />
          <motion.p
            {...fadeUp}
            className="max-w-[680px] text-[16px] sm:text-[19px] leading-[1.6] font-medium"
            style={{ color: "var(--ed-ink)" }}
          >
            {caseStudy.result}
          </motion.p>
        </section>

        {/* ── Remaining screens ── */}
        {restSlides.length > 1 && (
          <section className="py-16 sm:py-20 border-t" style={{ borderColor: "var(--ed-line)" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {restSlides.slice(1).map((slide) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border"
                  style={{ borderColor: "var(--ed-line)" }}
                >
                  <Image src={slide.image} alt={slide.title} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 50vw" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2">
                    <p className="text-[12px] text-white font-bold">{slide.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ── Next project ── */}
      {next && (
        <Link
          href={`/projects/${next.slug}`}
          className="group block w-full border-t"
          style={{ borderColor: "var(--ed-line)" }}
        >
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-widest" style={{ color: "var(--ed-muted)" }}>
                Next Project
              </p>
              <h3
                className="font-display uppercase text-[clamp(2rem,6vw,4.5rem)] leading-[0.9] tracking-tight mt-2 group-hover:opacity-70 transition-opacity"
                style={{ color: "var(--ed-ink)" }}
              >
                {next.title}
              </h3>
            </div>
            <ArrowUpRight className="w-8 h-8 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" style={{ color: "var(--ed-ink)" }} />
          </div>
        </Link>
      )}
    </article>
  );
}
