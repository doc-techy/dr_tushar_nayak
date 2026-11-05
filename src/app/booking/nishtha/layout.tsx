import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book at Nishtha Healthcare, Bangalore",
  description:
    "Book an evening or Sunday orthopaedic consultation with Dr. Tushar Nayak at Nishtha Healthcare, CV Raman Nagar, Bengaluru 560093.",
  path: "/booking/nishtha",
});

export default function NishthaBookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Book an appointment", path: "/booking" },
            { name: "Nishtha Healthcare", path: "/booking/nishtha" },
          ]}
        />
      </div>
      {children}
    </>
  );
}
