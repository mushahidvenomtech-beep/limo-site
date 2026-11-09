import React from "react";

export default function DeltaRateComparisonSection() {
  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Our Rate Car Service vs Other in Delta BC?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our private car service provides flat-rate transparency with zero peak surge fees. Unlike app-based rideshares or metered taxis where delays in traffic increase your fare, MJ Limos gives you guaranteed upfront rates, luggage assistance, and executive vehicle comfort.
            </p>
          </div>

          {/* Right Column: Comparison Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-200/80 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Fixed Route &amp; Transit Estimates
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                <span className="block text-xs font-bold text-slate-900">
                  YVR Airport
                </span>
                <span className="text-[11px] text-slate-500">~ 30 min transit</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                <span className="block text-xs font-bold text-slate-900">
                  Richmond
                </span>
                <span className="text-[11px] text-slate-500">~ 25 min transit</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              We focus on reliable, scheduled pick-ups with trained chauffeurs so you never have to scramble for a ride at 4:00 AM or wait in long airport queues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

