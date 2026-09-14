import type { Bus, BusDeck, BusSeat } from './types/bus'

export const offers = [
  { title: 'First booking offer', code: 'LOWFIRST', value: '₹300 OFF', desc: 'Save on your first LoPrice booking.' },
  { title: 'Weekend deal', code: 'WEEKEND', value: '₹200 OFF', desc: 'Extra savings on selected weekend trips.' },
  { title: 'UPI special', code: 'UPISAVE', value: 'Up to ₹150', desc: 'Pay with UPI and unlock instant savings.' },
  { title: 'Night ride deal', code: 'NIGHT100', value: '₹100 OFF', desc: 'Valid on selected overnight buses.' },
]

export const routes = [
  { from: 'Chennai', to: 'Bangalore', fare: 499, buses: 120, time: '6h 30m' },
  { from: 'Chennai', to: 'Madurai', fare: 399, buses: 95, time: '7h 15m' },
  { from: 'Chennai', to: 'Coimbatore', fare: 449, buses: 88, time: '8h 00m' },
  { from: 'Chennai', to: 'Tirunelveli', fare: 599, buses: 63, time: '10h 15m' },
  { from: 'Bangalore', to: 'Chennai', fare: 479, buses: 110, time: '6h 20m' },
  { from: 'Chennai', to: 'Pondicherry', fare: 249, buses: 72, time: '3h 10m' },
]

const imageSet = [
  '/images/online-bus-ticket-booking-a-l-p.webp',
  '/images/online-bus-ticket-booking-a-l-p.webp',
  '/images/online-bus-ticket-booking-a-l-p.webp',
]

function createRowsFromSeats(seats: BusSeat[]) {
  const rows = new Map<number, BusSeat[]>()

  for (const seat of seats) {
    const list = rows.get(seat.row) ?? []
    list.push(seat)
    rows.set(seat.row, list)
  }

  return Array.from(rows.entries())
    .sort(([left], [right]) => left - right)
    .map(([row, rowSeats]) => ({
      row,
      seats: rowSeats.sort((a, b) => {
        const aPosition = a.position === 'left' ? 0 : 1
        const bPosition = b.position === 'left' ? 0 : 1

        if (aPosition !== bPosition) {
          return aPosition - bPosition
        }

        return Number(a.label.replace(/[^0-9]/g, '')) - Number(b.label.replace(/[^0-9]/g, ''))
      }),
    }))
}

