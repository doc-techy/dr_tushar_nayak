import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/site-content";
import { renderServiceIcon } from "@/lib/service-icons";

type TreatmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Treatment not found",
    };
  }

  return {
    title: `${service.title} | Dr. Tushar Nayak`,
    description: service.description,
    alternates: {
      canonical: `/treatments/${service.slug}`,
    },
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="section-container space-y-10">
      <Link href="/" className="link-pill inline-flex items-center gap-2">
        ← Back to home
      </Link>

      <div className="relative overflow-hidden rounded-[2.75rem] border border-brand-aqua/50 shadow-[0_35px_80px_-45px_rgba(10,47,77,0.35)]">
        <Image
          src={service.heroImage}
          alt={service.heroAlt}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-brand-mint/70" aria-hidden />
        <div className="relative z-10 grid gap-6 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] md:items-center md:p-12">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-4">
              <span className="rounded-full bg-white/90 p-4 shadow-md">
                {renderServiceIcon(service.iconKey, "h-12 w-12 text-brand-teal")}
              </span>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-teal">
                  Specialised ortho treatment
                </p>
                <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl lg:text-[2.8rem]">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="text-brand-charcoal/75 lg:text-lg">{service.description}</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
              {service.focus}
            </div>
          </div>
        </div>
      </div>

      <article className="card space-y-8 border-brand-aqua/60">
        <p className="text-brand-charcoal/75 lg:text-lg">{service.details}</p>
        <div className="space-y-6">
          <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-brand-teal">
            Programme highlights
          </h2>
          <ul className="space-y-4 text-sm text-brand-charcoal/80">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-teal" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          {service.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h3 className="text-base font-semibold text-brand-navy">{section.heading}</h3>
              <p className="text-sm text-brand-charcoal/75">{section.body}</p>
              {section.points ? (
                <ul className="space-y-2 text-sm text-brand-charcoal/75">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}

