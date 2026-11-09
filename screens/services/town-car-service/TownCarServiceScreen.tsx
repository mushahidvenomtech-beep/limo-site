import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import TownCarHeroSection from "@/components/services/town-car-service/hero-section/TownCarHeroSection";
import TownCarExecutiveSection from "@/components/services/town-car-service/executive-transit/TownCarExecutiveSection";
import TownCarRoutesSection from "@/components/services/town-car-service/popular-routes/TownCarRoutesSection";
import TownCarDarkCtaBanner from "@/components/services/town-car-service/cta-banner/TownCarDarkCtaBanner";
import TownCarFleetGridSection from "@/components/services/town-car-service/fleet-grid/TownCarFleetGridSection";
import TownCarAreasGridSection from "@/components/services/town-car-service/areas-grid/TownCarAreasGridSection";
import TownCarBottomBanner from "@/components/services/town-car-service/cta-banner/TownCarBottomBanner";
import TownCarReviewsSection from "@/components/services/town-car-service/customer-reviews/TownCarReviewsSection";
import TownCarFAQSection from "@/components/services/town-car-service/faq/TownCarFAQSection";

export default function TownCarServiceScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Services */}
      <Header activePage="services" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <TownCarHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <TownCarExecutiveSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <TownCarRoutesSection />
        </div>

        <TownCarDarkCtaBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <TownCarFleetGridSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <TownCarAreasGridSection />
        </div>

        <TownCarBottomBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <TownCarReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <TownCarFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

