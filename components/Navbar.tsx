"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="text-sm font-semibold tracking-wide">
        Nicole Sedillo
      </Link>

      {/* Desktop links — hidden on mobile */}
      <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
        {links.map((l) => (
          <Link key={l.label} href={l.href} className="transition [&:hover]:text-[#5EEAD4]">
            {l.label}
          </Link>
        ))}
      </div>

      {/* Hamburger button — visible on mobile only */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="flex flex-col gap-1.5 md:hidden"
      >
        <span className={`block h-0.5 w-6 bg-[#5EEAD4] transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[#5EEAD4] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[#5EEAD4] transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {/* Mobile dropdown */}
        {open && (
          <div className="absolute left-0 right-0 top-[73px] z-50 border-b border-zinc-800 bg-[#0B0B0B] md:hidden">
            <div className="flex flex-col text-sm text-zinc-400">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-6 py-3 transition hover:bg-[#5EEAD4] hover:text-black"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
    </nav>
  );
}