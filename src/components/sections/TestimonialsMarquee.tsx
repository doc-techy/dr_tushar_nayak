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
    <section className="relative w-screen -mx-[calc(50vw-50%)] py-8 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-6 lg:mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
          Patient
          <span className="ml-2 text-gray-900">
            Testimonials
          </span>
          <span className="ml-2 text-gray-900">and Reviews</span>
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-3 sm:gap-6 lg:gap-8"
          style={{ transform: "translateX(0)", willChange: "transform" }}
        >
          {duplicated.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-[calc((100vw-1.5rem)/3)] sm:w-[20rem] lg:w-[22rem] rounded-[20px] sm:rounded-[26px] border border-gray-200 bg-white px-3 py-4 sm:px-6 sm:py-7 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.15)]"
            >
              <div className="flex items-center justify-between text-indigo-600 mb-3 sm:mb-5">
                <LuQuote className="h-4 w-4 sm:h-6 sm:w-6" />
                <div className="flex items-center text-amber-500 text-xs gap-0.5 sm:gap-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <LuStar key={starIdx} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-[10px] sm:text-xs lg:text-sm text-gray-700 leading-relaxed mb-3 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="pt-2 sm:pt-4 border-t border-gray-200">
                <p className="text-[10px] sm:text-sm font-semibold text-gray-900">{testimonial.name}</p>
                {/* <p className="text-[9px] sm:text-xs uppercase tracking-widest text-gray-600">{testimonial.role}</p> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
