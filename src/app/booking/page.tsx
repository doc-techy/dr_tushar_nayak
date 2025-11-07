"use client";

import { useState } from "react";
import { doctorProfile, mapEmbed } from "@/data/site-content";

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

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:30 PM",
  "04:00 PM",
  "06:00 PM",
];

export default function BookingPage() {
  const [formState, setFormState] = useState<FormState>(defaultState);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-white via-brand-mint/40 to-brand-aqua/30">
      <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-brand-aqua/25 blur-3xl" aria-hidden />
      <div className="absolute -right-28 bottom-10 h-[360px] w-[360px] rounded-full bg-brand-teal/25 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 text-brand-navy">
          <h1 className="mx-auto text-4xl text-center font-semibold sm:text-5xl">
            Book a consultation with {doctorProfile.name}
          </h1>
          <p className="mx-auto max-w-3xl text-center text-brand-charcoal/80">
            Emergency or post-operative queries? Reach us instantly on WhatsApp or call the clinic team.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card w-full space-y-8 border border-brand-aqua/50 bg-white/95 px-10 py-10 shadow-[0_35px_80px_-40px_rgba(10,47,77,0.35)]">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-teal">
                Booking details
              </p>
              <p className="text-sm text-brand-charcoal/70">
                Fields marked with * are required. Preferred time and program help us prepare a personalised plan before the visit.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-3xl border border-brand-teal/30 bg-brand-mint/70 p-6 text-brand-charcoal">
                <h2 className="text-xl font-semibold text-brand-navy">Thank you! 🗓️</h2>
                <p className="mt-3 text-sm">
                  We have noted your request. Our care concierge will connect with you shortly on {formState.phone ||
                    "your provided contact"} to finalise the slot.
                </p>
                <p className="mt-4 text-sm">
                  Need changes or faster assistance? Call {doctorProfile.contact.phone} or chat with the WhatsApp team anytime.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="w-full space-y-6">
                <div className="w-full space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium uppercase tracking-[0.3em] text-brand-navy"
                  >
                    Full name*
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    className="w-full rounded-2xl border border-brand-aqua/60 bg-white px-4 py-4 text-base shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    value={formState.fullName}
                    onChange={onChange("fullName")}
                    required
                  />
                </div>

                <div className="grid w-full gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <label htmlFor="phone" className="text-sm font-medium text-brand-navy">
                        Phone number*
                      </label>
                      {formState.phone ? (
                        <a
                          href={`tel:${formState.phone.replace(/\s+/g, "")}`}
                          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal transition hover:text-brand-navy"
                        >
                          Call {formState.phone}
                        </a>
                      ) : null}
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      className="rounded-2xl border border-brand-aqua/60 bg-white px-4 py-3 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                      value={formState.phone}
                      onChange={onChange("phone")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <label htmlFor="email" className="text-sm font-medium text-brand-navy">
                        Email
                      </label>
                      {formState.email ? (
                        <a
                          href={`mailto:${formState.email}`}
                          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal transition hover:text-brand-navy"
                        >
                          Email {formState.email}
                        </a>
                      ) : null}
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="rounded-2xl border border-brand-aqua/60 bg-white px-4 py-3 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                      value={formState.email}
                      onChange={onChange("email")}
                    />
                  </div>
                </div>

                <div className="grid w-full gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="preferredDate" className="text-sm font-medium text-brand-navy">
                      Preferred date
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      name="preferredDate"
                      className="w-full rounded-2xl border border-brand-aqua/60 bg-white px-4 py-3 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                      value={formState.preferredDate}
                      onChange={onChange("preferredDate")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeSlot" className="text-sm font-medium text-brand-navy">
                      Preferred time slot
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      className="w-full rounded-2xl border border-brand-aqua/60 bg-white px-4 py-3 pr-10 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                      value={formState.timeSlot}
                      onChange={onChange("timeSlot")}
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-medium text-brand-navy">
                    Notes (symptoms, imaging, insurance, etc.)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full rounded-2xl border border-brand-aqua/60 bg-white px-4 py-3 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    value={formState.notes}
                    onChange={onChange("notes")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-teal px-6 py-3 text-white shadow-lg shadow-brand-teal/30 transition hover:bg-brand-navy"
                >
                  Submit booking request
                </button>
              </form>
            )}
          </div>

          <aside className="card space-y-8 border border-brand-aqua/40 bg-brand-navy/95 text-white shadow-[0_30px_70px_-45px_rgba(5,15,25,0.7)]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-teal">
                Clinic details
              </p>
              <h2 className="text-2xl font-bold text-black">Orthocare</h2>
              <p className="text-sm text-brand-charcoal/70">{doctorProfile.intro}</p>
            </div>
            <div className="space-y-4 text-sm text-brand-charcoal/80">
              <p>
                <span className="text-black">Phone:</span> {doctorProfile.contact.phone}
              </p>
              <p>
                <span className="text-black">Email:</span> {doctorProfile.contact.email}
              </p>
              <p>
                <span className="text-black">Address:</span>
                <br />
                {doctorProfile.primaryLocation}
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={mapEmbed.iframeSrc.replace("&output=embed", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="link-pill bg-brand-charcoal/10 text-brand-charcoal hover:bg-brand-charcoal/20"
              >
                Get directions
              </a>
              <div className="overflow-hidden rounded-3xl border border-brand-charcoal/20">
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
            </div>
            <div className="rounded-2xl border border-brand-charcoal/15 bg-brand-charcoal/10 p-4 text-sm text-brand-charcoal/70">
              <p className="font-semibold text-brand-charcoal">Need to talk first?</p>
              <p className="mt-2">
                Message us on WhatsApp for insurance clarifications, pre-operative queries, or to reschedule.
              </p>
              <a
                href={doctorProfile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal hover:text-black"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

