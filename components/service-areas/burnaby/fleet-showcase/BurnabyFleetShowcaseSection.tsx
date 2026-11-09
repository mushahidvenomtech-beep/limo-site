"use client";

import React from "react";
import Image from "next/image";
import LogoLoop from "@/components/common/logo-loop/LogoLoop";

export default function BurnabyFleetShowcaseSection() {
  const fleet = [
    {
      name: "Sedan",
      badge: "Sedan",
      badgeColor: "bg-sky-500",
      image: "/images/fleet/executive-sedan.jpg",
    },
    {
      name: "SUV",
      badge: "SUV",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/luxury-suv.jpg",
    },
    {
      name: "Extended SUV",
      badge: "Extended SUV",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/extended-suv.jpg",
    },
    {
      name: "Mercedes Sprinter",
      badge: "Sprinter",
      badgeColor: "bg-sky-500",
      image: "/images/fleet/sprinter-shuttle.jpg",
    },
    {
      name: "Luxury Passenger Van",
      badge: "Passenger Van",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/passenger-van.jpg",
    },
    {
      name: "Executive Mini-Coach",
      badge: "Mini-Coach",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/mini-coach.jpg",
    },
  ];

  const logoItems = fleet.map((item, idx) => ({
    node: (
      <div
        key={idx}
        className="w-[280px] sm:w-[310px] flex flex-col items-center group select-none px-2 py-3"
      >
        <div className="w-full max-w-[300px] relative">
          <span
            className={`absolute top-2 left-4 z-20 text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full ${item.badgeColor} shadow-xs`}
          >
            {item.badge}
          </span>

          <div className="relative w-full aspect-[16/10] z-10 -mb-4 flex items-center justify-center drop-shadow-md group-hover:-translate-y-1 transition-transform">
            <div className="relative w-[90%] h-[90%] rounded-xl overflow-hidden shadow-xs">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="300px"
                className="object-cover object-center pointer-events-none"
              />
            </div>
          </div>

          <div className="w-full h-10 bg-gradient-to-b from-white via-slate-100 to-slate-200 rounded-2xl shadow-[0_10px_20px_-6px_rgba(15,23,42,0.15)] border-t border-white" />
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-sm font-bold text-slate-900 mb-2">{item.name}</h3>
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
    ),
  }));

  return (
    <section className="w-full py-14 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Our Luxury Fleet for Premium Travel Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Explore our Burnaby chauffeured limousine fleet
          </p>
        </div>

        <div className="relative w-full py-3">
          <LogoLoop
            logos={logoItems}
            speed={60}
            direction="left"
            gap={20}
            hoverSpeed={0}
            scaleOnHover={false}
            draggable={true}
            fadeOut={true}
            fadeOutWidth={0.08}
            ariaLabel="Burnaby Fleet Showcase Loop"
          />
        </div>
      </div>
    </section>
  );
}
