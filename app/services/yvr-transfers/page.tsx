import YVRTransfersScreen from "@/screens/services/yvr-transfers/YVRTransfersScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YVR Limo Car Service in Vancouver, BC | MJ Limos",
  description:
    "High-end airport limo transfer transportation in Vancouver, BC. Exclusive airport car service with executive sedans, spacious passenger vans, and luxury SUVs to and from YVR Airport.",
};

export default function YVRTransfersPage() {
  return <YVRTransfersScreen />;
}

