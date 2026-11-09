import React from "react";
import Header from "@/components/common/header/Header";
import LimoHeroSection from "@/components/services/limo-service/hero-section/LimoHeroSection";
import LimoTrustedServiceSection from "@/components/services/limo-service/trusted-service/LimoTrustedServiceSection";
import LimoServicesGridSection from "@/components/services/limo-service/services-grid/LimoServicesGridSection";
import LimoWhyChooseSection from "@/components/services/limo-service/why-choose/LimoWhyChooseSection";
import LimoFleetGridSection from "@/components/services/limo-service/fleet-grid/LimoFleetGridSection";
import LimoAreasGridSection from "@/components/services/limo-service/areas-grid/LimoAreasGridSection";
import LimoCtaBanner from "@/components/services/limo-service/cta-banner/LimoCtaBanner";
import LimoReviewsSection from "@/components/services/limo-service/customer-reviews/LimoReviewsSection";
import LimoFAQSection from "@/components/services/limo-service/faq/LimoFAQSection";
import ChauffeurFooter from "@/components/services/chauffeur-service/footer/ChauffeurFooter";

export default function LimoServiceScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-slate-900 selection:bg-purple-600 selection:text-white">
      {/* 1. Header with Services Active */}
      <Header activePage="services" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section with Glassmorphic Reservation Form & Skyline + Stats */}
        <LimoHeroSection />

        <div className="smoke-divider" />

        {/* A Trusted Premium Limousine Service in Vancouver, BC */}
        <div className="smoke-effect-light">
          <LimoTrustedServiceSection />
        </div>

        <div className="smoke-divider" />

        {/* Our Limo Services in Vancouver, BC */}
        <div className="smoke-effect-alt">
          <LimoServicesGridSection />
        </div>

        {/* Why Choose Our Luxury Limousine Service in Vancouver, BC */}
        <LimoWhyChooseSection />

        <div className="smoke-divider" />

        {/* Our Fleet (6 Luxury Vehicles Showcase) */}
        <div className="smoke-effect-light">
          <LimoFleetGridSection />
        </div>

        <div className="smoke-divider" />

        {/* Areas We Serve Across Vancouver, BC */}
        <div className="smoke-effect-alt">
          <LimoAreasGridSection />
        </div>

        {/* Book a Stress-Free Luxury Limousine Service Today! Banner */}
        <LimoCtaBanner />

        <div className="smoke-divider" />

        {/* What Our Clients Say About Our Limo Service ? */}
        <div className="smoke-effect-light">
          <LimoReviewsSection />
        </div>

        <div className="smoke-divider" />

        {/* Frequently Asked Questions */}
        <div className="smoke-effect-alt">
          <LimoFAQSection />
        </div>
      </main>

      {/* 3. Dark Navy Executive Footer */}
      <ChauffeurFooter />
    </div>
  );
}

