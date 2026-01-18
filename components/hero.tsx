import { PaperclipIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Socials } from "./social-badges";

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
        With experience across{" "}
        <span className="font-medium underline underline-offset-2">
          React, Next.js, TypeScript, JavaScript and Go
        </span>
        , I build full-stack applications that are clean, scalable, and easy to
        maintain. I value good architecture, readable code, and solving problems
        the right way, not just the fastest way.
        <br />
      </p>

      <p className="py-3">
        Open to collaborations and opportunities. Feel free to reach out!
      </p>

      <div className="flex items-center space-x-4 text-sm  py-4">
        <Link href="https://drive.google.com/file/d/1RkM9ujmxl9DZq-TwJg0BOFje1eYpSWvq/view?usp=sharing">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-x-2 hover:cursor-pointer rounded-md py-2 px-4 border-2"
          >
            <PaperclipIcon className="size-4 " />
            Resume
          </Button>
        </Link>
      </div>

      <div>
        <p className="font-medium text-lg tracking-tight scroll-m-20 pb-2">
          Connect With Me:
        </p>
        <Socials />
      </div>
    </div>
  );
};
