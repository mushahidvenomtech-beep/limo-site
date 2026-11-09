"use client";

import React from "react";
import FleetShowcaseLoop from "@/components/common/fleet-loop/FleetShowcaseLoop";

export default function WhistlerFleetGridSection() {
  const whistlerVehicles = [
    {
      name: "Lincoln Continental",
      badge: "Sedan",
      badgeColor: "bg-sky-500",
      image: "/images/fleet/executive-sedan.jpg",
    },
    {
      name: "Luxury SUV 6 Pax",
      badge: "SUV",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/luxury-suv.jpg",
    },
    {
      name: "Mercedes Sprinter",
      badge: "Sprinter",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/sprinter-shuttle.jpg",
    },
    {
      name: "Luxury Pass Van 11 Pax",
      badge: "Passenger Van",
      badgeColor: "bg-sky-500",
      image: "/images/fleet/passenger-van.jpg",
    },
    {
      name: "Suburban Premier 6 Pax",
      badge: "Extended SUV",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/extended-suv.jpg",
    },
    {
      name: "Executive Mini-Coach",
      badge: "Mini Coach",
      badgeColor: "bg-purple-600",
      image: "/images/fleet/mini-coach.jpg",
    },
  ];

  return (
    <FleetShowcaseLoop
      title="Our Luxury Fleet for Whistler Travel"
      subtitle="All-weather equipped luxury fleet for Sea-to-Sky highway transfers"
      fleet={whistlerVehicles}
      ariaLabel="Whistler Luxury Fleet Showcase"
    />
  );
}
