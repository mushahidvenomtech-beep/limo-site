import React from "react";
import { ShieldCheck, Clock, UserCheck } from "lucide-react";

export default function WhistlerWhyChooseSection() {
  const points = [
    {
      title: "Safety",
      description:
        "All-wheel drive luxury vehicles equipped with high-performance winter-rated mountain tires and commercial safety certifications.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Punctuality",
      description:
        "Proactive weather tracking along the Sea-to-Sky Highway ensuring zero delay for flight departures and chalet check-ins.",
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: "Professional Chauffeurs",
      description:
        "Highly experienced mountain drivers trained in winter alpine conditions, professional courtesy, and passenger discretion.",
      icon: <UserCheck className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50/80 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Why Choose Our Luxury Whistler Shuttle Service from Vancouver, BC
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
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

