"use client";

import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";

type AdminDashboardLayoutProps = {
  children: React.ReactNode;
};

export default function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  return (
    <AdminGuard>
      <div className="flex min-h-screen flex-col lg:flex-row">
        <AdminSidebar />
        <div className="flex flex-1 flex-col">
          <AdminTopbar />
          <div className="flex-1 overflow-y-auto px-4 py-8 sm:px-6 lg:px-10">
            <div className="mx-auto w-full max-w-6xl space-y-8">{children}</div>
          </div>
        </div>
      </div>
    </AdminGuard>
  );
}

