"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function YVRFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does MJ Limos provide for YVR Airport Limousine?",
      a: "MJ Limos provides private, luxurious, and dependable airport transportation to and from Vancouver International Airport (YVR). Services include live commercial and private flight tracking, inside terminal meet & greet, luggage assistance, and sanitized luxury sedans, SUVs, and Sprinter vans.",
    },
    {
      q: "What are customer procedures for YVR Airport Pickups?",
      a: "For Domestic Arrivals, your chauffeur will greet you near baggage claim or curbside at the pre-arranged passenger zone. For International Arrivals, our driver will hold an executive tablet with your name right after you clear customs and baggage collection.",
    },
    {
      q: "What is a common peak YVR Airport Limo Service?",
      a: "Common peak routes include direct transfers between YVR and downtown Vancouver hotels, corporate towers, Whistler mountain resorts, and cruise ship terminals at Canada Place.",
    },
    {
      q: "What is custom passenger YVR Airport meet & greet service?",
      a: "Our chauffeur coordinates directly with dispatch to monitor your flight in real time, parks in the designated executive airport stalls, and welcomes you inside the arrivals hall with personalized digital signage, handling all luggage directly to the vehicle.",
    },
    {
      q: "What does the car fleet in Vancouver bring across Lower Mainland?",
      a: "Our fleet features latest-model Mercedes-Benz executive sedans, Cadillac Escalades, Chevrolet Suburbans, and luxury Mercedes Sprinter vans equipped with leather seating, climate zones, device charging, and Wi-Fi for an elevated travel experience.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            FAQs
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

