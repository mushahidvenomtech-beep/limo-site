import React from "react";
import Image from "next/image";
import Link from "next/link";
import ChauffeurBookingCard from "@/components/services/chauffeur-service/booking-card/ChauffeurBookingCard";
import { Shield, Award, Clock, Star, Play, ArrowRight } from "lucide-react";

export default function ChauffeurHeroSection() {
  const badges = [
    { label: "Safe & Secure", icon: <Shield className="w-3.5 h-3.5 text-purple-600" /> },
    { label: "Professional", icon: <Award className="w-3.5 h-3.5 text-purple-600" /> },
    { label: "On Time", icon: <Clock className="w-3.5 h-3.5 text-purple-600" /> },
    { label: "5-Star Service", icon: <Star className="w-3.5 h-3.5 text-purple-600 fill-purple-600" /> },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-8 pb-16 lg:pb-24 bg-gradient-to-b from-[#f5f3ff]/40 via-[#faf5ff]/30 to-[#ffffff]">
      {/* City Skyline Background with soft gradient fade */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="relative w-full h-[580px] lg:h-[650px]">
          <Image
            src="/images/chauffeur/vancouver-dusk.jpg"
            alt="Vancouver Waterfront Skyline"
            fill
            priority
            className="object-cover object-center opacity-25 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-[#ffffff]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px]">
          {/* Left Column: Heading, description, pills & CTAs */}
          <div className="lg:col-span-7 space-y-5 pt-2">
            {/* Tag with purple line */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold text-purple-600 uppercase tracking-widest">
                PREMIUM LIMOUSINE SERVICE
              </span>
              <div className="h-[2px] w-12 bg-purple-500 rounded-full" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Limo Service in{" "}
              <span className="text-purple-600">Vancouver, BC</span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Luxury transportation for business and personal travel. Arrive in style, on time, and stress-free.
            </p>

            {/* 4 Feature Pills in a row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 border border-purple-100 rounded-xl px-3 py-2 flex items-center gap-2 shadow-2xs"
                >
                  {badge.icon}
                  <span className="text-[11px] font-bold text-slate-800">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-purple-700 transition-colors px-4 py-3"
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-purple-600">
                  <Play className="w-3.5 h-3.5 fill-purple-600 ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Column: Floating Booking Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ChauffeurBookingCard />
          </div>
        </div>

        {/* Center Sedan Display Hero Image */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-[16/8] drop-shadow-2xl">
            <Image
              src="/images/chauffeur/mercedes-reflection.jpg"
              alt="Luxury Mercedes Sedan on Reflecting Tarmac"
              fill
              className="object-cover rounded-2xl"
            />
            {/* Ambient neon reflection glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

