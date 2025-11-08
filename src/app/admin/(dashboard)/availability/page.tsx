"use client";

import { useEffect, useMemo, useState } from "react";
import {
  LuCalendarClock,
  LuCalendarPlus,
  LuCircleDot,
  LuCopyPlus,
  LuLoader,
  LuMapPin,
  LuSettings2,
} from "react-icons/lu";
import { AvailabilityEntry, fetchAvailability } from "@/lib/admin-api";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { formatDate } from "@/utils/date";

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

export default function AdminAvailabilityPage() {
  const { accessToken } = useAdminAuth();

  const [availability, setAvailability] = useState<AvailabilityEntry[]>([]);
  const [isRecurring, setIsRecurring] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) {
      setAvailability([]);
      return;
    }
    let isMounted = true;
    setIsLoading(true);
    setError(null);

    fetchAvailability(accessToken, isRecurring ? { recurring: true } : undefined)
      .then((response) => {
        if (!isMounted) return;
        const collection = Array.isArray(response) ? response : response.availability ?? [];
        setAvailability(collection);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : "Failed to fetch availability.");
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [accessToken, isRecurring]);

  const recurringSlots = useMemo(() => availability.filter((item) => item.is_recurring), [availability]);
  const specificSlots = useMemo(
    () =>
      availability
        .filter((item) => !item.is_recurring)
        .sort((a, b) => toUTCValue(a.date) - toUTCValue(b.date)),
    [availability],
  );

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Availability Control</p>
            <h1 className="text-3xl font-bold text-white">Define when patients can book consultations</h1>
            <p className="mt-3 text-sm text-gray-300">
              Manage recurring clinic hours and special one-off camps. Update schedules based on surgery rosters.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.35em] text-indigo-200">
            <LuCalendarClock className="h-5 w-5" />
            Smart slot allocator active
          </div>
        </header>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setIsRecurring(true)}
            className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition ${
              isRecurring
                ? "border-indigo-400/40 bg-indigo-500/10 text-indigo-100"
                : "border-white/10 bg-white/5 text-gray-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
            }`}
          >
            Recurring slots
          </button>
          <button
            type="button"
            onClick={() => setIsRecurring(false)}
            className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition ${
              !isRecurring
                ? "border-indigo-400/40 bg-indigo-500/10 text-indigo-100"
                : "border-white/10 bg-white/5 text-gray-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
            }`}
          >
            One-off slots
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
          >
            <LuCalendarPlus className="h-4 w-4" />
            Add slot
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
          >
            <LuCopyPlus className="h-4 w-4" />
            Duplicate pattern
          </button>
        </div>
      </section>

      {error ? (
        <div className="rounded-3xl border border-red-400/40 bg-red-500/10 px-6 py-5 text-sm text-red-100">{error}</div>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Recurring blueprint</p>
          <h2 className="mt-2 text-xl font-bold text-white">Weekly cadence</h2>

          <div className="mt-6 space-y-4">
            {recurringSlots.length ? (
              recurringSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 px-4 py-4 text-sm text-indigo-100"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-indigo-200">
                    {slot.days?.map((day) => weekdayMap[day]).join(" · ")}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {slot.start_time} – {slot.end_time}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.35em] text-indigo-200">
                    {slot.slot_duration} min slots · ID {slot.id}
                  </p>
                </div>
              ))
            ) : (
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-gray-300">
                No recurring patterns set yet.
              </p>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Upcoming special clinics</p>
          <h2 className="mt-2 text-xl font-bold text-white">One-day super clinics</h2>

          <div className="mt-6 space-y-4">
            {specificSlots.length ? (
              specificSlots.map((slot) => (
                <div key={slot.id} className="rounded-2xl border border-purple-400/20 bg-purple-500/10 px-4 py-4 text-sm text-purple-100">
                  <p className="text-xs uppercase tracking-[0.35em] text-purple-200">
                    {slot.date
                      ? formatDate(slot.date, { weekday: "long", month: "short", day: "2-digit" })
                      : "Date TBA"}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {slot.start_time} – {slot.end_time}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.35em] text-purple-200">
                    {slot.slot_duration} min slots · ID {slot.id}
                  </p>
                </div>
              ))
            ) : (
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-gray-300">
                No one-off slots scheduled.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Clinic map</p>
          <h2 className="mt-2 text-xl font-bold text-white">Slot visibility preview</h2>
          <div className="mt-6 grid h-72 place-items-center rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 text-sm text-gray-300">
            <span className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-2">
              <LuMapPin className="h-5 w-5 text-indigo-200" />
              Clinic map visualization placeholder
            </span>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Connect <code className="rounded bg-gray-900 px-1 text-indigo-200">GET /api/slots/detailed/?date=YYYY-MM-DD</code> to drive this visualization with live slot data.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Automation recipes</p>
          <h2 className="mt-2 text-xl font-bold text-white">Hands-free scheduling</h2>
          <div className="mt-5 space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-4">
              <LuSettings2 className="mt-1 h-5 w-5 text-emerald-300" />
              <p>
                POST <code className="rounded bg-gray-900 px-1 text-emerald-200">/api/availability/</code> to create new availability windows. Include <code className="rounded bg-gray-900 px-1 text-emerald-200">days[]</code> for recurring schedules.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-4">
              <LuCircleDot className="mt-1 h-5 w-5 text-amber-300" />
              <p>
                Use PUT <code className="rounded bg-gray-900 px-1 text-amber-200">/api/availability/&lt;id&gt;/</code> to adjust slots. Conflicts automatically return <code className="rounded bg-gray-900 px-1 text-amber-200">400</code>.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-4">
              <LuLoader className="mt-1 h-5 w-5 text-red-300" />
              <p>
                When removing slots, guard against in-flight appointments. The API will block deletes if pending/confirmed bookings exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isLoading ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-gray-300">
          Syncing availability with the backend...
        </div>
      ) : null}
    </div>
  );
}

