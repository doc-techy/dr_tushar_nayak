import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-gray-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-brand-navy/5" aria-hidden />
        <div className="absolute -top-40 left-1/2 w-[680px] h-[680px] -translate-x-1/2 bg-teal-100/40 blur-3xl rounded-full" aria-hidden />
        <div className="absolute bottom-[-10%] right-[10%] w-[520px] h-[520px] bg-teal-100/30 blur-3xl rounded-full" aria-hidden />
        <div className="absolute top-[30%] left-[-10%] w-[420px] h-[420px] bg-brand-navy/10 blur-[180px] rounded-full" aria-hidden />
      </div>

      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <div className="relative z-20 pt-[100vh] bg-white">
          <ServicesSection />
          <BlogSection />
          <FAQSection />
        </div>
      </main>
    </div>
  );
}
