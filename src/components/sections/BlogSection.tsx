import Link from "next/link";
import { LuArrowRight, LuClock } from "react-icons/lu";
import { blogSpotlight } from "@/data/site-content";

export function BlogSection() {
  return (
    <section
      id="blogs"
      className="relative py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 text-gray-900 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-left sm:text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-2 sm:mb-4 lg:mb-6 text-gray-900">
            Educational{" "}
            <span className="text-gray-900">Blogs & Articles</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed font-light">
            Bite-sized explainer articles spotlighting the latest in robotic joint replacement, sports
            rehab protocols, and long-term pain management strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {blogSpotlight.map((post, index) => {
            const colorIndex = index % 3;
            return (
              <article
                key={post.slug}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white border border-gray-200 sm:border-2 p-3 sm:p-5 md:p-6 lg:p-8 shadow-sm sm:shadow-md hover:bg-gray-50 hover:border-indigo-400 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 lg:hover:-translate-y-4 hover:shadow-lg sm:hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  colorIndex === 0 
                    ? "bg-gradient-to-br from-indigo-50 to-transparent"
                    : colorIndex === 1
                    ? "bg-gradient-to-br from-purple-50 to-transparent"
                    : "bg-gradient-to-br from-pink-50 to-transparent"
                }`} />
                
                <div className="relative mb-2 sm:mb-4 md:mb-6">
                  <div className={`inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border ${
                    colorIndex === 0 
                      ? "bg-indigo-100 border-indigo-300 text-indigo-700" 
                      : colorIndex === 1
                      ? "bg-purple-100 border-purple-300 text-purple-700"
                      : "bg-pink-100 border-pink-300 text-pink-700"
                  }`}>
                    <LuClock className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                    <span className="text-[8px] sm:text-[10px] md:text-xs font-bold">{post.readingTime}</span>
                  </div>
                </div>

                <div className="relative flex-1 space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
                  <h3 className={`text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold sm:font-black leading-tight transition-colors duration-300 line-clamp-2 ${
                    colorIndex === 0 ? "text-gray-900 group-hover:text-indigo-600" 
                    : colorIndex === 1 ? "text-gray-900 group-hover:text-purple-600"
                    : "text-gray-900 group-hover:text-pink-600"
                  }`}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 text-[10px] sm:text-xs md:text-sm">
                    {post.excerpt}
                  </p>
                </div>

                <div className="relative mt-3 sm:mt-4 md:mt-6 lg:mt-8 pt-2 sm:pt-3 md:pt-4 lg:pt-6 border-t border-gray-200 sm:border-t-2 group-hover:border-gray-300 transition-colors">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="flex items-center justify-between gap-1"
                  >
                    <span className={`text-[9px] sm:text-xs md:text-sm font-bold sm:font-black uppercase tracking-wide transition-colors ${
                      colorIndex === 0 ? "text-indigo-600" 
                      : colorIndex === 1 ? "text-purple-600"
                      : "text-pink-600"
                    }`}>
                      Read Article
                    </span>
                    <div className={`w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                      colorIndex === 0 
                        ? "bg-indigo-100 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-indigo-700" 
                        : colorIndex === 1
                        ? "bg-purple-100 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-700"
                        : "bg-pink-100 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-pink-700"
                    }`}>
                      <LuArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 text-gray-600 group-hover:text-white transition-colors group-hover:translate-x-0.5" />
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
