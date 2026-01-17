export type ProjectsType = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  github?: string;
};

export const Projects: ProjectsType[] = [
  {
    title: "EduHive",
    description:
      "An AI-powered learning platform that brings videos, notes, and intelligent assistants into one focused study workflow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Groq AI", "Supabase"],
    github: "https://github.com/itzraghavv/eduhive",
    href: "https://eduhive-neon.vercel.app"
  },
  {
    title: "http-server",
    description:
      "A custom HTTP server written in Go that handles HTTP requests, routes endpoints, and serves static content — highlighting Go’s simplicity and performance for backend networking.",
    tech: ["Go"],
    github: "https://github.com/itzraghavv/http-server-go",
  },
  {
    title: "Finlytic",
    description:
      "An expense tracker web app that helps users manage income and expenses, visualize spending, and upload CSV files for quick data import and analysis",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Drizzle ORM",
      "Neon DB",
      "Hono.js",
    ],
    github: "https://github.com/itzraghavv/finance_platform",
  },
  {
    title: "Gem Talk",
    description:
      "An AI document assistant that enables secure PDF upload, parsing, and intelligent AI chat",
    tech: ["Next.js", "TypeScript", "Google Gemini", "Supabase"],
    github: "https://github.com/itzraghavv/gem-talk",
    href: "https://gem-talk-zeta.vercel.app/",
  },
];
