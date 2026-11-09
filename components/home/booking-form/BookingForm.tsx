"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Briefcase,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export default function BookingForm() {
  const [serviceType, setServiceType] = useState("Airport Transfer");
  const [fromLocation, setFromLocation] = useState("Vancouver, BC");
  const [toLocation, setToLocation] = useState("YVR Airport");
  const [pickupDate, setPickupDate] = useState("2025-01-15");
  const [pickupTime, setPickupTime] = useState("17:30");
  const [passengers, setPassengers] = useState("2 Now");
  const [luggage, setLuggage] = useState("2");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full max-w-lg bg-white/75 backdrop-blur-xl border border-white/90 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] ring-1 ring-slate-900/5">
      {submitted ? (
        <div className="py-12 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Reservation Request Received!</h3>
          <p className="text-sm text-slate-600 max-w-xs">
            Our 24/7 concierge will contact you immediately with a confirmed itinerary and vehicle assignment.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Row 1: Service Type & From */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Service Type
              </label>
              <div className="relative">
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full appearance-none bg-white/90 border border-slate-200/90 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all cursor-pointer shadow-xs pr-8"
                >
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Point to Point">Point-to-Point Limo</option>
                  <option value="Hourly Chauffeur">Hourly Chauffeur</option>
                  <option value="Whistler Transfer">Whistler Transfer</option>
                  <option value="Corporate Travel">Corporate Travel</option>
                  <option value="Cruise Transfer">Cruise Terminal Transfer</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                From
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  placeholder="Vancouver, BC"
                  className="w-full bg-white/90 border border-slate-200/90 rounded-lg pl-8 pr-3 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-xs"
                />
                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Row 2: To Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Pick-up Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pick-up Address or Hotel"
                  className="w-full bg-white/90 border border-slate-200/90 rounded-lg pl-8 pr-3 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-xs"
                />
                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                To
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  placeholder="Destination / Drop-off"
                  className="w-full bg-white/90 border border-slate-200/90 rounded-lg pl-8 pr-3 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-xs"
                />
                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Row 3: Pick-up Date & Pick-up Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Pick-up Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-white/90 border border-slate-200/90 rounded-lg pl-8 pr-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-xs"
                />
                <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Pick-up Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-white/90 border border-slate-200/90 rounded-lg pl-8 pr-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-xs"
                />
                <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Row 4: Passengers & Luggage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Passengers
              </label>
              <div className="relative">
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full appearance-none bg-white/90 border border-slate-200/90 rounded-lg pl-8 pr-8 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all cursor-pointer shadow-xs"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2 Now">2 Passengers</option>
                  <option value="3-4">3 - 4 Passengers</option>
                  <option value="5-7">5 - 7 Passengers (SUV/Van)</option>
                  <option value="8-14">8 - 14 Passengers (Sprinter)</option>
                  <option value="15+">15+ (Mini Coach)</option>
                </select>
                <Users className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Luggage
              </label>
              <div className="relative">
                <select
                  value={luggage}
                  onChange={(e) => setLuggage(e.target.value)}
                  className="w-full appearance-none bg-white/90 border border-slate-200/90 rounded-lg pl-8 pr-8 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all cursor-pointer shadow-xs"
                >
                  <option value="1">1 Luggage</option>
                  <option value="2">2 Luggage</option>
                  <option value="3-4">3 - 4 Luggage</option>
                  <option value="5-8">5 - 8 Luggage</option>
                  <option value="9+">9+ Luggage</option>
                </select>
                <Briefcase className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-slate-950 hover:bg-slate-800 active:scale-[0.99] text-white font-semibold py-3 rounded-full text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Reserve Today
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

