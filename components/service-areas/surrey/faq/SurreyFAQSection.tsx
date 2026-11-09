"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SurreyFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How far in advance should I book my Surrey to YVR airport transfer?",
      a: "We recommend reserving at least 24 hours in advance, especially for early morning flights or holiday weekends. However, our 24/7 dispatch team can frequently accommodate same-day requests.",
    },
    {
      q: "Can I book a round-trip chauffeur service for a night out in Vancouver?",
      a: "Yes! Our round-trip and hourly charter services allow you to enjoy your evening in Downtown Vancouver, concerts, or sporting events with guaranteed return pickup whenever you are ready.",
    },
    {
      q: "Do you serve all areas of Surrey including South Surrey and Cloverdale?",
      a: "Absolutely. We service all Surrey communities, including South Surrey, Morgan Creek, White Rock border areas, Guildford, Fleetwood, Newton, and Clayton Heights.",
    },
    {
      q: "What types of vehicles are available in the Surrey fleet?",
      a: "Our fleet consists of Mercedes-Benz executive sedans, Cadillac Escalade and Yukon Denali luxury SUVs, high-roof Mercedes Sprinter passenger vans, and executive mini coaches.",
    },
    {
      q: "Are highway tolls and airport parking fees included in the price?",
      a: "Yes, all quotes provided are 100% all-inclusive. You will never encounter hidden bridge tolls, airport licensing surcharges, or peak demand multiplier fees.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50/70 border-t border-slate-100">
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
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100">
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

