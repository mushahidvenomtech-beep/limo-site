import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function BlackCarBottomBanner() {
  return (
    <section className="w-full py-8 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-100/90 via-indigo-100/80 to-purple-100/90 border border-blue-200/60 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight text-center sm:text-left">
            Reserve Your Black Car Service in Vancouver Today!
          </h2>
          <p className="text-xs text-slate-600 mt-1 text-center sm:text-left">
            Executive sedans, black luxury SUVs, and guaranteed punctual transfers across the Lower Mainland.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="tel:+16046128202"
            className="inline-flex items-center gap-2 bg-[#183149] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Us</span>
          </a>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <span>Book Online</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

