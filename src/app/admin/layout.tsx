"use client";

import { AdminAuthProvider } from "@/contexts/AdminAuthContext";

type AdminRootLayoutProps = {
  children: React.ReactNode;
};

export default function AdminRootLayout({ children }: AdminRootLayoutProps) {
  return (
    <AdminAuthProvider>
      <div className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-gray-950 to-purple-950/60" />
          <div className="absolute -top-48 left-1/3 w-[520px] h-[520px] bg-indigo-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-[-20%] right-[5%] w-[580px] h-[580px] bg-purple-600/20 blur-3xl rounded-full" />
        </div>
        <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
      </div>
    </AdminAuthProvider>
  );
}

