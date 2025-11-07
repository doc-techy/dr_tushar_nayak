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
        <div className="space-y-10">
          <section className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-teal">
              Education timeline
            </h4>
            <ol className="space-y-5 border-l-2 border-dashed border-brand-aqua/60 pl-6">
              {education.map((entry) => (
                <li key={entry.heading} className="relative">
                  <span className="absolute -left-[0.7rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-teal shadow" />
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-teal">
                    {entry.year}
                  </p>
                  <h5 className="text-lg font-semibold text-brand-navy">{entry.heading}</h5>
                  <p className="text-sm text-brand-charcoal/75">{entry.details}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-teal">
              Professional milestones
            </h4>
            <div className="space-y-5">
              {experience.map((role) => (
                <article
                  key={`${role.institution}-${role.role}`}
                  className="rounded-3xl border border-brand-aqua/50 bg-white/90 p-6 shadow-[0_25px_70px_-45px_rgba(10,47,77,0.25)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-teal">
                    {role.period}
                  </p>
                  <h5 className="mt-2 text-lg font-semibold text-brand-navy">
                    {role.role}, {role.institution}
                  </h5>
                  <p className="mt-2 text-sm text-brand-charcoal/75">{role.summary}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

