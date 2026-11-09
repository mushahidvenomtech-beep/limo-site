import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8fafc] border-t border-slate-200/80 pt-16 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-slate-950 flex items-center justify-center text-white shadow-sm ring-1 ring-slate-800">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-amber-300"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V17h-2v1.93C7.05 18.44 4 15.6 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 3.6-3.05 6.44-7 6.93zM12 6a4 4 0 00-4 4c0 1.95 1.39 3.58 3.25 3.93V16h1.5v-2.07C14.61 13.58 16 11.95 16 10a4 4 0 00-4-4z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-[15px] tracking-tight text-slate-950 font-serif">
                  MJ LIMOS
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold">
                  LIMOUSINE
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              MJ Limos is a premier VIP chauffeur &amp; luxury car service company providing exceptional transportation across Vancouver and surrounding regions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-slate-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about-vancouver"
                  className="hover:text-slate-950 transition-colors"
                >
                  About Vancouver
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-slate-950 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-slate-950 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Contacts
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a
                  href="tel:+16046128202"
                  className="hover:text-slate-950 transition-colors"
                >
                  +1 (604) 612-8202
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Vancouver, BC Canada</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a
                  href="mailto:info@mjlimos.com"
                  className="hover:text-slate-950 transition-colors"
                >
                  info@mjlimos.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Badges */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Badges
            </h4>
            <div className="flex items-center gap-4 pt-1">
              {/* Badge 1: Safety Certified */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-slate-200 via-white to-slate-100 border-2 border-slate-300 shadow-sm flex flex-col items-center justify-center text-center p-1 relative">
                <ShieldCheck className="w-5 h-5 text-sky-600 mb-0.5" />
                <span className="text-[7px] font-black uppercase tracking-tight text-slate-700 leading-none">
                  Safety
                </span>
                <span className="text-[6px] font-bold text-slate-500 leading-none">
                  Certified
                </span>
              </div>

              {/* Badge 2: Licensed & Insured */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-slate-200 via-white to-slate-100 border-2 border-slate-300 shadow-sm flex flex-col items-center justify-center text-center p-1 relative">
                <Award className="w-5 h-5 text-amber-600 mb-0.5" />
                <span className="text-[7px] font-black uppercase tracking-tight text-slate-700 leading-none">
                  VIP Limo
                </span>
                <span className="text-[6px] font-bold text-slate-500 leading-none">
                  Licensed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-xs text-slate-500">
          <p>Copyright © 2024 MJ Limos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

