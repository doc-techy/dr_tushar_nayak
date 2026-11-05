import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Orthopaedic Education Videos",
  description:
    "Educational videos on knee replacement, hip replacement, arthroscopy, sports injuries, and recovery from Dr. Tushar Nayak in Bangalore.",
  path: "/educational-videos",
});

export default function EducationalVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Educational videos", path: "/educational-videos" },
          ]}
        />
      </div>
      {children}
    </>
  );
}
