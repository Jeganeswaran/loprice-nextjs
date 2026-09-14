import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import BlogCard from "@/components/blog/BlogCard";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="bg-slate-50 border-t border-slate-100 py-16">
      <div className="container-shell">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#bf2629]">
              Keep Reading
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Related Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-[#bf2629] transition"
          >
            View All <ArrowLeft size={14} className="rotate-180" />
          </Link>
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}