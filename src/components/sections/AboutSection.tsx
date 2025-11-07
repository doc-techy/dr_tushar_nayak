import type { DoctorProfile, EducationHighlight, ExperienceHighlight } from "@/data/site-content";

type AboutSectionProps = {
  profile: DoctorProfile;
  education: EducationHighlight[];
  experience: ExperienceHighlight[];
};

export function AboutSection({ profile, education, experience }: AboutSectionProps) {
  const timelineRows = Array.from({ length: Math.max(education.length, experience.length) }, (_, index) => ({
    education: education[index],
    experience: experience[index],
  }));

  return (
    <section id="about" className="relative overflow-hidden bg-gray-950 py-8 text-gray-200">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-15%] top-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-indigo-500/25 via-purple-500/15 to-transparent blur-3xl" aria-hidden />
        <div className="absolute right-[-20%] bottom-[-15%] h-[680px] w-[680px] rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-400/10 to-transparent blur-3xl" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-4xl font-bold uppercase text-indigo-200">
              Meet Dr.Tushar Nayak
            </div>
            <h2 className="text-4xl font-black text-white sm:text-[2.75rem]">
              Precision orthopaedics designed around your movement goals
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
              {profile.intro} Patients receive detailed counselling, transparent milestones, and tailor-made rehabilitation plans designed around their lifestyle goals.
            </p>

            {/* <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_-60px_rgba(99,102,241,0.85)] sm:grid-cols-3">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-indigo-200">
                  Credentials
                </p>
                <p className="text-sm leading-relaxed text-gray-200">{profile.credentials}</p>
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-indigo-200">
                  Primary Clinic
                </p>
                <p className="text-sm leading-relaxed text-gray-200">{profile.primaryLocation}</p>
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-indigo-200">
                  Connect
                </p>
                <div className="flex flex-wrap gap-3">
                  {profile.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-100 transition hover:border-indigo-400/50 hover:bg-indigo-500/10"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div> */}
          </div>

          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/5 p-10 shadow-[0_45px_160px_-70px_rgba(79,70,229,0.8)]">
            <div className="absolute inset-0 rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-indigo-500/15 via-transparent to-purple-500/10" aria-hidden />
            <div className="relative z-10 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
                    Years of Expertise
                  </p>
                  <p className="mt-2 text-3xl font-bold text-white">18+</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
                    Surgeries Performed
                  </p>
                  <p className="mt-2 text-3xl font-bold text-white">12K+</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
                    Fellowship Training
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-200">
                    Advanced arthroplasty fellowship at EndoKlinik Hamburg specialising in minimally invasive joint replacement.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
                    Philosophy
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-200">
                    Evidence-led protocols, precision implants, and personalised rehab to restore pain-free movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-center">
            <div>
              <p className="text-4xl font-bold uppercase tracking-[0.2em] text-indigo-200">
                Education & Experience
              </p>
              <h3 className="text-l text-center font-semibold text-white just">
                A journey shaped by advanced training and complex caseloads
              </h3>
            </div>

          </div>

          <div className="space-y-6">
            {/* <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">
              Education + Professional Milestones
            </div> */}

            <div className="grid gap-4 md:grid-cols-2 text-center">
              <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">
                <span>Education Timeline</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-pink-500/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.4em] text-pink-100">
                <span>Professional Milestones</span>
              </div>
            </div>

            <div className="space-y-6">
              {timelineRows.map((row, index) => (
                <div
                  key={`timeline-row-${index}`}
                  className="grid gap-6 md:grid-cols-2 md:items-stretch"
                >
                  {row.education ? (
                    <article
                      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_100px_-60px_rgba(99,102,241,0.7)] transition hover:border-indigo-400/40 hover:bg-white/10"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-transparent to-purple-500/10" aria-hidden />
                      <div className="relative flex h-full flex-col gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-indigo-200">
                          {row.education.year}
                        </p>
                        <h4 className="text-xl font-semibold text-white">{row.education.heading}</h4>
                        <p className="text-sm leading-relaxed text-gray-200">{row.education.details}</p>
                      </div>
                    </article>
                  ) : (
                    <span className="hidden md:block" aria-hidden />
                  )}

                  {row.experience ? (
                    <article
                      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_100px_-60px_rgba(244,114,182,0.6)] transition hover:border-pink-400/40 hover:bg-white/10"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/15 via-transparent to-indigo-500/10" aria-hidden />
                      <div className="relative flex h-full flex-col gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-indigo-200">
                          {row.experience.period}
                        </p>
                        <h4 className="text-xl font-semibold text-white">
                          {row.experience.role}
                          <span className="block text-sm font-normal text-indigo-100/80">{row.experience.institution}</span>
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-200">{row.experience.summary}</p>
                      </div>
                    </article>
                  ) : (
                    <span className="hidden md:block" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

