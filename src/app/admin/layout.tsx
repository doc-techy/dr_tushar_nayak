import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { NOINDEX_ROBOTS } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Clinic admin",
  },
  robots: NOINDEX_ROBOTS,
  alternates: { canonical: "/admin" },
};

type AdminRootLayoutProps = {
  children: React.ReactNode;
};

export default function AdminRootLayout({ children }: AdminRootLayoutProps) {
  return <AdminShell>{children}</AdminShell>;
}
