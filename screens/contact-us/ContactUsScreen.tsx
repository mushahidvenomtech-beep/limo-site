import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import ContactHeroBanner from "@/components/contact/hero-banner/ContactHeroBanner";
import QuoteSection from "@/components/contact/quote-section/QuoteSection";

export default function ContactUsScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Navigation Header with Contact Us active state & Call Now button */}
      <Header activePage="contact-us" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Banner with Fleet and Floating Title Glassmorphic Card */}
        <ContactHeroBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          {/* Two-column Get a Quote & Contact Info section */}
          <QuoteSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

