"use client";

import Image from "next/image";
import { heroContent, doctorProfile, servicesOffered } from "@/data/site-content";
import { LuAward, LuActivity, LuGraduationCap, LuStethoscope } from "react-icons/lu";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] flex items-center"
    >
      <div className="section-container relative z-10 w-full py-[2rem] sm:py-[2.5rem] lg:py-[3rem]">
        {/* Liquid glass background - only covers content area */}
        <div className="absolute inset-0 -z-0 overflow-hidden rounded-[2rem]">
          {/* Base glass layer */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[2rem]" aria-hidden />
          
          {/* Animated liquid glass waves */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/15 via-brand-aqua/20 to-brand-mint/15 backdrop-blur-xl rounded-[2rem]" aria-hidden />
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-brand-teal/25 via-transparent to-transparent backdrop-blur-2xl rounded-t-[2rem]" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-aqua/25 via-transparent to-transparent backdrop-blur-2xl rounded-b-[2rem]" aria-hidden />
          
          {/* Glass refraction effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-teal/20 blur-3xl animate-pulse-slow" aria-hidden />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-aqua/25 blur-3xl animate-pulse-slow delay-1000" aria-hidden />
          
          {/* Liquid glass shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer rounded-[2rem]" aria-hidden />
          
          {/* Border glow */}
          <div className="absolute inset-0 border border-white/40 shadow-[0_0_60px_rgba(30,154,162,0.3)] rounded-[2rem]" aria-hidden />
        </div>
        
        <div className="relative z-10 grid gap-[2rem] lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-[3rem]">
          {/* Left Content */}
          <div className="space-y-[2rem] order-2 lg:order-1">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal shadow-sm">
              <LuSparkles className="h-3.5 w-3.5" />
              <span>{heroContent.badge}</span>
            </div> */}

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold leading-[1.1] text-brand-navy sm:text-3xl lg:text-4xl xl:text-5xl">
                {heroContent.headline}
              </h1>
              <p className="text-base sm:text-base text-brand-charcoal/75 leading-relaxed max-w-2xl">
                {heroContent.subheadline}
              </p>
              
              {/* Credentials */}
              <div className="flex items-center gap-2 flex-wrap pt-2">
                <div className="flex items-center gap-2 text-sm text-brand-charcoal/70">
                  <LuGraduationCap className="h-4 w-4 text-brand-teal" />
                  <span className="font-medium">{doctorProfile.credentials.split(",")[0]}</span>
                </div>
                <span className="text-brand-charcoal/40">•</span>
                <div className="flex items-center gap-2 text-sm text-brand-charcoal/70">
                  <LuStethoscope className="h-4 w-4 text-brand-teal" />
                  <span className="font-medium">Fellowship in Advanced Arthroplasty</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {heroContent.stats.map((stat, index) => (
                <div key={index} className="rounded-xl bg-white/40 backdrop-blur-sm border border-white/30 p-4 text-center">
                  <div className="text-2xl font-bold text-brand-navy mb-1">{stat.value}</div>
                  <div className="text-xs text-brand-charcoal/70 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Specializations */}
            <div className="space-y-3 pt-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">Specialized Treatments</p>
              <div className="flex flex-wrap gap-2">
                {servicesOffered.slice(0, 4).map((service) => (
                  <div
                    key={service.slug}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/40 px-3 py-2 text-xs font-medium text-brand-navy hover:bg-white/70 hover:border-brand-teal/40 transition-colors"
                  >
                    <LuActivity className="h-3.5 w-3.5 text-brand-teal" />
                    <span>{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image - Clean PNG Display */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Image container - clean for PNG */}
              <div className="relative h-[20rem] md:h-[24rem] lg:h-[28rem] xl:h-[32rem]">
                <Image
                  src="/images/drtushar.png"
                  alt="Dr. Tushar Nayak - Orthopaedic Surgeon"
                  fill
                  priority
                  sizes="(min-width: 1280px) 500px, (min-width: 1024px) 450px, (min-width: 768px) 400px, 100vw"
                  className="object-contain object-bottom transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl px-4 py-3 shadow-xl z-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-aqua">
                    <LuAward className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">Expert Care</p>
                    <p className="text-sm font-bold text-brand-navy">18+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

