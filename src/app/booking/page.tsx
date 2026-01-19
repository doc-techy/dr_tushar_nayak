"use client";

import { useState } from "react";
import { createAppointment } from "@/lib/admin-api";
import { doctorProfile, mapEmbed } from "@/data/site-content";

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:30 PM",
  "04:00 PM",
  "06:00 PM",
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  timeSlot: string;
  notes: string;
};

const defaultState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  preferredDate: "",
  timeSlot: "",
  notes: "",
};

export default function BookingPage() {
  const [formState, setFormState] = useState<FormState>(defaultState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onChange = (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!formState.preferredDate || !formState.timeSlot) {
      setErrorMessage("Please select a preferred date and time slot.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await createAppointment({
        name: formState.fullName.trim(),
        email: formState.email.trim() || undefined,
        phone: formState.phone.trim(),
        date: formState.preferredDate,
        time: formState.timeSlot,
        message: formState.notes.trim() || undefined,
      });
      setStatus("success");
      setFormState(defaultState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn’t submit the booking right now. Please try again in a moment.",
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-gray-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30" aria-hidden />
        <div className="absolute -top-40 left-1/2 w-[680px] h-[680px] -translate-x-1/2 bg-indigo-100/40 blur-3xl rounded-full" aria-hidden />
        <div className="absolute bottom-[-10%] right-[10%] w-[520px] h-[520px] bg-purple-100/40 blur-3xl rounded-full" aria-hidden />
        <div className="absolute top-[30%] left-[-10%] w-[420px] h-[420px] bg-pink-100/30 blur-[180px] rounded-full" aria-hidden />
      </div>

    <section className="relative min-h-screen bg-white text-gray-900 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-20 space-y-8 lg:space-y-16">
        <header className="text-left sm:text-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-0 lg:mb-5">
            Book a Consultation with {doctorProfile.name}
          </h1>
          <p className="max-w-3xl mx-auto text-[10px] sm:text-lg text-gray-700 leading-relaxed">
            Share a few details and the care concierge will confirm your slot within 24 hours. Emergency queries? Call {doctorProfile.contact.phone} directly.
          </p>
        </header>

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-gray-200 bg-white p-6 lg:p-8 sm:p-10 shadow-lg">
            <div className="space-y-2 mb-6 lg:mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">Booking details</p>
              <p className="text-sm text-gray-600">
                Fields marked with * are required. Preferred date and programme help us tailor preparation before your visit.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-3xl border border-indigo-300 bg-indigo-50 px-6 py-8 text-indigo-900">
                <h2 className="text-xl font-semibold text-indigo-900">Thank you! 🗓️</h2>
                <p className="mt-3 text-sm text-indigo-800">
                  We&apos;ve recorded your request. The care concierge will call/text you shortly to confirm the appointment.
                </p>
                <p className="mt-4 text-sm text-indigo-700">
                  Need urgent support? Reach the clinic at {doctorProfile.contact.phone} or chat on WhatsApp anytime.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                {status === "error" && errorMessage ? (
                  <div className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">
                    Full name*
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                    value={formState.fullName}
                    onChange={onChange("fullName")}
                    required
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">
                      Phone number*
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                      value={formState.phone}
                      onChange={onChange("phone")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                      value={formState.email}
                      onChange={onChange("email")}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="preferredDate" className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">
                      Preferred date
                    </label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                      value={formState.preferredDate}
                      onChange={onChange("preferredDate")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeSlot" className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">
                      Preferred time slot
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                      value={formState.timeSlot}
                      onChange={onChange("timeSlot")}
                      required
                    >
                      <option value="" className="text-gray-900">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="text-gray-900">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="notes" className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">
                    Notes (symptoms, insurance, imaging)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                    value={formState.notes}
                    onChange={onChange("notes")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] shadow-lg shadow-indigo-600/30 transition hover:scale-105"
                >
                  {status === "loading" ? "Submitting..." : "Submit booking request"}
                </button>
              </form>
            )}
          </div>

          <aside className="rounded-[32px] border border-gray-200 bg-white p-8 sm:p-10 space-y-8 shadow-lg">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">Clinic details</p>
              <h2 className="text-2xl font-bold text-gray-900">Orthocare Clinic</h2>
              <p className="text-sm text-gray-700 leading-relaxed">{doctorProfile.intro}</p>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-indigo-600">Call</p>
                <p className="text-lg font-semibold text-gray-900">{doctorProfile.contact.phone}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-indigo-600">Email</p>
                <p className="text-lg font-semibold text-gray-900">{doctorProfile.contact.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-indigo-600">Visit</p>
                <p className="text-sm leading-relaxed">{doctorProfile.primaryLocation}</p>
              </div>
            </div>

            <a
              href={mapEmbed.iframeSrc.replace("&output=embed", "")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full rounded-full border border-gray-300 px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-gray-700 hover:bg-gray-100"
            >
              Get directions
            </a>

            <div className="overflow-hidden rounded-3xl border border-gray-200">
              <iframe
                title={mapEmbed.title}
                src={mapEmbed.iframeSrc}
                width="100%"
                height="220"
                loading="lazy"
                allowFullScreen
                className="w-full"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-3">
              <p className="font-semibold text-gray-900">Need to talk first?</p>
              <p>
                Message us on WhatsApp for insurance clarifications, pre-operative queries, or to reschedule. We respond within 24 hours.
              </p>
              <a
                href={doctorProfile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-indigo-600 hover:text-indigo-700"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </div>
  );
}

