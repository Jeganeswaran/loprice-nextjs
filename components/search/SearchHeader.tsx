interface SearchHeaderProps {
  from: string;
  to: string;
  date: string;
}

export default function SearchHeader({ from, to, date }: SearchHeaderProps) {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="container-shell py-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-sm text-neutral-500">Search results</div>

            <h1 className="text-2xl font-black">
              {from} → {to}
            </h1>

            <div className="mt-1 text-sm text-neutral-500">
              {date} · 1 passenger
            </div>
          </div>

          <button className="btn-secondary py-2.5">Modify search</button>
        </div>
      </div>
    </header>
  );
}
