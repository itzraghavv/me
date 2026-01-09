import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SOCIALS = [
  {
    href: "https://github.com/itzraghavv",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/raghavv27",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/rghvv_",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "mailto:raghavtandulkar27@gmail.com",
    icon: Mail,
    label: "Gmail",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-10 flex flex-col items-center gap-6">
        {/* Social links */}
        <div className="flex items-center gap-5">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="
                text-muted-foreground
                hover:text-foreground
                transition-colors
              "
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
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
