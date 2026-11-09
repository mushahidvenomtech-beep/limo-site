import KillarneyScreen from "@/screens/service-areas/killarney/KillarneyScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve Luxury Transportation Services in Killarney, BC | MJ Limos",
  description:
    "Limo & Luxury Transportation Services in Killarney, BC, focused on private and dependable airport rides and corporate travel with the ultimate in safety, service, and satisfaction.",
};

export default function KillarneyBCPage() {
  return <KillarneyScreen />;
}

