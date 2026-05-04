export type ExperienceType = {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
};

export const Experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "Feb 2026 - Present",
    description:
      "Built and shipped full-stack web applications for clients, focusing on clean UI, reliable backend APIs, and maintainable architecture.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  }
];
