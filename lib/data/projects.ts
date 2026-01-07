export type ProjectsType = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  github?: string;
};

export const Projects: ProjectsType[] = [
  {
    title: "http-server",
    description: "Build a HTTP server in Go",
    tech: ["Go"],
    github: "https://github.com/itzraghavv",
  },
  {
    title: "project 2",
    description: "proj desc",
    tech: ["react", "next"],
    github: "https://github.com/itzraghavv",
  },
];
