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

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {featuredServices.map((service) => (
            <Link
              key={service.title}
              href={`/treatments/${service.slug}`}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white border border-gray-200 sm:border-2 shadow-sm sm:shadow-md hover:bg-gray-50 hover:border-brand-teal/60 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 lg:hover:-translate-y-4 hover:shadow-lg sm:hover:shadow-xl hover:shadow-brand-teal/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal-50 to-transparent" />

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl">
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="relative space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 p-2.5 sm:p-4 md:p-5 lg:p-6">
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold sm:font-black leading-tight text-gray-900 transition-colors duration-300 group-hover:text-brand-teal line-clamp-2">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 text-[10px] sm:text-xs md:text-sm">
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 hidden sm:block">
                  {service.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-1.5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm text-gray-700">
                      <span className="mt-1 sm:mt-1.5 h-1 w-1 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 rounded-full flex-shrink-0 bg-brand-teal" />
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative px-2.5 sm:px-4 md:px-5 lg:px-6 pb-2.5 sm:pb-4 md:pb-5 lg:pb-6 pt-0">
                <div className="flex items-center justify-between gap-1 pt-2 sm:pt-3 border-t border-gray-200 sm:border-t-2 group-hover:border-teal-200 transition-colors">
                  <span className="text-[9px] sm:text-xs md:text-sm font-bold sm:font-black uppercase tracking-wide text-brand-teal">
                    Learn More
                  </span>
                  <div className="flex w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full items-center justify-center bg-teal-100 transition-all duration-300 group-hover:bg-brand-teal group-hover:scale-110 flex-shrink-0">
                    <LuArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-brand-teal group-hover:text-white transition-colors group-hover:translate-x-0.5" />
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

