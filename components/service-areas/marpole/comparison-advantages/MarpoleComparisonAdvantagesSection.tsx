import React from "react";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export default function MarpoleComparisonAdvantagesSection() {
  const col1 = [
    "Punctual Transfers",
    "Certified Chauffeurs",
    "Premium Comfort",
    "YVR Airport Experts",
    "Gourmet In-Car Amenities",
    "Safety / Sanitation Protocols",
  ];

  const col2 = [
    "Freedom of Black Car Service",
    "YVR Airport Experts",
    "Town Car Service",
    "Luxury Passenger Van",
    "Competitive Flat Rates",
    "Direct Route Efficiency",
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Comparison Advantages Of Black Car Service in Marpole
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Why settle for unpredictable rideshares or hailed taxis when traveling from Marpole? MJ Limos provides guaranteed flat-rate pricing, certified professional chauffeurs, sanitized executive vehicles, and direct curbside YVR service.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-200/80">
            <div className="flex flex-wrap items-center justify-end gap-3 mb-6 pb-4 border-b border-slate-100">
              <Link
                href="/contact-us"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs px-5 py-2 rounded-full shadow-sm transition-all"
              >
                Book Now
              </Link>
              <a
                href="tel:+16046128202"
                className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs px-5 py-2 rounded-full shadow-2xs transition-all"
              >
                <Phone className="w-3 h-3" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2.5 text-xs text-slate-700">
                {col1.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2.5 text-xs text-slate-700">
                {col2.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

