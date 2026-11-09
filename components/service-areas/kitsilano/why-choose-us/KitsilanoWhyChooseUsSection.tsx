import React from "react";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

export default function KitsilanoWhyChooseUsSection() {
  const features = [
    {
      title: "Punctual Transfers",
      description: "Flight-tracked pick-ups and proactive traffic routing for zero-delay departures in Kitsilano.",
      theme: "bg-blue-600",
    },
    {
      title: "Certified Chauffeurs",
      description: "Our chauffeured vehicles are handled by certified chauffeurs with pristine executive training.",
      theme: "bg-purple-600",
    },
    {
      title: "Premium Comfort",
      description: "Quiet luxury cabins with climate zones, device charging, and bottled water for your ride.",
      theme: "bg-blue-600",
    },
    {
      title: "YVR Airport Experts",
      description: "Authorized airport access permits allowing expedited curbside terminal pickup and drop-off.",
      theme: "bg-purple-600",
    },
    {
      title: "YVR Transit Fleet",
      description: "Premium comfort executive sedans and SUVs suited for seamless airport and city journeys.",
      theme: "bg-blue-600",
    },
    {
      title: "Executive Mini-Coach",
      description: "Custom Mercedes Sprinters and passenger vans accommodating groups with easy access.",
      theme: "bg-purple-600",
    },
    {
      title: "Safe Aircraft Crews",
      description: "Safe limousine travel and private transfers for commercial airline flight crews and VIPs.",
      theme: "bg-blue-600",
    },
    {
      title: "Executive Club",
      description: "Private club and corporate event transfers with seamless scheduling and luxury accommodations.",
      theme: "bg-purple-600",
    },
  ];

  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Why Clients Prefer Our Limousine Service in Kitsilano?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Why clients prefer MJ Limos for private limousine services in Kitsilano and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div
                className={`${item.theme} px-4 py-2.5 flex items-center justify-between text-white font-bold text-xs tracking-wide`}
              >
                <span>{item.title}</span>
                <CheckCircle2 className="w-4 h-4 fill-white/20 text-white shrink-0" />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact-us"
            className="bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            Book Now
          </Link>
          <a
            href="tel:+16046128202"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-2xs transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}

