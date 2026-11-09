import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export default function RichmondNeighborhoodsSection() {
  const col1 = [
    "Steveston",
    "Terra Nova",
    "Thompson",
    "Seafair",
    "Westwind",
    "Shellmont",
    "Ironwood",
    "Bridgeport",
  ];

  const col2 = [
    "City Centre",
    "Brighouse",
    "Minoru",
    "Garden City",
    "Blundell",
    "Broadmoor",
    "South Arm",
    "McNair",
  ];

  const col3 = [
    "East Richmond",
    "Hamilton",
    "Cambie",
    "Sea Island",
    "YVR Airport",
    "Riverport",
    "Mitchell Island",
    "Burkeville",
  ];

  const col4 = [
    "Golden Village",
    "Aberdeen",
    "Lansdowne",
    "Oval District",
    "Capstan",
    "London Landing",
    "Finn Slough",
    "Crestwood Industrial",
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background with chauffeur driving */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/richmond/neighborhoods-bg.jpg"
          alt="Richmond BC Chauffeur Coverage"
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
              Book Luxury Limo Service Anywhere in Richmond
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Serving every Richmond neighborhood, hotel corridor, and business park across Lulu Island and Sea Island.
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

