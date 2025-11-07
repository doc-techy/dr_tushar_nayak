import Link from "next/link";
import { doctorProfile, servicesOffered } from "@/data/site-content";
import {
  LuPhone,
  LuMail,
  LuMap,
  LuClock,
  LuArrowUpRight,
  LuLinkedin,
  LuInstagram,
  LuYoutube,
} from "react-icons/lu";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Booking", href: "/booking" },
];

const socialIconMap: Record<string, { icon: JSX.Element; bg: string }> = {
  linkedin: {
    icon: <LuLinkedin className="h-4 w-4" />,
    bg: "bg-[#0A66C2]",
  },
  instagram: {
    icon: <LuInstagram className="h-4 w-4" />,
    bg: "bg-[#E1306C]",
  },
  youtube: {
    icon: <LuYoutube className="h-4 w-4" />,
    bg: "bg-[#FF0000]",
  },
};

export function SiteFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-brand-navy via-[#0b2039] to-[#040e1b] text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f5b754] via-[#ffcf67] to-[#f5b754]" aria-hidden />
      <div className="section-container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            {/* <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white"> */}
              <div>
                <p className="text-2xl font-bold">{doctorProfile.name}</p>
                <p className="text-l font-medium text-brand-mint/80">Orthopaedic Surgeon</p>
              </div>
            {/* </div> */}
            <p className="text-sm leading-relaxed text-white/70">{doctorProfile.intro}</p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-mint/80">
                Connect with Dr. Nayak
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {doctorProfile.socials.map((social) => {
                  const match = socialIconMap[social.label.toLowerCase()];
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-10 w-10 items-center justify-center rounded-xl font-medium text-white transition hover:opacity-90 ${
                        match?.bg ?? "bg-white/10"
                      }`}
                    >
                      {match?.icon ?? <LuArrowUpRight className="h-4 w-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm text-white/75">
            <p className="text-base font-semibold text-white">Contact Info</p>
            <p className="flex items-start gap-3">
              <LuPhone className="mt-0.5 h-4 w-4 text-brand-mint" />
              <a href={`tel:${doctorProfile.contact.phone}`} className="underline-offset-4 hover:underline">
                {doctorProfile.contact.phone}
              </a>
            </p>
            <p className="flex items-start gap-3">
              <LuMail className="mt-0.5 h-4 w-4 text-brand-mint" />
              <a href={`mailto:${doctorProfile.contact.email}`} className="underline-offset-4 hover:underline">
                {doctorProfile.contact.email}
              </a>
            </p>
          <a
            href="https://share.google/GymCgRnl41JuRMxLz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3"
          >
            <LuMap className="mt-0.5 h-10 w-10 text-brand-mint" />
            {doctorProfile.primaryLocation}
          </a>
            <p className="flex items-start gap-3">
              <LuClock className="mt-0.5 h-4 w-4 text-brand-mint" />
              Monday to Saturday 10:30 AM–9:00 PM
            </p>
          </div>

          <div className="space-y-4 text-sm text-white/75">
            <p className="text-base font-semibold text-white">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-sm text-white/75">
            <p className="text-base font-semibold text-white">Services</p>
            <ul className="space-y-2">
              {servicesOffered.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/60">
          <div className="flex flex-col items-center gap-3 text-center">
            <p>© {new Date().getFullYear()} {doctorProfile.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

