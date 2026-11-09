"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import CardNavDropdown from "@/components/common/card-nav/CardNavDropdown";
import { CardNavItem } from "@/components/common/card-nav/CardNav";
import StaggeredMenu, { StaggeredMenuItem, StaggeredMenuSocialItem } from "@/components/common/staggered-menu/StaggeredMenu";

interface HeaderProps {
  activePage?: "home" | "services" | "service-areas" | "blog" | "about" | "contact-us";
  variant?: "light" | "dark" | "transparent";
}

const mobileStaggeredMenuItems: StaggeredMenuItem[] = [
  { label: "Home", link: "/" },
  { label: "Services", link: "/services/airport-limo-service" },
  { label: "Service Areas", link: "/service-areas/kitsilano-bc" },
  { label: "Blog", link: "/blog" },
  { label: "About Us", link: "/#about" },
  { label: "Contact Us", link: "/contact-us" },
  { label: "Book Now", dataBookNow: true },
];

const mobileStaggeredSocialItems: StaggeredMenuSocialItem[] = [
  { label: "Call +1 (604) 612-8202", link: "tel:+16046128202" },
  { label: "info@mjlimos.com", link: "mailto:info@mjlimos.com" },
  { label: "Vancouver, BC", link: "/service-areas/kitsilano-bc" },
];

const servicesCardItems: CardNavItem[] = [
  {
    label: "Airport & Transfers",
    description: "Punctual luxury transfers to airports and regional getaways.",
    links: [
      { label: "Airport Limo Service", href: "/services/airport-limo-service" },
      { label: "YVR Transfers", href: "/services/yvr-transfers" },
      { label: "Whistler Transfers", href: "/services/whistler-transfers" },
    ],
  },
  {
    label: "Executive & Chauffeur",
    description: "Premium sedans, town cars, and private black car fleets.",
    links: [
      { label: "Black Car Service", href: "/services/black-car-service" },
      { label: "Town Car Service", href: "/services/town-car-service" },
      { label: "Limo Service", href: "/services/limo-service" },
      { label: "Chauffeur Service", href: "/services/chauffeur-service" },
    ],
  },
];

const areasCardItems: CardNavItem[] = [
  {
    label: "Vancouver Core",
    description: "Coastal neighborhoods, business centers, and urban hubs.",
    links: [
      { label: "Kitsilano, BC", href: "/service-areas/kitsilano-bc" },
      { label: "Fairview, BC", href: "/service-areas/fairview-bc" },
      { label: "Marpole, BC", href: "/service-areas/marpole-bc" },
      { label: "Killarney, BC", href: "/service-areas/killarney-bc" },
    ],
  },
  {
    label: "Greater Vancouver",
    description: "Connecting major cities, ferry terminals, and airport corridors.",
    links: [
      { label: "Richmond, BC", href: "/service-areas/richmond-bc" },
      { label: "Burnaby, BC", href: "/service-areas/burnaby-bc" },
      { label: "Surrey, BC", href: "/service-areas/surrey-bc" },
      { label: "Delta, BC", href: "/service-areas/delta-bc" },
    ],
  },
];

