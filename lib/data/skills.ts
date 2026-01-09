import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGo,
  SiBun,
  SiPostman,
  SiPrisma,
  SiAmazonwebservices,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const SKILLS: Skill[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Go", icon: SiGo },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Bun", icon: SiBun },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Postman", icon: SiPostman },
  { name: "Prisma", icon: SiPrisma },
  { name: "AWS", icon: SiAmazonwebservices },
];
