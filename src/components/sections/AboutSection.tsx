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
    <section id="about" className="relative overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24 text-white">

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 lg:gap-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Precision orthopaedics designed around your movement goals
            </h2>
            <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-400">
              {profile.intro} Patients receive detailed counselling, transparent milestones, and tailor-made rehabilitation plans designed around their lifestyle goals.
            </p>
          </div>
        </div>

        <div className="space-y-4 lg:space-y-10">
          <div className="flex flex-col gap-2 lg:gap-4 sm:flex-row sm:items-end sm:justify-center text-left sm:text-center">
            <div>
              <p className="text-xl sm:text-4xl font-bold uppercase tracking-[0.05em] text-brand-teal">
                Education & Experience
              </p>
              <h3 className="text-sm sm:text-base lg:text-lg mt-1 sm:mt-0 font-semibold text-gray-300">
                A journey shaped by advanced training and complex caseloads
              </h3>
            </div>
          </div>

          {/* Mobile: Separate sections */}
          <div className="block md:hidden space-y-6">
            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-teal to-brand-navy"></div>
                <h3 className="text-lg font-black uppercase tracking-normal text-brand-teal">Education Timeline</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <article
                    key={`education-${index}`}
                    className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-brand-teal/20 bg-white/5 p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-3 w-3 rounded-full bg-brand-teal ring-4 ring-brand-teal/10"></div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-normal text-brand-teal">
                          {edu.year}
                        </p>
                        <h4 className="text-base font-bold text-white leading-tight">{edu.heading}</h4>
                        <p className="text-xs leading-relaxed text-gray-400">{edu.details}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-400">&</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal"></div>
                <h3 className="text-lg font-black uppercase tracking-normal text-cyan-400">Professional Milestones</h3>
              </div>
              <div className="space-y-3">
                {experience.map((exp, index) => (
                  <article
                    key={`experience-${index}`}
                    className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/10"></div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-normal text-cyan-400">
                          {exp.period}
                        </p>
                        <h4 className="text-base font-bold text-white leading-tight">
                          {exp.role}
                          <span className="block text-xs font-normal text-brand-teal mt-0.5">{exp.institution}</span>
                        </h4>
                        <p className="text-xs leading-relaxed text-gray-400">{exp.summary}</p>
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
              <div className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3 sm:px-5 py-2 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-brand-teal">
                <span>Education Timeline</span>
              </div>
              <div className="flex flex-col items-center gap-1 sm:gap-2 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] text-cyan-400">
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
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-6 shadow-md transition hover:border-brand-teal/40 hover:bg-white/10"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/5 bg-gradient-to-br from-brand-teal/5 via-transparent to-transparent hidden lg:block" aria-hidden />
                      <div className="relative flex h-full flex-col gap-2 sm:gap-3">
                        <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-teal">
                          {row.education.year}
                        </p>
                        <h4 className="text-base sm:text-xl font-semibold text-white leading-tight">{row.education.heading}</h4>
                        <p className="text-[10px] sm:text-sm leading-relaxed text-gray-400">{row.education.details}</p>
                      </div>
                    </article>
                  ) : (
                    <span className="hidden md:block" aria-hidden />
                  )}

                  {row.experience ? (
                    <article
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-6 shadow-md transition hover:border-cyan-400/40 hover:bg-white/10"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-transparent to-brand-teal/5 hidden lg:block" aria-hidden />
                      <div className="relative flex h-full flex-col gap-2 sm:gap-3">
                        <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-400">
                          {row.experience.period}
                        </p>
                        <h4 className="text-base sm:text-xl font-semibold text-white leading-tight">
                          {row.experience.role}
                          <span className="block text-xs sm:text-sm font-normal text-brand-teal mt-0.5">{row.experience.institution}</span>
                        </h4>
                        <p className="text-[10px] sm:text-sm leading-relaxed text-gray-400">{row.experience.summary}</p>
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
