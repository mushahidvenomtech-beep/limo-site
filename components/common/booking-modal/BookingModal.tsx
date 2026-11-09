"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, ChevronDown, CheckCircle2 } from "lucide-react";
import { BookingFormInitialData } from "./BookingModalContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: BookingFormInitialData;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialData = {},
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: "",
    date: "",
    time: "",
    pickupLocation: "",
    dropoffLocation: "",
    serviceType: "",
    vehicleType: "",
    hours: "",
    stop: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync initialData when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        passengers: initialData.passengers || "",
        date: initialData.date || "",
        time: initialData.time || "",
        pickupLocation: initialData.pickupLocation || "",
        dropoffLocation: initialData.dropoffLocation || "",
        serviceType: initialData.serviceType || "",
        vehicleType: initialData.vehicleType || "",
        hours: initialData.hours || "",
        stop: initialData.stop || "",
        note: initialData.note || "",
      });
    }
  }, [isOpen, initialData]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Window */}
      <div
        data-lenis-prevent
        className="relative w-full max-w-2xl bg-[#141b24] border-2 border-[#1f3c5b] shadow-2xl p-5 sm:p-7 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button 'X' */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3.5 right-3.5 text-white/80 hover:text-white transition-colors cursor-pointer p-1"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {submitted ? (
          /* Submission Success Message */
          <div className="py-12 px-4 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Quote Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-white">{formData.name || "valued client"}</span>. 
              Our dispatch team has received your travel request and will contact you shortly with confirmed pricing.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+16046128202"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-none transition-colors"
              >
                Call Now (+1 604-612-8202)
              </a>
              <button
                type="button"
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm px-6 py-2.5 rounded-none transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3.5 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-3.5 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Row 2: Phone Number & No. Passengers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-3.5 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="No. Passengers"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full h-11 px-3.5 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Row 3: Date (mm/dd/yyyy) & Time (--:-- --) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  className="w-full h-11 px-3.5 pr-10 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
                <Calendar className="w-4 h-4 text-slate-300 absolute right-3 pointer-events-none" />
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="--:-- --"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  onFocus={(e) => (e.target.type = "time")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  className="w-full h-11 px-3.5 pr-10 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
                <Clock className="w-4 h-4 text-slate-300 absolute right-3 pointer-events-none" />
              </div>
            </div>

            {/* Row 4: Pick Up Location & Drop-Off Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Pick Up Location"
                  value={formData.pickupLocation}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupLocation: e.target.value })
                  }
                  className="w-full h-11 px-3.5 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
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
                  className="w-full h-11 px-3.5 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Row 5: Service Type & Vehicle Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="relative flex items-center">
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceType: e.target.value })
                  }
                  className="w-full h-11 px-3.5 pr-8 bg-[#374b5c] text-slate-100 text-xs sm:text-sm font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-sky-400 cursor-pointer"
                >
                  <option value="" disabled className="text-slate-400">
                    Service Type
                  </option>
                  <option value="Airport Transfer">Airport Transfer (YVR)</option>
                  <option value="Black Car Service">Black Car Service</option>
                  <option value="Town Car Service">Town Car Service</option>
                  <option value="Whistler Transfer">Whistler Transfer</option>
                  <option value="Limo Service">Limo Service</option>
                  <option value="Chauffeur Service">Chauffeur Service</option>
                  <option value="Corporate Travel">Corporate Travel</option>
                  <option value="Wedding & Events">Wedding &amp; Events</option>
                  <option value="Hourly Charter">Hourly Charter</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-300 absolute right-3 pointer-events-none" />
              </div>

              <div className="relative flex items-center">
                <select
                  value={formData.vehicleType}
                  onChange={(e) =>
                    setFormData({ ...formData, vehicleType: e.target.value })
                  }
                  className="w-full h-11 px-3.5 pr-8 bg-[#374b5c] text-slate-100 text-xs sm:text-sm font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-sky-400 cursor-pointer"
                >
                  <option value="" disabled className="text-slate-400">
                    Vehicle Type
                  </option>
                  <option value="Executive Sedan">Sedan (Executive)</option>
                  <option value="Lincoln Continental">Lincoln Continental</option>
                  <option value="Luxury SUV">SUV (Luxury 6 Pax)</option>
                  <option value="Extended SUV">Extended SUV (GMC Yukon/Suburban)</option>
                  <option value="Mercedes-Benz GLS">Mercedes-Benz GLS</option>
                  <option value="Mercedes Sprinter">Mercedes Sprinter Shuttle</option>
                  <option value="Luxury Passenger Van">Luxury Passenger Van</option>
                  <option value="Executive Mini-Coach">Executive Mini-Coach</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-300 absolute right-3 pointer-events-none" />
              </div>
            </div>

            {/* Row 6: No. Hours & Stop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="relative flex items-center">
                <select
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  className="w-full h-11 px-3.5 pr-8 bg-[#374b5c] text-slate-100 text-xs sm:text-sm font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-sky-400 cursor-pointer"
                >
                  <option value="" disabled className="text-slate-400">
                    No. Hours
                  </option>
                  <option value="Point to Point">Point to Point (Direct)</option>
                  <option value="2 Hours">2 Hours</option>
                  <option value="3 Hours">3 Hours</option>
                  <option value="4 Hours">4 Hours</option>
                  <option value="5 Hours">5 Hours</option>
                  <option value="6 Hours">6 Hours</option>
                  <option value="8 Hours">8 Hours (Full Day)</option>
                  <option value="12+ Hours">12+ Hours (Extended Day)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-300 absolute right-3 pointer-events-none" />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Stop"
                  value={formData.stop}
                  onChange={(e) => setFormData({ ...formData, stop: e.target.value })}
                  className="w-full h-11 px-3.5 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Row 7: Note.... */}
            <div>
              <textarea
                rows={3}
                placeholder="Note...."
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full p-3 bg-[#374b5c] text-slate-100 placeholder:text-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-sky-400 resize-none"
              />
            </div>

            {/* Row 8: Get Free Quote Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-white hover:bg-slate-100 text-slate-950 font-bold py-3.5 text-center text-sm sm:text-base tracking-wide uppercase transition-colors cursor-pointer shadow-md"
              >
                Get Free Quote
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
