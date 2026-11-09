import ChauffeurServiceScreen from "@/screens/services/chauffeur-service/ChauffeurServiceScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limo Service in Vancouver, BC | MJ Limos",
  description:
    "Premium executive limousine and professional chauffeur services in Vancouver, BC. Luxury sedans, SUVs, Sprinters, and mini coaches.",
};

export default function ChauffeurServicePage() {
  return <ChauffeurServiceScreen />;
}

