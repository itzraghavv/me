"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-switch";

const navItems = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "projects",
    href: "#projects",
  },
  {
    label: "skills",
    href: "/",
  },
  {
    label: "contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 border-b border-muted-foreground/50 py-4 backdrop-blur-sm flex items-center justify-between my-2 px-2">
      <h1 className="hover:cursor-pointer">
        <Link href="/">raghavv</Link>
      </h1>
      <div className="flex items-center justify-center gap-x-4">
        {navItems.map((item, key) => (
          <Link className="" key={key} href={item.href}>
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};
