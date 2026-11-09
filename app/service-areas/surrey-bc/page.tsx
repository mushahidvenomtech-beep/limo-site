import SurreyScreen from "@/screens/service-areas/surrey/SurreyScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limo & Private Car Service in Surrey, BC | MJ Limos",
  description:
    "Executive limo and private black car service in Surrey, BC, South Surrey, and Guildford to YVR Airport, Downtown Vancouver, and Whistler.",
};

export default function SurreyBCPage() {
  return <SurreyScreen />;
}

