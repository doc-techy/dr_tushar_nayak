"use client";

import { useMemo, useState } from "react";
import { LuFilter, LuRefreshCw, LuSearch, LuCircleCheck, LuCircleX, LuClock3, LuDownload } from "react-icons/lu";
import { AppointmentTable } from "@/components/admin/AppointmentTable";
import { formatDate } from "@/utils/date";
import { demoAppointments } from "@/data/admin-demo";
import type { Appointment } from "@/lib/admin-api";

const statusLabels: Record<Appointment["status"], string> = {
  pending: "Pending review",
  confirmed: "Confirmed",
  cancelled: "Cancelled",
  completed: "Completed",
};

function toUTCValue(value: string) {
  if (!value) {
    return Number.POSITIVE_INFINITY;
  }

  const normalized = value.includes("T") ? value : `${value}T00:00:00Z`;
  const timestamp = Date.parse(normalized);
  return Number.isNaN(timestamp) ? Number.POSITIVE_INFINITY : timestamp;
}

export default function AdminAppointmentsPage() {
  const [appointments] = useState(demoAppointments);
  const [statusFilter, setStatusFilter] = useState<Appointment["status"] | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const filteredAppointments = useMemo(() => {
    return appointments
      .filter((appointment) => {
        if (statusFilter !== "all" && appointment.status !== statusFilter) {
          return false;
        }
        if (!searchTerm) return true;
        const lowerTerm = searchTerm.toLowerCase();
        return (
          appointment.name.toLowerCase().includes(lowerTerm) ||
          appointment.email.toLowerCase().includes(lowerTerm) ||
          appointment.phone.toLowerCase().includes(lowerTerm)
        );
      })
      .map((appointment) => ({
        ...appointment,
        date: formatDate(appointment.date, { month: "short", day: "2-digit", year: "numeric" }),
      }));
  }, [appointments, searchTerm, statusFilter]);

  const timelineGroups = useMemo(() => {
    const grouped = appointments.reduce<Record<string, Appointment[]>>((acc, appointment) => {
      const key = appointment.date;
      if (!acc[key]) acc[key] = [];
      acc[key].push(appointment);
      return acc;
    }, {});

    return Object.entries(grouped)
      .sort(([dateA], [dateB]) => toUTCValue(dateA) - toUTCValue(dateB))
      .slice(0, 4);
  }, [appointments]);

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Appointments Command</p>
            <h1 className="text-3xl font-bold text-white">Manage patient requests and pipeline</h1>
            <p className="mt-3 text-sm text-gray-300">
              Confirm, reschedule or cancel appointments with smart triage and automated notifications.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.35em] text-indigo-200">
            <LuClock3 className="h-5 w-5" />
            Auto reminders enabled
          </div>
        </header>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
              <LuSearch className="h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search patient, email, or phone"
                className="w-60 bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gray-400">
              <LuFilter className="h-4 w-4" />
              <select
                className="bg-transparent text-white focus:outline-none"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as Appointment["status"] | "all")}
              >
                <option value="all">All statuses</option>
                {Object.keys(statusLabels).map((status) => (
                  <option key={status} value={status}>
                    {statusLabels[status as Appointment["status"]]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActionMessage("Demo data refreshed.")}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <LuRefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button
              type="button"
              onClick={() => setActionMessage("Sample CSV export triggered in demo mode.")}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <LuDownload className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>
      </section>

      {actionMessage ? (
        <div className="rounded-3xl border border-indigo-400/30 bg-indigo-500/10 px-6 py-4 text-sm text-indigo-100">
          {actionMessage}
        </div>
      ) : null}

      {filteredAppointments.length ? (
        <AppointmentTable
          appointments={filteredAppointments}
          onUpdateStatus={(appointment, status) => {
            setActionMessage(`Simulated update: ${appointment.name} → ${status}`);
          }}
          onDelete={(appointment) => {
            setActionMessage(`Simulated removal: ${appointment.name}`);
          }}
          disabled
        />
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-sm text-gray-400">
          No appointments match the current filters. Adjust the filters or refresh to try again.
        </div>
      )}

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Daily timeline</p>
          <h2 className="mt-2 text-xl font-bold text-white">Upcoming flow</h2>
          <div className="mt-6 space-y-6">
            {timelineGroups.length ? (
              timelineGroups.map(([date, items]) => (
                <div key={date} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-indigo-200">
                    {formatDate(date, { weekday: "long", month: "short", day: "2-digit" })}
                  </p>
                  <ul className="mt-3 space-y-3 text-sm text-gray-300">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-start justify-between gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                        <div>
                          <p className="font-semibold text-white">{item.name}</p>
                          <p className="text-xs uppercase tracking-[0.35em] text-gray-400">{item.time}</p>
                        </div>
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${
                            item.status === "confirmed"
                              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                              : item.status === "pending"
                              ? "border-amber-400/30 bg-amber-500/10 text-amber-200"
                              : "border-white/10 bg-white/5 text-gray-200"
                          }`}
                        >
                          {statusLabels[item.status]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-gray-400">
                No upcoming appointments on the calendar yet.
              </div>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Workflow ideas</p>
          <h2 className="mt-2 text-xl font-bold text-white">Integrate next actions</h2>
          <div className="mt-6 space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-4">
              <LuCircleCheck className="mt-1 h-5 w-5 text-emerald-300" />
              <p>Confirm upcoming surgeries and trigger concierge callbacks.</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-4">
              <LuCircleX className="mt-1 h-5 w-5 text-red-300" />
              <p>Flag patient-requested cancellations for manual review.</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-4">
              <LuClock3 className="mt-1 h-5 w-5 text-indigo-200" />
              <p>Cross-check availability for high-demand evening sessions.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-gray-300">
        Demo mode preview. Toggle through sample data.
      </div>
    </div>
  );
}

