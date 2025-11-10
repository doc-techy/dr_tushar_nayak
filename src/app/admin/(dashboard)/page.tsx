"use client";

import { useMemo, useState } from "react";
import { LuCalendarClock, LuCalendarRange, LuClock3, LuActivity, LuTriangleAlert } from "react-icons/lu";
import { StatCard } from "@/components/admin/StatCard";
import { AppointmentTable } from "@/components/admin/AppointmentTable";
import { formatDate } from "@/utils/date";
import { demoAppointments, demoStats } from "@/data/admin-demo";
import type { Appointment } from "@/lib/admin-api";

type DashboardStats = {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
};

export default function AdminDashboardPage() {
  const [stats] = useState<DashboardStats>(demoStats);
  const [appointments] = useState<Appointment[]>(demoAppointments);

  const formattedAppointments = useMemo(() => {
    return appointments.map((appointment) => ({
      ...appointment,
      date: formatDate(appointment.date, { month: "short", day: "2-digit", year: "numeric" }),
    }));
  }, [appointments]);

  return (
    <div className="space-y-10">
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Appointments"
          value={(stats?.total ?? 0).toString()}
          delta={`${stats?.confirmed ?? 0} confirmed`}
          icon={<LuCalendarRange />}
          accent="indigo"
          description="Aggregate of scheduled consultations and procedures."
        />
        <StatCard
          label="Pending Reviews"
          value={(stats?.pending ?? 0).toString()}
          delta="Requires triage"
          icon={<LuTriangleAlert />}
          accent="pink"
          description="Prioritize patient callbacks and slot confirmations."
        />
        <StatCard
          label="Active Care Plans"
          value={(stats?.confirmed ?? 0).toString()}
          delta={`${stats?.completed ?? 0} completed`}
          icon={<LuActivity />}
          accent="emerald"
          description="Currently confirmed appointments awaiting completion."
        />
        <StatCard
          label="Today's Slots"
          value="12"
          delta="8 booked · 4 open"
          icon={<LuClock3 />}
          accent="purple"
          description="Live slot utilization based on availability calendar."
        />
      </section>

      <div className="rounded-3xl border border-indigo-400/30 bg-indigo-500/10 px-6 py-5 text-sm text-indigo-100">
        Demo insights active. Enjoy the sample dashboard walkthrough.
      </div>

      <section className="space-y-4">
        <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
              Upcoming Schedule
            </p>
            <h2 className="text-2xl font-bold text-white">Patient Journey Pipeline</h2>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
          >
            Export CSV
          </button>
        </header>
        {appointments.length ? (
          <AppointmentTable appointments={formattedAppointments} onUpdateStatus={() => {}} onDelete={() => {}} disabled />
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-gray-400">
            No upcoming appointments found. New bookings will appear here automatically.
          </div>
        )}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                Slot Optimization
              </p>
              <h3 className="text-xl font-bold text-white">Weekly Utilization Graph</h3>
            </div>
            <LuCalendarClock className="h-7 w-7 text-indigo-200" />
          </header>
          <div className="mt-8 grid grid-cols-7 gap-3 text-center text-xs uppercase tracking-[0.3em] text-gray-400">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
              <div key={day} className="space-y-3">
                <div className="flex h-40 items-end justify-center rounded-2xl border border-white/10 bg-white/5 p-2">
                  <div
                    className="w-8 rounded-full bg-gradient-to-t from-indigo-500 to-purple-500 shadow-[0_10px_30px_-12px_rgba(76,29,149,0.6)]"
                    style={{ height: `${50 + index * 7}%` }}
                  />
                </div>
                <p>{day}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
              Clinical Alerts
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">Actionable Notifications</h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li className="rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-4">
                <span className="font-semibold text-amber-50">4 pending confirmations</span> &mdash; patients awaiting
                surgery slot approvals for next week.
              </li>
              <li className="rounded-2xl border border-purple-400/30 bg-purple-500/10 px-4 py-4">
                <span className="font-semibold text-purple-50">MRI reports uploaded</span> for 2 patients. Review before
                tomorrow&apos;s clinic.
              </li>
              <li className="rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-4">
                <span className="font-semibold text-indigo-50">9 physiotherapy sessions</span> scheduled this week with
                virtual follow-up reminders.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Clinic playbook</p>
            <h3 className="mt-2 text-xl font-bold text-white">Operational next steps</h3>
            <ol className="mt-4 space-y-3 text-sm text-gray-300">
              <li>1. Confirm pending surgeries and notify the physiotherapy team.</li>
              <li>2. Slot in MRI review calls for newly uploaded scans.</li>
              <li>3. Coordinate follow-ups with concierge for patients flagged below.</li>
            </ol>
          </div>
        </div>
      </section>

    </div>
  );
}

