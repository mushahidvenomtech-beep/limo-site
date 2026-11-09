import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import KillarneyHeroSection from "@/components/service-areas/killarney/hero-section/KillarneyHeroSection";
import KillarneyBestAirportSection from "@/components/service-areas/killarney/best-airport/KillarneyBestAirportSection";
import KillarneyServicesRangeSection from "@/components/service-areas/killarney/services-range/KillarneyServicesRangeSection";
import KillarneyScheduleSection from "@/components/service-areas/killarney/schedule-service/KillarneyScheduleSection";
import KillarneyWhyChooseUsSection from "@/components/service-areas/killarney/why-choose-us/KillarneyWhyChooseUsSection";
import KillarneyTravelTimesSection from "@/components/service-areas/killarney/travel-times/KillarneyTravelTimesSection";
import KillarneyFleetShowcaseSection from "@/components/service-areas/killarney/fleet-showcase/KillarneyFleetShowcaseSection";
import KillarneyBetterExperienceSection from "@/components/service-areas/killarney/better-experience/KillarneyBetterExperienceSection";
import KillarneyCustomerReviewsSection from "@/components/service-areas/killarney/customer-reviews/KillarneyCustomerReviewsSection";
import KillarneyNeighborhoodsSection from "@/components/service-areas/killarney/neighborhoods/KillarneyNeighborhoodsSection";
import KillarneyMapLocationSection from "@/components/service-areas/killarney/map-location/KillarneyMapLocationSection";
import KillarneyFAQSection from "@/components/service-areas/killarney/faq/KillarneyFAQSection";

export default function KillarneyScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Header with active Service Areas */}
      <Header activePage="service-areas" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <KillarneyHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KillarneyBestAirportSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KillarneyServicesRangeSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KillarneyScheduleSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KillarneyWhyChooseUsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KillarneyTravelTimesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KillarneyFleetShowcaseSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KillarneyBetterExperienceSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KillarneyCustomerReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KillarneyNeighborhoodsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KillarneyMapLocationSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KillarneyFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

