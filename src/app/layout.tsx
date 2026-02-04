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
  title: `${doctorProfile.name} | Orthopaedic Surgeon in Bangalore`,
  description:
    "Evidence-led orthopaedic care by Dr. Tushar Nayak — robotic joint replacement, sports injury rehabilitation, and joint preservation programs in Bangalore.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${doctorProfile.name} | Orthopaedic Surgeon in Bangalore`,
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
    title: `${doctorProfile.name} | Orthopaedic Surgeon in Bangalore`,
    description:
      "Precision orthopaedics, minimally invasive surgery, and holistic post-operative rehabilitation by Dr. Tushar Nayak.",
  },
  keywords: [
    "Dr Tushar Nayak",
    "orthopaedic surgeon Bangalore",
    "robotic knee replacement",
    "hip replacement specialist",
    "sports injury doctor",
    "orthopaedic surgeon Bengaluru",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 overflow-x-hidden`}>
        {/* Global background - same color throughout all pages */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-teal-50/95">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" aria-hidden />
          <div className="absolute -top-40 left-1/2 w-[680px] h-[680px] -translate-x-1/2 bg-teal-100/30 blur-3xl rounded-full" aria-hidden />
          <div className="absolute bottom-[-10%] right-[10%] w-[520px] h-[520px] bg-teal-100/25 blur-3xl rounded-full" aria-hidden />
          <div className="absolute top-[30%] left-[-10%] w-[420px] h-[420px] bg-brand-navy/5 blur-[180px] rounded-full" aria-hidden />
        </div>
        
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
