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
      className="relative py-12 sm:py-24 lg:py-14 text-gray-900 overflow-hidden border-t border-gray-200"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 w-[680px] h-[680px] -translate-x-1/2 bg-indigo-100/40 blur-3xl rounded-full" aria-hidden />
        <div className="absolute bottom-[-10%] right-[10%] w-[520px] h-[520px] bg-purple-100/40 blur-3xl rounded-full" aria-hidden />
        <div className="absolute top-[30%] left-[-10%] w-[420px] h-[420px] bg-pink-100/30 blur-[180px] rounded-full" aria-hidden />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-left sm:text-center mb-8 lg:mb-16">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-0 lg:mb-5">
            Frequently Asked
            <span className="ml-2 text-gray-900">
              Questions
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-lg text-gray-600 leading-relaxed">
            Explore enhanced recovery timelines, appointment logistics, and specialty care details. Every answer is aligned with Dr. Nayak&apos;s current protocols so you can plan confidently.
          </p>
        </div>

        <div className="grid gap-4 lg:gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                ref={(el) => {
                  if (el) summaryRef.current[index] = el;
                }}
                className="group rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 open:bg-gray-50 open:border-indigo-400"
              >
                <summary className="flex items-center justify-between gap-2 sm:gap-4 cursor-pointer px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-left text-gray-900 text-sm sm:text-base lg:text-lg font-semibold">
                  <span>{faq.question}</span>
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-300 bg-gray-100 transition-transform group-open:rotate-180 flex-shrink-0">
                    <LuChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                  </span>
                </summary>
                <div className="px-4 sm:px-6 lg:px-8 pb-5 sm:pb-6 pt-3 sm:pt-3 border-t border-gray-200 text-xs sm:text-sm lg:text-base text-gray-700 leading-6 sm:leading-7">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <aside className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 lg:space-y-6 flex flex-col justify-between">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-base sm:text-xl font-bold text-gray-900">Still have a question?</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Send us your reports on WhatsApp or request a callback. The care team responds within 24 hours with a tailored plan.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm text-gray-700">
              <div>
                <p className="uppercase text-[10px] sm:text-xs tracking-[0.35em] text-indigo-600">Phone</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">+91 88106 05887</p>
              </div>
              <div>
                <p className="uppercase text-[10px] sm:text-xs tracking-[0.35em] text-indigo-600">Email</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 break-all">orthopaedicsurgeontushar@gmail.com</p>
              </div>
              <div>
                <p className="uppercase text-[10px] sm:text-xs tracking-[0.35em] text-indigo-600">Clinic Hours</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">Mon – Sat · 10:30 AM – 9:00 PM</p>
              </div>
            </div>
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] hover:scale-105 transition-transform"
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
