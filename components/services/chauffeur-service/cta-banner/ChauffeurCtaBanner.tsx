import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ChauffeurCtaBanner() {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden flex items-center justify-center">
      {/* Background with waterfront reflection and Science World / False Creek */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/chauffeur/science-world.jpg"
          alt="Vancouver False Creek Skyline"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-purple-950/40 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 w-full text-center">
        {/* Floating Frosted Glass Card */}
        <div className="bg-white/85 backdrop-blur-xl border border-white/95 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight">
              Book a Stress-Free Luxury Limousine Service Today!
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Travel in comfort, arrive in style, and enjoy the best in luxury transportation.
          </p>

          <div className="pt-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:opacity-95 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

