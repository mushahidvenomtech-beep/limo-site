"use client";

import React from "react";
import FleetShowcaseLoop from "@/components/common/fleet-loop/FleetShowcaseLoop";

export default function ChauffeurFleetGrid() {
  const chauffeurVehicles = [
    {
      name: "Lincoln Continental",
      badge: "Executive Sedan",
      badgeColor: "bg-purple-600",
      image: "/images/chauffeur/fleet-continental.jpg",
    },
    {
      name: "Luxury Mini Bus",
      badge: "Mini-Coach",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/mini-coach.jpg",
    },
    {
      name: "Mercedes Sprinter",
      badge: "Sprinter",
      badgeColor: "bg-sky-500",
      image: "/images/fleet/sprinter-shuttle.jpg",
    },
    {
      name: "Luxury Ford Transit",
      badge: "Passenger Van",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/passenger-van.jpg",
    },
    {
      name: "Mercedes-Benz GLS",
      badge: "Luxury SUV",
      badgeColor: "bg-sky-500",
      image: "/images/chauffeur/fleet-gls.jpg",
    },
    {
      name: "GMC Yukon Denali",
      badge: "Extended SUV",
      badgeColor: "bg-purple-600",
      image: "/images/chauffeur/fleet-yukon.jpg",
    },
  ];

  return (
    <FleetShowcaseLoop
      title="Our Fleet"
      subtitle="Experience luxury and comfort with our premium fleet selection."
      fleet={chauffeurVehicles}
      ariaLabel="Chauffeur Luxury Fleet Showcase"
    />
  );
}
