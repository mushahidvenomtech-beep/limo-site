import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function KillarneyHeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 z-10">
            <p className="text-xs sm:text-[13px] font-semibold text-slate-600 tracking-wide">
              The Ultimate in Safety, Service and Satisfaction
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Reserve Luxury Transportation Services in Killarney, BC
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Limo &amp; Luxury Transportation Services in Killarney, BC, focused on private and dependable private car airport rides and consultations criteria the ultimate in safety, service and satisfaction in Killarney, BC.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/contact-us"
                className="bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-sm hover:shadow transition-all"
              >
                Book Now
              </Link>
              <a
                href="tel:+16046128202"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-slate-900 border border-slate-300 font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-2xs hover:shadow transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/10">
              <Image
                src="/images/killarney/hero-fleet.jpg"
                alt="Luxury Limousines & Private Chauffeur Fleet in Killarney BC"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

