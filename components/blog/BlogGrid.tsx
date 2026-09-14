"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useRef, useEffect } from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/lib/blog-data";

interface BlogGridProps {
  posts: BlogPost[];
  tags: string[];
  activeTag: string;
}

export default function BlogGrid({ posts, tags, activeTag }: BlogGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Auto-scroll the active tag into view (mobile UX)
  useEffect(() => {
    activeButtonRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeTag]);

  const handleTagChange = useCallback(
    (tag: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (tag === "All") {
        params.delete("tag");
      } else {
        params.set("tag", tag);
      }
      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const filteredPosts =
    activeTag === "All"
      ? posts
      : posts.filter((post) => post.tags.includes(activeTag));

  return (
    <>
      {/* Tag Filter Bar */}
      <div className="sticky top-28 z-30 -mx-4 px-4 bg-white/95 backdrop-blur-md border-b border-slate-200 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto py-4 hide-scrollbar">
          {tags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                ref={isActive ? activeButtonRef : null}
                onClick={() => handleTagChange(tag)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#bf2629] text-white shadow-md shadow-[#bf2629]/30"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing <span className="font-bold text-slate-900">{filteredPosts.length}</span>{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
          {activeTag !== "All" && (
            <>
              {" "}in <span className="font-bold text-[#bf2629]">{activeTag}</span>
            </>
          )}
        </p>

        {activeTag !== "All" && (
          <button
            onClick={() => handleTagChange("All")}
            className="text-xs font-bold text-slate-500 hover:text-[#bf2629] transition"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
            <span className="text-2xl">🔍</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">No articles found</h3>
          <p className="mt-2 text-sm text-slate-500 max-w-xs">
            We couldn't find any articles tagged with "{activeTag}". Try a different category.
          </p>
          <button
            onClick={() => handleTagChange("All")}
            className="mt-6 rounded-full bg-[#bf2629] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-[#a62023]"
          >
            View All Articles
          </button>
        </div>
      )}
    </>
  );
}