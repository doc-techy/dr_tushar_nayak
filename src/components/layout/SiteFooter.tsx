import Link from "next/link";
import { doctorProfile } from "@/data/site-content";
import {
  LuPhone,
  LuMail,
  LuMap,
  LuArrowRight,
  LuLinkedin,
  LuInstagram,
  LuYoutube,
} from "react-icons/lu";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Publications", href: "/publications" },
  { label: "Booking", href: "/booking" },
];

const socialIconMap: Record<string, { icon: JSX.Element; bg: string }> = {
  linkedin: {
    icon: <LuLinkedin className="h-5 w-5" />,
    bg: "from-blue-600 to-blue-700",
  },
  instagram: {
    icon: <LuInstagram className="h-5 w-5" />,
    bg: "from-brand-teal to-brand-navy",
  },
  youtube: {
    icon: <LuYoutube className="h-5 w-5" />,
    bg: "from-red-600 to-red-700",
  },
};

export function SiteFooter() {
  return (
    <footer className="relative bg-gray-950 text-white border-t-2 border-white/10 transition before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-brand-teal before:to-brand-navy before:opacity-80 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-gradient-to-r after:from-brand-teal after:to-brand-navy after:opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 md:space-y-16">
        {/* Top Section */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* About */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 sm:col-span-2 lg:col-span-1">
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 sm:mb-2">{doctorProfile.name}</p>
              <p className="text-xs sm:text-sm font-bold text-brand-teal uppercase tracking-normal">Orthopaedic Surgeon</p>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 max-w-md">
              {doctorProfile.intro}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              {doctorProfile.socials.map((social) => {
                const iconKey = social.label.toLowerCase();
                const socialConfig = socialIconMap[iconKey];
                if (!socialConfig) return null;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${socialConfig.bg} text-white transition-all hover:scale-110 shadow-lg`}
                    aria-label={social.label}
                  >
                    {socialConfig.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-normal">Quick Links</h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm text-gray-400 hover:text-brand-teal transition flex items-center gap-2 group"
                >
                  <LuArrowRight className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-normal">Contact</h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href={`tel:${doctorProfile.contact.phone}`}
                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 hover:text-brand-teal transition group"
              >
                <LuPhone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 text-brand-teal" />
                <span>{doctorProfile.contact.phone}</span>
              </a>
              
              <a
                href={`mailto:${doctorProfile.contact.email}`}
                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 hover:text-brand-teal transition group"
              >
                <LuMail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 text-brand-teal" />
                <span className="break-all">{doctorProfile.contact.email}</span>
              </a>
              
              <a
                href="https://share.google/GymCgRnl41JuRMxLz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 hover:text-brand-teal transition group"
              >
                <LuMap className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 text-brand-teal" />
                <span>{doctorProfile.primaryLocation}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 sm:pt-6 md:pt-8 border-t border-white/10">
          <div className="flex items-center justify-center">
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} {doctorProfile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
