import Link from "next/link";
import { LuArrowRight, LuClock } from "react-icons/lu";
import { blogSpotlight } from "@/data/site-content";

export function BlogSection() {
  return (
    <section
      id="blogs"
      className="relative py-12 sm:py-24 lg:py-14 px-4 text-gray-900 overflow-hidden border-t border-gray-200"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-20 text-left sm:text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-0 lg:mb-6 text-gray-900">
            Educational
            <span className="ml-2 text-gray-900">
              Blogs & Articles
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-xl text-gray-600 leading-relaxed font-light">
            Bite-sized explainer articles spotlighting the latest in robotic joint replacement, sports
            rehab protocols, and long-term pain management strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogSpotlight.map((post, index) => {
            const colorIndex = index % 3;
            return (
              <article
                key={post.slug}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 p-3 sm:p-8 shadow-md hover:bg-gray-50 hover:border-indigo-400 transition-all duration-500 hover:-translate-y-4 hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  colorIndex === 0 
                    ? "bg-gradient-to-br from-indigo-50 to-transparent"
                    : colorIndex === 1
                    ? "bg-gradient-to-br from-purple-50 to-transparent"
                    : "bg-gradient-to-br from-pink-50 to-transparent"
                }`} />
                
                <div className="relative mb-3 sm:mb-6">
                  <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full border ${
                    colorIndex === 0 
                      ? "bg-indigo-100 border-indigo-300 text-indigo-700" 
                      : colorIndex === 1
                      ? "bg-purple-100 border-purple-300 text-purple-700"
                      : "bg-pink-100 border-pink-300 text-pink-700"
                  }`}>
                    <LuClock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-[9px] sm:text-xs font-bold">{post.readingTime}</span>
                  </div>
                </div>

                <div className="relative flex-1 space-y-2 sm:space-y-4">
                  <h3 className={`text-sm sm:text-2xl font-black leading-tight transition-colors duration-300 ${
                    colorIndex === 0 ? "text-gray-900 group-hover:text-indigo-600" 
                    : colorIndex === 1 ? "text-gray-900 group-hover:text-purple-600"
                    : "text-gray-900 group-hover:text-pink-600"
                  }`}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 text-[10px] sm:text-sm">
                    {post.excerpt}
                  </p>
                </div>

                <div className="relative mt-3 sm:mt-8 pt-3 sm:pt-6 border-t-2 border-gray-200 group-hover:border-gray-300 transition-colors">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="flex items-center justify-between gap-1 sm:gap-0"
                  >
                    <span className={`text-[9px] sm:text-sm font-black uppercase tracking-wider transition-colors ${
                      colorIndex === 0 ? "text-indigo-600" 
                      : colorIndex === 1 ? "text-purple-600"
                      : "text-pink-600"
                    }`}>
                      Read Article
                    </span>
                    <div className={`w-6 h-6 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                      colorIndex === 0 
                        ? "bg-indigo-100 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-indigo-700" 
                        : colorIndex === 1
                        ? "bg-purple-100 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-700"
                        : "bg-pink-100 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-pink-700"
                    }`}>
                      <LuArrowRight className="h-3 w-3 sm:h-6 sm:w-6 text-gray-600 group-hover:text-white transition-colors group-hover:translate-x-1" />
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
