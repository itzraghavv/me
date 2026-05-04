import Footer from "@/components/footer";
import ExperienceSection from "@/components/experience-section";
import { GithubActivity } from "@/components/github-activity";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import ProjectsSection from "@/components/project-section";
import SkillsSection from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-3xl px-4 container">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <GithubActivity />
      <Footer />
    </div>
  );
}
