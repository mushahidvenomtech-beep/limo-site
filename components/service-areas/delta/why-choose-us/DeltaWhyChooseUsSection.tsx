import React from "react";
import { Shield, Award, Plane, Clock, DollarSign, CheckCircle } from "lucide-react";

export default function DeltaWhyChooseUsSection() {
  const features = [
    {
      title: "Executive Comfort",
      description: "Executive comfort with quiet, leather-trimmed cabins and customized passenger climate.",
      icon: <CheckCircle className="w-5 h-5 text-sky-500" />,
      glow: "border-sky-100",
    },
    {
      title: "Certified Chauffeurs",
      description: "Certified chauffeurs vetted with professional defensive training and background checks.",
      icon: <Award className="w-5 h-5 text-purple-600" />,
      glow: "border-purple-100",
    },
    {
      title: "Airport Transfers",
      description: "Executive black car and airport accessible curbside service with live flight monitoring.",
      icon: <Plane className="w-5 h-5 text-sky-500" />,
      glow: "border-sky-100",
    },
    {
      title: "Accessible Service",
      description: "Premium customized accessible executive service tailored for every passenger request.",
      icon: <Shield className="w-5 h-5 text-sky-500" />,
      glow: "border-sky-100",
    },
    {
      title: "24/7 Service",
      description: "Around-the-clock reservation dispatch and chauffeur availability 365 days a year.",
      icon: <Clock className="w-5 h-5 text-purple-600" />,
      glow: "border-purple-200 shadow-[0_8px_20px_-6px_rgba(168,85,247,0.25)]",
    },
    {
      title: "Competitive Rates",
      description: "Delivering accessible, all-inclusive luxury rates with upfront pricing and zero hidden surges.",
      icon: <DollarSign className="w-5 h-5 text-purple-600" />,
      glow: "border-purple-200 shadow-[0_8px_20px_-6px_rgba(168,85,247,0.25)]",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Why Choose Us For Your Transportation in Delta BC?
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

