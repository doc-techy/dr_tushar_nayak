"use client";

import { useState } from "react";
import { faqs } from "@/data/site-content";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-container space-y-12">
      

      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(12,44,62,0.15)]">
        <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-brand-aqua/20 blur-3xl" aria-hidden />
        <div className="absolute -right-14 bottom-0 h-48 w-48 rounded-full bg-brand-mint/20 blur-3xl" aria-hidden />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-mint/15 via-brand-aqua/10 to-transparent opacity-60" aria-hidden />
        <span className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/30" aria-hidden />

        <div className="relative z-10 space-y-5 px-6 py-8 sm:px-10 lg:px-14 lg:py-12">
        <div className="section-heading">
        <h2 className="text-4xl font-extrabold text-brand-navy sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-3xl text-brand-charcoal/70">
          Explore quick answers for appointment planning, recovery journeys, and insurance support.
        </p>
      </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/50 backdrop-blur-md shadow-[0_8px_24px_0_rgba(12,44,62,0.12)] transition-all duration-300 hover:border-white/30 hover:bg-white/60 hover:shadow-[0_12px_32px_0_rgba(10,47,77,0.2)]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-mint/10 via-brand-aqua/5 to-transparent opacity-40 group-hover:opacity-60 transition duration-300" aria-hidden />
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="relative z-10 flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium leading-snug text-brand-navy">{faq.question}</span>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/30 text-brand-teal transition duration-300 group-hover:bg-white/80 group-hover:scale-110"
                      aria-hidden
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="relative z-10 border-t border-white/20 bg-white/40 backdrop-blur-sm px-6 py-5 text-brand-charcoal/75">
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <TestimonialsMarquee />
    </section>
  );
}

