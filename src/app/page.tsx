import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="relative w-full bg-gray-950">
      <HeroSection />
      <ServicesSection />
      <BlogSection />
      <FAQSection />
    </div>
  );
}
