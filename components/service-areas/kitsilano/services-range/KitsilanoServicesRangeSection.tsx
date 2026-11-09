import React from "react";
import { Shield, Car, Compass, Briefcase } from "lucide-react";

export default function KitsilanoServicesRangeSection() {
  const services = [
    {
      title: "Black Car Service",
      description: "Dedicated private black car service for executives and VIP airport transfers in Kitsilano.",
      icon: <Shield className="w-6 h-6 text-sky-500" />,
      accent: "from-sky-50 to-blue-100/60",
      borderGlow: "border-sky-100",
    },
    {
      title: "Town Car Service",
      description: "Chauffeured luxury sedans and town cars for seamless point-to-point transit across Vancouver.",
      icon: <Car className="w-6 h-6 text-sky-500" />,
      accent: "from-sky-50 to-blue-100/60",
      borderGlow: "border-sky-100",
    },
    {
      title: "Whistler Transfers",
      description: "Private executive charters and winter-rated SUVs to Whistler Blackcomb ski resort.",
      icon: <Compass className="w-6 h-6 text-purple-600" />,
      accent: "from-purple-50 to-indigo-100/60",
      borderGlow: "border-purple-200 ring-2 ring-purple-400/20 shadow-[0_10px_25px_-5px_rgba(168,85,247,0.25)]",
    },
    {
      title: "Corporate Travel",
      description: "Business roadshows, executive client entertainment, and group corporate transport.",
      icon: <Briefcase className="w-6 h-6 text-teal-600" />,
      accent: "from-teal-50 to-emerald-100/60",
      borderGlow: "border-teal-100",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Explore Private Luxury Transportation in Kitsilano
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Upgrade Your Next Ride with Luxury Car Service in Kitsilano, BC
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

