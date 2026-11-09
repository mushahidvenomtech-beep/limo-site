"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DeltaFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why book a black car service instead of a taxi or rideshare in Delta?",
      a: "Unlike app-based rideshares that surge in price during bad weather or peak airport hours, MJ Limos provides guaranteed flat-rate pricing, certified professional chauffeurs, pristine sanitized luxury vehicles, and punctual flight tracking.",
    },
    {
      q: "Can you accommodate early morning or late-night airport transfers from Delta?",
      a: "Yes, our service operates 24/7/365. Whether you need a 3:30 AM departure from Tsawwassen or a midnight arrival pick-up at YVR, our chauffeurs will be waiting for you curbside.",
    },
    {
      q: "Do you provide child safety seats for family trips to YVR Airport?",
      a: "Yes, we can provide rear-facing infant seats, forward-facing toddler seats, or booster seats upon request. Please specify your child seat needs when reserving online or over the phone.",
    },
    {
      q: "What is your cancellation and reservation modification policy?",
      a: "We offer flexible cancellation policies. Point-to-point and airport transfer bookings can be cancelled or rescheduled up to 12 hours prior to pick-up time with zero penalty.",
    },
    {
      q: "Are your rates all-inclusive or are there extra fees for airport parking and tolls?",
      a: "All quotes provided by MJ Limos are fully all-inclusive. Airport terminal licensing fees, bridge tolls, and standard gratuity are clearly outlined with zero unexpected surprises.",
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

