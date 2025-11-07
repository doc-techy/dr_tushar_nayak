"use client";

import { testimonials } from "@/data/site-content";

export function TestimonialsMarquee() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 mb-8">
        <div className="section-heading">
          <h2 className="text-4xl font-extrabold text-brand-navy sm:text-5xl">
            Patient Testimonials
          </h2>
        </div>
      </div>
      <div className="flex gap-6 overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="flex animate-marquee gap-6">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-primary`}
              className="min-w-[260px] max-w-xs rounded-3xl border border-brand-mint/50 bg-white p-5 text-sm text-brand-charcoal/80 shadow-[0_18px_45px_-25px_rgba(12,44,62,0.35)]"
            >
              <p className="italic">“{item.quote}”</p>
              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
                {item.name}
              </div>
              <p className="text-xs text-brand-charcoal/60">{item.role}</p>
            </article>
          ))}
        </div>
        <div className="flex animate-marquee gap-6" aria-hidden>
          {testimonials.map((item) => (
            <article
              key={`${item.name}-clone`}
              className="min-w-[260px] max-w-xs rounded-3xl border border-brand-mint/50 bg-white p-5 text-sm text-brand-charcoal/80 shadow-[0_18px_45px_-25px_rgba(12,44,62,0.35)]"
            >
              <p className="italic">“{item.quote}”</p>
              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
                {item.name}
              </div>
              <p className="text-xs text-brand-charcoal/60">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}

