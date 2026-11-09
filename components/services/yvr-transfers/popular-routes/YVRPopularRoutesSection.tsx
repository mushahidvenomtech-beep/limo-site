import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function YVRPopularRoutesSection() {
  const routes = [
    {
      from: "YVR Airport",
      to: "Downtown Vancouver",
      time: "25 min",
      type: "Executive Sedan & SUV",
    },
    {
      from: "YVR Airport",
      to: "Whistler Blackcomb",
      time: "2 hr 15 min",
      type: "4WD Luxury SUV & Sprinter",
    },
    {
      from: "YVR Airport",
      to: "Canada Place Cruise Terminal",
      time: "30 min",
      type: "Passenger Van & Sedan",
    },
    {
      from: "YVR Airport",
      to: "Richmond & South Vancouver",
      time: "15 min",
      type: "Chauffeured Town Car",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.04)] text-center">
          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            The ultimate private transfer experience for individuals, executive groups, and corporate travelers. Enjoy immaculate luxury sedans, spacious passenger vans, and dedicated luggage capacity for seamless connections between YVR Airport and top British Columbia destinations.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tight mb-8">
            Popular YVR Transfer Routes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {routes.map((route, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {route.time}
                    </span>
                    <span className="text-[11px] bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-bold">
                      {route.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span>{route.from}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-blue-900">{route.to}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/50 flex justify-end">
                  <Link
                    href="/contact-us"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Reserve Route</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

