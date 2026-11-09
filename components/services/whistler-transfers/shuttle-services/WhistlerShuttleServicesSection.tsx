import React from "react";
import { Car, Truck, Bus } from "lucide-react";

export default function WhistlerShuttleServicesSection() {
  const services = [
    {
      num: "1.",
      title: "Private SUV & Sedan Transfers",
      description:
        "Ideal for individuals, couples, and families up to 6 passengers with dedicated ski racks, heated leather seats, and all-wheel drive.",
      icon: <Car className="w-7 h-7 text-sky-500" />,
      accent: "from-sky-50 to-blue-100/60",
      borderGlow: "border-sky-100",
    },
    {
      num: "2.",
      title: "Luxury Sprinter & Van Shuttles",
      description:
        "Spacious custom Mercedes Sprinter vans with high roofs, ambient lighting, and dedicated extra-large luggage bays for up to 14 guests.",
      icon: <Truck className="w-7 h-7 text-blue-600" />,
      accent: "from-blue-50 to-indigo-100/60",
      borderGlow: "border-blue-200 ring-2 ring-blue-400/20 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)]",
    },
    {
      num: "3.",
      title: "Executive Mini-Coach Services",
      description:
        "Premium mini-coaches for corporate ski retreats, large wedding parties, and conference groups traveling between Vancouver and Whistler.",
      icon: <Bus className="w-7 h-7 text-purple-600" />,
      accent: "from-purple-50 to-indigo-100/60",
      borderGlow: "border-purple-100",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Our Luxury Whistler Shuttle Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Tailored private ground transportation for mountain journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 sm:p-7 border ${item.borderGlow} shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all flex flex-col items-center text-center`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-5 shadow-2xs`}
              >
                {item.icon}
              </div>
              <span className="text-xs font-bold text-blue-600 mb-1">
                Option {item.num}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
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

