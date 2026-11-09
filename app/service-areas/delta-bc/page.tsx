import DeltaScreen from "@/screens/service-areas/delta/DeltaScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Car & Airport Car Service in Delta, BC | MJ Limos",
  description:
    "Premium black car and airport transfer service in Delta, BC, Tsawwassen, and Ladner to YVR Airport, Downtown Vancouver, and Whistler.",
};

export default function DeltaBCPage() {
  return <DeltaScreen />;
}

