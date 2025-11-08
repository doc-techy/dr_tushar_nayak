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
    <section id="hero" className="relative min-h-[90vh] overflow-hidden text-white">
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
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-10 py-4 text-sm font-bold uppercase tracking-[0.1em] shadow-lg shadow-indigo-500/40 transition hover:scale-105"
              >
                Book Consultation
                <LuArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                href="tel:8810605887"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-10 py-4 text-sm font-bold uppercase tracking-[0.35em] text-gray-200 transition hover:bg-white/10 hover:border-indigo-400 hover:text-white"
              >
                Contact Us
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

          <aside className="lg:sticky lg:top-24">
            <div className="group relative rounded-[2.75rem] bg-[conic-gradient(from_140deg_at_70%_20%,rgba(165,180,252,0.45),rgba(244,114,182,0.4),rgba(129,140,248,0.5))] p-[10px] shadow-[0_45px_140px_-70px_rgba(79,70,229,0.95)] transition duration-500 hover:shadow-[0_70px_160px_-65px_rgba(192,132,252,0.8)]">
              <div className="rounded-[2.5rem] bg-gray-950/40 p-[3px] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[2.3rem] border border-white/20 bg-white/5">
                  <div className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-70" aria-hidden />
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
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-gray-950/10 to-transparent" aria-hidden />
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
        </div>
      </div>
    </section>
  );
}
