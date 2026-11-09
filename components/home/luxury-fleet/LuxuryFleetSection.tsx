"use client";

import React from "react";
import Image from "next/image";
import LogoLoop from "@/components/common/logo-loop/LogoLoop";

interface FleetVehicle {
  name: string;
  image: string;
  passengers: string;
  luggage: string;
  badge?: string;
  badgeColor?: string;
}

const fleetVehicles: FleetVehicle[] = [
  {
    name: "Executive Sedan",
    image: "/images/fleet/executive-sedan.jpg",
    passengers: "Up to 3",
    luggage: "3 Bags",
    badge: "Sedan",
    badgeColor: "bg-sky-500",
  },
  {
    name: "Luxury SUV",
    image: "/images/fleet/luxury-suv.jpg",
    passengers: "Up to 6",
    luggage: "6 Bags",
    badge: "SUV",
    badgeColor: "bg-purple-600",
  },
  {
    name: "Extended Chauffeur SUV",
    image: "/images/fleet/extended-suv.jpg",
    passengers: "Up to 7",
    luggage: "7 Bags",
    badge: "Extended SUV",
    badgeColor: "bg-purple-600",
  },
  {
    name: "Mercedes Sprinter Executive Shuttle",
    image: "/images/fleet/sprinter-shuttle.jpg",
    passengers: "Up to 11",
    luggage: "12 Bags",
    badge: "Sprinter",
    badgeColor: "bg-sky-500",
  },
  {
    name: "Luxury Passenger Van",
    image: "/images/fleet/passenger-van.jpg",
    passengers: "Up to 14",
    luggage: "14 Bags",
    badge: "Passenger Van",
    badgeColor: "bg-purple-600",
  },
  {
    name: "Executive Mini Coach",
    image: "/images/fleet/mini-coach.jpg",
    passengers: "Up to 24",
    luggage: "24 Bags",
    badge: "Mini Coach",
    badgeColor: "bg-purple-600",
  },
];

export default function LuxuryFleetSection() {
  const logoItems = fleetVehicles.map((item, idx) => ({
    node: (
      <div
        key={idx}
        className="w-[280px] sm:w-[320px] flex flex-col items-center group select-none px-2 py-4"
      >
        {/* Vehicle Image on 3D Podium */}
        <div className="w-full relative">
          {item.badge && (
            <span
              className={`absolute top-2 left-4 z-20 text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full ${item.badgeColor || "bg-purple-600"} shadow-xs`}
            >
              {item.badge}
            </span>
          )}

          <div className="relative w-full aspect-[16/10] z-10 -mb-5 flex items-center justify-center drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
            <div className="relative w-[90%] h-[90%] rounded-xl overflow-hidden shadow-sm">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-center pointer-events-none"
              />
            </div>
          </div>

          {/* 3D Beveled Showroom Podium Base */}
          <div className="w-full h-11 bg-gradient-to-b from-white via-slate-100 to-slate-200 rounded-xl shadow-[0_12px_20px_-8px_rgba(15,23,42,0.18)] border-t border-white/90 relative">
            <div className="absolute inset-x-3 top-0 h-[2px] bg-white" />
            <div className="absolute inset-x-6 -bottom-1 h-3 bg-slate-900/10 blur-xs rounded-full" />
          </div>
        </div>

        {/* Vehicle Title & Specs */}
        <div className="mt-5 text-center flex flex-col items-center">
          <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-1">
            {item.name}
          </h3>

          {/* Book Now Button */}
          <div className="mt-2.5">
            <button
              type="button"
              data-book-now
              data-vehicle={item.name}
              className="inline-block bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-2 rounded-full shadow-xs hover:shadow transition-all cursor-pointer active:scale-95"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section
      id="fleet"
      className="w-full py-14 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading with gradient highlight */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Our{" "}
            <span className="relative inline-block text-slate-950 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:via-indigo-500 after:to-blue-500">
              Luxury Fleet
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Swipe or drag to explore our premier executive fleet
          </p>
        </div>

        {/* React Bits LogoLoop Infinite Showcase */}
        <div className="relative w-full py-4">
          <LogoLoop
            logos={logoItems}
            speed={60}
            direction="left"
            gap={24}
            hoverSpeed={0}
            scaleOnHover={false}
            draggable={true}
            fadeOut={true}
            fadeOutWidth={0.08}
            ariaLabel="MJ Limos Luxury Fleet Showcase"
          />
        </div>
      </div>
    </section>
  );
}
