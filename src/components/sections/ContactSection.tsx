import Link from "next/link";
import { doctorProfile, mapEmbed } from "@/data/site-content";

export function ContactSection() {
  return (
    <section id="contact" className="section-container">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="space-y-7">
          <span className="badge">Visit the clinic</span>
          <h2 className="text-3xl font-semibold text-brand-navy sm:text-4xl">
            Schedule your consultation
          </h2>
          <p className="text-brand-charcoal/70">
            Use the online booking portal or message the care concierge on WhatsApp for priority
            slots. Tele-consultations are available for international patients.
          </p>
          <div className="card space-y-6 border-brand-aqua/60">
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">Call</h3>
              <p className="text-brand-charcoal/75">{doctorProfile.contact.phone}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">Email</h3>
              <a className="link-pill" href={`mailto:${doctorProfile.contact.email}`}>
                {doctorProfile.contact.email}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">WhatsApp</h3>
              <a
                className="link-pill"
                href={doctorProfile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with care team
              </a>
            </div>
            <Link href="/booking" className="link-pill bg-brand-teal text-white hover:bg-brand-navy">
              Book appointment online
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          <div className="overflow-hidden rounded-[2.5rem] border border-brand-aqua/60 bg-white/90 shadow-[0_25px_60px_-30px_rgba(14,57,90,0.45)]">
            <iframe
              title={mapEmbed.title}
              src={mapEmbed.iframeSrc}
              width="100%"
              height="420"
              loading="lazy"
              allowFullScreen
              className="min-h-[320px] w-full"
            />
          </div>
          <div className="rounded-3xl bg-brand-mint/70 p-6 text-brand-charcoal/80">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              Clinic address
            </p>
            <p className="mt-2 text-lg">{mapEmbed.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

