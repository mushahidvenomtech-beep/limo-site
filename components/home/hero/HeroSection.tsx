import React from "react";
import Image from "next/image";
import BookingForm from "@/components/home/booking-form/BookingForm";
import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-4 pb-16 lg:pb-24">
      {/* Background with panoramic skyline and smooth gradient fade */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="relative w-full h-[620px] lg:h-[700px]">
          <Image
            src="/images/hero/vancouver-skyline.jpg"
            alt="Vancouver Waterfront and City Skyline"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-multiply"
          />
          {/* Subtle light vignette / gradient overlay to match image */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fcfcfd]/70 via-[#fcfcfd]/80 to-[#fcfcfd]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcfd]/90 via-[#fcfcfd]/50 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[500px]">
          {/* Left Column: Heading, description, Call Now button */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 pt-4 lg:pt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Vancouver Limo, Black Car & Chauffeur Service
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
              Vancouver Limo, Black Car & Chauffeur service is VIP service, with a rarely matched class, comfort, Vancouver living and executive transport services. Our premier conference and corporate service guarantees punctuality, safety and luxury status to exceed every expectation in style and comfort.
            </p>

            <div className="pt-2">
              <a
                href="tel:+16046128202"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Reservation Form */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

