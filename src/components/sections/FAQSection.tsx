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
      className="relative pb-5 sm:pb-16 md:pb-20 lg:pb-24 text-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="text-left sm:text-center mb-6 sm:mb-10 md:mb-12 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-2 sm:mb-3 lg:mb-5">
            Frequently Asked{" "}
            <span className="text-white">Questions</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
            Explore enhanced recovery timelines, appointment logistics, and specialty care details. Every answer is aligned with Dr. Nayak&apos;s current protocols so you can plan confidently.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5 lg:gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                ref={(el) => {
                  if (el) summaryRef.current[index] = el;
                }}
                className="group rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm sm:shadow-md transition-all duration-300 open:bg-white/10 open:border-brand-teal/40"
              >
                <summary className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 cursor-pointer px-3 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 text-left text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                  <span>{faq.question}</span>
                  <span className="flex h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-transform group-open:rotate-180 flex-shrink-0">
                    <LuChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-brand-teal" />
                  </span>
                </summary>
                <div className="px-3 sm:px-5 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-5 lg:pb-6 pt-2 sm:pt-3 border-t border-white/10 text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-400 leading-5 sm:leading-6 md:leading-7">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <aside className="rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-3 sm:p-5 md:p-6 lg:p-8 space-y-3 sm:space-y-4 lg:space-y-6 flex flex-col justify-between">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">Still have a question?</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-relaxed">
                Send us your reports on WhatsApp or request a callback. The care team responds within 24 hours with a tailored plan.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-[10px] sm:text-xs md:text-sm text-gray-400">
              <div>
                <p className="uppercase text-[9px] sm:text-[10px] md:text-xs tracking-widest text-brand-teal">Phone</p>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-white">+91 88106 05887</p>
              </div>
              <div>
                <p className="uppercase text-[9px] sm:text-[10px] md:text-xs tracking-widest text-brand-teal">Email</p>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-white break-all">orthopaedicsurgeontushar@gmail.com</p>
              </div>
              <div>
                <p className="uppercase text-[9px] sm:text-[10px] md:text-xs tracking-widest text-brand-teal">Clinic Hours</p>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-white">Sparsh Hospital, Hennur: 10 AM – 5 PM</p>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-white">Nishtha Healthcare: 6 PM – 9 PM</p>
              </div>
            </div>
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-brand-teal to-brand-navy text-white text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-brand-teal/30"
            >
              Book an Appointment
            </a>
          </aside>
        </div>

        <div className="mt-10 lg:mt-20">
          <TestimonialsMarquee />
        </div>
      </div>
    </section>
  );
}
