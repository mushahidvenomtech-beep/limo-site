import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Thumbnail Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-xs">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
            <Link href={`#post-${post.id}`}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-50">
        <Link
          href={`#post-${post.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-sky-600 transition-colors group/link"
        >
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

