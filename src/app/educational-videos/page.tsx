"use client";

import { useState } from "react";
import Image from "next/image";
import { LuPlay, LuClock } from "react-icons/lu";

// Dummy video data
const educationalVideos = [
  {
    id: 1,
    title: "Understanding Knee Replacement Surgery",
    description: "A comprehensive guide to knee replacement surgery, including preparation, procedure, and recovery.",
    duration: "12:45",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Surgery",
  },
  {
    id: 2,
    title: "Hip Joint Replacement: What to Expect",
    description: "Learn about hip joint replacement procedures, recovery timeline, and post-operative care.",
    duration: "15:30",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Surgery",
  },
  {
    id: 3,
    title: "Arthroscopy Explained: Minimally Invasive Procedures",
    description: "Discover how arthroscopy works and its benefits for joint diagnosis and treatment.",
    duration: "10:20",
    thumbnail: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Procedure",
  },
  {
    id: 4,
    title: "Sports Injury Prevention and Management",
    description: "Expert tips on preventing sports injuries and managing them when they occur.",
    duration: "18:15",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Prevention",
  },
  {
    id: 5,
    title: "Post-Surgery Rehabilitation Exercises",
    description: "Essential exercises and rehabilitation protocols for optimal recovery after orthopedic surgery.",
    duration: "22:10",
    thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Rehabilitation",
  },
  {
    id: 6,
    title: "Managing Arthritis: Treatment Options",
    description: "Explore various treatment options for arthritis, from medication to surgical interventions.",
    duration: "14:25",
    thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Treatment",
  },
  {
    id: 7,
    title: "Spinal Surgery: When Is It Necessary?",
    description: "Understanding when spinal surgery is recommended and what procedures are available.",
    duration: "16:40",
    thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Surgery",
  },
  {
    id: 8,
    title: "Trauma Management: Emergency Orthopedic Care",
    description: "Critical information about emergency orthopedic trauma management and treatment protocols.",
    duration: "13:55",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Emergency",
  },
  {
    id: 9,
    title: "Robotic-Assisted Joint Replacement",
    description: "Learn about the latest advances in robotic-assisted joint replacement surgery.",
    duration: "19:30",
    thumbnail: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Technology",
  },
];

