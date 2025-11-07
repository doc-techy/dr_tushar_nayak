import { headers } from "next/headers";
import { AboutSection } from "@/components/sections/AboutSection";
import type {
  DoctorProfile,
  EducationHighlight,
  ExperienceHighlight,
} from "@/data/site-content";

type AboutApiResponse = {
  doctorProfile: DoctorProfile;
  educationTimeline: EducationHighlight[];
  experienceHighlights: ExperienceHighlight[];
};

async function getAboutData(): Promise<AboutApiResponse> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL;
  const headersList = await headers();
  const incomingHost = headersList.get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl =
    siteUrl ?? (incomingHost ? `${protocol}://${incomingHost}` : vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

  const response = await fetch(`${baseUrl}/api/about`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error("Failed to load about data");
  }

  return response.json();
}

export default async function AboutPage() {
  const { doctorProfile, educationTimeline, experienceHighlights } = await getAboutData();

  return (
    <AboutSection
      profile={doctorProfile}
      education={educationTimeline}
      experience={experienceHighlights}
    />
  );
}

