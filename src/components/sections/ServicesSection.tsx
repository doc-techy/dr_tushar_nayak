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
      className="relative py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 text-gray-900 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-left sm:text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-2 sm:mb-4 lg:mb-6 text-gray-900">
            State of the art,{" "}
            <span className="text-gray-900">orthopaedic care</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed font-light">
            From prevention and diagnostics to surgical excellence and rehab, choose a program designed
            around your activity goals and recovery speed.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {featuredServices.map((service) => (
            <Link
              key={service.title}
              href={`/treatments/${service.slug}`}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl bg-white border border-gray-200 sm:border-2 shadow-sm sm:shadow-md hover:bg-gray-50 hover:border-brand-teal/60 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 lg:hover:-translate-y-3 hover:shadow-lg sm:hover:shadow-xl hover:shadow-brand-teal/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal-50 to-transparent" />

              {/* Image - 40% height on mobile, larger on desktop */}
              <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl">
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="relative space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-3 p-2 sm:p-3 md:p-4 lg:p-5">
                <div className="space-y-0.5">
                  <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold sm:font-black leading-tight text-gray-900 transition-colors duration-300 group-hover:text-brand-teal line-clamp-2">
                    {service.title}
                  </h3>
                </div>

                {/* Description - visible on all screens */}
                <p className="text-gray-600 leading-relaxed line-clamp-2 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
                  {service.description}
                </p>

                {/* Highlights - visible on md+ */}
                <ul className="space-y-0.5 sm:space-y-1 md:space-y-1.5 hidden md:block">
                  {service.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-1 sm:gap-1.5 md:gap-2 text-[8px] sm:text-[10px] md:text-xs text-gray-700">
                      <span className="mt-1 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full flex-shrink-0 bg-brand-teal" />
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative px-2 sm:px-3 md:px-4 lg:px-5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 pt-0">
                <div className="flex items-center justify-between gap-1 pt-1.5 sm:pt-2 border-t border-gray-200 sm:border-t-2 group-hover:border-teal-200 transition-colors">
                  <span className="text-[8px] sm:text-[10px] md:text-xs font-bold sm:font-black uppercase tracking-wide text-brand-teal">
                    Learn More
                  </span>
                  <div className="flex w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full items-center justify-center bg-teal-100 transition-all duration-300 group-hover:bg-brand-teal group-hover:scale-110 flex-shrink-0">
                    <LuArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-4 lg:w-4 text-brand-teal group-hover:text-white transition-colors group-hover:translate-x-0.5" />
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

