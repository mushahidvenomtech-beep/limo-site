import React from "react";
import { CalendarCheck, PlaneTakeoff, Car } from "lucide-react";

export default function BlackCarProcessSection() {
  const steps = [
    {
      num: "1. Instant Online Booking",
      description:
        "Guaranteed flat-rate pricing, 24/7 online dispatch for executive sedans, black luxury SUVs, and Sprinters.",
      icon: <CalendarCheck className="w-6 h-6 text-sky-500" />,
      accent: "from-sky-50 to-blue-100/60",
      borderGlow: "border-sky-100",
    },
    {
      num: "2. Flight Tracking & Meet & Greet",
      description:
        "Comprehensive flight tracking with inside terminal greeting, baggage handling, and proactive chauffeur notifications.",
      icon: <PlaneTakeoff className="w-6 h-6 text-blue-600" />,
      accent: "from-blue-50 to-indigo-100/60",
      borderGlow: "border-blue-200 ring-2 ring-blue-400/20 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)]",
    },
    {
      num: "3. On-Time VIP Transfer",
      description:
        "Discreet, white-glove curbside service to your hotel, office, or residence with 100% punctuality and luxury.",
      icon: <Car className="w-6 h-6 text-purple-600" />,
      accent: "from-purple-50 to-indigo-100/60",
      borderGlow: "border-purple-100",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            How Our Transfer Process Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Discover How Our Transfer Process Works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 sm:p-7 border ${step.borderGlow} shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all flex flex-col items-center text-center`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center mb-5 shadow-2xs`}
              >
                {step.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                {step.num}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

