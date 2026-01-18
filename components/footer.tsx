import Link from "next/link";
import { Socials } from "./social-badges";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-10 flex flex-col items-center gap-6">
        <Socials />
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">
            <Link href="/">Raghav Tandulkar</Link>
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
