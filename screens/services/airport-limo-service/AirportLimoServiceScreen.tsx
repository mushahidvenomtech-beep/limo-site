import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import AirportLimoHeroSection from "@/components/services/airport-limo-service/hero-section/AirportLimoHeroSection";
import AirportLimoExperienceSection from "@/components/services/airport-limo-service/premium-experience/AirportLimoExperienceSection";
import AirportLimoProcessSection from "@/components/services/airport-limo-service/transfer-process/AirportLimoProcessSection";
import AirportLimoCtaBanner from "@/components/services/airport-limo-service/cta-banner/AirportLimoCtaBanner";
import AirportLimoFleetGridSection from "@/components/services/airport-limo-service/fleet-grid/AirportLimoFleetGridSection";
import AirportLimoAreasGridSection from "@/components/services/airport-limo-service/areas-grid/AirportLimoAreasGridSection";
import AirportLimoBottomBanner from "@/components/services/airport-limo-service/cta-banner/AirportLimoBottomBanner";
import AirportLimoReviewsSection from "@/components/services/airport-limo-service/customer-reviews/AirportLimoReviewsSection";
import AirportLimoFAQSection from "@/components/services/airport-limo-service/faq/AirportLimoFAQSection";

export default function AirportLimoServiceScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Services */}
      <Header activePage="services" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <AirportLimoHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <AirportLimoExperienceSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <AirportLimoProcessSection />
        </div>

        <AirportLimoCtaBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <AirportLimoFleetGridSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <AirportLimoAreasGridSection />
        </div>

        <AirportLimoBottomBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <AirportLimoReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <AirportLimoFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

