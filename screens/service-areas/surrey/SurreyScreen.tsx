import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import SurreyHeroSection from "@/components/service-areas/surrey/hero-section/SurreyHeroSection";
import SurreyExperienceRouteSection from "@/components/service-areas/surrey/experience-route/SurreyExperienceRouteSection";
import SurreyServicesRangeSection from "@/components/service-areas/surrey/services-range/SurreyServicesRangeSection";
import SurreyLuxuryBlackCarSection from "@/components/service-areas/surrey/luxury-black-car/SurreyLuxuryBlackCarSection";
import SurreyWhyChooseUsSection from "@/components/service-areas/surrey/why-choose-us/SurreyWhyChooseUsSection";
import SurreyTravelTimesSection from "@/components/service-areas/surrey/travel-times/SurreyTravelTimesSection";
import SurreyFleetShowcaseSection from "@/components/service-areas/surrey/fleet-showcase/SurreyFleetShowcaseSection";
import SurreyRateComparisonSection from "@/components/service-areas/surrey/rate-comparison/SurreyRateComparisonSection";
import SurreyCustomerReviewsSection from "@/components/service-areas/surrey/customer-reviews/SurreyCustomerReviewsSection";
import SurreyNeighborhoodsSection from "@/components/service-areas/surrey/neighborhoods/SurreyNeighborhoodsSection";
import SurreyMapLocationSection from "@/components/service-areas/surrey/map-location/SurreyMapLocationSection";
import SurreyFAQSection from "@/components/service-areas/surrey/faq/SurreyFAQSection";

export default function SurreyScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Header with Service Areas Active */}
      <Header activePage="service-areas" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <SurreyHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <SurreyExperienceRouteSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <SurreyServicesRangeSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <SurreyLuxuryBlackCarSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <SurreyWhyChooseUsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <SurreyTravelTimesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <SurreyFleetShowcaseSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <SurreyRateComparisonSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <SurreyCustomerReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <SurreyNeighborhoodsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <SurreyMapLocationSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <SurreyFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

