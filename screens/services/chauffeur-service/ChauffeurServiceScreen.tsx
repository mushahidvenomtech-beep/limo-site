import React from "react";
import Header from "@/components/common/header/Header";
import ChauffeurHeroSection from "@/components/services/chauffeur-service/hero-section/ChauffeurHeroSection";
import ChauffeurStatsCounter from "@/components/services/chauffeur-service/stats-counter/ChauffeurStatsCounter";
import ChauffeurFleetGrid from "@/components/services/chauffeur-service/fleet-grid/ChauffeurFleetGrid";
import ChauffeurAreasGrid from "@/components/services/chauffeur-service/areas-grid/ChauffeurAreasGrid";
import ChauffeurCtaBanner from "@/components/services/chauffeur-service/cta-banner/ChauffeurCtaBanner";
import ChauffeurFooter from "@/components/services/chauffeur-service/footer/ChauffeurFooter";

export default function ChauffeurServiceScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-slate-900 selection:bg-purple-600 selection:text-white">
      {/* 1. Header with Services Active */}
      <Header activePage="services" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section with Glassmorphic Reservation Form & Skyline */}
        <ChauffeurHeroSection />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          {/* 3,000+ Rides | 13 Cars | 17 Chauffeurs Stats Counter */}
          <ChauffeurStatsCounter />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-alt">
          {/* Our Fleet 6-card Showcase */}
          <ChauffeurFleetGrid />
        </div>

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          {/* Areas We Serve Across Vancouver, BC */}
          <ChauffeurAreasGrid />
        </div>

        {/* Book a Stress-Free Luxury Limousine Service Today! Banner */}
        <ChauffeurCtaBanner />
      </main>

      {/* 3. Dark Navy Chauffeur Footer */}
      <ChauffeurFooter />
    </div>
  );
}

