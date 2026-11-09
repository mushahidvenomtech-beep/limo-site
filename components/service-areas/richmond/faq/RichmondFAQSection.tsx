"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function RichmondFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where can I meet my chauffeur at Vancouver Airport (YVR) from Richmond?",
      a: "For domestic and international arrivals at YVR, your chauffeur can provide inside baggage claim meet-and-greet service with a personalized name sign, or curbside pick-up at designated limousine staging areas.",
    },
    {
      q: "How early should I book my YVR airport ride from a Richmond hotel?",
      a: "Since Richmond borders YVR Airport directly (often a 10 to 15 minute drive), reservations can be scheduled conveniently. We recommend booking at least 12 to 24 hours in advance to guarantee your preferred luxury sedan or SUV.",
    },
    {
      q: "Are the quoted prices from Richmond all-inclusive?",
      a: "Yes! All rates quoted by MJ Limos are fully all-inclusive. There are zero hidden airport terminal surcharges, bridge fees, or surge multipliers.",
    },
    {
      q: "Can I book a private car for an evening out in Steveston or Vancouver?",
      a: "Yes, we offer point-to-point and hourly chartered chauffeured services. Enjoy dinner in historic Steveston Village or a concert in Downtown Vancouver with guaranteed return service.",
    },
    {
      q: "What is your flight delay policy for airport pick-ups?",
      a: "We continuously monitor incoming commercial and private flights into YVR. If your flight is delayed or arrives early, your chauffeur's arrival time is automatically adjusted at no extra charge.",
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

