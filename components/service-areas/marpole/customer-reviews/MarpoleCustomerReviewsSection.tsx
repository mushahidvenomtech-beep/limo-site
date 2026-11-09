import React from "react";
import { Star, CheckCircle } from "lucide-react";

export default function MarpoleCustomerReviewsSection() {
  const reviews = [
    {
      name: "David K.",
      location: "Marpole, Vancouver",
      rating: 5,
      content:
        "The fastest and most reliable YVR airport transfer service! Being in Marpole, our driver arrived in 5 minutes, loaded all our gear, and we were at the airport terminal stress-free.",
    },
    {
      name: "Elena Rostova",
      location: "South Granville / Marpole",
      rating: 5,
      content:
        "We regularly use MJ Limos for visiting clients and downtown board meetings. Spotless vehicles, courteous chauffeurs, and effortless invoicing.",
    },
    {
      name: "Marcus Chen",
      location: "Oakridge / Marpole, BC",
      rating: 5,
      content:
        "Top-tier black car service. Punctual, safe, and comfortable. Even on early 5 AM airport runs, they are always waiting outside with a warm smile and warm cabin.",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Client Feedback on Our Luxury Car Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Trip reviews and feedback from our executive passengers in Marpole, BC
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
                    {idx === 0 ? "D" : idx === 1 ? "E" : "M"}
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

