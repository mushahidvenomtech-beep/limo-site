"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ChauffeurBookingCard() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupDate: "",
    pickupTime: "",
    from: "",
    to: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        pickupDate: "",
        pickupTime: "",
        from: "",
        to: "",
      });
    }, 4500);
  };

  return (
    <div className="w-full max-w-md bg-white/75 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-7 shadow-[0_25px_50px_-12px_rgba(124,58,237,0.15)] ring-1 ring-slate-900/5">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700">
          <Calendar className="w-4 h-4" />
        </div>
        <h3 className="text-lg font-extrabold text-slate-950 tracking-tight">
          Book Your Limo
        </h3>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-base font-bold text-slate-900">
            Quote Request Received!
          </h4>
          <p className="text-xs text-slate-600 max-w-xs mx-auto">
            Our 24/7 concierge will send your customized itinerary and vehicle confirmation shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full bg-white/90 border border-slate-200/90 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:border-purple-600 transition-all shadow-2xs"
            />
            <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/90 border border-slate-200/90 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:border-purple-600 transition-all shadow-2xs"
            />
            <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-white/90 border border-slate-200/90 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:border-purple-600 transition-all shadow-2xs"
            />
            <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Pickup Date & Time */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="relative">
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                placeholder="Pickup Date"
                value={formData.pickupDate}
                onChange={(e) =>
                  setFormData({ ...formData, pickupDate: e.target.value })
                }
                className="w-full bg-white/90 border border-slate-200/90 rounded-xl pl-8 pr-2.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:border-purple-600 transition-all shadow-2xs"
              />
              <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>

            <div className="relative">
              <input
                type="text"
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                placeholder="Pickup Time"
                value={formData.pickupTime}
                onChange={(e) =>
                  setFormData({ ...formData, pickupTime: e.target.value })
                }
                className="w-full bg-white/90 border border-slate-200/90 rounded-xl pl-8 pr-2.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:border-purple-600 transition-all shadow-2xs"
              />
              <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* From & To */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="relative">
              <input
                type="text"
                placeholder="From"
                value={formData.from}
                onChange={(e) =>
                  setFormData({ ...formData, from: e.target.value })
                }
                className="w-full bg-white/90 border border-slate-200/90 rounded-xl pl-8 pr-2.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:border-purple-600 transition-all shadow-2xs"
              />
              <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="To"
                value={formData.to}
                onChange={(e) =>
                  setFormData({ ...formData, to: e.target.value })
                }
                className="w-full bg-white/90 border border-slate-200/90 rounded-xl pl-8 pr-2.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:border-purple-600 transition-all shadow-2xs"
              />
              <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Submit CTA Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:opacity-95 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Get The Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

