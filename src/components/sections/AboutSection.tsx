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
    <section id="about" className="relative overflow-hidden bg-white py-6 lg:py-8 text-gray-900">
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute left-[-15%] top-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-indigo-100/40 via-purple-100/30 to-transparent blur-3xl" aria-hidden />
        <div className="absolute right-[-20%] bottom-[-15%] h-[680px] w-[680px] rounded-full bg-gradient-to-tr from-pink-100/40 via-purple-100/30 to-transparent blur-3xl" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 lg:gap-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-3 lg:space-y-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-indigo-200 bg-indigo-50 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-4xl font-bold uppercase text-indigo-700">
              Meet Dr.Tushar Nayak
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black text-gray-900 mb-0 lg:mb-4 leading-tight">
              Precision orthopaedics designed around your movement goals
            </h2>
            <p className="max-w-2xl text-xs sm:text-sm lg:text-lg leading-relaxed text-gray-700">
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

          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.75rem] border border-gray-200 bg-white p-4 sm:p-10 shadow-lg">
            <div className="absolute inset-0 rounded-2xl sm:rounded-[2.75rem] border border-gray-200 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/30 hidden lg:block" aria-hidden />
            <div className="relative z-10 space-y-3 sm:space-y-6">
              <div className="grid gap-3 sm:gap-4 grid-cols-2">
                <div className="rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-5 py-3 sm:py-4">
                  <p className="text-[9px] sm:text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
                    Years of Expertise
                  </p>
                  <p className="mt-1 sm:mt-2 text-xl sm:text-3xl font-bold text-gray-900">18+</p>
                </div>
                <div className="rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-5 py-3 sm:py-4">
                  <p className="text-[9px] sm:text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
                    Surgeries Performed
                  </p>
                  <p className="mt-1 sm:mt-2 text-xl sm:text-3xl font-bold text-gray-900">12K+</p>
                </div>
                <div className="rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-5 py-3 sm:py-4 col-span-2">
                  <p className="text-[9px] sm:text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
                    Fellowship Training
                  </p>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm leading-relaxed text-gray-700">
                    Advanced arthroplasty fellowship at EndoKlinik Hamburg specialising in minimally invasive joint replacement.
                  </p>
                </div>
                <div className="rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-5 py-3 sm:py-4 col-span-2">
                  <p className="text-[9px] sm:text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
                    Philosophy
                  </p>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm leading-relaxed text-gray-700">
                    Evidence-led protocols, precision implants, and personalised rehab to restore pain-free movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:space-y-10">
          <div className="flex flex-col gap-2 lg:gap-4 sm:flex-row sm:items-end sm:justify-center text-left sm:text-center">
            <div>
              <p className="text-xl sm:text-4xl font-bold uppercase tracking-[0.2em] text-indigo-600">
                Education & Experience
              </p>
              <h3 className="text-sm sm:text-base lg:text-lg mt-1 sm:mt-0 font-semibold text-gray-900">
                A journey shaped by advanced training and complex caseloads
              </h3>
            </div>
          </div>

          {/* Mobile: Separate sections */}
          <div className="block md:hidden space-y-6">
            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
                <h3 className="text-lg font-black uppercase tracking-wider text-indigo-700">Education Timeline</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <article
                    key={`education-${index}`}
                    className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100"></div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                          {edu.year}
                        </p>
                        <h4 className="text-base font-bold text-gray-900 leading-tight">{edu.heading}</h4>
                        <p className="text-xs leading-relaxed text-gray-700">{edu.details}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">&</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-pink-500 to-pink-600"></div>
                <h3 className="text-lg font-black uppercase tracking-wider text-pink-700">Professional Milestones</h3>
              </div>
              <div className="space-y-3">
                {experience.map((exp, index) => (
                  <article
                    key={`experience-${index}`}
                    className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-3 w-3 rounded-full bg-pink-500 ring-4 ring-pink-100"></div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-pink-600">
                          {exp.period}
                        </p>
                        <h4 className="text-base font-bold text-gray-900 leading-tight">
                          {exp.role}
                          <span className="block text-xs font-normal text-pink-700 mt-0.5">{exp.institution}</span>
                        </h4>
                        <p className="text-xs leading-relaxed text-gray-700">{exp.summary}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Side by side layout */}
          <div className="hidden md:block space-y-3 lg:space-y-6">
            <div className="grid gap-2 sm:gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 text-center">
              <div className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full border border-indigo-200 bg-indigo-50 px-3 sm:px-5 py-2 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-indigo-700">
                <span>Education Timeline</span>
              </div>
              <div className="flex flex-col items-center gap-1 sm:gap-2 rounded-2xl sm:rounded-3xl border border-pink-200 bg-pink-50 px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-pink-700">
                <span>Professional Milestones</span>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-6">
              {timelineRows.map((row, index) => (
                <div
                  key={`timeline-row-${index}`}
                  className="grid gap-3 lg:gap-6 md:grid-cols-2 md:items-stretch"
                >
                  {row.education ? (
                    <article
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-6 shadow-md transition hover:border-indigo-400 hover:bg-gray-50"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl border border-gray-200 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/30 hidden lg:block" aria-hidden />
                      <div className="relative flex h-full flex-col gap-2 sm:gap-3">
                        <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.4em] text-indigo-600">
                          {row.education.year}
                        </p>
                        <h4 className="text-base sm:text-xl font-semibold text-gray-900 leading-tight">{row.education.heading}</h4>
                        <p className="text-[10px] sm:text-sm leading-relaxed text-gray-700">{row.education.details}</p>
                      </div>
                    </article>
                  ) : (
                    <span className="hidden md:block" aria-hidden />
                  )}

                  {row.experience ? (
                    <article
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-6 shadow-md transition hover:border-pink-400 hover:bg-gray-50"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl border border-gray-200 bg-gradient-to-br from-pink-50/50 via-transparent to-indigo-50/30 hidden lg:block" aria-hidden />
                      <div className="relative flex h-full flex-col gap-2 sm:gap-3">
                        <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.4em] text-indigo-600">
                          {row.experience.period}
                        </p>
                        <h4 className="text-base sm:text-xl font-semibold text-gray-900 leading-tight">
                          {row.experience.role}
                          <span className="block text-xs sm:text-sm font-normal text-indigo-700 mt-0.5">{row.experience.institution}</span>
                        </h4>
                        <p className="text-[10px] sm:text-sm leading-relaxed text-gray-700">{row.experience.summary}</p>
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

