import React from "react";
import Image from "next/image";

export default function BlogHeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#182736] text-white py-16 sm:py-24 lg:py-28">
      {/* Background Fleet Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/blog/hero-fleet.jpg"
          alt="MJ Limos Luxury Fleet Lineup"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#182736] via-[#182736]/80 to-[#182736]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        {/* Main Heading */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide uppercase text-white font-sans">
          MJ LIMOS BLOG - Travel Smarter, Ride in Comfort
        </h1>

        {/* Subheading */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100 tracking-tight">
          Your Source For Expert Transportation Tips &amp; Updates
        </h2>

        {/* Introductory Paragraph */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal pt-1">
          Welcome to the MJ Limos Blog, your go-to resource for safe, reliable, and professional transportation in Vancouver. Whether you&apos;re looking for airport transfer tips, travel guides, or insights on private car services, we&apos;ve got you covered. Our blog is designed to help you navigate the city with ease, stay informed about transportation trends, and discover why a private car service is the best choice over rideshares like Yellow Cab.
        </p>
      </div>
    </section>
  );
}

