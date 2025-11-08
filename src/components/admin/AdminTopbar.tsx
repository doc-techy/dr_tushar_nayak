"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LuMenu, LuX, LuBell, LuCircleUser, LuShieldCheck } from "react-icons/lu";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export function AdminTopbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { logout, user, isDemo } = useAdminAuth();

  const { displayName, roleLabel } = useMemo(() => {
    if (!user) {
      return { displayName: isDemo ? "Demo Admin" : "Admin", roleLabel: isDemo ? "Demo Mode" : "Console" };
    }
    const fullName = [user.first_name, user.last_name].filter(Boolean).join(" ").trim();
    const resolvedName = fullName || user.username;
    const role =
      user.is_superuser ? "Superuser" : user.is_staff ? "Staff" : user.username === "admin" ? "Administrator" : "User";
    return { displayName: resolvedName, roleLabel: role };
  }, [user, isDemo]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gray-950/70 backdrop-blur-lg">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setIsSheetOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-md"
            aria-label="Toggle Menu"
          >
            {isSheetOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
          </button>
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/40">
              <LuShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-indigo-200">Admin Console</p>
              <p className="text-base font-semibold text-white">Dr.Tushar Nayak</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Orthocare Intelligence</p>
          <h1 className="text-xl font-bold text-white">Clinic Operations Command Centre</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-md hover:border-indigo-400/40 hover:bg-indigo-500/10"
          >
            <LuBell className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={logout}
            className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-[0.35em] text-gray-300 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-white lg:flex"
          >
            Logout
          </button>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <LuCircleUser className="h-7 w-7 text-indigo-300" />
            <div>
              <p className="text-sm font-semibold text-white">{displayName}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                {isDemo ? "Demo Mode" : roleLabel}
              </p>
            </div>
          </div>
        </div>
      </div>

      {isSheetOpen ? (
        <div className="border-t border-white/10 bg-gray-950/90 px-6 py-6 lg:hidden">
          <nav className="space-y-3">
            {[
              { href: "/admin", label: "Overview" },
              { href: "/admin/appointments", label: "Appointments" },
              { href: "/admin/availability", label: "Availability" },
              { href: "/admin/blocked-slots", label: "Blocked Slots" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSheetOpen(false)}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-white transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
              >
                {item.label}
                <span className="text-xs uppercase tracking-[0.35em] text-indigo-300">View</span>
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              logout();
              setIsSheetOpen(false);
            }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-[0.35em] text-gray-300 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-white"
          >
            Logout
          </button>
        </div>
      ) : null}
    </header>
  );
}

