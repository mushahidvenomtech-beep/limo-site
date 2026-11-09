import React from "react";
import Header from "@/components/common/header/Header";
import DarkFooter from "@/components/common/footer/DarkFooter";
import BlogHeroBanner from "@/components/blog/hero-banner/BlogHeroBanner";
import BlogGrid from "@/components/blog/blog-grid/BlogGrid";

export default function BlogScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Dark Header with active Blog link & Call Now button */}
      <Header activePage="blog" variant="dark" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        {/* Blog Hero Banner */}
        <BlogHeroBanner />

        <div className="smoke-divider" />
        <div className="smoke-effect-light">
          {/* 6 Sample Blogs Grid */}
          <BlogGrid />
        </div>
      </main>

      {/* 3. Dark Executive Footer */}
      <DarkFooter />
    </div>
  );
}

