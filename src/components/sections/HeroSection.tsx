"use client";

import Link from "next/link";
import { doctorProfile, servicesOffered } from "@/data/site-content";
import { LuArrowRight, LuPhone, LuClock, LuMapPin, LuArrowUpRight } from "react-icons/lu";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] bg-gray-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-gray-950 to-purple-950/60" aria-hidden />
      <div className="absolute top-10 left-20 w-[480px] h-[480px] bg-indigo-600/20 blur-3xl rounded-full" aria-hidden />
      <div className="absolute bottom-16 right-16 w-[420px] h-[420px] bg-purple-600/25 blur-3xl rounded-full" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-9">
        <div className="grid gap-16 lg:grid-cols-[1.25fr_0.85fr] items-start">
          <div className="space-y-12">
            

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Dr.Tushar Nayak
              </h1>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-xs font-bold uppercase tracking-[0.4em] text-indigo-200">
              Renowned Orthopaedic Surgeon – Bengaluru
            </div>
              <p className="max-w-3xl text-lg text-gray-300 leading-relaxed">
              

With over 10 years of clinical excellence, Dr. Tushar Nayak stands among Bengaluru’s most trusted orthopaedic specialists. Having served at leading hospitals across the city, he combines advanced surgical expertise with compassionate patient care. Committed to the highest standards of ethics and professionalism, Dr. Nayak leverages cutting-edge technology to deliver precise, evidence-based solutions for all orthopaedic concerns.

              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-500">Signature Programmes</p>
              <div className="flex flex-wrap gap-3">
                {servicesOffered.slice(0, 4).map((service, index) => (
                  <Link
                    key={service.slug}
                    href={`/treatments/${service.slug}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition hover:scale-105 ${
                      index % 3 === 0
                        ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-200 hover:bg-indigo-500/20"
                        : index % 3 === 1
                        ? "bg-purple-500/10 border-purple-500/30 text-purple-200 hover:bg-purple-500/20"
                        : "bg-pink-500/10 border-pink-500/30 text-pink-200 hover:bg-pink-500/20"
                    }`}
                  >
                    {service.title}
                    <LuArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-10 py-4 text-sm font-bold uppercase tracking-[0.35em] shadow-lg shadow-indigo-500/40 transition hover:scale-105"
              >
                Book Consultation
                <LuArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-10 py-4 text-sm font-bold uppercase tracking-[0.35em] text-gray-200 transition hover:bg-white/10 hover:border-indigo-400 hover:text-white"
              >
                Explore Programmes
              </Link>
            </div>

            {/* <div className="grid gap-6 sm:grid-cols-3">
              {heroContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/5 border border-white/10 px-6 py-5 backdrop-blur-md shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)]"
                >
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.35em] text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}

 
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 shadow-[0_40px_110px_-60px_rgba(15,23,42,0.9)] space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-indigo-200 mb-2">Fast-track access</p>
                <h2 className="text-2xl font-bold text-white">Talk to the care concierge</h2>
              </div>
              <div className="space-y-4 text-sm text-gray-300">
                <a
                  href={`tel:${doctorProfile.contact.phone}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  <LuPhone className="h-5 w-5 text-indigo-300" />
                  <span className="font-semibold text-white">{doctorProfile.contact.phone}</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <LuClock className="h-5 w-5 text-purple-300" />
                  <span>Mon – Sat · 10:30 AM – 9:00 PM</span>
                </div>
                <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <LuMapPin className="mt-1 h-5 w-5 text-pink-300" />
                  <span className="text-sm leading-relaxed">
                    Apex Orthocare Hospital<br />Ahmedabad, Gujarat
                  </span>
                </div>
              </div>
              <Link
                href="/booking"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-3 text-xs font-bold uppercase tracking-[0.35em] hover:scale-105"
              >
                Request Same-day Slot
                <LuArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-5">
              <h3 className="text-lg font-semibold text-white">What patients choose us for</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>• Robotic joint replacement with enhanced recovery</li>
                <li>• Day-care arthroscopy and sports injury solutions</li>
                <li>• Multidisciplinary spine programmes focused on mobility</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
