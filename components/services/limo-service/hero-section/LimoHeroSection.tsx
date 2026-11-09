"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Clock, Star, Play, ArrowRight, Calendar, User, Phone, Mail, MapPin } from "lucide-react";

export default function LimoHeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupDate: "",
    pickupTime: "05:30 pm",
    service: "Airport Transfer",
    from: "",
    to: "",
  });

  const stats = [
    { value: "3,000+", label: "Rides" },
    { value: "13", label: "Cars" },
    { value: "17", label: "Chauffeurs" },
  ];

  return (
    <section className="relative w-full pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#eef2f6] via-[#f8fafc] to-white overflow-hidden">
      {/* Background Skyline & Reflection */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image
          src="/images/limo/vancouver-dusk.jpg"
          alt="Vancouver Skyline"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and Info */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-600 block">
              PREMIUM LIMOUSINE SERVICE —
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Limo Service in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Vancouver, BC
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Luxury transportation for business and personal travel. Arrive in style, on time, and stress-free.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-xl">
              <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl p-2.5 text-center shadow-2xs">
                <Shield className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-700 block">
                  Safe &amp; Secure
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl p-2.5 text-center shadow-2xs">
                <Award className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-700 block">
                  Professional
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl p-2.5 text-center shadow-2xs">
                <Clock className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-700 block">
                  On-Time
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl p-2.5 text-center shadow-2xs">
                <Star className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-700 block">
                  5-Star Service
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#video"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-2xs hover:shadow transition-all"
              >
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Play className="w-2.5 h-2.5 fill-purple-600 ml-0.5" />
                </div>
                <span>Watch Video</span>
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphism Booking Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white/85 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Book Your Limo
                </h2>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="relative flex items-center">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      aria-label="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="relative flex items-center">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="Email"
                      aria-label="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-2 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="Phone"
                      aria-label="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-2 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <input
                      type="date"
                      aria-label="Pickup Date"
                      value={formData.pickupDate}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupDate: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="time"
                      aria-label="Pickup Time"
                      value={formData.pickupTime.replace(" pm", "").replace(" am", "")}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupTime: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <select
                    aria-label="Select Service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option>Airport Transfer</option>
                    <option>Corporate Travel</option>
                    <option>Wedding &amp; Special Events</option>
                    <option>Whistler Mountain Transfer</option>
                    <option>Hourly Chauffeur Service</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="relative flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="From"
                      aria-label="From Location"
                      value={formData.from}
                      onChange={(e) =>
                        setFormData({ ...formData, from: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-2 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="To"
                      aria-label="To Location"
                      value={formData.to}
                      onChange={(e) =>
                        setFormData({ ...formData, to: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-2 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Get The Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Stats Bar */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
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

