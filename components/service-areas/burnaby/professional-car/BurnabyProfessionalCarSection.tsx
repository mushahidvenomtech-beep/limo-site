import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function BurnabyProfessionalCarSection() {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Professional Car Service in Burnaby
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Dedicated executive transportation for Metrotown corporate towers, Simon Fraser University (SFU), Brentwood, and Deer Lake events. Our licensed chauffeurs provide white-glove luggage assistance, total privacy, and absolute punctuality.
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

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] p-2 bg-slate-200/80 rounded-2xl shadow-lg border border-slate-300">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/images/burnaby/driveway-mercedes.jpg"
                  alt="Professional Executive Car in Burnaby Driveway"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

