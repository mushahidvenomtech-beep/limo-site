import React from "react";
import { Users, Car, UserCheck } from "lucide-react";

export default function ChauffeurStatsCounter() {
  const stats = [
    {
      value: "3,000+",
      label: "Rides",
      icon: <Users className="w-5 h-5 text-purple-600" />,
    },
    {
      value: "13",
      label: "Cars",
      icon: <Car className="w-5 h-5 text-purple-600" />,
    },
    {
      value: "17",
      label: "Chauffeurs",
      icon: <UserCheck className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-20">
      <div className="bg-white/85 backdrop-blur-xl border border-white/95 rounded-2xl sm:rounded-full py-4 px-6 sm:px-10 shadow-[0_15px_35px_rgba(124,58,237,0.1)] ring-1 ring-slate-900/5 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center gap-3 pt-3 sm:pt-0"
          >
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
              {stat.icon}
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="block text-xs font-semibold text-slate-500 mt-0.5">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

