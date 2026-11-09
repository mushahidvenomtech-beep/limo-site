import React from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import HeroSection from "@/components/home/hero/HeroSection";
import ExperiencePreviewSection from "@/components/home/experience-preview/ExperiencePreviewSection";
import LuxuryFleetSection from "@/components/home/luxury-fleet/LuxuryFleetSection";
import ExecutiveServicesSection from "@/components/home/executive-services/ExecutiveServicesSection";
import TrustAboutSection from "@/components/home/trust-about/TrustAboutSection";
import CustomerReviewsSection from "@/components/home/customer-reviews/CustomerReviewsSection";
import AreasServedSection from "@/components/home/areas-served/AreasServedSection";

export default function HomeScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Top Header Navigation */}
      <Header />

      {/* 2. Main Content Sections with Alternating Smoke Effect and Dividers */}
      <main className="flex-1 w-full">
        {/* Hero Section with Glassmorphic Reservation Form */}
        <HeroSection />

        <div className="smoke-divider" />

        {/* Experience Premium Luxury Transportation Section */}
        <div className="smoke-effect-light">
          <ExperiencePreviewSection />
        </div>

        <div className="smoke-divider" />

        {/* Our Luxury Fleet Section (Showcase on 3D Pedestals) */}
        <div className="bg-white">
          <LuxuryFleetSection />
        </div>

        <div className="smoke-divider" />

        {/* Explore Our Executive Luxury Transportation Services */}
        <div className="smoke-effect-alt">
          <ExecutiveServicesSection />
        </div>

        <div className="smoke-divider" />

        {/* About Us & Safe Professional Car Service */}
        <div className="bg-white">
          <TrustAboutSection />
        </div>

        <div className="smoke-divider" />

        {/* What Customers Say (Reviews & Testimonials) */}
        <div className="smoke-effect-light">
          <CustomerReviewsSection />
        </div>

        <div className="smoke-divider" />

        {/* Areas We Serve */}
        <div className="bg-white">
          <AreasServedSection />
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

