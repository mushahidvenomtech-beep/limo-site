import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function AirportLimoCtaBanner() {
  return (
    <section className="w-full py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-100/90 via-indigo-100/80 to-purple-100/90 border border-blue-200/60 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight text-center sm:text-left">
            Luxury Airport Limo Service in Vancouver, BC
          </h2>
          <p className="text-xs text-slate-600 mt-1 text-center sm:text-left">
            Book your certified YVR airport transfer with guaranteed on-time pickup.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/contact-us"
            className="bg-[#183149] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            Book Now
          </Link>
          <a
            href="tel:+16046128202"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-2xs hover:shadow transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}

