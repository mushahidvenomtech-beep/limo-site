import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function RichmondRateComparisonSection() {
  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Book Our Car Service vs Other Ride Sharing in Richmond
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Skip volatile taxi meters and app-based surge multipliers in Richmond. MJ Limos provides guaranteed flat-rate quotes, pristine commercial vehicles, and dedicated chauffeurs who meet you directly at terminal baggage claim or hotel lobby.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact-us"
                className="bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
              >
                Book Now
              </Link>
              <a
                href="tel:+16046128202"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-2xs transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Comparison Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-200/80 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Flat Rates vs Metered Cabs &amp; Rideshares
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                <span className="block text-xs font-bold text-slate-900">
                  YVR Airport
                </span>
                <span className="text-[11px] text-slate-500">Flat Rate • Direct Meet</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                <span className="block text-xs font-bold text-slate-900">
                  Downtown Vancouver
                </span>
                <span className="text-[11px] text-slate-500">Fixed Fare • No Surges</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              Never get stuck in long taxi queues at the terminal or stranded by canceled ride apps during peak arrival hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

