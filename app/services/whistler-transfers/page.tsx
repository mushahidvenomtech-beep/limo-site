import WhistlerTransfersScreen from "@/screens/services/whistler-transfers/WhistlerTransfersScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vancouver to Whistler Shuttle & Chauffeur Service | MJ Limos",
  description:
    "High-end shuttle and chauffeur transportation between Vancouver, YVR Airport, and Whistler. Luxury 4WD SUVs, Mercedes Sprinter vans, and executive mini-coaches.",
};

export default function WhistlerTransfersPage() {
  return <WhistlerTransfersScreen />;
}

