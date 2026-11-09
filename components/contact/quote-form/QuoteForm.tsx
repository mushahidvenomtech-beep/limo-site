"use client";

import React, { useState } from "react";
import { Clock, ChevronDown, CheckCircle2 } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: "",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    serviceType: "Service Type",
    vehicleType: "Vehicle Type",
    hours: "No. Hours",
    stops: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        passengers: "",
        pickupDate: "",
        pickupTime: "",
        pickupLocation: "",
        dropoffLocation: "",
        serviceType: "Service Type",
        vehicleType: "Vehicle Type",
        hours: "No. Hours",
        stops: "",
        note: "",
      });
    }, 4500);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* 3D Stacked Card Effect Shadows (Bottom Tiers) */}
      <div className="absolute -inset-x-3 -bottom-2 h-14 bg-slate-200/60 rounded-3xl -z-10 blur-[1px] transform scale-x-[0.96]" />
      <div className="absolute -inset-x-6 -bottom-4 h-14 bg-slate-300/40 rounded-3xl -z-20 blur-[2px] transform scale-x-[0.92]" />

      {/* Main Glassmorphic Card Container */}
      <div className="bg-white/85 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-slate-900/5">
        {/* Title */}
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Request a Quote
          </h3>
        </div>

        {submitted ? (
          <div className="py-16 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Quote Request Sent!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto">
              Thank you for reaching out. A MJ Limos specialist will review your trip details and send you an official quote shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#fdf8ee] border border-amber-300/70 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-amber-400 focus:border-amber-400 transition-all shadow-2xs"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Row 2: Phone Number & No. Passengers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="No. Passengers"
                  value={formData.passengers}
                  onChange={(e) =>
                    setFormData({ ...formData, passengers: e.target.value })
                  }
                  className="w-full bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Row 3: Pick Up Date & Pick Up Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  placeholder="Pick Up Date"
                  value={formData.pickupDate}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupDate: e.target.value })
                  }
                  className="w-full bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  onFocus={(e) => (e.target.type = "time")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  placeholder="-- : -- --"
                  value={formData.pickupTime}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupTime: e.target.value })
                  }
                  className="w-full bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 pr-8 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs"
                />
                <Clock className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Row 4: Pick Up Location & Drop-Off Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Pick Up Location"
                  value={formData.pickupLocation}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupLocation: e.target.value })
                  }
                  className="w-full bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Drop-Off Location"
                  value={formData.dropoffLocation}
                  onChange={(e) =>
                    setFormData({ ...formData, dropoffLocation: e.target.value })
                  }
                  className="w-full bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Row 5: Service Type & Vehicle Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceType: e.target.value })
                  }
                  className="w-full appearance-none bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 pr-8 py-2.5 text-xs text-slate-700 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs cursor-pointer"
                >
                  <option value="Service Type">Service Type</option>
                  <option value="Airport Car Service">Airport Car Service</option>
                  <option value="Black Car Service">Black Car Service</option>
                  <option value="YVR Transfers">YVR Transfers</option>
                  <option value="Town Car Service">Town Car Service</option>
                  <option value="Whistler Transfers">Whistler Transfers</option>
                  <option value="Limo Service">Limo Service</option>
                  <option value="Chauffeur Service">Chauffeur Service</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={formData.vehicleType}
                  onChange={(e) =>
                    setFormData({ ...formData, vehicleType: e.target.value })
                  }
                  className="w-full appearance-none bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 pr-8 py-2.5 text-xs text-slate-700 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs cursor-pointer"
                >
                  <option value="Vehicle Type">Vehicle Type</option>
                  <option value="Executive Sedan">Executive Sedan</option>
                  <option value="Luxury SUV">Luxury SUV</option>
                  <option value="Extended Chauffeur SUV">Extended Chauffeur SUV</option>
                  <option value="Mercedes Sprinter Shuttle">Mercedes Sprinter Shuttle</option>
                  <option value="Luxury Passenger Van">Luxury Passenger Van</option>
                  <option value="Executive Mini Coach">Executive Mini Coach</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Row 6: No. Hours & Stop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <select
                  value={formData.hours}
                  onChange={(e) =>
                    setFormData({ ...formData, hours: e.target.value })
                  }
                  className="w-full appearance-none bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 pr-8 py-2.5 text-xs text-slate-700 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs cursor-pointer"
                >
                  <option value="No. Hours">No. Hours</option>
                  <option value="Point to Point">Point-to-Point (No hourly)</option>
                  <option value="2 Hours">2 Hours</option>
                  <option value="3 Hours">3 Hours</option>
                  <option value="4 Hours">4 Hours</option>
                  <option value="5 Hours">5 Hours</option>
                  <option value="6+ Hours">6+ Hours / Full Day</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Stop"
                  value={formData.stops}
                  onChange={(e) =>
                    setFormData({ ...formData, stops: e.target.value })
                  }
                  className="w-full bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Row 7: Note */}
            <div>
              <textarea
                rows={3}
                placeholder="Note...."
                value={formData.note}
                onChange={(e) =>
                  setFormData({ ...formData, note: e.target.value })
                }
                className="w-full bg-slate-100/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-1.5 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-2xs resize-y"
              />
            </div>

            {/* Submit Button with Warm Gold to Violet Luxury Gradient */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm tracking-wide text-slate-950 transition-all duration-300 transform active:scale-[0.99] shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                style={{
                  background:
                    "linear-gradient(90deg, #d8ab69 0%, #d4a360 40%, #a289db 80%, #7b64ca 100%)",
                }}
              >
                <span>Get Free Quote</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

