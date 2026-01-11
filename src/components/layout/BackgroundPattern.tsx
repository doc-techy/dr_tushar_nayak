"use client";

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      {/* Moving Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'moveBackground 60s linear infinite',
        }}
      />

      {/* Floating Blobs for "portfolio" feel */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-300/20 rounded-full blur-3xl animate-float delay-1000" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-300/20 rounded-full blur-3xl animate-float delay-2000" />
    </div>
  );
}

