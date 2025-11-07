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
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gray-950" aria-hidden />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-gray-950 to-purple-950/60" aria-hidden />
          <div className="absolute top-10 left-20 w-[480px] h-[480px] bg-indigo-600/20 blur-3xl rounded-full" aria-hidden />
          <div className="absolute bottom-16 right-16 w-[420px] h-[420px] bg-purple-600/25 blur-3xl rounded-full" aria-hidden />
        </div>
        <SiteHeader />
        <main className="relative z-0">{children}</main>
        <SiteFooter />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
