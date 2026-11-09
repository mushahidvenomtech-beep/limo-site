import KitsilanoScreen from "@/screens/service-areas/kitsilano/KitsilanoScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Luxury Car Services in Kitsilano, BC | MJ Limos",
  description:
    "Limo & Luxury Transportation Services in Kitsilano, BC, focused on private and dependable private car airport rides, executive chauffeur services, and Whistler transfers.",
};

export default function KitsilanoBCPage() {
  return <KitsilanoScreen />;
}

