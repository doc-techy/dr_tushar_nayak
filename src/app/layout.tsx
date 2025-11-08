import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { doctorProfile } from "@/data/site-content";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://drtusharnayak.com";

export const metadata: Metadata = {
  title: `${doctorProfile.name} | Orthopaedic Surgeon in Ahmedabad`,
  description:
    "Evidence-led orthopaedic care by Dr. Tushar Nayak — robotic joint replacement, sports injury rehabilitation, and joint preservation programs in Ahmedabad.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${doctorProfile.name} | Orthopaedic Surgeon in Ahmedabad`,
    description:
      "Robotic knee and hip replacement, sports injury clinic, and personalised rehabilitation backed by global fellowships.",
    url: siteUrl,
    siteName: doctorProfile.name,
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctorProfile.name} | Orthopaedic Surgeon`,
    description:
      "Precision orthopaedics, minimally invasive surgery, and holistic post-operative rehabilitation at Apex Orthocare Hospital.",
  },
  keywords: [
    "Dr Tushar Nayak",
    "orthopaedic surgeon Ahmedabad",
    "robotic knee replacement",
    "hip replacement specialist",
    "sports injury doctor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white overflow-x-hidden`}>
        <SiteHeader />
        <main className="relative z-0">{children}</main>
        <SiteFooter />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
