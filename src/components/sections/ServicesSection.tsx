import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { servicesOffered } from "@/data/site-content";
import { renderServiceIcon } from "@/lib/service-icons";

export function ServicesSection() {
  return (
    <section id="services" className="section-container">
      <div className="section-heading">
        <h2 className="text-4xl font-extrabold text-brand-navy sm:text-5xl">
          Specialized Ortho Treatments
        </h2>
        <p className="max-w-3xl text-brand-charcoal/70">
          From prevention and diagnostics to surgical excellence and rehab, choose a program designed
          around your activity goals and recovery speed.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
         {servicesOffered.map((service) => (
           <Link
             key={service.title}
             href={`/treatments/${service.slug}`}
            className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[2rem] border border-white/20 bg-white/40 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(12,44,62,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/50 hover:shadow-[0_12px_48px_0_rgba(10,47,77,0.25)]"
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-mint/20 via-brand-aqua/10 to-transparent opacity-60 transition duration-300 group-hover:opacity-80" aria-hidden />
            <span className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/30" aria-hidden />

            <div className="relative flex items-start justify-between">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-brand-teal shadow-sm">
                  {service.focus}
                </span>
                <h3 className="max-w-xs text-left text-2xl font-semibold text-brand-navy transition duration-300 group-hover:text-brand-teal">
                  {service.title}
                </h3>
              </div>
              <span className="relative inline-flex items-center justify-center rounded-2xl bg-white/50 backdrop-blur-md border border-white/40 p-3.5 text-brand-teal shadow-[0_8px_24px_-8px_rgba(12,44,62,0.3)] transition duration-300 group-hover:scale-110 group-hover:bg-white/70 group-hover:shadow-[0_12px_32px_-8px_rgba(10,47,77,0.4)]">
                {renderServiceIcon(service.iconKey, "h-10 w-10")}
              </span>
            </div>

            <p className="relative text-sm leading-relaxed text-brand-charcoal/75">
              {service.description}
            </p>

            <ul className="relative grid gap-2 text-sm text-brand-charcoal/70">
              {service.highlights.slice(0, 2).map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-teal/80" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="relative flex items-center justify-between pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/40 backdrop-blur-sm px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-brand-teal transition duration-300 group-hover:border-white/40 group-hover:bg-white/60">
                View journey
              </span>
              <span className="inline-flex items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.4em] text-brand-charcoal/60 transition duration-300 group-hover:gap-2.5 group-hover:text-brand-teal">
                Explore
                <LuArrowUpRight className="h-3 w-3 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

