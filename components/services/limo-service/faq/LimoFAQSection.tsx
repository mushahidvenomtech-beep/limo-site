"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export default function LimoFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you provide airport transportation in Vancouver, BC?",
      answer:
        "Yes, we offer 24/7 premium airport transfers to and from Vancouver International Airport (YVR), Abbotsford International Airport (YXX), and local private jet FBO terminals with real-time flight tracking and meet-and-greet options.",
    },
    {
      question: "Are your chauffeurs professionally trained?",
      answer:
        "Every MJ Limos chauffeur undergoes comprehensive background screening, professional driving certification, defensive driving training, and hospitality etiquette standards.",
    },
    {
      question: "Can I book a limo for a special event?",
      answer:
        "Absolutely. We cater to weddings, galas, wine tours, proms, anniversaries, executive dinners, and sporting events with custom hourly or round-trip itineraries.",
    },
    {
      question: "Do you offer corporate accounts?",
      answer:
        "Yes, we provide dedicated corporate accounts with centralized billing, itemized expense receipts, customized cancellation windows, and preferential scheduling for executive travel.",
    },
    {
      question: "What happens if my flight is delayed?",
      answer:
        "Our dispatch team monitors your flight in real time using satellite tracking. We adjust your chauffeur’s dispatch schedule automatically at no extra delay charge.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-12 lg:py-16 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Sedan Image */}
          <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md">
            <Image
              src="/images/limo/faq-mercedes.jpg"
              alt="MJ Limos Luxury Limousine"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right: FAQs List */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-purple-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <div className="w-6 h-6 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 ml-3">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

