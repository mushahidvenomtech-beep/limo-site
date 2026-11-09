import React from "react";
import { Car, Briefcase, Sparkles, Heart } from "lucide-react";

export default function FairviewServicesRangeSection() {
  const services = [
    {
      title: "Sedan Transfers",
      description: "Seamless door-to-door luxury sedan transfers for YVR airport trips, business meetings, and hotel transit.",
      icon: <Car className="w-6 h-6 text-sky-500" />,
      accent: "from-sky-50 to-blue-100/60",
      borderGlow: "border-sky-100",
    },
    {
      title: "Corporate Car Service",
      description: "Dedicated executive transportation along Broadway, Cambie, and downtown Vancouver financial center.",
      icon: <Briefcase className="w-6 h-6 text-sky-500" />,
      accent: "from-sky-50 to-blue-100/60",
      borderGlow: "border-sky-100",
    },
    {
      title: "Night Out Limo Service",
      description: "Chauffeured evening service for dinner on Granville Island, theatre shows, and VIP city celebrations.",
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      accent: "from-purple-50 to-indigo-100/60",
      borderGlow: "border-purple-200 ring-2 ring-purple-400/20 shadow-[0_10px_25px_-5px_rgba(168,85,247,0.25)]",
    },
    {
      title: "Wedding Limo Service",
      description: "Immaculate bridal limousines and luxury Sprinter shuttles for romantic celebrations and wedding parties.",
      icon: <Heart className="w-6 h-6 text-teal-600" />,
      accent: "from-teal-50 to-emerald-100/60",
      borderGlow: "border-teal-100",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Ride in Style with our Luxury Car Services in Fairview, BC
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Reserve your next Ride with Luxury Car Services in Fairview, BC
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 border ${item.borderGlow} shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all flex flex-col items-center text-center justify-between`}
            >
              <div>
                <div
                  className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-4 shadow-2xs mx-auto`}
                >
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

