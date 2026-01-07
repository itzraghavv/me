import { Projects } from "@/lib/data/projects";
import { ProjectCard } from "./project-card";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-5xl ">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b pb-2">
          Projects
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {Projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
