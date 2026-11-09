import BurnabyScreen from "@/screens/service-areas/burnaby/BurnabyScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limo & Black Car Service in Burnaby, BC | MJ Limos",
  description:
    "Executive limousine, private black car, and YVR airport transfers in Burnaby, BC, Metrotown, Brentwood, and Simon Fraser University.",
};

export default function BurnabyBCPage() {
  return <BurnabyScreen />;
}

