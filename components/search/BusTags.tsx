interface BusTagsProps {
  tags: string[];
  offerNote?: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function BusTags({ tags, offerNote, isSelected, onSelect }: BusTagsProps) {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-neutral-200 pt-4">
      <div className="flex flex-col gap-2">
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {offerNote && (
          <span className="inline-flex w-fit rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-[#bf2629]">
            {offerNote}
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={onSelect}
        className="btn-primary min-w-[130px] px-5 py-2"
      >
        {isSelected ? "Hide seats" : "View seats"}
      </button>
    </div>
  );
}
