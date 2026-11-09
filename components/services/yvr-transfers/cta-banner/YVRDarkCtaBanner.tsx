import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function YVRDarkCtaBanner() {
  return (
    <section className="w-full py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0c1824] via-[#162a3f] to-[#0c1824] border-2 border-amber-400/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight text-center sm:text-left">
            YVR Limousine &amp; Executive Car Options
          </h2>
          <p className="text-xs text-slate-300 mt-1 text-center sm:text-left">
            Direct curbside terminal pickup with flight monitoring and professional chauffeurs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/contact-us"
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Book Now
          </Link>
          <a
            href="tel:+16046128202"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full backdrop-blur-sm transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}

