"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  ["About", "/#about"],
  ["Projects", "/#projects"],
  ["Skills", "/#skills"],
  ["Experience", "/#experience"],
  ["Contact", "/#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-slate-200/90 bg-white/85 shadow-sm backdrop-blur-md dark:border-white/[0.08] dark:bg-canvas/85 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand / Name */}
        <Link
          href="/#top"
          className="group flex items-center gap-2.5 font-display text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-teal/30 bg-teal/10 font-mono text-xs font-bold text-teal transition-transform duration-200 group-hover:scale-105">
            MA
          </span>
          <span className="transition-colors group-hover:text-teal">
            Mohamed Abd Elmoniem
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600 transition-colors hover:bg-slate-100 hover:text-teal dark:text-slate-400 dark:hover:bg-white/[0.04] dark:hover:text-teal"
            >
              {label}
            </Link>
          ))}
          <div className="ml-3 flex items-center gap-3 border-l border-slate-200 pl-3 dark:border-white/[0.08]">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="btn btn-primary !h-9 !px-3.5 !py-1.5 !text-xs font-semibold"
            >
              Hire Me
            </Link>
          </div>
        </nav>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="btn !h-9 !w-9 !p-0"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`grid overflow-hidden border-b border-slate-200/90 bg-white/95 px-5 backdrop-blur-lg transition-all duration-300 md:hidden dark:border-white/[0.08] dark:bg-canvas/95 ${
          open ? "grid-rows-[1fr] py-4 shadow-xl" : "grid-rows-[0fr] py-0 border-b-0"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1.5">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/[0.04]"
                >
                  <span>{label}</span>
                  <span className="text-xs text-teal">→</span>
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#contact"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full !py-2.5 !text-sm"
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
