import { Metadata } from "next";
import LimoServiceScreen from "@/screens/services/limo-service/LimoServiceScreen";

export const metadata: Metadata = {
  title: "Limo Service in Vancouver, BC | MJ Limos",
  description:
    "Luxury transportation for business and personal travel in Vancouver, BC. Airport transfers, corporate travel, weddings, and special events with professional chauffeurs.",
};

export default function LimoServicePage() {
  return <LimoServiceScreen />;
}
