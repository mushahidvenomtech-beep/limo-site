import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import WhistlerHeroSection from "@/components/services/whistler-transfers/hero-section/WhistlerHeroSection";
import WhistlerPrivateCarSection from "@/components/services/whistler-transfers/private-car/WhistlerPrivateCarSection";
import WhistlerRoutesSection from "@/components/services/whistler-transfers/popular-routes/WhistlerRoutesSection";
import WhistlerDarkCtaBanner from "@/components/services/whistler-transfers/cta-banner/WhistlerDarkCtaBanner";
import WhistlerShuttleServicesSection from "@/components/services/whistler-transfers/shuttle-services/WhistlerShuttleServicesSection";
import WhistlerWhyChooseSection from "@/components/services/whistler-transfers/why-choose/WhistlerWhyChooseSection";
import WhistlerFleetGridSection from "@/components/services/whistler-transfers/fleet-grid/WhistlerFleetGridSection";
import WhistlerAreasGridSection from "@/components/services/whistler-transfers/areas-grid/WhistlerAreasGridSection";
import WhistlerBottomBanner from "@/components/services/whistler-transfers/cta-banner/WhistlerBottomBanner";
import WhistlerReviewsSection from "@/components/services/whistler-transfers/customer-reviews/WhistlerReviewsSection";
import WhistlerFAQSection from "@/components/services/whistler-transfers/faq/WhistlerFAQSection";

export default function WhistlerTransfersScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Services */}
      <Header activePage="services" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <WhistlerHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <WhistlerPrivateCarSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <WhistlerRoutesSection />
        </div>

        <WhistlerDarkCtaBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <WhistlerShuttleServicesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <WhistlerWhyChooseSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <WhistlerFleetGridSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <WhistlerAreasGridSection />
        </div>

        <WhistlerBottomBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <WhistlerReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <WhistlerFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

