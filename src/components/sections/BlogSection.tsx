import Link from "next/link";
import { LuArrowRight, LuClock } from "react-icons/lu";
import { blogSpotlight } from "@/data/site-content";

export function BlogSection() {
  return (
    <section
      id="blogs"
      className="relative py-24 sm:py-32 lg:py-14 px-4 text-white overflow-hidden border-t border-white/5"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
            Educational
            <span className="ml-2 text-white">
              Blogs & Articles
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed font-light">
            Bite-sized explainer articles spotlighting the latest in robotic joint replacement, sports
            rehab protocols, and long-term pain management strategies.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogSpotlight.map((post, index) => {
            const colorIndex = index % 3;
            return (
              <article
                key={post.slug}
                className="group relative overflow-hidden rounded-3xl bg-white/5 border-2 border-white/10 p-8 backdrop-blur-md hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  colorIndex === 0 
                    ? "bg-gradient-to-br from-indigo-500/10 to-transparent"
                    : colorIndex === 1
                    ? "bg-gradient-to-br from-purple-500/10 to-transparent"
                    : "bg-gradient-to-br from-pink-500/10 to-transparent"
                }`} />
                
                <div className="relative mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                    colorIndex === 0 
                      ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300" 
                      : colorIndex === 1
                      ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                      : "bg-pink-500/10 border-pink-500/30 text-pink-300"
                  }`}>
                    <LuClock className="h-4 w-4" />
                    <span className="text-xs font-bold">{post.readingTime}</span>
                  </div>
                </div>

                <div className="relative flex-1 space-y-4">
                  <h3 className={`text-2xl font-black leading-tight transition-colors duration-300 ${
                    colorIndex === 0 ? "text-white group-hover:text-indigo-300" 
                    : colorIndex === 1 ? "text-white group-hover:text-purple-300"
                    : "text-white group-hover:text-pink-300"
                  }`}>
                    {post.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                </div>

                <div className="relative mt-8 pt-6 border-t-2 border-white/10 group-hover:border-white/20 transition-colors">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="flex items-center justify-between"
                  >
                    <span className={`text-sm font-black uppercase tracking-wider transition-colors ${
                      colorIndex === 0 ? "text-indigo-400" 
                      : colorIndex === 1 ? "text-purple-400"
                      : "text-pink-400"
                    }`}>
                      Read Article
                    </span>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      colorIndex === 0 
                        ? "bg-indigo-500/10 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-indigo-700" 
                        : colorIndex === 1
                        ? "bg-purple-500/10 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-700"
                        : "bg-pink-500/10 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-pink-700"
                    }`}>
                      <LuArrowRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
