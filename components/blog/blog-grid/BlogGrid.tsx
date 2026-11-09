"use client";

import React, { useState } from "react";
import BlogCard, { BlogPost } from "@/components/blog/blog-card/BlogCard";

const sampleBlogs: BlogPost[] = [
  {
    id: "1",
    slug: "reasons-to-choose-private-chauffeur-over-rideshares-yvr",
    title: "Top 5 Reasons to Choose a Private Chauffeur Over Rideshares at YVR",
    category: "Airport Transfers",
    date: "Nov 6, 2024",
    readTime: "4 min read",
    excerpt:
      "Skip the long taxi lines and surge pricing at Vancouver International Airport. Discover why executive airport transfers guarantee stress-free arrivals with luggage escort and guaranteed vehicle cleanliness.",
    image: "/images/blog/blog-1.jpg",
  },
  {
    id: "2",
    slug: "whistler-winter-travel-guide-luxury-transit",
    title: "The Ultimate Whistler Winter Travel Guide: Luxury Transit from Vancouver",
    category: "Whistler Guide",
    date: "Nov 2, 2024",
    readTime: "6 min read",
    excerpt:
      "Planning a ski getaway along the scenic Sea-to-Sky Highway? Here is everything you need to know about all-wheel-drive winter-rated luxury SUVs and private executive charters to Whistler Village.",
    image: "/images/blog/blog-2.jpg",
  },
  {
    id: "3",
    slug: "corporate-travel-vancouver-maximizing-productivity",
    title: "Corporate Travel in Vancouver: Maximizing Productivity On the Road",
    category: "Corporate Travel",
    date: "Oct 28, 2024",
    readTime: "5 min read",
    excerpt:
      "Transform transit time into productive hours. Learn how our quiet executive cabins, Wi-Fi connectivity, device charging, and discreet chauffeurs provide the ideal mobile boardroom across the Lower Mainland.",
    image: "/images/blog/blog-3.jpg",
  },
  {
    id: "4",
    slug: "plan-flawless-luxury-wedding-transportation",
    title: "How to Plan Flawless Luxury Wedding Transportation for Your Big Day",
    category: "Special Events",
    date: "Oct 22, 2024",
    readTime: "5 min read",
    excerpt:
      "From spacious bridal party Sprinters to red-carpet vintage getaway sedans, ensure your wedding itinerary runs with clockwork precision and luxury elegance without transportation hiccups.",
    image: "/images/blog/blog-4.jpg",
  },
  {
    id: "5",
    slug: "executive-fleet-breakdown-luxury-suv-vs-mercedes-sprinter",
    title: "Executive Fleet Breakdown: Choosing Between a Luxury SUV & Mercedes Sprinter",
    category: "Fleet Insights",
    date: "Oct 15, 2024",
    readTime: "4 min read",
    excerpt:
      "Comparing passenger capacities, luggage allowances, and interior configurations to help you select the perfect executive vehicle for airport rides, ski trips, or corporate events.",
    image: "/images/blog/blog-5.jpg",
  },
  {
    id: "6",
    slug: "navigating-cruise-ship-transfers-canada-place",
    title: "Navigating Cruise Ship Transfers at Canada Place: Insider Tips for Travelers",
    category: "Cruise Transfers",
    date: "Oct 8, 2024",
    readTime: "5 min read",
    excerpt:
      "Avoid the downtown Vancouver traffic crush on cruise arrival days. Discover our direct dockside luggage handling, meet-and-greet pickup points, and express transit to YVR airport.",
    image: "/images/blog/blog-6.jpg",
  },
];

const categories = [
  "All Articles",
  "Airport Transfers",
  "Whistler Guide",
  "Corporate Travel",
  "Special Events",
  "Fleet Insights",
];

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  const filteredBlogs =
    selectedCategory === "All Articles"
      ? sampleBlogs
      : sampleBlogs.filter((post) => post.category === selectedCategory);

  return (
    <section className="w-full py-14 lg:py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-2xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Blogs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