function createSeats(options: {
  rows: number
  price: number
  occupied?: string[]
  ladies?: string[]
  blocked?: string[]
  prefix?: string
}): BusSeat[] {
  const {
    rows,
    price,
    occupied = [],
    ladies = [],
    blocked = [],
    prefix = 'L',
  } = options

  const seats: BusSeat[] = []

  let seatNumber = 1
  let upperNumber = 1

  for (let row = 1; row <= rows; row += 1) {
    if (row % 2 === 1) {
      const upperId = `${prefix}-U${upperNumber}`
      const upperKey = `${upperNumber}U`

      let upperStatus: BusSeat['status'] = 'available'

      if (occupied.includes(upperKey)) {
        upperStatus = 'booked'
      }

      if (ladies.includes(upperKey)) {
        upperStatus = 'female'
      }

      if (blocked.includes(upperKey)) {
        upperStatus = 'blocked'
      }

      seats.push({
        id: upperId,
        label: `${upperNumber}U`,
        price: price + 250,
        kind: 'berth',
        type: 'berth',
        status: upperStatus,
        row,
        column: 'A',
        position: 'left',
        berth_type: 'single',
        currency: 'INR',
        gender_restriction: upperStatus === 'female' ? 'female' : null,
      })

      upperNumber += 1

      const aisleNumber = seatNumber
      const aisleKey = String(aisleNumber)

      let aisleStatus: BusSeat['status'] = 'available'

      if (occupied.includes(aisleKey)) {
        aisleStatus = 'booked'
      }

      if (ladies.includes(aisleKey)) {
        aisleStatus = 'female'
      }

      if (blocked.includes(aisleKey)) {
        aisleStatus = 'blocked'
      }

      seats.push({
        id: `${prefix}-${aisleNumber}`,
        label: String(aisleNumber),
        price,
        kind: 'seat',
        type: 'seater',
        status: aisleStatus,
        row,
        column: 'A',
        position: 'left',
        currency: 'INR',
        gender_restriction: aisleStatus === 'female' ? 'female' : null,
      })

      seatNumber += 1

      const windowNumber = seatNumber
      const windowKey = String(windowNumber)

      let windowStatus: BusSeat['status'] = 'available'

      if (occupied.includes(windowKey)) {
        windowStatus = 'booked'
      }

      if (ladies.includes(windowKey)) {
        windowStatus = 'female'
      }

      if (blocked.includes(windowKey)) {
        windowStatus = 'blocked'
      }

      seats.push({
        id: `${prefix}-${windowNumber}`,
        label: String(windowNumber),
        price,
        kind: 'seat',
        type: 'seater',
        status: windowStatus,
        row,
        column: 'C',
        position: 'right',
        currency: 'INR',
        gender_restriction: windowStatus === 'female' ? 'female' : null,
      })

      seatNumber += 1
    } else {
      const aisleNumber = seatNumber
      const aisleKey = String(aisleNumber)

      let aisleStatus: BusSeat['status'] = 'available'

      if (occupied.includes(aisleKey)) {
        aisleStatus = 'booked'
      }

      if (ladies.includes(aisleKey)) {
        aisleStatus = 'female'
      }

      if (blocked.includes(aisleKey)) {
        aisleStatus = 'blocked'
      }

      seats.push({
        id: `${prefix}-${aisleNumber}`,
        label: String(aisleNumber),
        price,
        kind: 'seat',
        type: 'seater',
        status: aisleStatus,
        row,
        column: 'A',
        position: 'left',
        currency: 'INR',
        gender_restriction: aisleStatus === 'female' ? 'female' : null,
      })

      seatNumber += 1

      const windowNumber = seatNumber
      const windowKey = String(windowNumber)

      let windowStatus: BusSeat['status'] = 'available'

      if (occupied.includes(windowKey)) {
        windowStatus = 'booked'
      }

      if (ladies.includes(windowKey)) {
        windowStatus = 'female'
      }

      if (blocked.includes(windowKey)) {
        windowStatus = 'blocked'
      }

      seats.push({
        id: `${prefix}-${windowNumber}`,
        label: String(windowNumber),
        price,
        kind: 'seat',
        type: 'seater',
        status: windowStatus,
        row,
        column: 'C',
        position: 'right',
        currency: 'INR',
        gender_restriction: windowStatus === 'female' ? 'female' : null,
      })

      seatNumber += 1
    }
  }

  return seats
}

function createDecks(config: { upper: boolean; sleeper: boolean; price: number }): BusDeck[] {
  const lowerSeats = createSeats({
    rows: 12,
    price: config.price,
    occupied: ['4', '10', '15', '18', '23'],
    ladies: ['2', '9', '14'],
    blocked: ['7', '16', '20'],
    prefix: 'L',
  })

  const lowerRows = createRowsFromSeats(lowerSeats)

  const decks: BusDeck[] = [
    {
      id: 'lower',
      title: 'Lower deck',
      subtitle: config.sleeper ? 'Seater + Upper Berth' : 'Seating only',
      seats: lowerSeats,
      rows: lowerRows,
      hasBerths: config.sleeper,
      available: true,
      type: 'lower',
    },
  ]

  if (config.upper) {
    const upperSeats = createSeats({
      rows: 12,
      price: Math.max(config.price - 100, 0),
      occupied: ['3', '8', '14', '21'],
      ladies: ['5', '12'],
      blocked: ['17'],
      prefix: 'U',
    })

    const upperRows = createRowsFromSeats(upperSeats)

    decks.push({
      id: 'upper',
      title: 'Upper deck',
      subtitle: 'Sleeper berth',
      seats: upperSeats,
      rows: upperRows,
      hasBerths: true,
      available: true,
      type: 'upper',
    })
  }

  return decks
}

