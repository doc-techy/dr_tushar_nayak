"use client";

import { useState } from "react";
import { createAppointment } from "@/lib/admin-api";
import { doctorProfile, mapEmbed } from "@/data/site-content";

const timeSlots = [
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  consultationType: string;
  preferredDate: string;
  timeSlot: string;
  notes: string;
};

const defaultState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  consultationType: "",
  preferredDate: "",
  timeSlot: "",
  notes: "",
};

const consultationTypes = [
  { id: "online", label: "Online Consultation" },
  { id: "first-visit", label: "First Visit" },
  { id: "follow-up", label: "Follow Up" },
];

export default function NishthaBookingPage() {
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

    if (!formState.consultationType) {
      setErrorMessage("Please select a consultation type.");
      setStatus("error");
      return;
    }

    if (!formState.preferredDate || !formState.timeSlot) {
      setErrorMessage("Please select a preferred date and time slot.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const consultationLabel = consultationTypes.find(t => t.id === formState.consultationType)?.label || formState.consultationType;
      await createAppointment({
        name: formState.fullName.trim(),
        email: formState.email.trim() || undefined,
        phone: formState.phone.trim(),
        date: formState.preferredDate,
        time: formState.timeSlot,
        message: `[Nishtha Healthcare] [${consultationLabel}] ${formState.notes.trim()}`.trim(),
      });
      setStatus("success");
      setFormState(defaultState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't submit the booking right now. Please try again in a moment.",
      );
    }
  };

  return (
    <section className="relative min-h-screen text-gray-900 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-20 space-y-8 lg:space-y-16">
        <header className="text-left sm:text-center">
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-0 lg:mb-5">
            Book a Consultation with {doctorProfile.name}
          </h1>
          <p className="max-w-3xl mx-auto text-[10px] sm:text-lg text-gray-700 leading-relaxed">
            Share a few details and the care concierge will confirm your slot within 24 hours. Emergency queries? Call {doctorProfile.contact.phone} directly.
          </p>
        </header>

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-teal-100/80 bg-teal-50/80 backdrop-blur-sm p-6 lg:p-8 sm:p-10 shadow-lg">
            <div className="space-y-2 mb-6 lg:mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal">Booking details</p>
              <p className="text-sm text-gray-600">
                Fields marked with * are required. Preferred date and programme help us tailor preparation before your visit.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-3xl border border-teal-300 bg-teal-50 px-6 py-8 text-brand-navy">
                <h2 className="text-xl font-semibold text-brand-navy">Thank you! 🗓️</h2>
                <p className="mt-3 text-sm text-brand-navy/80">
                  We&apos;ve recorded your request for Nishtha Healthcare. The care concierge will call/text you shortly to confirm the appointment.
                </p>
                <p className="mt-4 text-sm text-brand-navy/70">
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
                  <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal">
                    Full name*
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    value={formState.fullName}
                    onChange={onChange("fullName")}
                    required
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal">
                      Phone number*
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                      value={formState.phone}
                      onChange={onChange("phone")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                      value={formState.email}
                      onChange={onChange("email")}
                    />
                  </div>
                </div>

                {/* Consultation Type Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal">
                    Consultation Type*
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {consultationTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`flex items-center justify-center cursor-pointer rounded-xl border-2 px-3 py-3 text-center transition-all duration-200 ${
                          formState.consultationType === type.id
                            ? "border-brand-teal bg-teal-50 text-brand-teal"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="consultationType"
                          value={type.id}
                          checked={formState.consultationType === type.id}
                          onChange={onChange("consultationType")}
                          className="sr-only"
                        />
                        <span className="text-[10px] sm:text-xs font-semibold leading-tight">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="preferredDate" className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal">
                      Preferred date
                    </label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                      value={formState.preferredDate}
                      onChange={onChange("preferredDate")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeSlot" className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal">
                      Preferred time slot
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
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
                  <label htmlFor="notes" className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal">
                    Notes (symptoms, insurance, imaging)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    value={formState.notes}
                    onChange={onChange("notes")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-gradient-to-r from-brand-teal to-brand-navy px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-lg shadow-brand-teal/30 transition hover:scale-105"
                >
                  {status === "loading" ? "Submitting..." : "Submit booking request"}
                </button>
              </form>
            )}
          </div>

          <aside className="rounded-[32px] border border-teal-100/80 bg-teal-50/80 backdrop-blur-sm p-8 sm:p-10 space-y-8 shadow-lg">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal">Clinic details</p>
              <h2 className="text-2xl font-bold text-gray-900">Nishtha Healthcare & Diagnostic Center</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Evening consultations with Dr. Tushar Nayak for orthopaedic care, joint assessments, and follow-up appointments.
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-brand-teal">Timing</p>
                <p className="text-lg font-semibold text-gray-900">Mon - Sat: 6:00 PM - 9:00 PM</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-brand-teal">Call</p>
                <p className="text-lg font-semibold text-gray-900">{doctorProfile.contact.phone}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-brand-teal">Email</p>
                <p className="text-lg font-semibold text-gray-900">{doctorProfile.contact.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-brand-teal">Address</p>
                <p className="text-sm leading-relaxed">Ground Floor, Tarun Tower, 9, Kaggadasapura Main Rd, Kondappa Layout, C V Raman Nagar, Bengaluru - 560093</p>
              </div>
            </div>

            <a
              href="https://share.google/MnvUf9SOj45ZyFNrR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full rounded-full border border-gray-300 px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-gray-700 hover:bg-gray-100"
            >
              Get directions
            </a>

            <div className="overflow-hidden rounded-3xl border border-gray-200">
              <iframe
                title="Nishtha Healthcare & Diagnostic Center Location"
                src="https://www.google.com/maps?q=Nishtha+Healthcare+Tarun+Tower+Kaggadasapura+Main+Rd+Bengaluru&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                allowFullScreen
                className="w-full"
              />
            </div>

            <div className="rounded-2xl border border-teal-100/80 bg-teal-50/70 p-5 text-sm text-gray-700 space-y-3">
              <p className="font-semibold text-gray-900">Need to talk first?</p>
              <p>
                Message us on WhatsApp for insurance clarifications, pre-operative queries, or to reschedule. We respond within 24 hours.
              </p>
              <a
                href={doctorProfile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-teal hover:text-brand-navy"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
