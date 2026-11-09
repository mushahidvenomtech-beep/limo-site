import React from "react";
import Link from "next/link";
import {
  Plane,
  Briefcase,
  Clock,
  Car,
  Compass,
  Ship,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Airport Transfers executive travel is service VIP escorting and chauffeur service, and touring all the locations.",
    icon: <Plane className="w-5 h-5 text-sky-500" />,
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    description:
      "Corporate Travel completed luxury services on comfort programmers, and support transfers.",
    icon: <Briefcase className="w-5 h-5 text-sky-500" />,
  },
  {
    id: "hourly-service",
    title: "Hourly Service",
    description:
      "Hourly Service computed to luxury service and chauffeur driving the city's convenient quick transfers.",
    icon: <Clock className="w-5 h-5 text-sky-500" />,
  },
  {
    id: "limo-service",
    title: "Limo Service",
    description:
      "Limo Service, executive luxury transportation services costs with events and occasions.",
    icon: <Car className="w-5 h-5 text-sky-500" />,
  },
  {
    id: "whistler-transfers",
    title: "Whistler Transfers",
    description:
      "Whistler our executive luxury transportation services quickest access and trip transfers.",
    icon: <Compass className="w-5 h-5 text-sky-500" />,
  },
  {
    id: "cruise-transfers",
    title: "Cruise Transfers",
    description:
      "Cruise Transfer innovative luxury transportation service continent cruise cruise transfers.",
    icon: <Ship className="w-5 h-5 text-sky-500" />,
  },
];

export default function ExecutiveServicesSection() {
  return (
    <section id="services" className="w-full py-14 lg:py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Explore Our Executive Luxury Transportation Services
          </h2>
        </div>

        {/* 6 Cards Grid (2 rows of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Icon in soft blue circular gradient badge */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-blue-100/70 border border-sky-100 flex items-center justify-center mb-4 shadow-2xs">
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 hover:text-sky-600 transition-colors group"
                >
                  <span>Explore This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

