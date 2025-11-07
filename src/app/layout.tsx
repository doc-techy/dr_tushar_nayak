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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Dark base layer */}
          <div className="absolute inset-0 bg-gray-950" aria-hidden />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" aria-hidden />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-gray-950 to-purple-950/50" aria-hidden />
          
          {/* Large glowing orbs with animation */}
          <div className="absolute left-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-slow" aria-hidden />
          <div className="absolute right-[15%] top-[25%] h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[100px] animate-pulse-slow delay-1000" aria-hidden />
          <div className="absolute left-[50%] top-[50%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/15 blur-[110px] animate-pulse-slow delay-2000" aria-hidden />
          <div className="absolute bottom-[20%] left-[20%] h-[480px] w-[480px] rounded-full bg-indigo-600/18 blur-[130px] animate-pulse-slow delay-3000" aria-hidden />
          <div className="absolute bottom-[10%] right-[25%] h-[420px] w-[420px] rounded-full bg-purple-600/15 blur-[115px] animate-pulse-slow delay-1500" aria-hidden />
        </div>
        <SiteHeader />
        <main className="relative z-0">{children}</main>
        <SiteFooter />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
