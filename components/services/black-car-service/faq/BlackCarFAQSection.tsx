"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BlackCarFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the difference between a taxi/rideshare and your black car service?",
      a: "Unlike app rideshares with unpredictable surge rates, inconsistent car quality, and random drivers, our black car service guarantees pristine latest-model luxury sedans and SUVs, certified professional chauffeurs in full suit and tie, flight tracking, and transparent upfront flat-rate pricing.",
    },
    {
      q: "What vehicles are available in your black car fleet?",
      a: "Our executive black car fleet includes premium German and American luxury vehicles: Mercedes-Benz S-Class and E-Class sedans, Cadillac Escalades, Chevrolet Suburbans, and custom Mercedes-Benz Sprinter executive vans.",
    },
    {
      q: "Can I book black car service for full-day corporate as-directed travel?",
      a: "Yes. We offer hourly and full-day as-directed chauffeur bookings for corporate roadshows, multi-meeting itineraries across the Lower Mainland, and VIP client entertainment.",
    },
    {
      q: "How are black car rates calculated?",
      a: "All rates are transparent flat fees or standardized hourly rates. Tolls, airport licensing access fees, and standard amenities are clearly detailed upfront with zero surge pricing.",
    },
    {
      q: "Do you provide meet & greet service for executive arrivals at YVR?",
      a: "Yes. Our chauffeur tracks the incoming flight, enters the terminal with an executive digital name tablet, assists with baggage claim, and escorts you directly to the awaiting luxury vehicle.",
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

