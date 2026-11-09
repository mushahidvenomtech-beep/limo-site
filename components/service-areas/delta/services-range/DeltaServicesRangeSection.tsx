import React from "react";
import { Plane, Car, Users } from "lucide-react";

export default function DeltaServicesRangeSection() {
  const services = [
    {
      title: "Airport Car Service",
      description: "Direct and reliable airport service to and from Vancouver Airport (YVR) and Abbotsford.",
      icon: <Plane className="w-6 h-6 text-sky-500" />,
      accent: "from-sky-50 to-blue-100/60",
      borderGlow: "border-sky-100",
    },
    {
      title: "Private Transportation for Event",
      description: "Private transportation for corporate events, galas, VIP dinners, and social celebrations.",
      icon: <Car className="w-6 h-6 text-purple-600" />,
      accent: "from-purple-50 to-indigo-100/60",
      borderGlow: "border-purple-200 ring-2 ring-purple-400/20 shadow-[0_10px_25px_-5px_rgba(168,85,247,0.25)]",
    },
    {
      title: "Group Transportation Service",
      description: "Group transportation service with executive Mercedes-Benz Sprinters and luxury mini coaches.",
      icon: <Users className="w-6 h-6 text-teal-600" />,
      accent: "from-teal-50 to-emerald-100/60",
      borderGlow: "border-teal-100",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Discover Our Full Range of Luxury Car Services in Delta, BC
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Tailored chauffeur solutions for airport runs, corporate transport, and executive VIP transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 border ${item.borderGlow} shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all flex flex-col items-center text-center`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-5 shadow-2xs`}
              >
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

