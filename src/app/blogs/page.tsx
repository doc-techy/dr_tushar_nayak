import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { blogSpotlight } from "@/data/site-content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Orthopaedic Blogs & Articles",
  description:
    "Educational blogs by Dr. Tushar Nayak on joint replacement, sports injuries, pain management, and recovery in Bangalore.",
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-10 sm:pb-16 md:pb-20 lg:pb-24">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blogs" },
          ]}
        />

        <div className="mb-8 sm:mb-12 md:mb-14 text-left sm:text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-2 sm:mb-4 text-white">
            Educational{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-cyan-400">
              Blogs & Articles
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed font-light">
            Bite-sized explainer articles on robotic joint replacement, sports rehab protocols, and
            long-term pain management strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {blogSpotlight.map((post) => (
            <article
              key={post.slug}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 sm:border-2 p-3 sm:p-5 md:p-6 lg:p-8 shadow-sm sm:shadow-md hover:bg-white/10 hover:border-brand-teal/40 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 lg:hover:-translate-y-4 hover:shadow-lg sm:hover:shadow-xl hover:shadow-brand-teal/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-teal/10 to-transparent" />

              <div className="relative mb-2 sm:mb-3 md:mb-4 flex items-center justify-between gap-2">
                {post.isNew ? (
                  <span className="inline-flex items-center rounded-full bg-brand-teal px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide text-white">
                    New
                  </span>
                ) : (
                  <span />
                )}
                <span className="text-[10px] sm:text-xs md:text-sm text-white/70">
                  {post.readingTime}
                </span>
              </div>

              <div className="relative flex-1 space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold sm:font-black leading-tight transition-colors duration-300 line-clamp-2 text-white group-hover:text-brand-teal">
                  {post.title}
                </h2>
                <p className="text-white leading-relaxed line-clamp-2 sm:line-clamp-3 text-[10px] sm:text-xs md:text-sm">
                  {post.excerpt}
                </p>
              </div>

              <div className="relative mt-3 sm:mt-4 md:mt-6 lg:mt-8 pt-2 sm:pt-3 md:pt-4 lg:pt-6 border-t border-white/10 sm:border-t-2 group-hover:border-brand-teal/30 transition-colors">
                <Link href={`/blogs/${post.slug}`} className="flex items-center justify-between gap-1">
                  <span className="text-[9px] sm:text-xs md:text-sm font-bold sm:font-black uppercase tracking-wide transition-colors text-brand-teal">
                    Read Article
                  </span>
                  <div className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 bg-white/10 group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-navy">
                    <LuArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 text-white transition-colors group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
