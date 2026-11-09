import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import YVRTransfersHeroSection from "@/components/services/yvr-transfers/hero-section/YVRTransfersHeroSection";
import YVRArrivalsSection from "@/components/services/yvr-transfers/airport-arrivals/YVRArrivalsSection";
import YVRPopularRoutesSection from "@/components/services/yvr-transfers/popular-routes/YVRPopularRoutesSection";
import YVRDarkCtaBanner from "@/components/services/yvr-transfers/cta-banner/YVRDarkCtaBanner";
import YVRFleetGridSection from "@/components/services/yvr-transfers/fleet-grid/YVRFleetGridSection";
import YVRAreasGridSection from "@/components/services/yvr-transfers/areas-grid/YVRAreasGridSection";
import YVRBottomBanner from "@/components/services/yvr-transfers/cta-banner/YVRBottomBanner";
import YVRReviewsSection from "@/components/services/yvr-transfers/customer-reviews/YVRReviewsSection";
import YVRFAQSection from "@/components/services/yvr-transfers/faq/YVRFAQSection";

export default function YVRTransfersScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Services */}
      <Header activePage="services" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <YVRTransfersHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <YVRArrivalsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <YVRPopularRoutesSection />
        </div>

        <YVRDarkCtaBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <YVRFleetGridSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <YVRAreasGridSection />
        </div>

        <YVRBottomBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <YVRReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <YVRFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

