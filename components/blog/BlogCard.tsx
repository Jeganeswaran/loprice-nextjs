import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col">
      {/* Cover Image */}
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* Tags Row */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {post.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-slate-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Published Date + Author */}
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
        <span>{post.publishedAt}</span>
        <span className="h-3 w-px bg-slate-300" />
        <span className="font-medium text-slate-600">{post.author.name}</span>
      </div>

      {/* Title */}
      <Link href={`/blog/${post.slug}`}>
        <h3 className="mt-2 text-lg font-bold text-slate-900 leading-snug group-hover:text-[#bf2629] transition-colors">
          {post.title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-5">
        {post.excerpt}
      </p>
    </article>
  );
}