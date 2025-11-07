import { blogSpotlight } from "@/data/site-content";

export function BlogSection() {
  return (
    <section id="blogs" className="section-container">
      <div className="section-heading">
        <h2 className="text-4xl font-extrabold text-brand-navy sm:text-5xl">
          Educational blogs
        </h2>
        <p className="max-w-3xl text-brand-charcoal/70">
          Bite-sized explainer articles spotlighting the latest in robotic joint replacement, sports
          rehab protocols, and long-term pain management strategies.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {blogSpotlight.map((post) => (
          <article
            key={post.title}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/20 bg-white/40 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(12,44,62,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/50 hover:shadow-[0_12px_48px_0_rgba(10,47,77,0.25)]"
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-aqua/15 via-brand-mint/10 to-transparent opacity-50 transition duration-300 group-hover:opacity-70" aria-hidden />
            <span className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/30" aria-hidden />
            <div className="relative z-10">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
                {post.readingTime}
              </p>
              <h3 className="text-xl font-semibold text-brand-navy">{post.title}</h3>
              <p className="text-sm text-brand-charcoal/70">{post.excerpt}</p>
            </div>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 link-pill mt-8 self-start"
            >
              Read article
            </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

