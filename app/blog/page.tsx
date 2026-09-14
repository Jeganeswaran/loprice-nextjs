import { Suspense } from "react";
import { blogPosts, blogTags } from "@/lib/blog-data";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogNavBar from "@/components/blog/BlogNavBar";

export const metadata = {
  title: "Blog — Travel Guides, Tips & News",
  description: "Explore travel guides, bus booking tips, festival offers, and destination stories from the LoPrice team.",
};

interface BlogPageProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { tag } = await searchParams;
  const activeTag = tag || "All";

  return (
    <main className="min-h-screen bg-white">
      
      {/* ✅ Functional Category Nav Bar */}
      <Suspense fallback={<div className="h-14 border-b border-slate-200 bg-white" />}>
        <BlogNavBar />
      </Suspense>

      {/* Main Content */}
      <div className="container-shell py-10 lg:py-14">
        
        {/* SEO Heading */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {activeTag === "All" ? "Travel Stories & Guides" : `${activeTag} Articles`}
          </h1>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Discover expert tips, destination guides, and the latest news from LoPrice.
          </p>
        </div>

        {/* Blog Grid with Suspense */}
        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogGrid 
            posts={blogPosts} 
            tags={blogTags} 
            activeTag={activeTag} 
          />
        </Suspense>
      </div>
    </main>
  );
}

function BlogGridSkeleton() {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[16/10] rounded-xl bg-slate-200" />
          <div className="mt-4 h-5 w-20 rounded bg-slate-200" />
          <div className="mt-3 h-4 w-32 rounded bg-slate-200" />
          <div className="mt-2 h-6 w-full rounded bg-slate-200" />
          <div className="mt-2 h-6 w-3/4 rounded bg-slate-200" />
        </div>
      ))}
    </div>
  );
}