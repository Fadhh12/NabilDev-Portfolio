import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found — NabilDev" };
  return {
    title: `${project.title} — NabilDev`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ProjectCaseStudy project={project} />
      <Contact />
      <Footer />
    </div>
  );
}
