'use client'

import Link from 'next/link'
import { useState, useRef, useEffect, useCallback } from 'react'
import { BusFront, Facebook, X, Instagram, Linkedin, Youtube, MousePointer2 } from 'lucide-react'
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const [activeTab, setActiveTab] = useState(0)
  const [cursorStyle, setCursorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const tabs = [
    'Top Bus Routes',
    'Buses From Top Cities',
    'Top RTC Buses',
    'Top Bus Services',
    'Quick Links',
  ]

  const tabContent: string[][][] = [
    // Tab 0: Top Bus Routes
    [
      [
        'Delhi to Manali Bus', 'Chennai to Bangalore Bus', 'Bangalore to Goa Bus',
        'Bangalore to Pondicherry Bus', 'Delhi to Lucknow Bus', 'Pune to Bangalore Bus',
        'Bangalore to Pune Bus', 'Chennai to Pondicherry Bus', 'Hyderabad to Tirupati Bus',
        'Mumbai to Pune Bus', 'Chennai to Madurai Bus', 'Delhi to Ujjain Bus',
        'Hyderabad to Srisailam Bus',
      ],
      [
        'Hyderabad to Bangalore Bus', 'Delhi to Dehradun Bus', 'Bangalore to Tirupati Bus',
        'Chandigarh to Delhi Bus', 'Delhi to Shimla Bus', 'Pune to Goa Bus',
        'Bhopal to Indore Bus', 'Coimbatore to Chennai Bus', 'Indore to Bhopal Bus',
        'Nagpur to Pune Bus', 'Coimbatore to Bangalore Bus', 'Hyderabad to Chennai Bus',
        'Hyderabad to Vijayawada Bus',
      ],
      [
        'Bangalore to Hyderabad Bus', 'Delhi to Jaipur Bus', 'Delhi to Haridwar Bus',
        'Dehradun to Delhi Bus', 'Kolkata to Siliguri Bus', 'Pune to Mumbai Bus',
        'Chandigarh to Manali Bus', 'Delhi to Nainital Bus', 'Kolkata to Digha Bus',
        'Pune to Nagpur Bus', 'Delhi to Dharamshala Bus', 'Hyderabad to Goa Bus',
      ],
      [
        'Bangalore to Chennai Bus', 'Delhi to Rishikesh Bus', 'Jaipur to Delhi Bus',
        'Delhi to Chandigarh Bus', 'Lucknow to Delhi Bus', 'Bangalore to Mumbai Bus',
        'Chennai to Coimbatore Bus', 'Delhi to Varanasi Bus', 'Mumbai to Goa Bus',
        'Bangalore to Ooty Bus', 'Delhi to Khatushyamji Bus', 'Hyderabad to Mumbai Bus',
      ],
    ],
    // Tab 1: Buses From Top Cities
    [
      [
        'Buses from Delhi', 'Buses from Mumbai', 'Buses from Bangalore',
        'Buses from Hyderabad', 'Buses from Chennai', 'Buses from Kolkata',
        'Buses from Pune', 'Buses from Ahmedabad', 'Buses from Jaipur',
        'Buses from Lucknow', 'Buses from Chandigarh', 'Buses from Indore',
      ],
      [
        'Buses from Bhopal', 'Buses from Nagpur', 'Buses from Surat',
        'Buses from Vadodara', 'Buses from Coimbatore', 'Buses from Kochi',
        'Buses from Visakhapatnam', 'Buses from Vijayawada', 'Buses from Patna',
        'Buses from Ranchi', 'Buses from Guwahati', 'Buses from Bhubaneswar',
      ],
      [
        'Buses from Mysore', 'Buses from Mangalore', 'Buses from Madurai',
        'Buses from Trichy', 'Buses from Salem', 'Buses from Tirupati',
        'Buses from Goa', 'Buses from Dehradun', 'Buses from Shimla',
        'Buses from Manali', 'Buses from Nainital', 'Buses from Rishikesh',
      ],
      [
        'Buses from Varanasi', 'Buses from Haridwar', 'Buses from Amritsar',
        'Buses from Ludhiana', 'Buses from Jodhpur', 'Buses from Udaipur',
        'Buses from Agra', 'Buses from Mathura', 'Buses from Gwalior',
        'Buses from Jabalpur', 'Buses from Raipur', 'Buses from Aurangabad',
      ],
    ],
    // Tab 2: Top RTC Buses
    [
      [
        'KSRTC Bus', 'MSRTC Bus', 'APSRTC Bus', 'TSRTC Bus', 'TNSTC Bus',
        'Kerala RTC Bus', 'Karnataka RTC Bus', 'Maharashtra RTC Bus',
        'Andhra Pradesh RTC Bus', 'Telangana RTC Bus', 'Tamil Nadu RTC Bus',
        'Kerala SRTC Bus',
      ],
      [
        'UPSRTC Bus', 'RSRTC Bus', 'GSRTC Bus', 'MPRTC Bus', 'HRTC Bus',
        'PEPSU Bus', 'PRTC Bus', 'WBTC Bus', 'OSRTC Bus', 'BSRTC Bus',
        'JSRTC Bus', 'CGRTC Bus',
      ],
      [
        'Delhi Transport Corporation', 'BEST Bus', 'BMTC Bus', 'DTC Bus',
        'Kolkata Transport', 'Chennai MTC', 'Pune PMPML', 'Ahmedabad AMTS',
        'Jaipur JCTSL', 'Lucknow City Transport', 'Indore City Bus',
        'Bhopal City Link',
      ],
      [
        'Himachal RTC', 'Uttarakhand RTC', 'Assam State Transport',
        'Meghalaya Transport', 'Tripura RTC', 'Manipur Transport',
        'Mizoram Transport', 'Nagaland Transport', 'Arunachal Transport',
        'Sikkim Transport', 'Goa Kadamba', 'Puducherry Transport',
      ],
    ],
    // Tab 3: Top Bus Services
    [
      [
        'Volvo AC Sleeper', 'Volvo AC Seater', 'AC Sleeper Bus', 'AC Seater Bus',
        'Non-AC Sleeper', 'Non-AC Seater', 'Multi-Axle Volvo', 'Multi-Axle AC',
        'Bharat Benz AC', 'Scania AC Bus', 'Mercedes AC Bus', 'Electric AC Bus',
      ],
      [
        'SRS Travels', 'VRL Travels', 'Orange Tours', 'KPN Travels',
        'IntrCity SmartBus', 'Zingbus', 'YoloBus', 'Neeta Travels',
        'Sharma Transports', 'Rajdhani Express', 'Paulo Travels', 'Neugo Bus',
      ],
      [
        'RedBus', 'AbhiBus', 'Paytm Bus', 'MakeMyTrip Bus', 'Goibibo Bus',
        'Yatra Bus', 'EaseMyTrip Bus', 'ConfirmTkt Bus', 'ixigo Bus',
        'RailYatri Bus', 'Travelyaari', 'TicketGoose',
      ],
      [
        'Sleeper Coach', 'Semi-Sleeper Coach', 'Luxury Coach', 'Deluxe Coach',
        'Super Deluxe', 'Express Service', 'Superfast Service', 'Night Service',
        'Day Service', 'Interstate Service', 'Intrastate Service',
        'Chartered Service',
      ],
    ],
    // Tab 4: Quick Links
    [
      [
        'Home', 'Offer', 'About', 'Contact', "FAQ's", 'Terms', 'Privacy',
        'Responsible Disclosure', 'Operators', 'Routes', 'Careers',
        'Our Management',
      ],
      [
        'Investors Relations', 'Cancellation Policy', 'Agent Registration',
        'Bus Tickets', 'Bus Hire', 'Bus Rental', 'Tour Packages',
        'Hotel Booking', 'Train Booking', 'Flight Booking', 'Cab Booking',
        'Help Center',
      ],
      [
        'Blog', 'News', 'Media', 'Partners', 'Advertise With Us', 'Sitemap',
        'Feedback', 'Report Issue', 'Safety', 'Accessibility', 'Cookie Policy',
        'Refund Policy',
      ],
      [
        'Download App', 'iOS App', 'Android App', 'Windows App', 'Follow Us',
        'Newsletter', 'Community', 'Affiliates', 'API Documentation',
        'Developer Portal', 'Status Page', 'Contact Support',
      ],
    ],
  ]

  const importantLinks = [
    { label: 'Home', href: '/' },
    { label: 'Offers', href: '/offers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Help Center', href: '/help' },
    { label: 'FAQ', href: '/help' },
    { label: 'Terms', href: '/terms-of-service' },
    { label: 'Privacy', href: '/privacy-policy' },
    { label: 'Cancellation Policy', href: '/cancellation-policy' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Search Buses', href: '/search' },
    { label: 'My Bookings', href: '/bookings' },
    { label: 'Profile', href: '/profile' },
    { label: 'Login', href: '/login' },
  ]

  const socialLinks = [
    { href: '#', label: 'facebook', Icon: Facebook },
    { href: '#', label: 'x', Icon: X },
    { href: '#', label: 'instagram', Icon: Instagram },
    { href: '#', label: 'linkedin', Icon: Linkedin },
    { href: '#', label: 'youtube', Icon: Youtube },
  ]

  // Position the cursor under the active tab
  const updateCursor = useCallback((index: number) => {
    const el = tabRefs.current[index]
    if (el) {
      setCursorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      })
    }
  }, [])

  useEffect(() => {
    updateCursor(activeTab)
  }, [activeTab, updateCursor])

  // Reposition on window resize
  useEffect(() => {
    const handleResize = () => updateCursor(activeTab)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeTab, updateCursor])

  // Keyboard navigation (arrow keys)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const next = (index + 1) % tabs.length
      setActiveTab(next)
      tabRefs.current[next]?.focus()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = (index - 1 + tabs.length) % tabs.length
      setActiveTab(prev)
      tabRefs.current[prev]?.focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActiveTab(0)
      tabRefs.current[0]?.focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      const last = tabs.length - 1
      setActiveTab(last)
      tabRefs.current[last]?.focus()
    }
  }

  return (
    <footer className="bg-neutral-100 text-neutral-700">
      <div className="container-shell border-b border-neutral-200 py-8">
        {/* Logo */}
        <Logo height={80} />

        {/* Tab Navigation */}
        <nav
          className="relative mb-6 border-b border-neutral-200"
          aria-label="Footer navigation"
        >
          <ul
            className="flex gap-6 overflow-auto whitespace-nowrap text-sm"
            role="tablist"
          >
            {tabs.map((tab, i) => (
              <li key={tab} role="presentation">
                <button
                  type="button"
                  role="tab"
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  id={`footer-tab-${i}`}
                  aria-selected={i === activeTab}
                  aria-controls={`footer-panel-${i}`}
                  tabIndex={i === activeTab ? 0 : -1}
                  onClick={() => setActiveTab(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className={`flex items-center gap-1.5 pb-3 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded-sm ${
                    i === activeTab
                      ? 'font-semibold text-red-600'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <MousePointer2
                    size={12}
                    className={`transition-all duration-200 ${
                      i === activeTab
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-50'
                    }`}
                    aria-hidden="true"
                  />
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          {/* Animated sliding cursor indicator */}
          <span
            className="pointer-events-none absolute -bottom-px flex items-center transition-all duration-300 ease-out"
            style={{
              left: cursorStyle.left,
              width: cursorStyle.width,
              opacity: cursorStyle.opacity,
            }}
            aria-hidden="true"
          >
            <span className="h-0.5 w-full bg-red-500" />
          </span>
        </nav>

        {/* Tab Content Panels */}
        <div
          role="tabpanel"
          id={`footer-panel-${activeTab}`}
          aria-labelledby={`footer-tab-${activeTab}`}
          className="grid gap-6 text-sm md:grid-cols-4"
        >
          {tabContent[activeTab].map((col, ci) => (
            <div key={ci} className="space-y-3">
              {col.map((item) => (
                <Link
                  key={item}
                  href="/"
                  prefetch={false}
                  className="block hover:text-neutral-900"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container-shell py-8">
        <div className="border-b border-neutral-200 pb-6">
          <h4 className="mb-3 text-sm font-semibold">Important Links</h4>
          <div className="flex flex-wrap gap-3 text-xs text-neutral-600">
            {importantLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                prefetch={false}
                className="mr-4 hover:text-neutral-800"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-xs text-neutral-600 md:flex-row md:items-center md:justify-between">
          <div>© 2026 LoPrice.com. Low Prices Ticket booking System.</div>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-neutral-500 hover:text-neutral-800"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}