import type { Metadata } from "next";
import { doctorProfile, servicesOffered, type FAQItem } from "@/data/site-content";

export const SITE_URL = "https://drtusharnayak.com";
export const SITE_NAME = "Dr. Tushar Nayak";
export const PHYSICIAN_ID = `${SITE_URL}/#physician`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const NISHTHA_ID = `${SITE_URL}/#nishtha-healthcare`;
export const SPARSH_ID = `${SITE_URL}/#sparsh-hospital-hennur`;

export const PRIVATE_PATHS = ["/admin", "/invoice", "/api/"];

const INDEXABLE_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const NOINDEX_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: false,
  nocache: true,
};

export type Crumb = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  if (path === "/" || path === "") {
    return SITE_URL;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function gaMeasurementId(value: string | undefined) {
  if (!value) return undefined;
  const match = value.match(/G-[A-Z0-9]+/i);
  return match ? match[0].toUpperCase() : undefined;
}

export function verificationToken(value: string | undefined) {
  if (!value) return undefined;
  const trimmed = value.trim();
  const fromMeta = trimmed.match(/content=["']([^"']+)["']/i);
  const token = (fromMeta?.[1] ?? trimmed).trim();
  if (!/^[A-Za-z0-9_-]{6,200}$/.test(token)) return undefined;
  return token;
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  ogType = "website",
  images,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  ogType?: "website" | "article";
  images?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path === "" ? "/" : path },
    robots: index ? INDEXABLE_ROBOTS : NOINDEX_ROBOTS,
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      locale: "en_IN",
      siteName: SITE_NAME,
      images: images?.map((image) => absoluteUrl(image)),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images?.map((image) => absoluteUrl(image)),
    },
  };
}

const nishthaAddress = {
  "@type": "PostalAddress",
  streetAddress: "Ground Floor, Tarun Tower, 9, Kaggadasapura Main Rd, Kondappa Layout, C V Raman Nagar",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560093",
  addressCountry: "IN",
};

const sparshAddress = {
  "@type": "PostalAddress",
  streetAddress: "DivyaSree Avance, Hennur Bagalur Main Rd, Chikkanna Layout, HBR Layout, Geddalahalli",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560043",
  addressCountry: "IN",
};

const areaServed = {
  "@type": "City",
  name: "Bengaluru",
  alternateName: "Bangalore",
};

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        email: doctorProfile.contact.email,
        telephone: "+918810605887",
        description:
          "Orthopaedic practice of Dr. Tushar Nayak in Bangalore, covering joint replacement, arthroscopy, sports injuries, spine care, and trauma.",
        areaServed,
        sameAs: [
          ...doctorProfile.socials.map((social) => social.url.split("?")[0]),
          "https://www.researchgate.net/profile/Tushar-Nayak-2",
          "https://www.sparshhospital.com/doctors/dr-tushar-nayak/",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+918810605887",
            contactType: "appointments",
            areaServed: "IN",
            availableLanguage: "English",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: "Official website of Dr. Tushar Nayak, orthopaedic surgeon in Bangalore.",
        inLanguage: "en-IN",
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "MedicalClinic",
        "@id": NISHTHA_ID,
        name: "Nishtha Healthcare & Diagnostic Center",
        url: absoluteUrl("/booking/nishtha"),
        image: absoluteUrl("/images/img1.avif"),
        telephone: "+918810605887",
        email: doctorProfile.contact.email,
        address: nishthaAddress,
        areaServed,
        medicalSpecialty: "https://schema.org/Orthopedic",
        employee: { "@id": PHYSICIAN_ID },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "18:00",
            closes: "21:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "09:00",
            closes: "13:00",
          },
        ],
      },
      {
        "@type": "Hospital",
        "@id": SPARSH_ID,
        name: "Sparsh Hospital, Hennur",
        url: "https://www.sparshhospital.com/doctors/dr-tushar-nayak/",
        telephone: "+918061222000",
        address: sparshAddress,
        areaServed,
        medicalSpecialty: "https://schema.org/Orthopedic",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "17:00",
          },
        ],
      },
      {
        "@type": "Physician",
        "@id": PHYSICIAN_ID,
        name: SITE_NAME,
        url: SITE_URL,
        image: absoluteUrl("/images/img1.avif"),
        description: doctorProfile.intro,
        email: doctorProfile.contact.email,
        telephone: "+918810605887",
        medicalSpecialty: "https://schema.org/Orthopedic",
        knowsLanguage: "English",
        areaServed,
        address: nishthaAddress,
        hospitalAffiliation: [{ "@id": SPARSH_ID }, { "@id": NISHTHA_ID }],
        worksFor: { "@id": ORGANIZATION_ID },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "All India Institute of Medical Sciences, New Delhi",
        },
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MS Orthopaedics, AIIMS Delhi" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "DNB Orthopaedics" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MNAMS" },
        ],
        knowsAbout: servicesOffered.map((service) => service.title),
        availableService: servicesOffered.map((service) => ({
          "@type": "MedicalProcedure",
          name: service.title,
          url: absoluteUrl(`/treatments/${service.slug}`),
          description: service.description,
        })),
        sameAs: [
          ...doctorProfile.socials.map((social) => social.url.split("?")[0]),
          "https://www.researchgate.net/profile/Tushar-Nayak-2",
          "https://www.sparshhospital.com/doctors/dr-tushar-nayak/",
        ],
      },
    ],
  };
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? [absoluteUrl(image)] : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
    author: { "@id": PHYSICIAN_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
  };
}

