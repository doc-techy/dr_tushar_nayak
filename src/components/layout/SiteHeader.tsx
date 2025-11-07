"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blogs", href: "/#blogs" },
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
      className={`sticky top-0 z-40 border-y-4 border-brand-teal/70 transition ${
        scrolled
          ? "bg-white/90 shadow-[0_15px_45px_-30px_rgba(16,20,28,0.75)] backdrop-blur-xl"
          : "bg-white/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="#hero"
          className="flex items-center gap-3 text-brand-navy transition hover:text-brand-teal"
        >

          <span className="leading-tight">
            <span className="text-[1.9rem] font-extrabold tracking-[0.08em]">ORTHOCARE</span>
            <span className="block text-sm font-bold uppercase tracking-[0.25em] text-brand-charcoal">
              Dr. Tushar Nayak
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-charcoal/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-teal">
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-full bg-brand-teal px-4 py-2 text-white shadow-md shadow-brand-teal/30 transition hover:bg-brand-navy"
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
          <div className="flex h-10 w-10 flex-col justify-center gap-1.5 rounded-full border border-brand-teal/40 bg-white px-2">
            <span className="h-0.5 w-full bg-brand-teal" />
            <span className="h-0.5 w-full bg-brand-teal" />
            <span className="h-0.5 w-full bg-brand-teal" />
          </div>
        </button>
      </div>
      {mobileOpen ? (
        <div className="border-t border-brand-aqua/60 bg-white/95 px-6 py-4 text-sm text-brand-charcoal/80 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 hover:bg-brand-mint/60"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="rounded-full bg-brand-teal px-4 py-2 text-center text-white"
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

