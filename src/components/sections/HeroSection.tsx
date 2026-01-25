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
    <section id="hero" className="relative min-h-[90vh] overflow-x-hidden text-gray-900">
      <div className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-24 pt-0 sm:pt-4 pb-24 lg:py-9">
        <div className="grid gap-8 lg:gap-20 xl:gap-24 lg:grid-cols-[0.9fr_1.35fr] items-start">
          <aside className="lg:sticky lg:top-2 lg:order-1 w-screen lg:w-auto ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] lg:ml-0 lg:mr-0 relative">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-20 left-1/2 w-[480px] h-[480px] -translate-x-1/2 bg-teal-100/40 blur-3xl rounded-full" aria-hidden />
              <div className="absolute bottom-[-20%] right-[10%] w-[360px] h-[360px] bg-teal-100/30 blur-3xl rounded-full" aria-hidden />
              <div className="absolute top-[20%] left-[-10%] w-[320px] h-[320px] bg-brand-navy/10 blur-[180px] rounded-full" aria-hidden />
            </div>
            <div className="group relative rounded-none sm:rounded-[2.75rem] bg-none sm:bg-[conic-gradient(from_140deg_at_70%_20%,rgba(30,154,162,0.4),rgba(10,47,77,0.35))] p-0 sm:p-[10px] shadow-none sm:shadow-[0_45px_140px_-70px_rgba(30,154,162,0.4)] transition duration-500 hover:shadow-none sm:hover:shadow-[0_70px_160px_-65px_rgba(10,47,77,0.5)]">
              <div className="rounded-none sm:rounded-[2.5rem] bg-transparent sm:bg-gray-950/40 p-0 sm:p-[3px] backdrop-blur-0 sm:backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-none sm:rounded-[2.3rem] border-0 sm:border sm:border-white/20 bg-transparent sm:bg-white/5">
                  <div className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_180deg_at_50%_50%,rgba(30,154,162,0.3),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-0 sm:group-hover:opacity-70" aria-hidden />
                  <div className="relative h-[380px] sm:h-[480px] md:h-[540px] lg:h-[620px]">
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
              {/* <div className="inline-flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/50 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.05em] text-indigo-700 backdrop-blur-sm">
                  Orthopaedic Surgeon
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.05em] text-gray-600 backdrop-blur-sm">
                  Bengaluru
                </span>
              </div> */}

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
                Dr. Tushar <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Nayak</span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-lg leading-relaxed text-gray-600 font-medium">
                With over a decade of clinical excellence in Orthopaedics, Dr. Tushar Nayak is a highly trained Orthopaedic Surgeon, educated at AIIMS, Delhi, with international fellowships in Joint Replacement, Sports Medicine, and Arthroscopy. He combines deep clinical expertise with the latest robotic and minimally invasive technologies to deliver precise, safe, and faster-recovery treatments. Known for his compassionate and trustworthy approach, Dr. Nayak believes in listening carefully, explaining clearly, and guiding every patient with empathy—helping them return to an active, pain-free life with confidence.
              </p>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-normal text-gray-500">Years Exp.</p>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900">11+</p>
                </div>
                <div className="border-x border-gray-200 px-2 sm:px-4">
                  <p className="text-[10px] font-bold uppercase tracking-normal text-gray-500">Mon–Sat</p>
                  <p className="text-sm sm:text-base font-black text-gray-900">10am–9pm</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-normal text-gray-500">Sunday</p>
                  <p className="text-sm sm:text-base font-black text-gray-900">9am–1pm</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.05em] text-gray-400">Signature Programmes</p>
              <div className="flex flex-wrap gap-2">
                {signatureProgrammes.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-normal text-brand-teal transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg hover:shadow-brand-teal/10"
                  >
                    {item.title}
                    <LuArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/booking"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-brand-teal to-brand-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-brand-teal/30 transition-all duration-300 hover:scale-105 hover:shadow-brand-teal/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Consultation
                  <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="tel:8810605887"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-brand-teal bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-brand-teal shadow-md shadow-brand-teal/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-teal hover:to-brand-navy hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-brand-teal/30 hover:scale-105"
              >
                <span className="relative z-10">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
