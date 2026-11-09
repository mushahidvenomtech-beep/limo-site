import React from "react";
import { Clock } from "lucide-react";

export default function KillarneyTravelTimesSection() {
  const routes = [
    { destination: "Vancouver", time: "50 min" },
    { destination: "YVR Airport", time: "35 min" },
    { destination: "Richmond", time: "30 min" },
    { destination: "Tsawwassen", time: "45 min" },
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Other Areas We Serve with Luxury Car Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col items-center justify-center"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mb-2">
                <Clock className="w-4 h-4 text-sky-600" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-600 mb-1">
                {route.destination}
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                {route.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

