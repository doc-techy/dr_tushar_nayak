"use client";

import { useMemo, useState } from "react";
import {
  LuTriangleAlert,
  LuCalendarX2,
  LuClipboardList,
  LuExternalLink,
  LuCirclePlus,
  LuShieldAlert,
} from "react-icons/lu";
import { formatDate } from "@/utils/date";
import { demoBlockedSlots } from "@/data/admin-demo";

const weekdayMap: Record<number, string> = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

function toUTCValue(value?: string | null) {
  if (!value) return Number.POSITIVE_INFINITY;
  const normalized = value.includes("T") ? value : `${value}T00:00:00Z`;
  const timestamp = Date.parse(normalized);
  return Number.isNaN(timestamp) ? Number.POSITIVE_INFINITY : timestamp;
}

export default function AdminBlockedSlotsPage() {
  const [blockedSlots] = useState(demoBlockedSlots);

  const recurringBlocks = useMemo(() => blockedSlots.filter((item) => item.is_recurring), [blockedSlots]);
  const upcomingBlocks = useMemo(() => {
    return blockedSlots
      .filter((item) => !item.is_recurring && item.date)
      .sort((a, b) => toUTCValue(a.date) - toUTCValue(b.date));
  }, [blockedSlots]);

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Blocked slots monitor</p>
            <h1 className="text-3xl font-bold text-white">Protect critical schedules from double bookings</h1>
            <p className="mt-3 text-sm text-gray-300">
              Reserve time for surgery, research, or travel. Keep patients informed with proactive notifications.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.35em] text-amber-200">
            <LuShieldAlert className="h-5 w-5" />
            Conflict protection active
          </div>
        </header>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <LuCirclePlus className="h-4 w-4" />
              Add block
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <LuClipboardList className="h-4 w-4" />
              Apply template
            </button>
          </div>
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
            Syncs with <code className="rounded bg-gray-900 px-1 text-indigo-200">/api/blocked-slots/</code>
          </p>
        </div>
      </section>

      <div className="rounded-3xl border border-indigo-400/30 bg-indigo-500/10 px-6 py-5 text-sm text-indigo-100">
        Demo blocked slot schedule preview. Swap with live data when ready.
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Recurring restrictions</p>
          <h2 className="mt-2 text-xl font-bold text-white">Operational guardrails</h2>

          <div className="mt-6 space-y-4">
            {recurringBlocks.length ? (
              recurringBlocks.map((block) => (
                <div key={block.id} className="rounded-2xl border border-amber-400/20 bg-amber-500/10 px-4 py-4 text-sm text-amber-100">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200">
                    {block.days?.map((day) => weekdayMap[day]).join(" · ") ?? "Recurring"}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {block.start_time} – {block.end_time}
                  </p>
                  {block.reason ? (
                    <p className="mt-1 text-xs uppercase tracking-[0.35em] text-amber-200">{block.reason}</p>
                  ) : null}
                </div>
              ))
            ) : (
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-gray-300">
                No repeating blocks configured.
              </p>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Upcoming critical events</p>
          <h2 className="mt-2 text-xl font-bold text-white">Blocked for surgeries & outreach</h2>

          <div className="mt-6 space-y-4">
            {upcomingBlocks.length ? (
              upcomingBlocks.map((block) => (
                <div key={block.id} className="rounded-2xl border border-purple-400/20 bg-purple-500/10 px-4 py-4 text-sm text-purple-100">
                  <p className="text-xs uppercase tracking-[0.35em] text-purple-200">
                    {block.date
                      ? formatDate(block.date, { weekday: "long", month: "short", day: "2-digit" })
                      : "Date TBA"}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {block.start_time} – {block.end_time}
                  </p>
                  {block.reason ? (
                    <p className="mt-1 text-xs uppercase tracking-[0.35em] text-purple-200">{block.reason}</p>
                  ) : null}
                </div>
              ))
            ) : (
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-gray-300">
                No upcoming blocks found.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Email helper flows</p>
        <h2 className="mt-2 text-xl font-bold text-white">Automate notifications</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-4 text-sm text-indigo-100">
            <p className="text-xs uppercase tracking-[0.35em] text-indigo-200">Confirmations</p>
            <p className="mt-2 text-xs text-indigo-100">
              Auto-confirm emails when operations slots are green-lit.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-4 text-sm text-rose-100">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-200">Cancellations</p>
            <p className="mt-2 text-xs text-rose-100">
              Provide quick-cancel links for patients on hold.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 p-6 backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Demo blueprint</p>
        <h2 className="mt-2 text-xl font-bold text-white">Smart blocking ideas</h2>
        <div className="mt-5 space-y-4 text-sm text-gray-300">
          <div className="flex items-start gap-3 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-4">
            <LuExternalLink className="mt-1 h-5 w-5 text-indigo-200" />
            <p>Reserve time after major surgeries for detailed follow-ups.</p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-4">
            <LuTriangleAlert className="mt-1 h-5 w-5 text-emerald-200" />
            <p>Mark recurring R&D hours so the core team stays aligned.</p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-4">
            <LuCalendarX2 className="mt-1 h-5 w-5 text-rose-200" />
            <p>Block staff offsites in advance to avoid last-minute gaps.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

