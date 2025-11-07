import type {
  EducationHighlight,
  ExperienceHighlight,
} from "@/data/site-content";

type EducationExperienceSectionProps = {
  education: EducationHighlight[];
  experience: ExperienceHighlight[];
};

export function EducationExperienceSection({
  education,
  experience,
}: EducationExperienceSectionProps) {
  return (
    <section id="education" className="section-container">
      <div className="space-y-14">
        <div className="section-heading">
          <span className="badge">Education & Experience</span>
          <h2 className="text-3xl font-semibold text-brand-navy sm:text-4xl">
            Global training meets high-volume clinical practice
          </h2>
          <p className="mx-auto max-w-3xl text-brand-charcoal/70">
            Structured residencies across leading Indian institutes and European fellowship programs
            power an outcome-driven approach tailored for each joint.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-7">
            <h3 className="text-xl font-semibold text-brand-navy">Education highlights</h3>
            <ol className="space-y-6 border-l-2 border-dashed border-brand-aqua/70 pl-6">
              {education.map((item) => (
                <li key={item.heading} className="relative">
                  <span className="absolute -left-[0.7rem] top-1 block h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-teal shadow" />
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-teal">
                    {item.year}
                  </p>
                  <h4 className="text-lg font-semibold text-brand-navy">{item.heading}</h4>
                  <p className="text-sm text-brand-charcoal/70">{item.details}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-7">
            <h3 className="text-xl font-semibold text-brand-navy">Experience snapshot</h3>
            <div className="space-y-5">
              {experience.map((item) => (
                <div
                  key={item.institution}
                  className="card space-y-3 border border-brand-aqua/50 bg-gradient-to-br from-white via-white/85 to-brand-mint/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
                    {item.period}
                  </p>
                  <h4 className="text-lg font-semibold text-brand-navy">
                    {item.role}, {item.institution}
                  </h4>
                  <p className="text-sm text-brand-charcoal/75">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

