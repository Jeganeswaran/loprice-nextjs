import { Share2, Bookmark, Twitter, Facebook, Link2 } from "lucide-react";

interface ShareBarProps {
  readTime: string;
}

export default function ShareBar({ readTime }: ShareBarProps) {
  return (
    <>
      {/* Desktop Sticky Vertical Bar */}
      <div className="hidden lg:flex flex-col items-center gap-3 fixed left-[max(1rem,calc((100vw-48rem)/4))] top-1/3 z-20">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
          Share
        </span>
        <button
          aria-label="Share on Twitter"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-sm transition hover:bg-[#bf2629] hover:text-white hover:border-[#bf2629]"
        >
          <Twitter size={15} />
        </button>
        <button
          aria-label="Share on Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-sm transition hover:bg-[#bf2629] hover:text-white hover:border-[#bf2629]"
        >
          <Facebook size={15} />
        </button>
        <button
          aria-label="Copy link"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-sm transition hover:bg-[#bf2629] hover:text-white hover:border-[#bf2629]"
        >
          <Link2 size={15} />
        </button>
        <span className="h-px w-6 bg-slate-200 my-1" />
        <button
          aria-label="Bookmark"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-sm transition hover:bg-[#bf2629] hover:text-white hover:border-[#bf2629]"
        >
          <Bookmark size={15} />
        </button>
      </div>

      {/* Mobile Inline Bar */}
      <div className="flex lg:hidden items-center gap-2 mt-6 pb-6 mb-2 border-b border-slate-100">
        <button
          aria-label="Share"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-[#bf2629]"
        >
          <Share2 size={15} />
        </button>
        <button
          aria-label="Bookmark"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-[#bf2629]"
        >
          <Bookmark size={15} />
        </button>
        <span className="text-xs text-slate-400 ml-auto">{readTime}</span>
      </div>
    </>
  );
}