const procedureBody: Record<string, string> = {
  "knee-replacement": "Knee",
  "hip-joint-replacement": "Hip",
  "knee-arthroscopy": "Knee",
  "back-pain-management": "Spine",
  "spinal-surgeries": "Spine",
  "sports-injuries": "Joint",
  physiotherapy: "Musculoskeletal system",
  arthritis: "Joint",
  "trauma-management": "Bone",
};

export function treatmentSchema({
  name,
  description,
  path,
  slug,
}: {
  name: string;
  description: string;
  path: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PHYSICIAN_ID },
    mainEntity: {
      "@type": "MedicalProcedure",
      name,
      description,
      bodyLocation: procedureBody[slug],
      relevantSpecialty: "https://schema.org/Orthopedic",
      procedureType: "https://schema.org/TherapeuticProcedure",
      performer: { "@id": PHYSICIAN_ID },
    },
  };
}

export const treatmentSeo: Record<string, { title: string; description: string }> = {
  "knee-replacement": {
    title: "Knee Replacement Surgeon in Bangalore",
    description:
      "Knee replacement in Bangalore by Dr. Tushar Nayak, including robotic alignment and a planned recovery at Sparsh Hospital or Nishtha Healthcare.",
  },
  "hip-joint-replacement": {
    title: "Hip Replacement Surgeon in Bangalore",
    description:
      "Hip replacement in Bangalore by Dr. Tushar Nayak. Total hip replacement and revision care with early walking and dislocation-aware rehab.",
  },
  "knee-arthroscopy": {
    title: "Knee Arthroscopy in Bangalore",
    description:
      "Knee arthroscopy in Bangalore for cartilage, ligament, and sports injuries. Dr. Tushar Nayak offers keyhole diagnosis and a clear recovery plan.",
  },
  "back-pain-management": {
    title: "Back Pain Specialist in Bangalore",
    description:
      "Back pain treatment in Bangalore by Dr. Tushar Nayak. Assessment, non-surgical care, and clear advice on when spine surgery is appropriate.",
  },
  "spinal-surgeries": {
    title: "Spine Surgeon in Bangalore",
    description:
      "Spine surgery in Bangalore for disc, compression, and trauma-related problems. Dr. Tushar Nayak explains options and recovery before treatment.",
  },
  "sports-injuries": {
    title: "Sports Injury Doctor in Bangalore",
    description:
      "Sports injury doctor in Bangalore for knee, shoulder, and ankle injuries. Arthroscopy and return-to-sport rehab with Dr. Tushar Nayak.",
  },
  physiotherapy: {
    title: "Orthopaedic Physiotherapy in Bangalore",
    description:
      "Orthopaedic physiotherapy in Bangalore after joint replacement, fracture, or sports injury, coordinated with Dr. Tushar Nayak's surgical plan.",
  },
  arthritis: {
    title: "Arthritis Treatment in Bangalore",
    description:
      "Arthritis treatment in Bangalore for knee, hip, and joint pain. Non-surgical care first, and joint replacement when it is the right next step.",
  },
  "trauma-management": {
    title: "Fracture and Trauma Care in Bangalore",
    description:
      "Fracture and orthopaedic trauma care in Bangalore by Dr. Tushar Nayak, with fixation, follow-up, and rehabilitation for bone and joint injuries.",
  },
};
