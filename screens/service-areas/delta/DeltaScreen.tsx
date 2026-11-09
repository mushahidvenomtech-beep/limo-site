import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import DeltaHeroSection from "@/components/service-areas/delta/hero-section/DeltaHeroSection";
import DeltaAirportRouteSection from "@/components/service-areas/delta/airport-route/DeltaAirportRouteSection";
import DeltaServicesRangeSection from "@/components/service-areas/delta/services-range/DeltaServicesRangeSection";
import DeltaPartySection from "@/components/service-areas/delta/party-transportation/DeltaPartySection";
import DeltaWhyChooseUsSection from "@/components/service-areas/delta/why-choose-us/DeltaWhyChooseUsSection";
import DeltaTravelTimesSection from "@/components/service-areas/delta/travel-times/DeltaTravelTimesSection";
import DeltaFleetShowcaseSection from "@/components/service-areas/delta/fleet-showcase/DeltaFleetShowcaseSection";
import DeltaRateComparisonSection from "@/components/service-areas/delta/rate-comparison/DeltaRateComparisonSection";
import DeltaCustomerReviewsSection from "@/components/service-areas/delta/customer-reviews/DeltaCustomerReviewsSection";
import DeltaNeighborhoodsSection from "@/components/service-areas/delta/neighborhoods/DeltaNeighborhoodsSection";
import DeltaMapLocationSection from "@/components/service-areas/delta/map-location/DeltaMapLocationSection";
import DeltaFAQSection from "@/components/service-areas/delta/faq/DeltaFAQSection";

export default function DeltaScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Service Areas */}
      <Header activePage="service-areas" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <DeltaHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <DeltaAirportRouteSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <DeltaServicesRangeSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <DeltaPartySection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <DeltaWhyChooseUsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <DeltaTravelTimesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <DeltaFleetShowcaseSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <DeltaRateComparisonSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <DeltaCustomerReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <DeltaNeighborhoodsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <DeltaMapLocationSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <DeltaFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

