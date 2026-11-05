import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { doctorProfile } from "@/data/site-content";
import { siteGraph, SITE_NAME, SITE_URL, verificationToken } from "@/lib/seo";

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

const homeTitle = `${SITE_NAME} | Orthopaedic Surgeon in Bangalore`;
const homeDescription =
  "Orthopaedic surgeon in Bangalore for knee and hip replacement, arthroscopy, sports injuries, and spine care. Book Dr. Tushar Nayak.";

const googleVerification = verificationToken(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION);
const bingVerification = verificationToken(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION);

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: homeDescription,
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: doctorProfile.name, url: SITE_URL }],
  creator: doctorProfile.name,
  publisher: doctorProfile.name,
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/img1.avif",
        alt: "Dr. Tushar Nayak, orthopaedic surgeon in Bangalore",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/images/img1.avif"],
  },
  keywords: [
    "Dr Tushar Nayak",
    "orthopaedic surgeon Bangalore",
    "orthopedic doctor Bengaluru",
    "knee replacement surgeon Bangalore",
    "hip replacement Bangalore",
    "sports injury doctor Bangalore",
    "arthroscopy Bangalore",
    "spine surgeon Bangalore",
  ],
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white overflow-x-hidden`}>
        <JsonLd data={siteGraph()} />
        <GoogleAnalytics />
        {/* Global background - dark blue throughout all pages */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-[#0a1628]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" aria-hidden />
          <div className="absolute -top-40 left-1/2 w-[680px] h-[680px] -translate-x-1/2 bg-brand-teal/8 blur-3xl rounded-full" aria-hidden />
          <div className="absolute bottom-[-10%] right-[10%] w-[520px] h-[520px] bg-brand-teal/6 blur-3xl rounded-full" aria-hidden />
          <div className="absolute top-[30%] left-[-10%] w-[420px] h-[420px] bg-brand-navy/30 blur-[180px] rounded-full" aria-hidden />
        </div>
        
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
