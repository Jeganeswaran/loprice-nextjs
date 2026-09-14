'use client'

import { Suspense, useCallback, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { buses } from '@/lib/data'
import { DEFAULT_SEARCH } from '@/lib/constants/search'
import { useBusSearch } from '@/features/bus-search/hooks/useBusSearch'
import BottomSheet from '@/components/ui/BottomSheet'
import SearchHeader from '@/components/search/SearchHeader'
import SearchFilters from '@/components/search/SearchFilters'
import SearchToolbar from '@/components/search/SearchToolbar'
import BusList from '@/components/search/BusList'
import BookingDrawer from '@/components/search/booking-drawer/BookingDrawer'

export default function SearchPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#f7f8fa]" />}> 
      <SearchPageContent />
    </Suspense>
  )
}

function SearchPageContent() {
  const params = useSearchParams()
  const from = params.get('from') || DEFAULT_SEARCH.from
  const to = params.get('to') || DEFAULT_SEARCH.to
  const date = params.get('date') || DEFAULT_SEARCH.date
  const search = useBusSearch(buses)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const selectedBusData = buses.find((bus) => bus.id === search.selectedBus) ?? null
  const closeBooking = useCallback(() => search.selectBus(null), [search])

  return <main className="min-h-screen bg-[#f7f8fa]">
    <SearchHeader from={from} to={to} date={date} />
    <div className="container-shell py-6 lg:grid lg:grid-cols-[250px_1fr] lg:gap-6">
      <SearchFilters acOnly={search.acOnly} sleeper={search.sleeper} onAcChange={search.setAcOnly} onSleeperChange={search.setSleeper} />
      <section><SearchToolbar resultCount={search.filteredBuses.length} sort={search.sort} onSortChange={search.setSort} onFiltersClick={() => setMobileFiltersOpen(true)} /><BusList buses={search.filteredBuses} selectedBus={search.selectedBus} selectedSeats={search.selectedSeats} onBusSelect={search.selectBus} /></section>
    </div>
    <BottomSheet open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} title="Filter buses" description="Narrow the results to match your trip"><SearchFilters acOnly={search.acOnly} sleeper={search.sleeper} onAcChange={search.setAcOnly} onSleeperChange={search.setSleeper} /></BottomSheet>
    <BookingDrawer open={Boolean(selectedBusData)} bus={selectedBusData} date={date} selectedSeats={search.selectedSeats} onSeatSelect={search.selectSeat} onClose={closeBooking} />
  </main>
}