export const buses: Bus[] = [
  {
    id: 1,
    name: 'Orange Travels',
    type: 'AC Sleeper / Seater (2+1)',
    rating: 4.6,
    reviews: 1240,
    depart: '21:30',
    arrive: '05:30',
    duration: '8h 00m',
    price: 549,
    seats: 18,
    singleSeats: 6,
    boarding: 'Koyambedu',
    dropping: 'Silk Board',
    tags: ['Charging Point', 'Blanket'],
    images: imageSet,
    layout_type: '2+1',
    has_upper_deck: true,
    has_lower_deck: true,
    locations: [
      {
        id: 'loc-chennai',
        descriptor: { name: 'Chennai Koyambedu', short_desc: 'Chennai' },
        gps: '13.0694,80.1948',
        city: 'Chennai',
        state: 'Tamil Nadu',
      },
      {
        id: 'loc-bangalore',
        descriptor: { name: 'Bangalore Madiwala', short_desc: 'Bangalore' },
        gps: '12.9166,77.6101',
        city: 'Bangalore',
        state: 'Karnataka',
      },
    ],
    boarding_points: [
      {
        id: 'bp-001',
        name: 'Koyambedu Omni Bus Stand',
        address: 'Chennai',
        gps: '13.0694,80.1948',
        time: '21:30',
      },
      {
        id: 'bp-002',
        name: 'Guindy',
        address: 'Chennai',
        gps: '13.0067,80.2206',
        time: '21:50',
      },
    ],
    dropping_points: [
      {
        id: 'dp-001',
        name: 'Madiwala',
        address: 'Bangalore',
        gps: '12.9166,77.6101',
        time: '04:30',
      },
      {
        id: 'dp-002',
        name: 'Silk Board',
        address: 'Bangalore',
        gps: '12.9172,77.6228',
        time: '04:45',
      },
    ],
    amenities: ['AC', 'WiFi', 'Charging Point', 'Blanket', 'Water Bottle'],
    cancellation_policy: {
      allowed: true,
      rules: [
        { before_hours: 24, refund_percent: 90 },
        { before_hours: 12, refund_percent: 75 },
        { before_hours: 6, refund_percent: 50 },
        { before_hours: 0, refund_percent: 0 },
      ],
    },
    decks: createDecks({ upper: true, sleeper: true, price: 549 }),
  },
  {
    id: 2,
    name: 'National Express',
    type: 'Volvo Multi Axle AC',
    rating: 4.4,
    reviews: 894,
    depart: '22:15',
    arrive: '05:50',
    duration: '7h 35m',
    price: 619,
    seats: 11,
    singleSeats: 3,
    boarding: 'Koyambedu',
    dropping: 'Majestic',
    tags: ['Water Bottle', 'Live Tracking'],
    promoBadge: 'Women ₹100 OFF',
    offerNote: 'Minimum 10% off on return ticket',
    images: imageSet,
    layout_type: '2+1',
    has_upper_deck: true,
    has_lower_deck: true,
    locations: [
      {
        id: 'loc-chennai',
        descriptor: { name: 'Chennai Koyambedu', short_desc: 'Chennai' },
        gps: '13.0694,80.1948',
        city: 'Chennai',
        state: 'Tamil Nadu',
      },
      {
        id: 'loc-bangalore',
        descriptor: { name: 'Bangalore Madiwala', short_desc: 'Bangalore' },
        gps: '12.9166,77.6101',
        city: 'Bangalore',
        state: 'Karnataka',
      },
    ],
    boarding_points: [
      {
        id: 'bp-101',
        name: 'Tambaram',
        address: 'Chennai',
        gps: '13.0067,80.2206',
        time: '22:15',
      },
    ],
    dropping_points: [
      {
        id: 'dp-101',
        name: 'Electronic City',
        address: 'Bangalore',
        gps: '12.9166,77.6101',
        time: '05:00',
      },
    ],
    amenities: ['AC', 'Charging Point', 'Water Bottle'],
    cancellation_policy: {
      allowed: true,
      rules: [
        { before_hours: 24, refund_percent: 90 },
        { before_hours: 12, refund_percent: 60 },
        { before_hours: 6, refund_percent: 35 },
        { before_hours: 0, refund_percent: 0 },
      ],
    },
    decks: createDecks({ upper: true, sleeper: false, price: 619 }),
  },
  {
    id: 3,
    name: 'SRS Travels',
    type: 'AC Seater / Sleeper',
    rating: 4.2,
    reviews: 665,
    depart: '23:00',
    arrive: '06:45',
    duration: '7h 45m',
    price: 499,
    seats: 24,
    boarding: 'Guindy',
    dropping: 'Electronic City',
    tags: ['USB Charging', 'Reading Light'],
    images: imageSet,
    layout_type: '2+1',
    has_upper_deck: false,
    has_lower_deck: true,
    locations: [
      {
        id: 'loc-chennai',
        descriptor: { name: 'Chennai Guindy', short_desc: 'Chennai' },
        gps: '13.0067,80.2206',
        city: 'Chennai',
        state: 'Tamil Nadu',
      },
      {
        id: 'loc-bangalore',
        descriptor: { name: 'Bangalore Electronic City', short_desc: 'Bangalore' },
        gps: '12.8382,77.6853',
        city: 'Bangalore',
        state: 'Karnataka',
      },
    ],
    boarding_points: [
      {
        id: 'bp-201',
        name: 'Guindy',
        address: 'Chennai',
        gps: '13.0067,80.2206',
        time: '23:00',
      },
    ],
    dropping_points: [
      {
        id: 'dp-201',
        name: 'Electronic City',
        address: 'Bangalore',
        gps: '12.8382,77.6853',
        time: '06:45',
      },
    ],
    amenities: ['AC', 'Charging Point', 'USB Charging', 'Reading Light'],
    cancellation_policy: {
      allowed: true,
      rules: [
        { before_hours: 24, refund_percent: 80 },
        { before_hours: 12, refund_percent: 60 },
        { before_hours: 6, refund_percent: 30 },
        { before_hours: 0, refund_percent: 0 },
      ],
    },
    decks: createDecks({ upper: false, sleeper: true, price: 499 }),
  },
  {
    id: 4,
    name: 'Parveen Travels',
    type: 'Bharat Benz AC Sleeper',
    rating: 4.7,
    reviews: 1450,
    depart: '20:45',
    arrive: '04:50',
    duration: '8h 05m',
    price: 699,
    seats: 8,
    boarding: 'Perungalathur',
    dropping: 'Madiwala',
    tags: ['Live Tracking', 'Blanket'],
    images: imageSet,
    layout_type: '2+2',
    has_upper_deck: false,
    has_lower_deck: true,
    locations: [
      {
        id: 'loc-chennai',
        descriptor: { name: 'Chennai Perungalathur', short_desc: 'Chennai' },
        gps: '12.9820,80.1556',
        city: 'Chennai',
        state: 'Tamil Nadu',
      },
      {
        id: 'loc-bangalore',
        descriptor: { name: 'Bangalore Madiwala', short_desc: 'Bangalore' },
        gps: '12.9166,77.6101',
        city: 'Bangalore',
        state: 'Karnataka',
      },
    ],
    boarding_points: [
      {
        id: 'bp-301',
        name: 'Perungalathur',
        address: 'Chennai',
        gps: '12.9820,80.1556',
        time: '20:45',
      },
    ],
    dropping_points: [
      {
        id: 'dp-301',
        name: 'Madiwala',
        address: 'Bangalore',
        gps: '12.9166,77.6101',
        time: '04:50',
      },
    ],
    amenities: ['AC', 'Live Tracking', 'Blanket'],
    cancellation_policy: {
      allowed: true,
      rules: [
        { before_hours: 24, refund_percent: 90 },
        { before_hours: 12, refund_percent: 70 },
        { before_hours: 6, refund_percent: 40 },
        { before_hours: 0, refund_percent: 0 },
      ],
    },
    decks: createDecks({ upper: false, sleeper: true, price: 699 }),
  },
]
