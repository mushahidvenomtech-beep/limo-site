import BlackCarServiceScreen from "@/screens/services/black-car-service/BlackCarServiceScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Car Service in Vancouver, BC | MJ Limos",
  description:
    "Executive Black Car Service in Vancouver, BC. Premium chauffeured sedans, luxury SUVs, and airport transfers with guaranteed flat-rate pricing.",
};

export default function BlackCarServicePage() {
  return <BlackCarServiceScreen />;
}

