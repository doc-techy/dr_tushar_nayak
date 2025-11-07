"use client";

import { useEffect, useRef } from "react";
import { testimonials } from "@/data/site-content";
import { LuQuote, LuStar } from "react-icons/lu";

export function TestimonialsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicated = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number | null = null;
    let position = 0;
    const speed = 0.6;

    const step = () => {
      const totalWidth = track.scrollWidth / 3;
      position -= speed;
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative w-screen -mx-[calc(50vw-50%)] bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
          Patient
          <span className="ml-2 text-white">
            Testimonials
          </span>
          <span className="ml-2 text-white">and Reviews</span>
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10" />

        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8"
          style={{ transform: "translateX(0)", willChange: "transform" }}
        >
          {duplicated.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-[18rem] sm:w-[20rem] lg:w-[22rem] rounded-[26px] border border-white/15 bg-white/5 backdrop-blur-md px-6 py-7 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.6)]"
            >
              <div className="flex items-center justify-between text-indigo-400 mb-5">
                <LuQuote className="h-6 w-6" />
                <div className="flex items-center text-amber-400 text-xs sm:text-sm gap-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <LuStar key={starIdx} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                “{testimonial.quote}”
              </p>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
