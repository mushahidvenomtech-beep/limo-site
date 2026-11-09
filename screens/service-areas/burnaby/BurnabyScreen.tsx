import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import BurnabyHeroSection from "@/components/service-areas/burnaby/hero-section/BurnabyHeroSection";
import BurnabyBestExecutiveSection from "@/components/service-areas/burnaby/best-executive/BurnabyBestExecutiveSection";
import BurnabyServicesRangeSection from "@/components/service-areas/burnaby/services-range/BurnabyServicesRangeSection";
import BurnabyProfessionalCarSection from "@/components/service-areas/burnaby/professional-car/BurnabyProfessionalCarSection";
import BurnabyWhyChooseUsSection from "@/components/service-areas/burnaby/why-choose-us/BurnabyWhyChooseUsSection";
import BurnabyTravelTimesSection from "@/components/service-areas/burnaby/travel-times/BurnabyTravelTimesSection";
import BurnabyFleetShowcaseSection from "@/components/service-areas/burnaby/fleet-showcase/BurnabyFleetShowcaseSection";
import BurnabyRateComparisonSection from "@/components/service-areas/burnaby/rate-comparison/BurnabyRateComparisonSection";
import BurnabyCustomerReviewsSection from "@/components/service-areas/burnaby/customer-reviews/BurnabyCustomerReviewsSection";
import BurnabyNeighborhoodsSection from "@/components/service-areas/burnaby/neighborhoods/BurnabyNeighborhoodsSection";
import BurnabyMapLocationSection from "@/components/service-areas/burnaby/map-location/BurnabyMapLocationSection";
import BurnabyFAQSection from "@/components/service-areas/burnaby/faq/BurnabyFAQSection";

export default function BurnabyScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Service Areas */}
      <Header activePage="service-areas" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <BurnabyHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <BurnabyBestExecutiveSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <BurnabyServicesRangeSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <BurnabyProfessionalCarSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <BurnabyWhyChooseUsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <BurnabyTravelTimesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <BurnabyFleetShowcaseSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <BurnabyRateComparisonSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <BurnabyCustomerReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <BurnabyNeighborhoodsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <BurnabyMapLocationSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <BurnabyFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

