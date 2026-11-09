import React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function LimoReviewsSection() {
  const reviews = [
    {
      name: "Sarah Mitchell",
      avatar: "/images/reviews/avatar-1.jpg",
      rating: 5,
      review: "Exceptional service! Our chauffeur was professional and punctual. Highly recommend!",
    },
    {
      name: "David Chen",
      avatar: "/images/reviews/avatar-2.jpg",
      rating: 5,
      review: "A luxurious and comfortable ride! Perfect for our corporate event.",
    },
    {
      name: "Emily Johnson",
      avatar: "/images/reviews/avatar-3.jpg",
      rating: 5,
      review: "Reliable, elegant, and top-notch service. We will definitely use again!",
    },
  ];

  return (
    <section className="relative w-full py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say About Our Limo Service ?
          </h2>
        </div>

        {/* Carousel / Cards with arrow buttons */}
        <div className="relative flex items-center justify-between gap-3">
          {/* Left Arrow Button */}
          <button
            type="button"
            aria-label="Previous Review"
            className="hidden sm:flex w-9 h-9 rounded-full bg-purple-600 hover:bg-purple-700 text-white items-center justify-center shrink-0 shadow-sm transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 mt-4 border-t border-slate-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-200 shrink-0">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      {rev.name}
                    </h3>
                    <span className="text-[10px] text-purple-600 font-semibold block">
                      Verified Client
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            aria-label="Next Review"
            className="hidden sm:flex w-9 h-9 rounded-full bg-purple-600 hover:bg-purple-700 text-white items-center justify-center shrink-0 shadow-sm transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

