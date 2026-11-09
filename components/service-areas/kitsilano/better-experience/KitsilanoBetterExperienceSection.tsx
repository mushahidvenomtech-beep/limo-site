import React from "react";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

export default function KitsilanoBetterExperienceSection() {
  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              A Better Way To Travel With Black Car Service In Kitsilano
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Experience the exceptional comfort and punctuality of our private chauffeur services across Kitsilano and the Lower Mainland. Whether you are traveling for business, heading to YVR airport, or enjoying fine dining on West 4th Ave, MJ Limos provides seamless luxury transportation tailored to your standards.
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

          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-200/80 space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Why Choose Our Black Car Service in Kitsilano
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong>Clean Rates:</strong> Upfront, transparent, all-inclusive pricing with zero surge fees.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong>Punctual Transfer:</strong> Reliable on-time service for YVR Airport and Whistler.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong>Premium Comfort:</strong> Pristine, climate-controlled cabins with leather seating.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong>YVR Experts:</strong> Dedicated airport terminal access and flight monitoring.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

