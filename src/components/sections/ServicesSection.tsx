"use client";

import Link from "next/link";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { featuredServiceSlugs, getServiceBySlug } from "@/data/site-content";

const featuredServices = featuredServiceSlugs
  .map((slug) => getServiceBySlug(slug))
  .filter((s): s is NonNullable<typeof s> => !!s);

export function ServicesSection() {

  return (
    <section
      id="services"
      className="relative pt-3 sm:pt-5  md:pt-6 lg:pt-7 pb-5 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-10 text-left sm:text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-2 sm:mb-4 lg:mb-6 text-white">
            State of the art,{" "}
            <span className="text-white">orthopaedic care</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed font-light">
            From prevention and diagnostics to surgical excellence and rehab, choose a program designed
            around your activity goals and recovery speed.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-3 lg:gap-6 lg:max-w-6xl lg:mx-auto">
          {featuredServices.map((service) => (
            <Link
              key={service.title}
              href={`/treatments/${service.slug}`}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 sm:border-2 lg:border shadow-sm sm:shadow-md lg:shadow-sm hover:bg-white/10 hover:border-brand-teal/60 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 lg:hover:-translate-y-1.5 hover:shadow-lg sm:hover:shadow-xl lg:hover:shadow-lg hover:shadow-brand-teal/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-teal/10 to-transparent" />

              {/* Image - 40% height on mobile, medium on desktop */}
              <div className="relative aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/9] w-full overflow-hidden rounded-t-lg sm:rounded-t-xl lg:rounded-t-xl">
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="relative space-y-1 sm:space-y-1.5 md:space-y-1.5 lg:space-y-1.5 p-2 sm:p-3 md:p-3 lg:p-4">
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-black leading-tight text-white transition-colors duration-300 group-hover:text-brand-teal line-clamp-2">
                    {service.title}
                  </h3>
                </div>

                {/* Description - visible on all screens */}
                <p className="text-gray-400 leading-relaxed line-clamp-2 text-[8px] sm:text-[10px] md:text-[10px] lg:text-xs">
                  {service.description}
                </p>

                {/* Highlights - visible on md+ */}
                <ul className="space-y-0.5 sm:space-y-1 md:space-y-1 lg:space-y-1 hidden md:block">
                  {service.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-1.5 text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px] text-gray-400">
                      <span className="mt-1 h-1 w-1 sm:h-1.5 sm:w-1.5 lg:h-1 lg:w-1 rounded-full flex-shrink-0 bg-brand-teal" />
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative px-2 sm:px-3 md:px-3 lg:px-4 pb-2 sm:pb-3 md:pb-3 lg:pb-4 pt-0">
                <div className="flex items-center justify-between gap-1 pt-1.5 sm:pt-2 lg:pt-2 border-t border-white/10 sm:border-t-2 lg:border-t group-hover:border-brand-teal/30 transition-colors">
                  <span className="text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px] font-bold sm:font-black lg:font-bold uppercase tracking-wide text-brand-teal">
                    Learn More
                  </span>
                  <div className="flex w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full items-center justify-center bg-white/10 transition-all duration-300 group-hover:bg-brand-teal group-hover:scale-110 flex-shrink-0">
                    <LuArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 text-brand-teal group-hover:text-white transition-colors group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
