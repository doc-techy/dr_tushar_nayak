import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/site-content";
import { faqSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <HeroSection />
      <ServicesSection />
      <BlogSection />
      <FAQSection />
    </>
  );
}
