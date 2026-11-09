import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function ExperiencePreviewSection() {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text and CTA buttons */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Experience a Premium Luxury Transportation in Vancouver, BC
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              Experience a premium luxury transportation in Vancouver, BC tailored to fulfill every VIP requirement with flawlessly articulated execution and the newest luxury fleet. Our chauffeured services feature top-tier Mercedes, Cadillac Escalades, and executive vans providing unmatched discretion, punctuality, and comfort to elevate your travels.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#booking"
                className="bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
              >
                Book Now
              </Link>
              <a
                href="tel:+16046128202"
                className="inline-flex items-center gap-2 bg-slate-200/80 hover:bg-slate-300 text-slate-800 font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-2xs transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Floating 3D Isometric Runway Fleet Platform */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] p-2">
              {/* Perspective container */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_40px_-15px_rgba(0,0,0,0.35)] ring-1 ring-slate-900/10 border-4 border-white transform transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative w-full aspect-[16/10] bg-slate-900">
                  <Image
                    src="/images/about/tarmac-fleet.jpg"
                    alt="Luxury Fleet on Private Aviation Runway"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Subtle bevel gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>
              {/* Soft ambient ground shadow */}
              <div className="w-[85%] h-5 mx-auto bg-slate-950/15 blur-lg rounded-full -mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

