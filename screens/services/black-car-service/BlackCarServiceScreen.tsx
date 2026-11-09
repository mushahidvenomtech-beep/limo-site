import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import BlackCarHeroSection from "@/components/services/black-car-service/hero-section/BlackCarHeroSection";
import BlackCarExecutiveSection from "@/components/services/black-car-service/executive-transportation/BlackCarExecutiveSection";
import BlackCarProcessSection from "@/components/services/black-car-service/transfer-process/BlackCarProcessSection";
import BlackCarCtaBanner from "@/components/services/black-car-service/cta-banner/BlackCarCtaBanner";
import BlackCarFleetGridSection from "@/components/services/black-car-service/fleet-grid/BlackCarFleetGridSection";
import BlackCarAreasGridSection from "@/components/services/black-car-service/areas-grid/BlackCarAreasGridSection";
import BlackCarBottomBanner from "@/components/services/black-car-service/cta-banner/BlackCarBottomBanner";
import BlackCarReviewsSection from "@/components/services/black-car-service/customer-reviews/BlackCarReviewsSection";
import BlackCarFAQSection from "@/components/services/black-car-service/faq/BlackCarFAQSection";

export default function BlackCarServiceScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Services */}
      <Header activePage="services" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <BlackCarHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <BlackCarExecutiveSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <BlackCarProcessSection />
        </div>

        <BlackCarCtaBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <BlackCarFleetGridSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <BlackCarAreasGridSection />
        </div>

        <BlackCarBottomBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <BlackCarReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <BlackCarFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

