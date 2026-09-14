import Link from "next/link";

interface PostTagsProps {
  tags: string[];
}

export default function PostTags({ tags }: PostTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-slate-100">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
        Tagged in
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-[#bf2629] hover:text-white"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}