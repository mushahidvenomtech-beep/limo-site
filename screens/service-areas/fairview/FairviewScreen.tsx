import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import FairviewHeroSection from "@/components/service-areas/fairview/hero-section/FairviewHeroSection";
import FairviewBestAirportSection from "@/components/service-areas/fairview/best-airport/FairviewBestAirportSection";
import FairviewServicesRangeSection from "@/components/service-areas/fairview/services-range/FairviewServicesRangeSection";
import FairviewScheduleSection from "@/components/service-areas/fairview/schedule-service/FairviewScheduleSection";
import FairviewWhyChooseUsSection from "@/components/service-areas/fairview/why-choose-us/FairviewWhyChooseUsSection";
import FairviewTravelTimesSection from "@/components/service-areas/fairview/travel-times/FairviewTravelTimesSection";
import FairviewFleetShowcaseSection from "@/components/service-areas/fairview/fleet-showcase/FairviewFleetShowcaseSection";
import FairviewBenefitsSection from "@/components/service-areas/fairview/benefits-section/FairviewBenefitsSection";
import FairviewCustomerReviewsSection from "@/components/service-areas/fairview/customer-reviews/FairviewCustomerReviewsSection";
import FairviewNeighborhoodsSection from "@/components/service-areas/fairview/neighborhoods/FairviewNeighborhoodsSection";
import FairviewMapLocationSection from "@/components/service-areas/fairview/map-location/FairviewMapLocationSection";
import FairviewFAQSection from "@/components/service-areas/fairview/faq/FairviewFAQSection";

export default function FairviewScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Service Areas */}
      <Header activePage="service-areas" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <FairviewHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <FairviewBestAirportSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <FairviewServicesRangeSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <FairviewScheduleSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <FairviewWhyChooseUsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <FairviewTravelTimesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <FairviewFleetShowcaseSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <FairviewBenefitsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <FairviewCustomerReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <FairviewNeighborhoodsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <FairviewMapLocationSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <FairviewFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

