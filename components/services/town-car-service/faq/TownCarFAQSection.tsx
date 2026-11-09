"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TownCarFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is included in your Vancouver town car service?",
      a: "Our town car service includes a private, immaculately maintained executive luxury sedan, a professionally attired and certified chauffeur, flight tracking for airport transfers, complimentary bottled water, device charging, and guaranteed punctual service.",
    },
    {
      q: "Can I reserve a town car for hourly or multi-stop itineraries?",
      a: "Yes. In addition to flat-rate point-to-point and airport transfers, we offer hourly as-directed bookings. Your chauffeur stays with you throughout the day for back-to-back corporate meetings, dining, or shopping.",
    },
    {
      q: "How does your town car service differ from regular taxis and rideshares?",
      a: "Unlike app rideshares with surge pricing and random vehicle conditions, our town car service guarantees premium luxury sedans (Lincoln Continental, Mercedes-Benz, Cadillac), upfront transparent pricing, and trained, security-cleared professional chauffeurs.",
    },
    {
      q: "What is the luggage capacity in an executive town car sedan?",
      a: "Our executive town car sedans comfortably seat up to 3 passengers with trunk capacity for 2 to 3 standard large suitcases plus carry-on bags. For larger groups or ski bags, we offer luxury full-size SUVs and Mercedes Sprinters.",
    },
    {
      q: "Are town car airport transfer rates all-inclusive?",
      a: "Yes, all quotes provided by MJ Limos are fully all-inclusive. Bridge tolls, airport licensing fees, and standard gratuities are completely transparent with zero hidden fees.",
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

