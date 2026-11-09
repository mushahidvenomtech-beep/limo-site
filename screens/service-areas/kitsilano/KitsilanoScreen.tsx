import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import KitsilanoHeroSection from "@/components/service-areas/kitsilano/hero-section/KitsilanoHeroSection";
import KitsilanoBestAirportSection from "@/components/service-areas/kitsilano/best-airport/KitsilanoBestAirportSection";
import KitsilanoServicesRangeSection from "@/components/service-areas/kitsilano/services-range/KitsilanoServicesRangeSection";
import KitsilanoScheduleSection from "@/components/service-areas/kitsilano/schedule-service/KitsilanoScheduleSection";
import KitsilanoWhyChooseUsSection from "@/components/service-areas/kitsilano/why-choose-us/KitsilanoWhyChooseUsSection";
import KitsilanoTravelTimesSection from "@/components/service-areas/kitsilano/travel-times/KitsilanoTravelTimesSection";
import KitsilanoFleetShowcaseSection from "@/components/service-areas/kitsilano/fleet-showcase/KitsilanoFleetShowcaseSection";
import KitsilanoBetterExperienceSection from "@/components/service-areas/kitsilano/better-experience/KitsilanoBetterExperienceSection";
import KitsilanoCustomerReviewsSection from "@/components/service-areas/kitsilano/customer-reviews/KitsilanoCustomerReviewsSection";
import KitsilanoNeighborhoodsSection from "@/components/service-areas/kitsilano/neighborhoods/KitsilanoNeighborhoodsSection";
import KitsilanoMapLocationSection from "@/components/service-areas/kitsilano/map-location/KitsilanoMapLocationSection";
import KitsilanoFAQSection from "@/components/service-areas/kitsilano/faq/KitsilanoFAQSection";

export default function KitsilanoScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Service Areas */}
      <Header activePage="service-areas" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        <KitsilanoHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KitsilanoBestAirportSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KitsilanoServicesRangeSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KitsilanoScheduleSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KitsilanoWhyChooseUsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KitsilanoTravelTimesSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KitsilanoFleetShowcaseSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KitsilanoBetterExperienceSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KitsilanoCustomerReviewsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KitsilanoNeighborhoodsSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          <KitsilanoMapLocationSection />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          <KitsilanoFAQSection />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

