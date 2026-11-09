import React from "react";
import Image from "next/image";

export default function ContactHeroBanner() {
  return (
    <section className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden flex items-center justify-center">
      {/* Background Image: Luxury fleet overlook with skyline */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact/fleet-skyline.jpg"
          alt="MJ Limos Fleet with City Skyline"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle light/dark gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Floating Glassmorphic Headline Box */}
      <div className="relative z-10 max-w-xl mx-4 sm:mx-auto text-center px-6 sm:px-12 py-5 sm:py-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.15)] ring-1 ring-slate-900/5">
        <p className="text-xs sm:text-[13px] font-medium text-slate-700 tracking-wide mb-1">
          The Ultimate in Safety, Service and Satisfaction
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
          Contact MJ Limos
        </h1>
      </div>
    </section>
  );
}

