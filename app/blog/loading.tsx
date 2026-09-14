export default function Loading() {
  return (
    <div className="container-shell py-12">
      <div className="mb-8 h-12 w-64 rounded-lg bg-slate-100 animate-pulse" />
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-[16/10] rounded-xl bg-slate-100" />
            <div className="mt-4 h-5 w-20 rounded bg-slate-100" />
            <div className="mt-3 h-6 w-full rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}