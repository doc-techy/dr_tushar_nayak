"use client";

import { useRef } from "react";
import { faqs } from "@/data/site-content";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { LuChevronDown } from "react-icons/lu";

export function FAQSection() {
  const summaryRef = useRef<HTMLDetailsElement[]>([]);

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 lg:py-14 bg-gray-950 text-white overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-gray-950 to-purple-950/60" aria-hidden />
      <div className="absolute top-10 left-20 w-[440px] h-[440px] bg-indigo-600/18 blur-3xl rounded-full" aria-hidden />
      <div className="absolute bottom-12 right-16 w-[360px] h-[360px] bg-purple-600/25 blur-3xl rounded-full" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center space-y-5 mb-16">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            Frequently Asked
            <span className="ml-2 text-white">
              Questions
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
            Explore enhanced recovery timelines, appointment logistics, and specialty care details. Every answer is aligned with Dr. Nayak’s current protocols so you can plan confidently.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                ref={(el) => {
                  if (el) summaryRef.current[index] = el;
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_35px_90px_-55px_rgba(15,23,42,0.9)] transition-all duration-300 open:bg-white/8 open:border-indigo-400/40"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 sm:px-8 py-5 text-left text-white text-base sm:text-lg font-semibold">
                  <span>{faq.question}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 transition-transform group-open:rotate-180">
                    <LuChevronDown className="h-6 w-6 text-indigo-300" />
                  </span>
                </summary>
                <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-white/10 text-sm sm:text-base text-gray-300 leading-7">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <aside className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Still have a question?</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Send us your reports on WhatsApp or request a callback. The care team responds within 24 hours with a tailored plan.
              </p>
            </div>
            <div className="space-y-4 text-sm text-gray-200">
              <div>
                <p className="uppercase text-xs tracking-[0.35em] text-indigo-200">Phone</p>
                <p className="text-base font-semibold text-white">+91 88106 05887</p>
              </div>
              <div>
                <p className="uppercase text-xs tracking-[0.35em] text-indigo-200">Email</p>
                <p className="text-base font-semibold text-white">orthopaedicsurgeontushar@gmail.com</p>
              </div>
              <div>
                <p className="uppercase text-xs tracking-[0.35em] text-indigo-200">Clinic Hours</p>
                <p className="text-base font-semibold text-white">Mon – Sat · 10:30 AM – 9:00 PM</p>
              </div>
            </div>
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-xs font-bold uppercase tracking-[0.35em] hover:scale-105 transition-transform"
            >
              Book an Appointment
            </a>
          </aside>
        </div>

        <div className="mt-20">
          <TestimonialsMarquee />
        </div>
      </div>
    </section>
  );
}
