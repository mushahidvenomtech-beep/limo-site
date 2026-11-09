import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AirportLimoExperienceSection() {
  const points = [
    "Punctual Transfers",
    "Meet & Greet",
    "Flight Tracking",
    "Flight Tracking Live",
    "Trained Chauffeurs",
    "Clean Chauffeurs",
    "Limo Sedans",
    "YVR Terminal Access",
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Experience Premium Airport Limo Transportation in Vancouver
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Experience premium luxury transportation in Vancouver, BC, services and personalized private transfers to YVR.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Why Choose Our Airport Limousine Service in Vancouver?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Arriving at or departing from Vancouver International Airport should be completely stress-free. Our certified chauffeurs monitor incoming flights live, assist with all luggage, and ensure a private, tranquil ride in sanitized luxury executive sedans and SUVs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-blue-100 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] p-2 bg-slate-200/80 rounded-2xl shadow-xl border border-slate-300">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/images/airport-limo/chauffeur-luggage.jpg"
                  alt="Airport Chauffeur Assisting Passenger with Luggage at YVR"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

