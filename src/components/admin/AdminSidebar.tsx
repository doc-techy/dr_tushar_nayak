"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuCalendarCheck2,
  LuClock3,
  LuLayoutDashboard,
  LuLogOut,
  LuShieldCheck,
  LuTable,
} from "react-icons/lu";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { useCallback } from "react";

const navigation = [
  { name: "Overview", href: "/admin", icon: LuLayoutDashboard },
  { name: "Appointments", href: "/admin/appointments", icon: LuTable },
  { name: "Availability", href: "/admin/availability", icon: LuClock3 },
  { name: "Blocked Slots", href: "/admin/blocked-slots", icon: LuCalendarCheck2 },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAdminAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <aside className="relative hidden w-72 shrink-0 border-r border-white/10 bg-white/5/40 px-6 py-8 backdrop-blur-2xl lg:block">
      <div className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/40">
            <LuShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-indigo-200">Admin Console</p>
            <p className="text-lg font-semibold text-white">Dr.Tushar Nayak</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "border-indigo-400/50 bg-indigo-500/10 text-indigo-100 shadow-lg shadow-indigo-500/20"
                    : "border-white/10 bg-white/5 text-gray-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-indigo-200" : "text-indigo-300/80 group-hover:text-indigo-200"}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-indigo-200">Quick Stats</p>
          <p className="mt-3 text-sm text-gray-300">
            Monitor appointments, manage recurring schedules and respond to patient requests faster.
          </p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-[0.35em] text-gray-300 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-white"
        >
          <LuLogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}

