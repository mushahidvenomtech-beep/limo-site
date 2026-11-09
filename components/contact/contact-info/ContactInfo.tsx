import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Title & Description */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
          Get a Quote for Your Vancouver Car or Limo Service
        </h2>
        <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
          Request a quote for airport transportation, black car service, chauffeur service, limo services, YVR transfers, whistler travel or group transportation, include your pickup location, destination, date, pickup time, passenger count and preferred vehicle if known as the team can respond with the most suitable option.
        </p>
      </div>

      {/* 3 Contact Cards */}
      <div className="space-y-3.5">
        {/* Phone Card */}
        <a
          href="tel:+16046128202"
          className="flex items-center gap-4 bg-white/90 hover:bg-white border border-white/80 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-all group"
        >
          {/* Golden Glossy Squircle Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_10px_rgba(217,119,6,0.3)] flex items-center justify-center shrink-0 border border-amber-200/60">
            <Phone className="w-5 h-5 text-amber-950 fill-amber-950/20" />
          </div>
          <div>
            <span className="block text-sm font-bold text-slate-900">
              Phone
            </span>
            <span className="block text-sm font-semibold text-slate-800 group-hover:text-slate-950">
              +1604 612-8202
            </span>
          </div>
        </a>

        {/* Email Card */}
        <a
          href="mailto:info@mjlimos.com"
          className="flex items-center gap-4 bg-white/90 hover:bg-white border border-white/80 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-all group"
        >
          {/* Violet Glossy Squircle Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-300 via-purple-400 to-indigo-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_10px_rgba(124,58,237,0.3)] flex items-center justify-center shrink-0 border border-violet-200/60">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="block text-sm font-bold text-slate-900">
              Email
            </span>
            <span className="block text-sm font-semibold text-slate-800 group-hover:text-slate-950">
              info@mjlimos.com
            </span>
          </div>
        </a>

        {/* Address Card */}
        <div className="flex items-start gap-4 bg-white/90 border border-white/80 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          {/* Golden Glossy Squircle Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_10px_rgba(217,119,6,0.3)] flex items-center justify-center shrink-0 border border-amber-200/60 mt-0.5">
            <MapPin className="w-5 h-5 text-amber-950" />
          </div>
          <div>
            <span className="block text-sm font-bold text-slate-900">
              Address
            </span>
            <span className="block text-xs sm:text-sm font-medium text-slate-700 leading-snug">
              4292 Wolf Way, Tsawwassen, BC, Canada V4M0E1.
            </span>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="pt-2">
        <h3 className="text-sm font-bold text-slate-900 mb-3">
          Follow Us
        </h3>
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow on Facebook"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center hover:scale-105 hover:shadow-md transition-all text-blue-600"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow on X"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center hover:scale-105 hover:shadow-md transition-all text-slate-950"
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow on YouTube"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center hover:scale-105 hover:shadow-md transition-all text-red-600"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

