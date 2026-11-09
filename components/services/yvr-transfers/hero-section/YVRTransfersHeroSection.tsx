"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Users, Briefcase, Plane } from "lucide-react";

export default function YVRTransfersHeroSection() {
  const [formData, setFormData] = useState({
    pickupDate: "",
    pickupTime: "05:30 pm",
    from: "",
    passengers: "1 - 3 Passengers",
    luggage: "2 - 3 Luggage",
  });

  const stats = [
    { value: "3,000+", label: "Clients" },
    { value: "10+", label: "Years" },
    { value: "17+", label: "Chauffeurs" },
  ];

  return (
    <section className="relative w-full pt-6 pb-12 lg:pt-10 lg:pb-16 bg-gradient-to-b from-[#eef2f6] via-[#f8fafc] to-white overflow-hidden">
      {/* Decorative Flying Jet Top Left */}
      <div className="absolute top-4 left-6 sm:left-16 z-10 opacity-75 pointer-events-none transform -rotate-12 hover:scale-105 transition-transform duration-500">
        <div className="relative w-28 sm:w-44 h-16 sm:h-24">
          <Image
            src="/images/yvr-transfers/airplane.jpg"
            alt="Vancouver Airport Jet In Flight"
            fill
            className="object-cover rounded-2xl shadow-sm mix-blend-multiply opacity-80"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-7 space-y-4 pt-8 lg:pt-0 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 text-xs font-semibold shadow-2xs">
              <Plane className="w-3.5 h-3.5" />
              <span>The Ultimate in Safety, Service and Satisfaction</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              YVR Limo Car Service in Vancouver, BC
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              High-end airport limo transfer transportation in Vancouver, BC. Exclusive airport car service with executive sedans, spacious passenger vans and luxury SUVs. Dedicated flight tracking, personalized meet &amp; greet, and 24/7 VIP curbside transfers.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:+16046128202"
                className="inline-flex items-center gap-2 bg-[#183149] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-sm hover:shadow transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-slate-900 border border-slate-300 font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-2xs hover:shadow transition-all"
              >
                <span>Book Online</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Quick Booking Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="w-full max-w-md bg-white/85 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <div className="text-center mb-5 pb-3 border-b border-slate-100">
                <h2 className="text-base font-extrabold text-slate-900">
                  Quick YVR Transfer Quote
                </h2>
                <p className="text-[11px] text-slate-500">
                  Guaranteed upfront pricing for YVR Airport &amp; Lower Mainland
                </p>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Pick Up Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        aria-label="Pick Up Date"
                        value={formData.pickupDate}
                        onChange={(e) =>
                          setFormData({ ...formData, pickupDate: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Pick Up Time
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        aria-label="Pick Up Time"
                        value={formData.pickupTime.replace(" pm", "").replace(" am", "")}
                        onChange={(e) =>
                          setFormData({ ...formData, pickupTime: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Pickup Location / Airport
                  </label>
                  <div className="relative flex items-center">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. YVR Terminal, Hotel, Residence"
                      value={formData.from}
                      onChange={(e) =>
                        setFormData({ ...formData, from: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Passengers
                    </label>
                    <div className="relative flex items-center">
                      <Users className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                      <select
                        aria-label="Passengers"
                        value={formData.passengers}
                        onChange={(e) =>
                          setFormData({ ...formData, passengers: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-2 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>1 - 3 Passengers</option>
                        <option>4 - 6 Passengers</option>
                        <option>7 - 14 Passengers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Luggage Count
                    </label>
                    <div className="relative flex items-center">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                      <select
                        aria-label="Luggage Count"
                        value={formData.luggage}
                        onChange={(e) =>
                          setFormData({ ...formData, luggage: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-2 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>1 - 2 Bags</option>
                        <option>3 - 5 Bags</option>
                        <option>6+ Bags</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+16046128202"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#183149] to-blue-900 hover:from-slate-900 hover:to-blue-950 text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now for Instant Quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Panoramic Visual */}
        <div className="mt-10 relative w-full aspect-[21/9] max-h-[360px] rounded-3xl overflow-hidden shadow-2xl border border-white">
          <Image
            src="/images/yvr-transfers/hero-fleet.jpg"
            alt="MJ Limos YVR Airport Transfer Fleet"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Counter Stats Bar */}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-center border border-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

