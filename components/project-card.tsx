import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectsType } from "@/lib/data/projects";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  project: ProjectsType;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      className="
        border
        transition
        hover:border-muted-foreground/40
      "
    >
      <CardHeader className="">
        <CardTitle className="text-base font-medium">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="text-xs rounded-md border px-2 py-1 text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </CardContent>

      {(project.github || project.href) && (
        <CardFooter className="flex gap-4 text-sm">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-1 hover:opacity-70"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </Link>
          )}

          {project.href && (
            <Link
              href={project.href}
              target="_blank"
              className="flex items-center gap-1 hover:opacity-70"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
