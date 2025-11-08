"use client";

import { ReactNode } from "react";

type StatCardProps = {
  label: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
  accent?: "indigo" | "purple" | "pink" | "emerald";
  description?: string;
};

const accentStyles: Record<NonNullable<StatCardProps["accent"]>, string> = {
  indigo: "from-indigo-500/80 to-indigo-500/40 text-indigo-200",
  purple: "from-purple-500/80 to-purple-500/40 text-purple-200",
  pink: "from-pink-500/80 to-pink-500/40 text-pink-200",
  emerald: "from-emerald-500/80 to-emerald-500/40 text-emerald-200",
};

export function StatCard({ label, value, delta, icon, accent = "indigo", description }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10">
      <div
        className={`absolute right-6 top-6 h-16 w-16 rounded-2xl bg-gradient-to-br ${accentStyles[accent]} opacity-80 blur-3xl transition group-hover:opacity-100`}
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-400">{label}</p>
          <p className="mt-4 text-4xl font-black text-white">{value}</p>
          {delta ? <p className="mt-2 text-xs uppercase tracking-[0.35em] text-indigo-200">{delta}</p> : null}
        </div>
        {icon ? <div className="flex h-12 w-12 items-center justify-center text-2xl text-indigo-200">{icon}</div> : null}
      </div>

      {description ? <p className="relative mt-5 text-sm text-gray-400">{description}</p> : null}
    </div>
  );
}

