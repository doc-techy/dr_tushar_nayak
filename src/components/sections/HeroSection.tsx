"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuArrowRight, LuArrowUpRight, LuPlay, LuX } from "react-icons/lu";

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

// Replace with your actual introduction video URL (YouTube, Vimeo, or direct video file)
const introVideoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Disable body scroll when video modal is open
  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showVideo]);

  return (
    <section id="hero" className="relative overflow-hidden text-white">
      {/* Container with responsive padding - edge to edge on mobile, no top padding */}
      <div className="relative w-full max-w-[1600px] mx-auto px-0 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-0 sm:pt-8 md:pt-10 lg:pt-12 pb-4 sm:pb-8 md:pb-10 lg:pb-12">
        
        {/* Grid: stacked on mobile, side-by-side on md+ */}
        <div className="grid gap-4 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20 md:grid-cols-[1fr_1.2fr] lg:grid-cols-[0.85fr_1.15fr] xl:grid-cols-[0.9fr_1.1fr] items-center">
          
          {/* Image Section */}
          <aside className="md:order-1 w-full relative">
            {/* Background blurs - hidden on mobile for performance */}
            <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
              <div className="absolute -top-20 left-1/2 w-[300px] sm:w-[400px] lg:w-[480px] h-[300px] sm:h-[400px] lg:h-[480px] -translate-x-1/2 bg-brand-teal/10 blur-3xl rounded-full" aria-hidden />
              <div className="absolute bottom-[-20%] right-[10%] w-[200px] sm:w-[280px] lg:w-[360px] h-[200px] sm:h-[280px] lg:h-[360px] bg-brand-teal/8 blur-3xl rounded-full" aria-hidden />
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight text-white">
                Dr. Tushar{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-cyan-400">
                  Nayak
                </span>
              </h1>

              <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-300 font-bold leading-loose">
                <span className="whitespace-nowrap">MS Ortho (AIIMS, Delhi), DNB, MNAMS | Fellow – Joint Replacement &amp; Arthroscopy&nbsp;(Innsbruck)</span><br />Advanced Shoulder Surgery (Brisbane)
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-400 font-medium max-w-xl lg:max-w-2xl">
                With over a decade of clinical excellence in Orthopaedics, Dr. Tushar Nayak is a highly trained Orthopaedic Surgeon, educated at AIIMS, Delhi, with international fellowships in Joint Replacement, Sports Medicine, and Arthroscopy. He combines deep clinical expertise with the latest robotic and minimally invasive technologies to deliver precise, safe, and faster-recovery treatments.
              </p>
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 border-t border-white/10">
                <div>
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide text-gray-500">Years of Experience</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-white">11+</p>
                </div>
                <div className="border-x border-white/10 px-2 sm:px-3 md:px-4">
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide text-gray-500">Sparsh Hospital, Hennur</p>
                  <p className="text-[10px] sm:text-xs md:text-sm font-bold text-white">Mon–Sat: 10 AM – 5 PM</p>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide text-gray-500">Nishtha Healthcare</p>
                  <p className="text-[10px] sm:text-xs md:text-sm font-bold text-white leading-tight">Mon–Sat: 6 PM – 9 PM</p>
                  <p className="text-[10px] sm:text-xs md:text-sm font-bold text-white leading-tight">Sun: 9 AM – 1 PM</p>
                </div>
              </div>
            </div>

            {/* Signature Programmes - visible on md+ screens, 2 per row */}
            <div className="hidden md:block space-y-2.5 lg:space-y-3">
              <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-brand-teal">Signature Programmes</p>
              <div className="grid grid-cols-2 gap-2 lg:gap-2.5">
                {signatureProgrammes.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-center text-center rounded-full border border-white/15 bg-white/5 px-4 lg:px-5 py-2 lg:py-2.5 text-[9px] lg:text-[10px] font-bold uppercase tracking-wide text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal hover:bg-brand-teal hover:text-white hover:shadow-md hover:shadow-brand-teal/30"
                  >
                    <span className="leading-tight">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile-only Signature Programmes - 2 per row with full names, above CTA on mobile */}
            <div className="md:hidden">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-2">Signature Programmes</p>
              <div className="grid grid-cols-2 gap-2">
                {signatureProgrammes.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-center text-center rounded-lg border border-white/15 bg-white/5 px-2 py-2 text-[9px] font-bold text-gray-300 leading-tight"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={() => setShowVideo(true)}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-brand-teal bg-transparent px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-teal shadow-md shadow-brand-teal/10 transition-all duration-300 hover:bg-brand-teal hover:text-white hover:shadow-lg hover:shadow-brand-teal/30 hover:scale-105"
              >
                <LuPlay className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="relative z-10">Watch Introduction</span>
              </button>
              <Link
                href="/booking"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-gradient-to-r from-brand-teal to-brand-navy px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-teal/30 transition-all duration-300 hover:scale-105 hover:shadow-brand-teal/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Consultation
                  <LuArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close video"
            >
              <LuX className="w-6 h-6" />
            </button>
            
            {/* Video iframe - Replace with your actual video */}
            <iframe
              src={introVideoUrl}
              title="Introduction to Dr. Tushar Nayak"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
