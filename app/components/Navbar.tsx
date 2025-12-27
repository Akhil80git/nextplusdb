// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "0.75rem 1rem",
        borderBottom: "1px solid #ddd"
      }}
    >
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none"
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
