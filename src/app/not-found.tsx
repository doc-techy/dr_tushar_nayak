import type { Metadata } from "next";
import Link from "next/link";
import { NOINDEX_ROBOTS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not available on Dr. Tushar Nayak's website.",
  robots: NOINDEX_ROBOTS,
};

export default function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center text-white">
      <p className="text-sm font-bold uppercase tracking-wide text-brand-teal">404</p>
      <h1 className="mt-3 text-4xl font-black sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
        The address may have changed. Go back to the homepage or book an orthopaedic appointment in Bangalore.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-brand-teal to-brand-navy px-6 py-3 text-sm font-bold text-white"
        >
          Home
        </Link>
        <Link
          href="/booking"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-brand-teal"
        >
          Book an appointment
        </Link>
      </div>
    </section>
  );
}
