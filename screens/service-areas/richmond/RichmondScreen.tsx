import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import RichmondHeroSection from "@/components/service-areas/richmond/hero-section/RichmondHeroSection";
import RichmondBestLimoSection from "@/components/service-areas/richmond/best-limo/RichmondBestLimoSection";
import RichmondServicesRangeSection from "@/components/service-areas/richmond/services-range/RichmondServicesRangeSection";
import RichmondChauffeurServiceSection from "@/components/service-areas/richmond/chauffeur-service/RichmondChauffeurServiceSection";
import RichmondWhyChooseUsSection from "@/components/service-areas/richmond/why-choose-us/RichmondWhyChooseUsSection";
import RichmondTravelTimesSection from "@/components/service-areas/richmond/travel-times/RichmondTravelTimesSection";
import RichmondFleetShowcaseSection from "@/components/service-areas/richmond/fleet-showcase/RichmondFleetShowcaseSection";
import RichmondRateComparisonSection from "@/components/service-areas/richmond/rate-comparison/RichmondRateComparisonSection";
import RichmondCustomerReviewsSection from "@/components/service-areas/richmond/customer-reviews/RichmondCustomerReviewsSection";
import RichmondNeighborhoodsSection from "@/components/service-areas/richmond/neighborhoods/RichmondNeighborhoodsSection";
import RichmondMapLocationSection from "@/components/service-areas/richmond/map-location/RichmondMapLocationSection";
import RichmondFAQSection from "@/components/service-areas/richmond/faq/RichmondFAQSection";

export default function RichmondScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Service Areas */}
      <Header activePage="service-areas" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <RichmondHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <RichmondBestLimoSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <RichmondServicesRangeSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <RichmondChauffeurServiceSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <RichmondWhyChooseUsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <RichmondTravelTimesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <RichmondFleetShowcaseSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <RichmondRateComparisonSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <RichmondCustomerReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <RichmondNeighborhoodsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <RichmondMapLocationSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <RichmondFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

