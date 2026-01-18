import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const SOCIALS = [
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

export const Socials = () => {
  return (
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
  );
};
