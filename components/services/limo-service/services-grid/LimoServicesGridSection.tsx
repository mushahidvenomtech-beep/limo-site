import React from "react";
import Link from "next/link";
import { Plane, Briefcase, CalendarHeart, Car, ChevronRight } from "lucide-react";

export default function LimoServicesGridSection() {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable and comfortable airport transfers to and from YVR.",
      href: "/services/airport-limo-service",
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description: "Professional transportation for business meetings and events.",
      href: "/services/black-car-service",
    },
    {
      icon: CalendarHeart,
      title: "Wedding & Events",
      description: "Make your special occasions unforgettable.",
      href: "/services/chauffeur-service",
    },
    {
      icon: Car,
      title: "Limousine Party Transportation",
      description: "Travel in style with our luxury fleet.",
      href: "/fleet",
    },
  ];

  return (
    <section className="relative w-full py-12 lg:py-16 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Limo Services in Vancouver, BC
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Premium transportation solutions for every occasion.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-50 border border-purple-200/60 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Link & Bottom Description */}
        <div className="mt-8 text-center space-y-3">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors"
          >
            <span>When to Book a Limousine in Vancouver</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From airport transfers to special events, our professional chauffeurs are dedicated to
            providing a first-class experience. Book your limo service today and enjoy the
            ultimate in luxury transportation.
          </p>
        </div>
      </div>
    </section>
  );
}

