import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import MarpoleHeroSection from "@/components/service-areas/marpole/hero-section/MarpoleHeroSection";
import MarpoleAirportCompanySection from "@/components/service-areas/marpole/airport-company/MarpoleAirportCompanySection";
import MarpoleServicesRangeSection from "@/components/service-areas/marpole/services-range/MarpoleServicesRangeSection";
import MarpolePrivateBlackCarSection from "@/components/service-areas/marpole/private-black-car/MarpolePrivateBlackCarSection";
import MarpoleWhyChooseUsSection from "@/components/service-areas/marpole/why-choose-us/MarpoleWhyChooseUsSection";
import MarpoleTravelTimesSection from "@/components/service-areas/marpole/travel-times/MarpoleTravelTimesSection";
import MarpoleFleetShowcaseSection from "@/components/service-areas/marpole/fleet-showcase/MarpoleFleetShowcaseSection";
import MarpoleComparisonAdvantagesSection from "@/components/service-areas/marpole/comparison-advantages/MarpoleComparisonAdvantagesSection";
import MarpoleCustomerReviewsSection from "@/components/service-areas/marpole/customer-reviews/MarpoleCustomerReviewsSection";
import MarpoleNeighborhoodCoverageSection from "@/components/service-areas/marpole/neighborhood-coverage/MarpoleNeighborhoodCoverageSection";
import MarpoleMapLocationSection from "@/components/service-areas/marpole/map-location/MarpoleMapLocationSection";
import MarpoleFAQSection from "@/components/service-areas/marpole/faq/MarpoleFAQSection";

export default function MarpoleScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Service Areas */}
      <Header activePage="service-areas" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <MarpoleHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <MarpoleAirportCompanySection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <MarpoleServicesRangeSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <MarpolePrivateBlackCarSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <MarpoleWhyChooseUsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <MarpoleTravelTimesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <MarpoleFleetShowcaseSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <MarpoleComparisonAdvantagesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <MarpoleCustomerReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <MarpoleNeighborhoodCoverageSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <MarpoleMapLocationSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <MarpoleFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

