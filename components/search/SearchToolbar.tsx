import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import { SORT_OPTIONS } from '@/lib/constants/search'
import type { SortOption } from '@/features/bus-search/hooks/useBusSearch'

interface SearchToolbarProps { resultCount: number; sort: SortOption; onSortChange: (value: SortOption) => void; onFiltersClick?: () => void }

export default function SearchToolbar({ resultCount, sort, onSortChange, onFiltersClick }: SearchToolbarProps) {
  return <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><div className="text-sm font-semibold text-neutral-500">{resultCount} buses found</div><div className="flex gap-2"><button type="button" onClick={onFiltersClick} className="btn-secondary px-3 py-2 text-sm lg:hidden"><SlidersHorizontal size={16} className="mr-2" />Filters</button><label className="relative"><select value={sort} onChange={(e) => onSortChange(e.target.value as SortOption)} className="appearance-none rounded-xl border border-neutral-200 bg-white py-2 pl-3 pr-9 text-sm font-semibold outline-none"><option value="recommended">Recommended</option><option value="price">Lowest price</option><option value="rating">Top rated</option><option value="departure">Departure</option></select><ChevronDown size={15} className="pointer-events-none absolute right-3 top-3 text-neutral-400" /></label></div></div>
}
