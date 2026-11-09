import React from "react";
import { Star, CheckCircle } from "lucide-react";

export default function SurreyCustomerReviewsSection() {
  const reviews = [
    {
      name: "Customer Review",
      location: "South Surrey",
      rating: 5,
      content:
        "We used MJ Limos for an airport pick-up from YVR back to South Surrey. The chauffeur helped with all our heavy luggage, the car smelled fresh and clean, and the ride was exceptionally smooth.",
    },
    {
      name: "Customer Review",
      location: "Fleetwood, Surrey",
      rating: 5,
      content:
        "Booked a private executive SUV for a family celebration into Downtown Vancouver. Excellent punctuality and wonderful service from start to finish. Highly recommend for any special event.",
    },
    {
      name: "Customer Review",
      location: "Guildford, Surrey",
      rating: 5,
      content:
        "Reliable early morning transfer for an international flight. Our driver arrived 15 minutes before scheduled time and got us through morning highway traffic with ease. Zero stress.",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Customer Reviews
          </h2>
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
                    {idx === 0 ? "J" : idx === 1 ? "R" : "M"}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-900">
                      {item.name}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {item.location}
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

