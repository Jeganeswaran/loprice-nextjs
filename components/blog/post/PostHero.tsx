import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface PostHeroProps {
  post: BlogPost;
  readTime: string;
}

export default function PostHero({ post, readTime }: PostHeroProps) {
  return (
    <div className="relative h-[50vh] sm:h-[55vh] lg:h-[65vh] w-full">
      <Image
        src={post.coverImage}
        alt={post.title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/20"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14 text-white">
        <div className="container-shell">
          
          {/* Tags Row */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] max-w-4xl">
            {post.title}
          </h1>

          {/* Author + Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full object-cover border-2 border-white/30"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#bf2629] text-sm font-bold text-white border-2 border-white/30">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-bold">{post.author.name}</p>
                {post.author.role && (
                  <p className="text-xs text-slate-300">{post.author.role}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} /> {post.publishedAt}
              </span>
              <span className="h-3 w-px bg-white/30" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}