export default function EducationalVideosPage() {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const visibleVideosMobile = showAllMobile ? educationalVideos : educationalVideos.slice(0, 6);
  const allVideos = educationalVideos;

  return (
    <section className="relative py-12 sm:py-24 lg:py-12 px-4 text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto">
            <div className="mb-10 lg:mb-12 text-left sm:text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-0 lg:mb-4 text-white">
                Educational
                <span className="ml-2 text-white">
                  Videos
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-sm sm:text-xl lg:text-base text-gray-400 leading-relaxed font-light">
                Watch expert-led educational videos covering orthopedic treatments, surgical procedures, rehabilitation, and patient care.
              </p>
            </div>
            
            {/* Mobile view: 2 columns, show 6 initially */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* Mobile: show limited videos */}
              <div className="contents md:hidden">
                {visibleVideosMobile.map((video, index) => {
                const colorIndex = index % 3;
                  return (
                    <article
                      key={video.id}
                      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 shadow-md hover:bg-white/10 hover:border-brand-teal transition-all duration-500"
                    >
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        colorIndex === 0 
                          ? "bg-gradient-to-br from-brand-teal/10 to-transparent"
                          : colorIndex === 1
                          ? "bg-gradient-to-br from-brand-teal/10 to-transparent"
                          : "bg-gradient-to-br from-brand-teal/10 to-transparent"
                      }`} />
                      
                      <div className="relative aspect-video overflow-hidden bg-white/5">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                            colorIndex === 0 
                              ? "bg-brand-teal" 
                              : colorIndex === 1
                              ? "bg-brand-navy"
                              : "bg-brand-navy"
                          }`}>
                            <LuPlay className="h-3 w-3 text-white ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-1.5 right-1.5">
                          <div className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm ${
                            colorIndex === 0 
                              ? "text-teal-100" 
                              : colorIndex === 1
                              ? "text-teal-100"
                              : "text-teal-100"
                          }`}>
                            <LuClock className="h-2 w-2" />
                            <span className="text-[7px] font-bold">{video.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative p-3">
                        <div className="relative flex-1 space-y-1.5 mb-2">
                          <h3 className={`text-[10px] font-black leading-tight transition-colors duration-300 line-clamp-2 ${
                            colorIndex === 0 ? "text-white group-hover:text-brand-teal" 
                            : colorIndex === 1 ? "text-white group-hover:text-brand-teal"
                            : "text-white group-hover:text-brand-teal"
                          }`}>
                            {video.title}
                          </h3>
                        </div>

                        <div className="relative pt-2 border-t border-white/10 group-hover:border-white/20 transition-colors">
                          <button
                            type="button"
                            className="flex items-center justify-between gap-1 w-full"
                            onClick={() => {
                              window.open(video.videoUrl, '_blank');
                            }}
                          >
                            <span className={`text-[7px] font-black uppercase tracking-normal transition-colors ${
                              colorIndex === 0 ? "text-brand-teal" 
                              : colorIndex === 1 ? "text-brand-teal"
                              : "text-brand-teal"
                            }`}>
                              Watch
                            </span>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                              colorIndex === 0 
                                ? "bg-brand-teal/10 group-hover:bg-brand-teal" 
                                : colorIndex === 1
                                ? "bg-brand-teal/10 group-hover:bg-brand-navy"
                                : "bg-brand-teal/10 group-hover:bg-brand-navy"
                            }`}>
                              <LuPlay className="h-2 w-2 text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Desktop/Tablet: show all videos */}
              <div className="hidden md:contents">
                {allVideos.map((video, index) => {
                  const colorIndex = index % 3;
                  return (
                    <article
                      key={video.id}
                      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border-2 border-white/10 shadow-md hover:bg-white/10 hover:border-brand-teal transition-all duration-500 hover:-translate-y-4 hover:shadow-xl hover:shadow-brand-teal/20"
                    >
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        colorIndex === 0 
                          ? "bg-gradient-to-br from-brand-teal/10 to-transparent"
                          : colorIndex === 1
                          ? "bg-gradient-to-br from-brand-teal/10 to-transparent"
                          : "bg-gradient-to-br from-brand-teal/10 to-transparent"
                      }`} />
                      
                      <div className="relative aspect-video lg:aspect-[21/10] overflow-hidden bg-white/5">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                          <div className={`w-12 h-12 sm:w-14 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                            colorIndex === 0 
                              ? "bg-brand-teal" 
                              : colorIndex === 1
                              ? "bg-brand-navy"
                              : "bg-brand-navy"
                          }`}>
                            <LuPlay className="h-5 w-5 sm:h-6 lg:h-5 lg:w-5 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-2 lg:right-2">
                          <div className={`inline-flex items-center gap-1 sm:gap-2 lg:gap-1 px-2 sm:px-3 lg:px-2 py-1 sm:py-1.5 lg:py-1 rounded-full bg-black/70 backdrop-blur-sm ${
                            colorIndex === 0 
                              ? "text-teal-100" 
                              : colorIndex === 1
                              ? "text-teal-100"
                              : "text-teal-100"
                          }`}>
                            <LuClock className="h-2.5 w-2.5 sm:h-3 lg:h-2.5 lg:w-2.5" />
                            <span className="text-[8px] sm:text-xs lg:text-[8px] font-bold">{video.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative p-3 sm:p-8 lg:p-4">
                        <div className="relative flex-1 space-y-2 sm:space-y-4 lg:space-y-2 mb-3 sm:mb-8 lg:mb-4">
                          <h3 className={`text-sm sm:text-2xl lg:text-lg font-black leading-tight transition-colors duration-300 ${
                            colorIndex === 0 ? "text-white group-hover:text-brand-teal" 
                            : colorIndex === 1 ? "text-white group-hover:text-brand-teal"
                            : "text-white group-hover:text-brand-teal"
                          }`}>
                            {video.title}
                          </h3>
                        </div>

                        <div className="relative pt-3 sm:pt-6 lg:pt-3 border-t-2 border-white/10 group-hover:border-white/20 transition-colors lg:hidden">
                          <button
                            type="button"
                            className="flex items-center justify-between gap-1 sm:gap-0 w-full"
                            onClick={() => {
                              window.open(video.videoUrl, '_blank');
                            }}
                          >
                            <span className={`text-[9px] sm:text-sm lg:text-xs font-black uppercase tracking-normal transition-colors ${
                              colorIndex === 0 ? "text-brand-teal" 
                              : colorIndex === 1 ? "text-brand-teal"
                              : "text-brand-teal"
                            }`}>
                              Watch Video
                            </span>
                            <div className={`w-6 h-6 sm:w-12 sm:h-12 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                              colorIndex === 0 
                                ? "bg-brand-teal/10 group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-navy" 
                                : colorIndex === 1
                                ? "bg-brand-teal/10 group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-navy"
                                : "bg-brand-teal/10 group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-navy"
                            }`}>
                              <LuPlay className="h-3 w-3 sm:h-6 sm:w-6 lg:h-4 lg:w-4 text-gray-400 group-hover:text-white transition-colors group-hover:translate-x-0.5" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Load More button - Mobile only */}
            {educationalVideos.length > 6 && (
              <div className="mt-6 lg:mt-12 flex justify-center md:hidden">
                <button
                  type="button"
                  onClick={() => setShowAllMobile((prev) => !prev)}
                  className="px-10 py-4 rounded-full border-2 border-white/10 text-gray-400 font-bold text-xs uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/10 hover:border-brand-teal hover:text-brand-teal hover:scale-105"
                >
                  {showAllMobile ? "Show Less" : "Load More"}
                </button>
              </div>
            )}
          </div>
    </section>
  );
}