export default function Header({
  activePage = "home",
  variant = "dark",
}: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const servicesTimerRef = useRef<NodeJS.Timeout | null>(null);
  const areasTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setServicesOpen(true);
    setAreasOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleAreasEnter = () => {
    if (areasTimerRef.current) clearTimeout(areasTimerRef.current);
    setAreasOpen(true);
    setServicesOpen(false);
  };

  const handleAreasLeave = () => {
    areasTimerRef.current = setTimeout(() => {
      setAreasOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
      if (areasTimerRef.current) clearTimeout(areasTimerRef.current);
    };
  }, []);

  const isDark = variant !== "light";

  return (
    <header
      className={`w-full relative z-50 transition-colors ${
        isDark
          ? "bg-[#182c3f] text-white border-b border-[#223d57]"
          : "bg-white text-slate-800 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-slate-900/90 flex items-center justify-center text-white ring-1 ring-slate-700 shadow-xs">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-amber-300"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V17h-2v1.93C7.05 18.44 4 15.6 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 3.6-3.05 6.44-7 6.93zM12 6a4 4 0 00-4 4c0 1.95 1.39 3.58 3.25 3.93V16h1.5v-2.07C14.61 13.58 16 11.95 16 10a4 4 0 00-4-4z" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-extrabold text-[15px] tracking-wide font-serif ${
                  isDark ? "text-white" : "text-slate-950"
                }`}
              >
                MJ LIMOS
              </span>
              <span
                className={`text-[8.5px] uppercase tracking-[0.2em] font-semibold ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              >
                LIMOUSINE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center gap-7 text-[13.5px] font-medium ${
              isDark ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {/* Home */}
            <Link
              href="/"
              className={`transition-colors ${
                isDark ? "hover:text-white" : "hover:text-slate-950"
              } ${
                activePage === "home"
                  ? isDark
                    ? "text-white font-bold"
                    : "text-slate-950 font-bold"
                  : ""
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown with CardNav animation */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                  servicesOpen
                    ? "text-[#0ea5e9] font-bold"
                    : isDark
                    ? "hover:text-white"
                    : "hover:text-slate-950"
                }`}
              >
                <span>Services</span>
                <span className={`text-xs font-semibold transition-transform duration-300 ${servicesOpen ? "rotate-45 text-sky-400" : ""}`}>+</span>
              </button>

              <CardNavDropdown
                open={servicesOpen}
                onClose={() => setServicesOpen(false)}
                items={servicesCardItems}
                cardEffect="rise"
                align="left"
                maxWidth={560}
              />
            </div>

            {/* Service Areas Dropdown with CardNav animation */}
            <div
              className="relative"
              onMouseEnter={handleAreasEnter}
              onMouseLeave={handleAreasLeave}
            >
              <button
                type="button"
                onClick={() => setAreasOpen(!areasOpen)}
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                  areasOpen
                    ? "text-[#0ea5e9] font-bold"
                    : isDark
                    ? "hover:text-white"
                    : "hover:text-slate-950"
                }`}
              >
                <span>Service Areas</span>
                <span className={`text-xs font-semibold transition-transform duration-300 ${areasOpen ? "rotate-45 text-sky-400" : ""}`}>+</span>
              </button>

              <CardNavDropdown
                open={areasOpen}
                onClose={() => setAreasOpen(false)}
                items={areasCardItems}
                cardEffect="rise"
                align="left"
                maxWidth={560}
              />
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              className={`transition-colors ${
                isDark ? "hover:text-white" : "hover:text-slate-950"
              } ${
                activePage === "blog"
                  ? isDark
                    ? "text-white font-bold"
                    : "text-slate-950 font-bold"
                  : ""
              }`}
            >
              Blog
            </Link>

            {/* About Us */}
            <Link
              href="/#about"
              className={`transition-colors ${
                isDark ? "hover:text-white" : "hover:text-slate-950"
              }`}
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact-us"
              className={`transition-colors ${
                isDark ? "hover:text-white" : "hover:text-slate-950"
              } ${
                activePage === "contact-us"
                  ? isDark
                    ? "text-white font-bold"
                    : "text-slate-950 font-bold"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action: Call Now Button + Book Now Button + Email info */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* White Call Now Button */}
            <a
              href="tel:16046128202"
              className="bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs px-3.5 py-2 rounded shadow-xs flex items-center gap-2 transition-all hover:shadow"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>Call Now</span>
            </a>

            {/* Book Now Button */}
            <button
              type="button"
              data-book-now
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs px-3.5 py-2 rounded shadow-xs transition-all hover:shadow cursor-pointer"
            >
              Book Now
            </button>

            {/* Email Contact link */}
            <a
              href="mailto:info@mjlimos.com"
              className="hidden xl:flex items-center gap-1.5 text-xs text-white hover:text-sky-300 font-medium transition-colors"
            >
              <span>info@mjlimos.com</span>
              <Mail className="w-3.5 h-3.5 text-slate-300" />
            </a>
          </div>

          {/* Mobile Staggered Menu and Call button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:16046128202"
              className="bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs px-2.5 py-1.5 rounded flex items-center gap-1.5 shadow-2xs"
            >
              <Phone className="w-3 h-3 fill-slate-950 text-slate-950" />
              <span>Call</span>
            </a>

            <StaggeredMenu
              position="right"
              items={mobileStaggeredMenuItems}
              socialItems={mobileStaggeredSocialItems}
              colors={["#1b3247", "#122332", "#0a1520"]}
              accentColor="#38bdf8"
              menuButtonColor="#ffffff"
              openMenuButtonColor="#38bdf8"
              displaySocials={true}
              displayItemNumbering={true}
              closeOnClickAway={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
