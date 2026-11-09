"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function KillarneyFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does luxury limousine or car service to airport cost in Killarney?",
      a: "Pricing depends on vehicle choice (executive sedan, premium SUV, or Mercedes Sprinter) and trip details. We provide upfront, transparent, flat-rate pricing with zero surprise surge charges.",
    },
    {
      q: "What is a common peak Killarney Limo Service?",
      a: "Our most requested services include early morning YVR Airport transfers, downtown Vancouver executive commutes, Whistler mountain transfers, and private event celebrations.",
    },
    {
      q: "How can a passenger easily plan for an early YVR airport transfer?",
      a: "You can book online or phone us 24/7. Once confirmed, we monitor your flight live, assign a dedicated chauffeur, and send driver details with curbside meeting instructions prior to pickup.",
    },
    {
      q: "What does the car fleet in Killarney bring across Vancouver, BC?",
      a: "Our fleet features meticulously detailed executive sedans, Cadillac Escalades, Chevrolet Suburbans, and luxury Mercedes-Benz Sprinter vans outfitted with leather seating and climate control.",
    },
    {
      q: "Can you provide late night airport pick up or scheduled rides in Killarney?",
      a: "Yes! MJ Limos operates 24/7/365. Whether your flight lands past midnight at YVR or you require an early morning pickup in Killarney, our chauffeurs are always ready.",
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

