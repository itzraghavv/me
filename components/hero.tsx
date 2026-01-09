import { PaperclipIcon, SendIcon } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="py-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        Hi! I&apos;m Raghav - A Full Stack Web Dev
      </h1>

      <p className="leading-7 not-first:mt-6">
        I&apos;m a developer who enjoys understanding how things work — from UI
        interactions to backend systems and data flow.
        <br />
        With experience across React, Next.js, TypeScript, Node.js, Prisma,
        PostgreSQL, and Supabase, I build full-stack applications that are
        clean, scalable, and easy to maintain. I value good architecture,
        readable code, and solving problems the right way, not just the fastest
        way.
        <br />
        I&apos;m driven by curiosity and a constant desire to improve as an
        engineer.
      </p>

      {/* add links */}
      <div className="flex items-center space-x-4 text-sm  py-4">
        <button className="flex items-center justify-center gap-x-2 hover:cursor-pointer rounded-md py-2 px-4 border-2">
          <PaperclipIcon className="size-4 " />
          Resume
        </button>
        <Link href="#contact">
          <button className="flex items-center justify-center gap-x-2 hover:cursor-pointer rounded-md py-2 px-4 border-2">
            <SendIcon className="size-4 " />
            Get in touch
          </button>
        </Link>
      </div>
    </div>
  );
};
