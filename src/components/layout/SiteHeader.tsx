"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Videos", href: "/educational-videos" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-indigo-600 before:via-purple-600 before:to-pink-600 before:opacity-80 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:via-purple-600 after:to-pink-600 after:opacity-80 ${
        scrolled
          ? "bg-gray-950/95 shadow-2xl backdrop-blur-xl"
          : "bg-gray-950/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-80"
        >
          <span className="leading-tight">
            <span className="text-2xl font-black tracking-tight text-white">ORTHOCARE</span>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-400">
              Dr. Tushar Nayak
            </span>
          </span>
        </Link>
        
        <nav className="hidden items-center gap-8 text-sm font-semibold text-gray-300 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="transition hover:text-indigo-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/30 transition hover:scale-105 hover:shadow-indigo-500/50"
          >
            Book now
          </Link>
        </nav>
        
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex h-10 w-10 flex-col justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2">
            <span className="h-0.5 w-full bg-indigo-400" />
            <span className="h-0.5 w-full bg-purple-400" />
            <span className="h-0.5 w-full bg-pink-400" />
          </div>
        </button>
      </div>
      
      {mobileOpen ? (
        <div className="absolute top-full left-0 right-0 border-t border-white/10 bg-gray-950 px-6 py-4 md:hidden shadow-2xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-gray-300 font-semibold transition hover:bg-white/10 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-center text-white font-bold transition hover:scale-105"
              onClick={() => setMobileOpen(false)}
            >
              Book now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
