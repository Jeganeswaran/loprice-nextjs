# LoPrice.com

LoPrice.com is a frontend-only bus ticket booking and search experience implemented in Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The repository emphasizes a static UI architecture for discovering bus routes, comparing fares, filtering bus inventory, and opening an in-page seat-selection and booking drawer rather than navigating to a separate route.

## Technical Stack

- Next.js 16 App Router for route structure and page-level composition.
- React 19 for component rendering and client-side interaction.
- TypeScript domain modeling for routes, buses, seats, and booking UI state.
- Tailwind CSS 4 for utility-first styling and responsive layout composition.
- React Hook Form + Zod + resolvers for form-driven UI validation patterns.
- Lucide React for iconography.
- clsx for conditional class composition.

## Project Architecture

```text
app/                         # Route folders and App Router page files
components/                 # Reusable UI, page sections, and feature composition
  search/                   # Bus search result list, filters, summary, and booking UI
    booking-drawer/         # Bottom-sheet flow for seats and booking steps
  sections/                 # Marketing/landing page section components
  ui/                       # Generic UI primitives such as BottomSheet
features/bus-search/        # Feature-level domain behavior and hook-driven search state
  hooks/                    # useBusSearch hook for filtering, sorting, and seat selection
lib/
  constants/                # Shared search/filter constants
  types/                    # Domain model definitions for bus, bus seats, routes, and booking
  utils/                    # Helper utilities such as cn()
public/images/              # Static assets used by UI and mock bus imagery
```

## Search and Booking Domain Model

The domain model is declared in `lib/types/bus.ts` and contains the main bus inventory types:

- `Bus`: route/search result object containing id, name, type, fare, route metadata, rating, and schedule fields.
- `BusSeat`: seat object with id, label, price, kind, type, status, row, column, berth settings, and optional gender restrictions.
- `BusDeck`: seat map deck structure used for lower/upper decks and berth rendering.
- `BusPoint`, `BusLocation`, `BusCancellationRule`, and related interfaces define route stops and cancellation metadata.

This typed bus schema supports seat maps, fare cards, route tags, and booking drawer summary logic across UI components.

## State and Search Behavior

The main search state container is implemented through `features/bus-search/hooks/useBusSearch.ts`.

The hook is a client-side React hook that coordinates:

- `sort`: recommended, price, rating, or departure sorting.
- `acOnly` and `sleeper` boolean filters.
- `selectedBus` state for route result focus.
- `selectedSeats` state used by seat-selection and booking drawer UIs.
- `selectBus()` and `selectSeat()` functions that update UI and seat selection arrays.

The hook uses `useMemo()` to derive the `filteredBuses` array from the provided bus dataset and applies client-side search logic using the `type` string to match bus categories such as `AC` and `sleeper`.

## Interaction Model

The booking interaction is intentionally implemented as an in-page drawer rather than a route transition:

1. A search result card enters the seat-selection flow through the `BookingDrawer` component.
2. The `SeatSelection` wrapper exports a backwards-compatible wrapper for older UI usage, but forwards to the new `BookingDrawer` implementation.
3. `BookingDrawer` composes booking steps, seat legend, route summary, deck metadata, and seat map UI in a single drawer experience.
4. The selected seat IDs remain in `selectedSeats`, and `onSeatSelect` updates the local UI state in the booking workflow.

This design keeps the UI smooth and avoids a page reload while still representing a multi-step booking funnel.

## UI Composition

The repository is organized around explicit UI components rather than a monolithic page component:

- `SearchHeader`, `SearchToolbar`, `SearchFilters`, and `BusList` provide the search result experience.
- `BusCard`, `BusFare`, `BusRoute`, and `BusTags` describe a single result card.
- `SeatMap`, `SeatSelection`, and `BookingSummary` compose the inventory and ticket review experience.
- `BottomSheet` and the booking drawer folder provide a modal/drawer UX pattern.

The UI is designed to support both desktop and mobile layouts without dedicated router transitions for seat selection.

## Data Flow and Extensibility

The project uses static mock or locally sourced data structures (`lib/data.ts`) and strongly typed constants from `lib/constants/search.ts`. It is a suitable frontend template for extending with API-backed data once a backend is connected.

Future integration points include:

- replacing the current static bus data source with an API endpoint;
- wiring search filters and seat selection into a persisted booking state model;
- adding server-side route handling for search, offer, and booking confirmation flows;
- introducing form validation and booking payload generation through the existing Zod and hook form stack.

## Run

```bash
npm install
npm run dev
npm run build
```
