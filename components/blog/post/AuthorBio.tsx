import { BlogPost } from "@/lib/blog-data";

interface AuthorBioProps {
  author: BlogPost["author"];
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="mt-10 p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 flex items-start sm:items-center gap-4">
      {author.avatar ? (
        <img
          src={author.avatar}
          alt={author.name}
          className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md shrink-0"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#bf2629] to-[#7f1114] text-xl font-bold text-white shadow-md shrink-0">
          {author.name.charAt(0)}
        </div>
      )}
      <div className="flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-[#bf2629]">
          Written by
        </p>
        <p className="text-base font-bold text-slate-900">{author.name}</p>
        {author.role && (
          <p className="text-sm text-slate-500">{author.role} at LoPrice</p>
        )}
      </div>
    </div>
  );
}