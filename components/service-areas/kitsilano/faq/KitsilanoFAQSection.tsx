"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function KitsilanoFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does luxury limousine or car service to airport cost in Kitsilano?",
      a: "Pricing depends on vehicle choice (executive sedan, premium SUV, or Mercedes Sprinter) and trip details. We provide upfront, transparent, flat-rate pricing with zero surprise surge charges.",
    },
    {
      q: "What is a common peak Kitsilano Limo Service?",
      a: "Our most requested services include early morning YVR Airport departures, downtown Vancouver business transfers, scenic Whistler mountain trips, and private dining events around Kits Beach.",
    },
    {
      q: "What is a common private transfer to YVR Airport time?",
      a: "Direct travel time from Kitsilano to Vancouver International Airport (YVR) typically takes between 20 to 25 minutes depending on traffic. Our chauffeurs continuously monitor routes to ensure zero delay.",
    },
    {
      q: "What type of car can be booked for special events in Kitsilano?",
      a: "We offer executive sedans (Mercedes-Benz S-Class, BMW 7-Series), full-size SUVs (Cadillac Escalade, Chevy Suburban), and luxury Mercedes Sprinter passenger vans accommodating up to 14 passengers.",
    },
    {
      q: "What does the car fleet in Kitsilano bring across Vancouver, BC?",
      a: "Our fleet features meticulously detailed, latest-model vehicles equipped with leather interiors, climate controls, privacy glass, Wi-Fi, and bottled water for an exceptional passenger experience.",
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

