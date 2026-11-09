import BlogScreen from "@/screens/blog/BlogScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Travel Smarter, Ride in Comfort | MJ Limos",
  description:
    "Your source for expert Vancouver transportation tips, airport transfer insights, Whistler travel guides, and luxury chauffeur services.",
};

export default function BlogPage() {
  return <BlogScreen />;
}

