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
      className="relative py-24 sm:py-32 lg:py-14 px-4 bg-gray-950 text-white overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-gray-950 to-purple-950/60" aria-hidden />
      <div className="absolute top-24 -left-20 w-[420px] h-[420px] bg-indigo-600/20 blur-3xl rounded-full" aria-hidden />
      <div className="absolute bottom-16 right-10 w-[380px] h-[380px] bg-purple-600/25 blur-3xl rounded-full" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
            Specialized
            <span className="ml-2 text-white">
              Ortho Treatments
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed font-light">
            From prevention and diagnostics to surgical excellence and rehab, choose a program designed
            around your activity goals and recovery speed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => {
            const colorIndex = index % 3;
            return (
              <Link
                key={service.title}
                href={`/treatments/${service.slug}`}
                className="group relative overflow-hidden rounded-3xl bg-white/5 border-2 border-white/10 p-8 backdrop-blur-md hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    colorIndex === 0
                      ? "bg-gradient-to-br from-indigo-500/10 to-transparent"
                      : colorIndex === 1
                      ? "bg-gradient-to-br from-purple-500/10 to-transparent"
                      : "bg-gradient-to-br from-pink-500/10 to-transparent"
                  }`}
                />

                {/* <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl shadow-lg ${
                      colorIndex === 0
                        ? "bg-gradient-to-br from-indigo-500 to-indigo-600"
                        : colorIndex === 1
                        ? "bg-gradient-to-br from-purple-500 to-purple-600"
                        : "bg-gradient-to-br from-pink-500 to-pink-600"
                    } group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <span className="text-white">
                      {renderServiceIcon(service.iconKey, "h-10 w-10")}
                    </span>
                  </div>
                </div> */}

                <div className="relative space-y-4">
                  <div className="space-y-2">
                    {/* <span
                      className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border ${
                        colorIndex === 0
                          ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300"
                          : colorIndex === 1
                          ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                          : "bg-pink-500/10 border-pink-500/30 text-pink-300"
                      }`}
                    >
                      {service.focus}
                    </span> */}
                    <h3
                      className={`text-2xl font-black leading-tight transition-colors duration-300 ${
                        colorIndex === 0
                          ? "text-white group-hover:text-indigo-300"
                          : colorIndex === 1
                          ? "text-white group-hover:text-purple-300"
                          : "text-white group-hover:text-pink-300"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed line-clamp-3 text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-gray-500">
                        <span
                          className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${
                            colorIndex === 0
                              ? "bg-indigo-500"
                              : colorIndex === 1
                              ? "bg-purple-500"
                              : "bg-pink-500"
                          }`}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-8 pt-6 border-t-2 border-white/10 group-hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-black uppercase tracking-wider transition-colors ${
                        colorIndex === 0
                          ? "text-indigo-400"
                          : colorIndex === 1
                          ? "text-purple-400"
                          : "text-pink-400"
                      }`}
                    >
                      Learn More
                    </span>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        colorIndex === 0
                          ? "bg-indigo-500/10 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-indigo-700"
                          : colorIndex === 1
                          ? "bg-purple-500/10 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-700"
                          : "bg-pink-500/10 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-pink-700"
                      }`}
                    >
                      <LuArrowRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {servicesOffered.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="px-10 py-4 rounded-full border-2 border-white/20 text-white font-bold text-xs uppercase tracking-[0.4em] transition-all duration-300 hover:bg-white/10 hover:border-indigo-400 hover:scale-105"
            >
              {showAll ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

