import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export default function KillarneyNeighborhoodsSection() {
  const col1 = [
    "Champlain Heights",
    "Killarney Park",
    "Eastridge Drive",
    "Vivian",
    "Priestland",
  ];

  const col2 = [
    "Kerr St",
    "Romany Park",
    "Elliott Street",
    "Captain Cook",
    "Lucy Rose Park",
  ];

  const col3 = [
    "Aneroid St",
    "Captain Swaine",
    "Kingswood",
    "High St",
    "East Killarney",
    "East Killarney Market",
  ];

  const col4 = [
    "Rupert",
    "Everett Crowley",
    "49th Ave",
    "54th Ave",
    "Fraserview Golf",
    "Dominion Park",
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/killarney/neighborhoods-bg.jpg"
          alt="Killarney BC Chauffeur Coverage"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        <div className="bg-white/85 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="bg-[#183149] text-white px-5 py-2.5 rounded-xl inline-block mb-3 shadow-sm">
              <h2 className="text-sm sm:text-base font-bold tracking-wide">
                Book Private Limo Service Anywhere in Killarney
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Serving every Killarney neighborhood, community park, and residential district.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2 pb-8 border-b border-slate-200">
            <div>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                {col1.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                {col2.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                {col3.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                {col4.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-[#183149] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Book Now
            </Link>
            <a
              href="tel:+16046128202"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
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

