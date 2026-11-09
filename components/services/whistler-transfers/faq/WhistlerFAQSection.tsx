"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WhistlerFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does the transfer from Vancouver (or YVR) to Whistler take?",
      a: "The drive between Vancouver International Airport (YVR) and Whistler Village typically takes around 2 hours to 2 hours and 15 minutes, while departures from downtown Vancouver take approximately 1 hour and 45 minutes depending on traffic and weather conditions.",
    },
    {
      q: "Are your vehicles equipped for winter snow conditions on the Sea-to-Sky Highway?",
      a: "Yes. All our mountain-bound vehicles are all-wheel drive (AWD/4WD) and fitted with Ministry of Transportation certified severe-weather winter tires with deep tread and mountain snowflake ratings. Our chauffeurs have years of specialized alpine driving experience.",
    },
    {
      q: "Can our ski and snowboard gear fit comfortably in the vehicle?",
      a: "Absolutely. Our luxury SUVs (Cadillac Escalade, Chevy Suburban) and Mercedes Sprinter passenger vans have extensive luggage capacity designed specifically to accommodate ski bags, snowboards, boots, and oversized suitcases.",
    },
    {
      q: "Do you offer door-to-door service to all hotels and private chalets in Whistler?",
      a: "Yes, we provide direct private door-to-door service to all locations in Whistler, including Whistler Village, Upper Village, Creekside, Alta Lake, Green Lake, and private alpine chalets.",
    },
    {
      q: "Are your Whistler shuttle rates fixed or subject to change in bad weather?",
      a: "All MJ Limos Whistler transfers are guaranteed flat-rate quotes. Your confirmed price includes all highway tolls, fuel, and standard airport permits with zero surge fees or weather surcharges.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:text-slate-950"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

