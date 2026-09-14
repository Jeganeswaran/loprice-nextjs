interface PostExcerptProps {
  excerpt: string;
}

export default function PostExcerpt({ excerpt }: PostExcerptProps) {
  return (
    <p className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed border-l-4 border-[#bf2629] pl-5 italic">
      {excerpt}
    </p>
  );
}