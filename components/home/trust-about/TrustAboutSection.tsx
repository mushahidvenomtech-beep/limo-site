import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function TrustAboutSection() {
  const trustPills = [
    "All-Inclusive Rates",
    "Licensed & Insured",
    "24/7 VIP Support",
    "Diverse Fleet",
  ];

  return (
    <section id="about" className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 lg:space-y-20">
        {/* Top Block: About Us & Trust Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Dual Vehicle Imagery Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-900/5">
              <Image
                src="/images/about/car-exterior.jpg"
                alt="Luxury Sedan Exterior"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-900/5">
              <Image
                src="/images/about/car-interior.jpg"
                alt="Luxury Leather Car Interior"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Heading & 4 Feature Pills */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              About Us - Trusted Car Services in Vancouver, BC
            </h2>

            {/* 2x2 Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {trustPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 bg-slate-100/80 hover:bg-slate-100 border border-slate-200/60 rounded-full px-4 py-2.5 transition-colors shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 fill-sky-50" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {pill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Block: Safe & Professional Car Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text Description */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Safe & Professional Car Service You Can Trust
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              Driver trust for our customer service and proven top-class standards within our drivers and vehicles. Our chauffeurs undergo rigorous background checks, defensive driver training, and adhere to strict punctuality and confidentiality protocols. Every vehicle in our fleet is cleaned, sanitized, and inspected daily to deliver flawless executive luxury and peace of mind on every journey.
            </p>
          </div>

          {/* Right: Executive Passenger in Backseat */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[16/10] rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-900/10">
              <Image
                src="/images/about/executive-passenger.jpg"
                alt="Executive Passenger in Luxury Backseat"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

