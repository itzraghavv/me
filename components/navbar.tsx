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
    label: "contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm flex items-center justify-between px-4">
      Raghav
      <div className="flex items-center justify-center gap-x-4">
        {navItems.map((item, key) => (
          <Link className="" key={key} href={item.href}>
            {item.label}
          </Link>
        ))}
      <ThemeToggle />
      </div>
    </div>
  );
};
