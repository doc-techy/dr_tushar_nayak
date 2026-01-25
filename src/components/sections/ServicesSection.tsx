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
      className="relative py-12 sm:py-24 lg:py-14 px-4 text-gray-900 overflow-hidden border-t border-gray-200"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 w-[680px] h-[680px] -translate-x-1/2 bg-teal-100/40 blur-3xl rounded-full" aria-hidden />
        <div className="absolute bottom-[-10%] right-[10%] w-[520px] h-[520px] bg-teal-100/30 blur-3xl rounded-full" aria-hidden />
        <div className="absolute top-[30%] left-[-10%] w-[420px] h-[420px] bg-brand-navy/10 blur-[180px] rounded-full" aria-hidden />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-20 text-left sm:text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-0 lg:mb-6 text-gray-900">
            State of the art,
            <span className="ml-2 text-gray-900">orthopaedic care</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-xl text-gray-600 leading-relaxed font-light">
            From prevention and diagnostics to surgical excellence and rehab, choose a program designed
            around your activity goals and recovery speed.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Link
              key={service.title}
              href={`/treatments/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 shadow-md hover:bg-gray-50 hover:border-brand-teal/60 transition-all duration-500 hover:-translate-y-4 hover:shadow-xl hover:shadow-brand-teal/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal-50 to-transparent" />

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="relative space-y-2 sm:space-y-4 p-3 sm:p-6">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-sm sm:text-xl font-black leading-tight text-gray-900 transition-colors duration-300 group-hover:text-brand-teal">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 text-[10px] sm:text-sm">
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-2">
                  {service.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-1.5 sm:gap-3 text-[10px] sm:text-sm text-gray-700">
                      <span className="hidden sm:block mt-1 h-1.5 w-1.5 sm:mt-1.5 sm:h-2 sm:w-2 rounded-full flex-shrink-0 bg-brand-teal" />
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative px-3 sm:px-6 pb-3 sm:pb-6 pt-0">
                <div className="flex items-center justify-between gap-1 sm:gap-0 pt-3 border-t-2 border-gray-200 group-hover:border-teal-200 transition-colors">
                  <span className="text-[9px] sm:text-sm font-black uppercase tracking-normal text-brand-teal">
                    Learn More
                  </span>
                  <div className="hidden sm:flex w-6 h-6 sm:w-10 sm:h-10 rounded-full items-center justify-center bg-teal-100 transition-all duration-300 group-hover:bg-brand-teal group-hover:scale-110 flex-shrink-0">
                    <LuArrowRight className="h-3 w-3 sm:h-5 sm:w-5 text-brand-teal group-hover:text-white transition-colors group-hover:translate-x-1" />
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

