import RichmondScreen from "@/screens/service-areas/richmond/RichmondScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limo & YVR Airport Car Service in Richmond, BC | MJ Limos",
  description:
    "Executive limousine, private black car, and YVR airport transfers in Richmond, BC, Steveston, Terra Nova, and City Centre.",
};

export default function RichmondBCPage() {
  return <RichmondScreen />;
}

