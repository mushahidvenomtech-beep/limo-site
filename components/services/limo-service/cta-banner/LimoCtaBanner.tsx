import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LimoCtaBanner() {
  return (
    <section className="relative w-full py-14 lg:py-20 overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/limo/science-world.jpg"
          alt="Vancouver Science World at Twilight"
          fill
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Book a Stress-Free Luxury Limousine Service Today!
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Whether it&apos;s an airport transfer, corporate event, or a special occasion,
            MJ Limos is here to provide the best in luxury transportation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
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

