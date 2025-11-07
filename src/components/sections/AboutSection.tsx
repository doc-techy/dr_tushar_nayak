import type {
  DoctorProfile,
  EducationHighlight,
  ExperienceHighlight,
} from "@/data/site-content";

type AboutSectionProps = {
  profile: DoctorProfile;
  education: EducationHighlight[];
  experience: ExperienceHighlight[];
};

export function AboutSection({ profile, education, experience }: AboutSectionProps) {
  return (
    <section id="about" className="section-container space-y-12">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-brand-aqua/50 bg-gradient-to-br from-white via-brand-mint/40 to-brand-aqua/30 p-10 shadow-[0_35px_80px_-45px_rgba(10,47,77,0.35)]">
        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-brand-aqua/20 blur-3xl" aria-hidden />
        <div className="absolute -left-24 bottom-0 h-60 w-60 rounded-full bg-brand-teal/15 blur-3xl" aria-hidden />
        <div className="relative z-10 space-y-6">
          <span className="badge bg-white/70 text-brand-navy">Meet Doctor Tushar Nayak</span>
          <h2 className="text-3xl font-semibold text-brand-navy sm:text-4xl">
            Dedicated to restoring mobility with precision orthopaedics
          </h2>
          <p className="text-lg text-brand-charcoal/75">
            {profile.intro} Patients receive detailed counselling, transparent milestones, and tailor-made
            rehabilitation plans designed around their lifestyle goals.
          </p>
          <dl className="grid gap-4 text-sm text-brand-charcoal/80 sm:grid-cols-3">
            <div>
              <dt className="uppercase tracking-[0.3em] text-brand-teal">Credentials</dt>
              <dd className="mt-2 text-brand-navy">{profile.credentials}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-brand-teal">Primary clinic</dt>
              <dd className="mt-2">{profile.primaryLocation}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-brand-teal">Connect</dt>
              <dd className="mt-2 flex flex-wrap gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-pill"
                  >
                    {social.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-brand-navy">Education & Experience</h3>
        <div className="relative overflow-hidden rounded-[2rem]">
          {/* Liquid glass background */}
          <div className="absolute inset-0 -z-0 overflow-hidden rounded-[2rem]">
            {/* Base glass layer */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[2rem]" aria-hidden />
            
            {/* Animated liquid glass waves */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/15 via-brand-aqua/20 to-brand-mint/15 backdrop-blur-xl rounded-[2rem]" aria-hidden />
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-brand-teal/25 via-transparent to-transparent backdrop-blur-2xl rounded-t-[2rem]" aria-hidden />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-aqua/25 via-transparent to-transparent backdrop-blur-2xl rounded-b-[2rem]" aria-hidden />
            
            {/* Glass refraction effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-teal/20 blur-3xl animate-pulse-slow" aria-hidden />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-aqua/25 blur-3xl animate-pulse-slow delay-1000" aria-hidden />
            
            {/* Liquid glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer rounded-[2rem]" aria-hidden />
            
            {/* Border glow */}
            <div className="absolute inset-0 border border-white/40 shadow-[0_0_60px_rgba(30,154,162,0.3)] rounded-[2rem]" aria-hidden />
          </div>
          
          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 md:grid-cols-2">
          <section className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-teal">
              Education timeline
            </h4>
            <div className="space-y-5">
              {education.map((entry) => (
                <article
                  key={entry.heading}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/40 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(12,44,62,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/50 hover:shadow-[0_12px_48px_0_rgba(10,47,77,0.25)]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-mint/15 via-brand-aqua/10 to-transparent opacity-50 transition duration-300 group-hover:opacity-70" aria-hidden />
                  <span className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/30" aria-hidden />
                  <div className="relative z-10 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-teal">
                      {entry.year}
                    </p>
                    <h5 className="text-lg font-semibold text-brand-navy">{entry.heading}</h5>
                    <p className="text-sm text-brand-charcoal/75">{entry.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-teal">
              Professional milestones
            </h4>
            <div className="space-y-5">
              {experience.map((role) => (
                <article
                  key={`${role.institution}-${role.role}`}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/40 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(12,44,62,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/50 hover:shadow-[0_12px_48px_0_rgba(10,47,77,0.25)]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-mint/15 via-brand-aqua/10 to-transparent opacity-50 transition duration-300 group-hover:opacity-70" aria-hidden />
                  <span className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/30" aria-hidden />
                  <div className="relative z-10 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-teal">
                      {role.period}
                    </p>
                    <h5 className="text-lg font-semibold text-brand-navy">
                      {role.role}, {role.institution}
                    </h5>
                    <p className="text-sm text-brand-charcoal/75">{role.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

