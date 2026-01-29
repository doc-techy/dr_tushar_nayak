"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

const signatureProgrammes = [
  { title: "Robotic knee and hip replacements", href: "/treatments/knee-replacement" },
  { title: "Key hole knee and shoulder arthroscopy", href: "/treatments/knee-arthroscopy" },
  { title: "Spine decompression surgery", href: "/treatments/spinal-surgeries" },
  { title: "Fracture fixation surgery", href: "/treatments/trauma-management" },
];

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
    <section id="hero" className="relative overflow-hidden text-gray-900">
      {/* Container with responsive padding - edge to edge on mobile, no top padding */}
      <div className="relative w-full max-w-[1600px] mx-auto px-0 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-0 sm:pt-8 md:pt-10 lg:pt-12 pb-4 sm:pb-8 md:pb-10 lg:pb-12">
        
        {/* Grid: stacked on mobile, side-by-side on md+ */}
        <div className="grid gap-4 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20 md:grid-cols-[1fr_1.2fr] lg:grid-cols-[0.85fr_1.15fr] xl:grid-cols-[0.9fr_1.1fr] items-center">
          
          {/* Image Section */}
          <aside className="md:order-1 w-full relative">
            {/* Background blurs - hidden on mobile for performance */}
            <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
              <div className="absolute -top-20 left-1/2 w-[300px] sm:w-[400px] lg:w-[480px] h-[300px] sm:h-[400px] lg:h-[480px] -translate-x-1/2 bg-teal-100/40 blur-3xl rounded-full" aria-hidden />
              <div className="absolute bottom-[-20%] right-[10%] w-[200px] sm:w-[280px] lg:w-[360px] h-[200px] sm:h-[280px] lg:h-[360px] bg-teal-100/30 blur-3xl rounded-full" aria-hidden />
            </div>
            
            {/* Image container with responsive styling - edge to edge on mobile */}
            <div className="group relative rounded-none sm:rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] bg-[conic-gradient(from_140deg_at_70%_20%,rgba(30,154,162,0.4),rgba(10,47,77,0.35))] p-0 sm:p-2 md:p-2.5 lg:p-3 shadow-none sm:shadow-[0_30px_80px_-40px_rgba(30,154,162,0.35)] lg:shadow-[0_45px_100px_-50px_rgba(30,154,162,0.4)] transition duration-500 hover:shadow-[0_50px_120px_-40px_rgba(10,47,77,0.5)]">
              <div className="rounded-none sm:rounded-2xl md:rounded-[1.75rem] lg:rounded-[2.25rem] bg-gray-950/40 p-0 sm:p-1 backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-none sm:rounded-xl md:rounded-[1.5rem] lg:rounded-[2rem] border-0 sm:border border-white/20 bg-white/5">
                  {/* Responsive image heights - taller on mobile */}
                  <div className="relative h-[360px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[560px]">
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
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 45vw, 40vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-gray-950/20 to-transparent" aria-hidden />
                      </div>
                    ))}
                  </div>

                  {/* Slide indicators */}
                  <div className="absolute inset-x-0 bottom-4 sm:bottom-5 lg:bottom-6 flex justify-center gap-1.5 sm:gap-2">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-1.5 sm:h-2 rounded-full transition-all ${index === activeSlide ? "w-5 sm:w-6 bg-white" : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/60"}`}
                        aria-label={`View slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Content Section - add padding on mobile */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 md:order-2 px-4 sm:px-0">
            
            {/* Title and intro */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
                Dr. Tushar{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">
                  Nayak
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 font-medium max-w-xl lg:max-w-2xl">
                With over a decade of clinical excellence in Orthopaedics, Dr. Tushar Nayak is a highly trained Orthopaedic Surgeon, educated at AIIMS, Delhi, with international fellowships in Joint Replacement, Sports Medicine, and Arthroscopy. He combines deep clinical expertise with the latest robotic and minimally invasive technologies to deliver precise, safe, and faster-recovery treatments.
              </p>
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 border-t border-gray-200">
                <div>
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide text-gray-500">Years Exp.</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">11+</p>
                </div>
                <div className="border-x border-gray-200 px-2 sm:px-3 md:px-4">
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide text-gray-500">SPARSH</p>
                  <p className="text-xs sm:text-sm md:text-base font-black text-gray-900">10am–5pm</p>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide text-gray-500">Nistha</p>
                  <p className="text-xs sm:text-sm md:text-base font-black text-gray-900">6pm–9pm</p>
                </div>
              </div>
            </div>

            {/* Signature Programmes - visible on md+ screens */}
            <div className="hidden md:block space-y-3 lg:space-y-4">
              <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-400">Signature Programmes</p>
              <div className="flex flex-wrap gap-1.5 lg:gap-2">
                {signatureProgrammes.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 lg:gap-2 rounded-full border border-teal-100 bg-white px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 text-[10px] lg:text-xs font-bold uppercase tracking-wide text-brand-teal transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg hover:shadow-brand-teal/10"
                  >
                    <span className="line-clamp-1">{item.title}</span>
                    <LuArrowUpRight className="h-2.5 w-2.5 lg:h-3 lg:w-3 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/booking"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-gradient-to-r from-brand-teal to-brand-navy px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-teal/30 transition-all duration-300 hover:scale-105 hover:shadow-brand-teal/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Consultation
                  <LuArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="tel:8810605887"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-brand-teal bg-white px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-teal shadow-md shadow-brand-teal/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-teal hover:to-brand-navy hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-brand-teal/30 hover:scale-105"
              >
                <span className="relative z-10">Contact Us</span>
              </Link>
            </div>

            {/* Mobile-only simplified programmes */}
            <div className="md:hidden pt-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Our Specialties</p>
              <div className="flex flex-wrap gap-1.5">
                {signatureProgrammes.slice(0, 3).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50/50 px-2.5 py-1 text-[10px] font-semibold text-brand-teal"
                  >
                    {item.title.split(" ").slice(0, 2).join(" ")}
                  </Link>
                ))}
                <Link
                  href="/#services"
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-600"
                >
                  View all →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
