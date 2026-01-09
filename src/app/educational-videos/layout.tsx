import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Videos | Dr. Tushar Nayak",
  description: "Watch educational videos about orthopedic treatments, surgeries, and rehabilitation procedures.",
};

export default function EducationalVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


