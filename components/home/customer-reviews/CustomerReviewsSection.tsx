"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, CheckCircle, ChevronRight } from "lucide-react";

interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  content: string;
  verifiedText: string;
}

const reviews: ReviewItem[] = [
  {
    id: "1",
    name: "James Brammer",
    avatar: "/images/reviews/avatar-1.jpg",
    rating: 5,
    content:
      "Team attended our conversation top-notch, great customs and executive services provided on the service and vehicles.",
    verifiedText: "Verified Customer",
  },
  {
    id: "2",
    name: "Jamie Peliss",
    avatar: "/images/reviews/avatar-2.jpg",
    rating: 5,
    content:
      "The best chauffeurs! Our executive and clients always excited to ride in the luxury fleet and experience the comfort.",
    verifiedText: "Verified Customer",
  },
  {
    id: "3",
    name: "James Stone",
    avatar: "/images/reviews/avatar-3.jpg",
    rating: 5,
    content:
      "I totally customize our journeys and was provided exceptional service to our team events and airport pick-ups.",
    verifiedText: "Verified Customer",
  },
];

export default function CustomerReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayedReviews = [
    ...reviews.slice(currentIndex),
    ...reviews.slice(0, currentIndex),
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-transparent via-slate-50/70 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            What Customers Say About Our Car Service in Vancouver
          </h2>
        </div>

        {/* Reviews Cards Carousel */}
        <div className="relative">
          {/* Right Navigation Arrow Button */}
          <button
            onClick={() => setCurrentIndex((prev: number) => (prev + 1) % reviews.length)}
            aria-label="Next review"
            className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200/80 items-center justify-center text-slate-700 hover:text-black hover:bg-slate-50 transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedReviews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Top user row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-slate-100 shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.name}
                        </span>
                        <CheckCircle className="w-3.5 h-3.5 text-sky-500 fill-sky-500 text-white shrink-0" />
                      </div>
                      {/* Star rating */}
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Card footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">{item.name}</span>
                  <div className="flex items-center gap-1 text-sky-600 font-medium">
                    <CheckCircle className="w-3 h-3 fill-sky-100 text-sky-600" />
                    <span>{item.verifiedText}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

