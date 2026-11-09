import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export default function DeltaNeighborhoodsSection() {
  const col1 = [
    "Ladner",
    "East Delta",
    "Landing Dr",
    "North Delta",
    "River Rd",
    "Burns Bog",
    "Boundary Bay",
    "Westham Island",
  ];

  const col2 = [
    "Tsawwassen",
    "North Delta Centre",
    "River Rd",
    "Hillcrest",
    "Nordel Way",
    "Scott Rd",
    "120th St",
    "64th Ave",
  ];

  const col3 = [
    "LRT Station",
    "Town Centre",
    "Automotive District",
    "Pacific Centre",
    "72nd Ave",
    "River Forest",
    "Lower Drive",
    "Nordel Ridge",
  ];

  const col4 = [
    "North Delta",
    "South Delta",
    "Annacis Island",
    "Sunbury",
    "Fraser River",
    "Sunshine Woods",
    "Tilbury Industrial",
    "Marina",
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background with chauffeur driving */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/delta/neighborhoods-bg.jpg"
          alt="Delta BC Chauffeur Coverage"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Frosted Glass Container */}
        <div className="bg-white/85 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Enjoy Luxury Black Car Service Anywhere in Delta, BC
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              With wide range neighborhood transportation service, our team can cover every local neighborhood to your destination.
            </p>
          </div>

          {/* 4 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2 pb-8 border-b border-slate-200">
            <div>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                {col1.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                {col2.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                {col3.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                {col4.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link
              href="/contact-us"
              className="bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-8 py-3 rounded-full shadow-sm hover:shadow transition-all"
            >
              Book Now
            </Link>
            <a
              href="tel:+16046128202"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

