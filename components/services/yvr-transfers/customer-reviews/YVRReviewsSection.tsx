import React from "react";
import { Star, CheckCircle } from "lucide-react";

export default function YVRReviewsSection() {
  const reviews = [
    {
      name: "Jane Kramer",
      role: "Corporate Executive",
      rating: 5,
      content:
        "The fastest, smoothest YVR airport transfer experience in Vancouver. Our driver greeted us right at baggage claim with our company name on an iPad, loaded all our gear, and had us at our downtown hotel in 25 minutes.",
    },
    {
      name: "Jane Foley",
      role: "Frequent Flyer",
      rating: 5,
      content:
        "MJ Limos's flight tracking is a lifesaver. Our flight from Toronto was delayed 50 minutes, yet our chauffeur adjusted arrival time automatically with zero hassle and zero extra wait fees.",
    },
    {
      name: "Josh Scott",
      role: "Whistler Traveler",
      rating: 5,
      content:
        "Booked a luxury SUV from YVR directly to Whistler. Vehicle was immaculate with plenty of room for all our ski gear. Safe mountain driving and very polite chauffeur.",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            What Customers Say About Our YVR Transfer Service
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Verified passenger reviews for Vancouver International Airport transfers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {idx === 0 ? "J" : idx === 1 ? "J" : "J"}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-900">
                      {item.name}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {item.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic mb-4">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-sky-600 text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 fill-sky-100" />
                <span>Verified Client</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

