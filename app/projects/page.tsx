import type { Metadata } from "next";
import ProjectsArchive from "@/components/ProjectsArchive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — NabilDev",
  description: "Selected projects by Nabil Fadhlur Rahman — AI products, computer vision, and full-stack platforms.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-14 relative overflow-x-hidden">
      <ProjectsArchive />
      <Contact />
      <Footer />
    </div>
  );
}
