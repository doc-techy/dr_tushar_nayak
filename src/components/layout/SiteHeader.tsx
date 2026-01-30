"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Publications", href: "/publications" },
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
      className={`sticky top-0 z-40 transition before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-brand-teal before:to-brand-navy before:opacity-80 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-gradient-to-r after:from-brand-teal after:to-brand-navy after:opacity-80 ${
        scrolled
          ? "bg-gray-950/95 shadow-2xl backdrop-blur-xl"
          : "bg-gray-950/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 transition hover:opacity-80"
        >
          <span className="leading-tight">
            <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-white">Dr. Tushar Nayak</span>
            <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-normal text-gray-400">
              Orthopaedic Surgeon
            </span>
          </span>
        </Link>
        
        <nav className="hidden items-center gap-4 lg:gap-6 xl:gap-8 text-xs lg:text-sm font-semibold text-gray-300 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="transition hover:text-brand-teal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-gradient-to-r from-brand-teal to-brand-navy text-white text-xs lg:text-sm font-bold shadow-lg shadow-brand-teal/30 transition hover:scale-105 hover:shadow-brand-teal/50"
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
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 flex-col justify-center gap-1 sm:gap-1.5 rounded-full border border-white/20 bg-white/10 px-1.5 sm:px-2">
            <span className="h-0.5 w-full bg-brand-teal" />
            <span className="h-0.5 w-full bg-brand-teal/70" />
            <span className="h-0.5 w-full bg-brand-navy" />
          </div>
        </button>
      </div>
      
      {mobileOpen ? (
        <div className="absolute top-full left-0 right-0 border-t border-white/10 bg-gray-950 px-4 sm:px-6 py-3 sm:py-4 md:hidden shadow-2xl">
          <nav className="flex flex-col gap-2 sm:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-300 font-semibold transition hover:bg-white/10 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="rounded-lg sm:rounded-xl bg-gradient-to-r from-brand-teal to-brand-navy px-4 sm:px-6 py-2.5 sm:py-3 text-center text-sm sm:text-base text-white font-bold transition hover:scale-105"
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
