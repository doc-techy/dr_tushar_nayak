"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { servicesOffered } from "@/data/site-content";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

const sliderImages = [
  { src: "/images/img1.avif", alt: "Dr. Tushar Nayak consulting a patient" },
  { src: "/images/img2.avif", alt: "Dr. Tushar Nayak performing a procedure" },
  { src: "/images/img3.png", alt: "Dr. Tushar Nayak addressing a medical team" },
  { src: "/images/img4.avif", alt: "Dr. Tushar Nayak reviewing scans" },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] overflow-x-hidden text-gray-900">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-0 sm:pt-4 pb-24 lg:py-9">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-[0.85fr_1.25fr] items-start">
          <aside className="lg:sticky lg:top-24 lg:order-1 w-screen lg:w-auto ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] lg:ml-0 lg:mr-0">
            <div className="group relative rounded-none sm:rounded-[2.75rem] bg-none sm:bg-[conic-gradient(from_140deg_at_70%_20%,rgba(165,180,252,0.45),rgba(244,114,182,0.4),rgba(129,140,248,0.5))] p-0 sm:p-[10px] shadow-none sm:shadow-[0_45px_140px_-70px_rgba(79,70,229,0.95)] transition duration-500 hover:shadow-none sm:hover:shadow-[0_70px_160px_-65px_rgba(192,132,252,0.8)]">
              <div className="rounded-none sm:rounded-[2.5rem] bg-transparent sm:bg-gray-950/40 p-0 sm:p-[3px] backdrop-blur-0 sm:backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-none sm:rounded-[2.3rem] border-0 sm:border sm:border-white/20 bg-transparent sm:bg-white/5">
                  <div className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-0 sm:group-hover:opacity-70" aria-hidden />
                  <div className="relative h-[420px] sm:h-[520px] md:h-[580px]">
                    {sliderImages.map((image, index) => (
                      <div
                        key={image.src}
                        className={`absolute inset-0 transition-all duration-700 ease-out ${index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                        aria-hidden={index !== activeSlide}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          priority={index === 0}
                          sizes="(min-width: 1024px) 32rem, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent sm:from-gray-950/40 sm:via-gray-950/10" aria-hidden />
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 rounded-full transition-all ${index === activeSlide ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
                        aria-label={`View slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex flex-col gap-8 lg:gap-10 lg:order-2">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/50 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 backdrop-blur-sm">
                  Orthopaedic Surgeon
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-600 backdrop-blur-sm">
                  Bengaluru
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1.1] tracking-tight text-gray-900">
                Dr. Tushar <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Nayak</span>
              </h1>

              <p className="max-w-xl text-sm sm:text-lg leading-relaxed text-gray-600 font-medium">
                With over 10 years of clinical excellence, Dr. Tushar Nayak stands among Bengaluru&apos;s most trusted orthopaedic specialists. Having served at leading hospitals across the city, he combines advanced surgical expertise with compassionate patient care. Committed to the highest standards of ethics and professionalism, Dr. Nayak leverages cutting-edge technology to deliver precise, evidence-based solutions for all orthopaedic concerns.
              </p>
              
              <div className="flex flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900">10+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Years Exp.</p>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900">5k+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Happy Patients</p>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Commitment</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Signature Programmes</p>
              <div className="flex flex-wrap gap-2">
                {servicesOffered.slice(0, 4).map((service, index) => (
                  <Link
                    key={service.slug}
                    href={`/treatments/${service.slug}`}
                    className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
                      index % 3 === 0
                        ? "bg-white border-indigo-100 text-indigo-600 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10"
                        : index % 3 === 1
                        ? "bg-white border-purple-100 text-purple-600 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10"
                        : "bg-white border-pink-100 text-pink-600 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10"
                    }`}
                  >
                    {service.title}
                    <LuArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/booking"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gray-900 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-xl shadow-indigo-900/20 transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:shadow-indigo-900/30 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Consultation
                  <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="tel:8810605887"
                className="group inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-gray-600 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
