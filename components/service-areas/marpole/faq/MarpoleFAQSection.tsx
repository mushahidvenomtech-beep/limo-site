"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MarpoleFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How close is Marpole to Vancouver International Airport (YVR)?",
      a: "Marpole is situated immediately north of YVR across the Arthur Laing and Oak Street bridges. Direct private transfers typically take only 8 to 12 minutes, making it the most convenient location in Vancouver for airport travel.",
    },
    {
      q: "What are the typical rates for a private car transfer from Marpole to YVR?",
      a: "We offer guaranteed flat-rate pricing based on vehicle choice (executive sedan, premium SUV, or Mercedes Sprinter van). All quotes are all-inclusive with zero surprise surge charges or bridge fees.",
    },
    {
      q: "Can I book an executive sedan or SUV for meetings in Downtown Vancouver?",
      a: "Yes. We offer hourly as well as point-to-point chauffeured service from Marpole into Downtown Vancouver, Gastown, Coal Harbour, and the Vancouver Convention Centre.",
    },
    {
      q: "Do you provide round-trip airport transfers with flight tracking?",
      a: "Yes, we continuously monitor all incoming commercial and private flights at YVR. If your flight is delayed or arrives early, your chauffeur automatically adjusts curbside pickup without extra fees.",
    },
    {
      q: "What types of luxury vehicles are available for booking in Marpole?",
      a: "Our fleet includes late-model Mercedes-Benz executive sedans, Cadillac Escalade and Chevy Suburban SUVs, and custom 11 to 14-passenger Mercedes Sprinter vans with ample luggage space.",
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

