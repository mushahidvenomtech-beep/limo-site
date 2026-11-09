import React from "react";
import { Users, Car, Calendar, Clock, DollarSign, CheckCircle } from "lucide-react";

export default function SurreyWhyChooseUsSection() {
  const features = [
    {
      title: "Professional Chauffeurs",
      description: "Professional chauffeurs trained to provide discreet, safe, and courteous service.",
      icon: <Users className="w-5 h-5 text-sky-500" />,
      glow: "border-sky-100",
    },
    {
      title: "Diverse Fleet",
      description: "Comprehensive luxury fleet including executive sedans, black SUVs, and Sprinters.",
      icon: <Car className="w-5 h-5 text-purple-600" />,
      glow: "border-purple-100",
    },
    {
      title: "Flexible Bookings",
      description: "Seamless online reservation, flexible itinerary changes, and responsive concierge support.",
      icon: <Calendar className="w-5 h-5 text-sky-500" />,
      glow: "border-sky-100",
    },
    {
      title: "Punctual Arrivals",
      description: "Punctual arrivals backed by automated flight tracking and proactive route dispatching.",
      icon: <CheckCircle className="w-5 h-5 text-sky-500" />,
      glow: "border-sky-100",
    },
    {
      title: "24/7 Service",
      description: "Day & night availability for 3:00 AM airport runs or midnight return flights.",
      icon: <Clock className="w-5 h-5 text-purple-600" />,
      glow: "border-purple-200 shadow-[0_8px_20px_-6px_rgba(168,85,247,0.25)]",
    },
    {
      title: "Competitive Rates",
      description: "Transparent, all-inclusive luxury rates with zero surprise surge fees or hidden costs.",
      icon: <DollarSign className="w-5 h-5 text-purple-600" />,
      glow: "border-purple-200 shadow-[0_8px_20px_-6px_rgba(168,85,247,0.25)]",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Why Choose Our Black Car Service in Surrey, BC?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 border ${item.glow} shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-start`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-1.5">
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

