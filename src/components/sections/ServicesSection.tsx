"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { servicesOffered } from "@/data/site-content";

export function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? servicesOffered : servicesOffered.slice(0, 6);

  return (
    <section
      id="services"
      className="relative py-12 sm:py-24 lg:py-14 px-4 text-gray-900 overflow-hidden border-t border-gray-200"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 w-[680px] h-[680px] -translate-x-1/2 bg-indigo-100/40 blur-3xl rounded-full" aria-hidden />
        <div className="absolute bottom-[-10%] right-[10%] w-[520px] h-[520px] bg-purple-100/40 blur-3xl rounded-full" aria-hidden />
        <div className="absolute top-[30%] left-[-10%] w-[420px] h-[420px] bg-pink-100/30 blur-[180px] rounded-full" aria-hidden />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-20 text-left sm:text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-0 lg:mb-6 text-gray-900">
            Specialized
            <span className="ml-2 text-gray-900">
              Ortho Treatments
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-xl text-gray-600 leading-relaxed font-light">
            From prevention and diagnostics to surgical excellence and rehab, choose a program designed
            around your activity goals and recovery speed.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-3">
          {visibleServices.map((service, index) => {
            const colorIndex = index % 3;
            return (
              <Link
                key={service.title}
                href={`/treatments/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 p-3 sm:p-8 shadow-md hover:bg-gray-50 hover:border-indigo-400 transition-all duration-500 hover:-translate-y-4 hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    colorIndex === 0
                      ? "bg-gradient-to-br from-indigo-50 to-transparent"
                      : colorIndex === 1
                      ? "bg-gradient-to-br from-purple-50 to-transparent"
                      : "bg-gradient-to-br from-pink-50 to-transparent"
                  }`}
                />

                <div className="relative space-y-2 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3
                      className={`text-sm sm:text-2xl font-black leading-tight transition-colors duration-300 ${
                        colorIndex === 0
                          ? "text-gray-900 group-hover:text-indigo-600"
                          : colorIndex === 1
                          ? "text-gray-900 group-hover:text-purple-600"
                          : "text-gray-900 group-hover:text-pink-600"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 text-[10px] sm:text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-1 sm:space-y-2">
                    {service.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-1.5 sm:gap-3 text-[10px] sm:text-sm text-gray-700">
                        <span
                          className={`hidden sm:block mt-1 h-1.5 w-1.5 sm:mt-1.5 sm:h-2 sm:w-2 rounded-full flex-shrink-0 ${
                            colorIndex === 0
                              ? "bg-indigo-500"
                              : colorIndex === 1
                              ? "bg-purple-500"
                              : "bg-pink-500"
                          }`}
                        />
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-3 sm:mt-8 pt-3 sm:pt-6 border-t-2 border-gray-200 group-hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between gap-1 sm:gap-0">
                    <span
                      className={`text-[9px] sm:text-sm font-black uppercase tracking-normal transition-colors ${
                        colorIndex === 0
                          ? "text-indigo-600"
                          : colorIndex === 1
                          ? "text-purple-600"
                          : "text-pink-600"
                      }`}
                    >
                      Learn More
                    </span>
                    <div
                      className={`hidden sm:flex w-6 h-6 sm:w-12 sm:h-12 rounded-full items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                        colorIndex === 0
                          ? "bg-indigo-100 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-indigo-700"
                          : colorIndex === 1
                          ? "bg-purple-100 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-700"
                          : "bg-pink-100 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-pink-700"
                      }`}
                    >
                      <LuArrowRight className="h-3 w-3 sm:h-6 sm:w-6 text-gray-600 group-hover:text-white transition-colors group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {servicesOffered.length > 6 && (
          <div className="mt-6 lg:mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="px-10 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-bold text-xs uppercase tracking-[0.1em] transition-all duration-300 hover:bg-gray-100 hover:border-indigo-400 hover:text-indigo-600 hover:scale-105"
            >
              {showAll ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

