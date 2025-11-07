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
  { label: "Blogs", href: "/#blogs" },
  { label: "Booking", href: "/booking" },
];

const socialIconMap: Record<string, { icon: JSX.Element; bg: string }> = {
  linkedin: {
    icon: <LuLinkedin className="h-5 w-5" />,
    bg: "from-blue-600 to-blue-700",
  },
  instagram: {
    icon: <LuInstagram className="h-5 w-5" />,
    bg: "from-pink-600 to-purple-600",
  },
  youtube: {
    icon: <LuYoutube className="h-5 w-5" />,
    bg: "from-red-600 to-red-700",
  },
};

export function SiteFooter() {
  return (
    <footer className="relative bg-gray-950 text-white border-t-2 border-white/10 transition before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-indigo-600 before:via-purple-600 before:to-pink-600 before:opacity-80 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:via-purple-600 after:to-pink-600 after:opacity-80">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12 space-y-16">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* About */}
          <div className="space-y-6">
            <div>
              <p className="text-3xl font-black text-white mb-2">{doctorProfile.name}</p>
              <p className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Orthopaedic Surgeon</p>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              {doctorProfile.intro}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
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
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${socialConfig.bg} text-white transition-all hover:scale-110 shadow-lg`}
                    aria-label={social.label}
                  >
                    {socialConfig.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-indigo-400 transition flex items-center gap-2 group"
                >
                  <LuArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Contact</h3>
            <div className="space-y-4">
              <a
                href={`tel:${doctorProfile.contact.phone}`}
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-indigo-400 transition group"
              >
                <LuPhone className="h-5 w-5 flex-shrink-0 mt-0.5 text-indigo-400" />
                <span>{doctorProfile.contact.phone}</span>
              </a>
              
              <a
                href={`mailto:${doctorProfile.contact.email}`}
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-purple-400 transition group"
              >
                <LuMail className="h-5 w-5 flex-shrink-0 mt-0.5 text-purple-400" />
                <span className="break-all">{doctorProfile.contact.email}</span>
              </a>
              
              <a
                href="https://share.google/GymCgRnl41JuRMxLz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-pink-400 transition group"
              >
                <LuMap className="h-5 w-5 flex-shrink-0 mt-0.5 text-pink-400" />
                <span>{doctorProfile.primaryLocation}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {doctorProfile.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Designed with precision care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
