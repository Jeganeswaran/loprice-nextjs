import { notFound } from "next/navigation";
import { blogPosts, getRelatedPosts } from "@/lib/blog-data";
import Markdown from "@/components/ui/Markdown";

// Post-specific components
import PostHero from "@/components/blog/post/PostHero";
import PostExcerpt from "@/components/blog/post/PostExcerpt";
import ShareBar from "@/components/blog/post/ShareBar";
import PostTags from "@/components/blog/post/PostTags";
import AuthorBio from "@/components/blog/post/AuthorBio";
import RelatedPosts from "@/components/blog/post/RelatedPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Utility: Calculate read time from content
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min read`;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
    },
  };
}

// SSG: Pre-render all blog posts at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);
  const readTime = calculateReadTime(post.content);

  return (
    <main className="relative min-h-screen bg-white">
      
      {/* Hero */}
      <PostHero post={post} readTime={readTime} />

      {/* Article Body */}
      <article className="container-shell relative py-12 lg:py-16">
        <div className="mx-auto max-w-3xl">
          
          {/* Lead Paragraph */}
          <PostExcerpt excerpt={post.excerpt} />

          {/* Share Buttons (Desktop + Mobile) */}
          <ShareBar readTime={readTime} />

          {/* Rich Content */}
          <Markdown content={post.content} />

          {/* Tags */}
          <PostTags tags={post.tags} />

          {/* Author */}
          <AuthorBio author={post.author} />
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </main>
  );
}