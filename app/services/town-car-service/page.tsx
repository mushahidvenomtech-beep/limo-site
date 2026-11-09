import TownCarServiceScreen from "@/screens/services/town-car-service/TownCarServiceScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Town Car Service in Vancouver, BC | MJ Limos",
  description:
    "Executive Town Car Service in Vancouver, BC. Luxury chauffeured sedans, private airport transfers, and point-to-point transit across the Lower Mainland.",
};

export default function TownCarServicePage() {
  return <TownCarServiceScreen />;
}

