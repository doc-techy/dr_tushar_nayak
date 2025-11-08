"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { LuFilter, LuRefreshCw, LuSearch, LuCircleCheck, LuCircleX, LuClock3, LuDownload } from "react-icons/lu";
import {
  Appointment,
  deleteAppointment as apiDeleteAppointment,
  fetchAppointments,
  updateAppointment,
} from "@/lib/admin-api";
import { AppointmentTable } from "@/components/admin/AppointmentTable";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { formatDate } from "@/utils/date";

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
  const auth = useAdminAuth();
  const accessToken = auth.accessToken;
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [statusFilter, setStatusFilter] = useState<Appointment["status"] | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [processingId, setProcessingId] = useState<number | null>(null);

  useEffect(() => {
    if (!accessToken) {
      setAppointments([]);
      setTotalPages(1);
      return;
    }

    let isMounted = true;
    setIsFetching(true);
    setError(null);

    fetchAppointments(accessToken, page, 12)
      .then((data) => {
        if (!isMounted) return;
        setAppointments(data.appointments);
        setTotalPages(data.pagination.total_pages);
        setIsFetching(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : "Unable to fetch appointments.");
        setIsFetching(false);
      });

    return () => {
      isMounted = false;
    };
  }, [accessToken, page]);

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

  const handleStatusChange = useCallback(
    async (appointment: Appointment, status: Appointment["status"]) => {
      if (!accessToken || status === appointment.status) return;
      setProcessingId(appointment.id);
      setActionError(null);
      setActionSuccess(null);
      try {
        const response = await updateAppointment(accessToken, appointment.id, { status });
        const updated = response.appointment ?? response;
        setAppointments((prev) => prev.map((item) => (item.id === appointment.id ? { ...item, ...updated } : item)));
        setActionSuccess(`Updated ${appointment.name} to ${status}.`);
      } catch (err) {
        setActionError(err instanceof Error ? err.message : "Unable to update appointment.");
      } finally {
        setProcessingId(null);
      }
    },
    [accessToken],
  );

  const handleDelete = useCallback(
    async (appointment: Appointment) => {
      if (!accessToken) return;
      setProcessingId(appointment.id);
      setActionError(null);
      setActionSuccess(null);
      try {
        await apiDeleteAppointment(accessToken, appointment.id);
        setAppointments((prev) => prev.filter((item) => item.id !== appointment.id));
        setActionSuccess(`Removed appointment for ${appointment.name}.`);
      } catch (err) {
        setActionError(err instanceof Error ? err.message : "Unable to delete appointment.");
      } finally {
        setProcessingId(null);
      }
    },
    [accessToken],
  );

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
              onClick={() => setPage(1)}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <LuRefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <LuDownload className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>
      </section>

      {error ? (
        <div className="rounded-3xl border border-red-400/40 bg-red-500/10 px-6 py-5 text-sm text-red-100">{error}</div>
      ) : null}

      {actionError ? (
        <div className="rounded-3xl border border-red-400/40 bg-red-500/10 px-6 py-4 text-sm text-red-100">
          {actionError}
        </div>
      ) : null}

      {actionSuccess ? (
        <div className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-4 text-sm text-emerald-100">
          {actionSuccess}
        </div>
      ) : null}

      {filteredAppointments.length ? (
        <AppointmentTable
          appointments={filteredAppointments}
          onUpdateStatus={handleStatusChange}
          onDelete={handleDelete}
          processingId={processingId}
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
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Workflow automation</p>
          <h2 className="mt-2 text-xl font-bold text-white">Integrate next actions</h2>
          <div className="mt-6 space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-4">
              <LuCircleCheck className="mt-1 h-5 w-5 text-emerald-300" />
              <p>
                Call <code className="rounded bg-gray-900 px-1 text-emerald-200">PUT /api/appointments/&lt;id&gt;/</code> when updating status or time. The backend will trigger patient emails automatically.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-4">
              <LuCircleX className="mt-1 h-5 w-5 text-red-300" />
              <p>
                Use <code className="rounded bg-gray-900 px-1 text-red-200">POST /api/appointments/&lt;id&gt;/cancel/</code> for cancellation links embedded in patient emails.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-4">
              <LuClock3 className="mt-1 h-5 w-5 text-indigo-200" />
              <p>
                Combine <code className="rounded bg-gray-900 px-1 text-indigo-200">GET /api/availability/</code> with the appointment payloads to surface smart rescheduling suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {totalPages > 1 ? (
        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
            Page {page} of {totalPages}
          </p>
          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      ) : null}

      {isFetching ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-gray-300">
          Fetching latest appointments from the backend...
        </div>
      ) : null}
    </div>
  );
}

