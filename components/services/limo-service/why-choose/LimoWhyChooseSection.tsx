import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function LimoWhyChooseSection() {
  const highlights = [
    "Professional & Experienced Chauffeurs",
    "Luxurious Fleet of Vehicles",
    "Punctual & Reliable Service",
  ];

  return (
    <section className="relative w-full py-12 lg:py-16 overflow-hidden bg-gradient-to-r from-[#0c0d1b] via-[#12132b] to-[#1a1236]">
      {/* Decorative ambient purple light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/limo/mercedes-reflection.jpg"
                alt="Luxury Mercedes Limousine in Vancouver"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text & Checklist */}
          <div className="lg:col-span-6 space-y-5 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Why Choose Our Luxury Limousine Service in Vancouver, BC?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Experience the difference with our premium limo services. We offer professional
              chauffeurs, a luxurious fleet, and exceptional service for all your transportation
              needs.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-purple-500/20 border border-purple-400/50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

