"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FairviewFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are the typical rates for a private car service in Fairview, BC?",
      a: "Our pricing is transparent and flat-rate based on the vehicle selected (executive sedan, premium SUV, or Mercedes Sprinter van). We offer all-inclusive quotes with zero hidden fees or unexpected surge charges.",
    },
    {
      q: "How far in advance should I reserve an airport transfer from Fairview to YVR?",
      a: "We recommend reserving at least 12 to 24 hours in advance to guarantee your preferred vehicle. However, our dispatch team also accommodates last-minute requests subject to immediate fleet availability.",
    },
    {
      q: "Do you provide luxury chauffeur transportation to Vancouver General Hospital (VGH)?",
      a: "Yes. We frequently provide private, discreet, and reliable chauffeur services for patients, visiting specialists, and medical executives traveling to and from the VGH medical precinct and Fairview clinics.",
    },
    {
      q: "Can I book an executive SUV or Sprinter van for corporate roadshows on Broadway?",
      a: "Absolutely. We offer hourly and full-day as-directed chauffeur bookings with latest-model SUVs and custom Mercedes Sprinters, complete with onboard Wi-Fi and device charging for productive business travel.",
    },
    {
      q: "What safety and cleanliness protocols are maintained in your Fairview fleet?",
      a: "All vehicles undergo comprehensive daily mechanical inspections and multi-point detailing before every trip. Chauffeurs are professionally certified, background-checked, and committed to complete passenger safety.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked Questions About Our Luxury Transportation
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

