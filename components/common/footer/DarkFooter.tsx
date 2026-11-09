import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DarkFooter() {
  return (
    <footer className="w-full bg-[#1b1e22] text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          {/* Column 1: Brand & Contact info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center text-white ring-1 ring-slate-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-amber-300"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V17h-2v1.93C7.05 18.44 4 15.6 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 3.6-3.05 6.44-7 6.93zM12 6a4 4 0 00-4 4c0 1.95 1.39 3.58 3.25 3.93V16h1.5v-2.07C14.61 13.58 16 11.95 16 10a4 4 0 00-4-4z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-base tracking-wider text-white font-serif">
                  MJ LIMOS
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
                  LIMOUSINE
                </span>
              </div>
            </Link>

            <div className="space-y-1.5 text-xs text-slate-400 pt-1 leading-relaxed">
              <p>4292 Wolf Way, Tsawwassen, BC, Canada V4M0E1.</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+16046128202"
                  className="text-white font-semibold hover:underline"
                >
                  +1604 612-8202
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@mjlimos.com"
                  className="text-slate-300 hover:text-white"
                >
                  info@mjlimos.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { name: "Airport Limo Service", href: "/services/airport-limo-service" },
                { name: "Black Car Service", href: "/services/black-car-service" },
                { name: "YVR Transfers", href: "/services/yvr-transfers" },
                { name: "Town Car Service", href: "/services/town-car-service" },
                { name: "Whistler Transfers", href: "/services/whistler-transfers" },
                { name: "Limo Service", href: "/services/limo-service" },
                { name: "Chauffeur Service", href: "/services/chauffeur-service" },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { name: "Blog", href: "/blog" },
                { name: "About Us", href: "/#about" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-slate-400">
          <p>© 2026 MJ Limos All Rights Reserved | Powered by Byte Force IT Solutions</p>
        </div>
      </div>
    </footer>
  );
}

