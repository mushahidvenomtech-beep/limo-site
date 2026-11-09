import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LimoTrustedServiceSection() {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-purple-400"></span>
            <span className="text-xs font-bold text-slate-800 tracking-wider">
              A Trusted Premium Limousine Service in Vancouver, BC
            </span>
            <span className="h-px w-8 bg-purple-400"></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            MJ Limos is a leading provider of luxury transportation in Vancouver,
            offering unparalleled comfort, professionalism, and reliability. Whether you need an
            airport transfer, corporate travel, or a special event ride, we are here to provide
            a seamless and luxurious experience.
          </p>
        </div>

        {/* Feature Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-purple-100 bg-gradient-to-r from-purple-50 via-slate-50 to-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
                Limousine Transportation for Business &amp; Personal Travel
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our limo services are designed to meet the highest standards of luxury and
                convenience. From corporate travel to airport transfers, we ensure you arrive on
                time and in style.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 w-full">
              <Image
                src="/images/limo/building-sedan.jpg"
                alt="Luxury Limousine Transportation for Business & Personal Travel"
                fill
                className="object-cover object-center"
              />
              {/* Soft gradient edge */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-purple-50/80 to-transparent hidden lg:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

