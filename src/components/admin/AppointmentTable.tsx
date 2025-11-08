"use client";

import { Appointment } from "@/lib/admin-api";
import { LuArrowUpRight, LuTrash2 } from "react-icons/lu";

type AppointmentTableProps = {
  appointments: Appointment[];
  onUpdateStatus: (appointment: Appointment, status: Appointment["status"]) => void;
  onDelete: (appointment: Appointment) => void;
  processingId?: number | null;
  disabled?: boolean;
};

const statusStyles: Record<Appointment["status"], string> = {
  pending: "bg-amber-500/10 text-amber-200 border-amber-400/30",
  confirmed: "bg-emerald-500/10 text-emerald-200 border-emerald-400/30",
  cancelled: "bg-red-500/10 text-red-200 border-red-400/30",
  completed: "bg-indigo-500/10 text-indigo-200 border-indigo-400/30",
};

const statusOptions: Appointment["status"][] = ["pending", "confirmed", "completed", "cancelled"];

export function AppointmentTable({
  appointments,
  onUpdateStatus,
  onDelete,
  processingId,
  disabled,
}: AppointmentTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/5">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
              <th className="px-6 py-4">Patient</th>
              <th className="px-6 py-4">Contact</th>
              <th className="px-6 py-4">Date & Time</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-gray-300">
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="transition hover:bg-white/5">
                <td className="px-6 py-4">
                  <div className="font-semibold text-white">{appointment.name}</div>
                  {appointment.message ? <div className="text-xs text-gray-500">{appointment.message}</div> : null}
                </td>
                <td className="px-6 py-4 text-xs uppercase tracking-[0.2em] text-gray-400">
                  <div>{appointment.phone}</div>
                  <div className="text-[10px] text-indigo-200">{appointment.email}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-white">{appointment.date}</div>
                  <div className="text-xs uppercase tracking-[0.35em] text-gray-400">{appointment.time}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${statusStyles[appointment.status]}`}>
                    {appointment.status}
                  </span>
                  <div className="mt-3">
                    <label className="sr-only" htmlFor={`status-${appointment.id}`}>
                      Update status
                    </label>
                    <select
                      id={`status-${appointment.id}`}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.3em] text-gray-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 disabled:cursor-not-allowed disabled:opacity-60"
                      value={appointment.status}
                      onChange={(event) => {
                        const nextStatus = event.target.value as Appointment["status"];
                        if (nextStatus !== appointment.status) {
                          onUpdateStatus(appointment, nextStatus);
                        }
                      }}
                      disabled={disabled || processingId === appointment.id}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-100 transition hover:border-indigo-300 hover:bg-indigo-500/20"
                  >
                    View
                    <LuArrowUpRight className="h-4 w-4" />
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    onClick={() => onDelete(appointment)}
                    disabled={disabled || processingId === appointment.id}
                    className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-100 transition hover:border-red-300 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <LuTrash2 className="h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

