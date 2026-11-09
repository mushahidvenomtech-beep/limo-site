import AirportLimoServiceScreen from "@/screens/services/airport-limo-service/AirportLimoServiceScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Limo Service in Vancouver, BC | MJ Limos",
  description:
    "High-end airport transportation in Vancouver, BC. Accurate airport car service with executive sedans, spacious passenger vans, and luxury SUVs to and from YVR Airport.",
};

export default function AirportLimoServicePage() {
  return <AirportLimoServiceScreen />;
}

