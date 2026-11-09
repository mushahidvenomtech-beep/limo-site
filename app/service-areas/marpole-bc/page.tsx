import MarpoleScreen from "@/screens/service-areas/marpole/MarpoleScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience Luxury Transportation Services in Marpole, BC | MJ Limos",
  description:
    "Experience luxury car transportation services in Marpole, BC. Fast 10-minute YVR airport rides, executive chauffeur services, and private black car travel.",
};

export default function MarpoleBCPage() {
  return <MarpoleScreen />;
}

