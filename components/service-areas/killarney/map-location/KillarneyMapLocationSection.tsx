import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function KillarneyMapLocationSection() {
  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Best Luxury Transportation Company in Killarney
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              MJ Limos proudly serves Killarney and Southeast Vancouver with reliable 24/7 private car and limousine services. Whether you need executive transfers to YVR Airport, an elegant ride for a special celebration, or private group transportation across the Lower Mainland, our local chauffeurs guarantee unmatched safety, punctuality, and comfort.
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
            <div className="relative w-full max-w-[500px] aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/killarney/map-killarney.jpg"
                alt="Killarney BC Service Coverage Map"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-xl px-4 py-2.5 flex items-center justify-between shadow-md border border-slate-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span className="text-xs font-bold text-slate-800">
                    Killarney, Vancouver, BC
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  Live Service Area
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

