'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const groups = {
  Booking: [
    [
      'How do I book a bus ticket?',
      'Enter your departure city, destination and journey date, compare buses, choose a seat and complete payment.',
    ],
    [
      'Can I book without creating an account?',
      'Yes. You can continue as a guest and use your mobile number and email for ticket delivery.',
    ],
    [
      'How do I select my seat?',
      'Open a bus card, choose View Seats and select any available seat on the seat map.',
    ],
    [
      'Can I book multiple seats in one transaction?',
      'Yes. You can select up to six seats in a single booking. Each passenger\'s name, age, and gender must be entered separately for the ticket.',
    ],
    [
      'Can I book a ticket for someone else?',
      'Yes. Simply enter the passenger\'s details during checkout. The ticket and boarding SMS will be sent to the contact number you provide.',
    ],
    [
      'How far in advance can I book a bus ticket?',
      'Most operators open bookings 30 to 90 days before the journey date. Availability for far-future dates depends on the operator\'s schedule release policy.',
    ],
    [
      'Do I need to carry a printed ticket?',
      'No. A valid m-ticket or QR code on your phone along with a government-issued photo ID is sufficient for boarding.',
    ],
    [
      'Can I change the boarding point after booking?',
      'Boarding point changes depend on the operator. Some allow it before departure through support, while others treat it as a cancellation and rebooking.',
    ],
  ],
  Payment: [
    [
      'Which payment methods are supported?',
      'UPI, cards, net banking and selected wallets can be supported through the payment gateway integration.',
    ],
    [
      'What happens if my payment fails?',
      'A failed payment will not create a confirmed booking. If money is debited, the gateway refund process can be tracked.',
    ],
    [
      'Is it safe to use my card on this site?',
      'Payments are processed through PCI-DSS compliant gateways. Card details are never stored on our servers and are tokenized as per RBI guidelines.',
    ],
    [
      'Can I pay in instalments or with EMI?',
      'EMI options are available on select credit cards for bookings above a minimum amount, subject to the issuing bank\'s terms.',
    ],
    [
      'Will I get a payment receipt or invoice?',
      'Yes. A GST-compliant invoice is emailed to you immediately after a successful booking and is also available in your booking history.',
    ],
    [
      'Why was I charged more than the displayed fare?',
      'Additional charges may include convenience fees, GST, or seat-type premiums. The final breakup is always shown before you confirm payment.',
    ],
  ],
  Cancellation: [
    [
      'Can I cancel my ticket?',
      'Cancellation eligibility and charges depend on the bus operator policy and departure time.',
    ],
    [
      'When will I receive my refund?',
      'Refund timelines vary by payment method and operator policy.',
    ],
    [
      'How do I cancel my booking?',
      'Go to My Bookings, open the ticket, and tap Cancel. The refund amount and deduction will be shown before you confirm.',
    ],
    [
      'What is the cancellation fee?',
      'Cancellation fees are tiered by time before departure. Typically 10% above 24 hours, 25% between 12–24 hours, and up to 100% within a few hours of departure.',
    ],
    [
      'Can I cancel only one seat from a multi-seat booking?',
      'Partial cancellation is supported by most operators. The remaining seats stay confirmed, and the refund is processed for the cancelled seat only.',
    ],
    [
      'What if the bus operator cancels the trip?',
      'If the operator cancels, you receive a full refund with no deduction. The amount is credited back to your original payment method.',
    ],
    [
      'Where can I track my refund status?',
      'Refund status is visible under My Bookings. You can also track it using the refund reference number shared over email and SMS.',
    ],
  ],
  Travel: [
    [
      'How early should I reach the boarding point?',
      'Reaching the boarding point 20–30 minutes early is recommended for a smoother boarding experience.',
    ],
    [
      'How do I find my boarding point?',
      'Your booking confirmation can show the boarding address, landmark and map link.',
    ],
    [
      'What documents do I need while boarding?',
      'Carry a government-issued photo ID such as Aadhaar, PAN, driving licence, or passport, along with your m-ticket or printed ticket.',
    ],
    [
      'Can I carry extra luggage?',
      'Most operators allow one suitcase and one handbag per passenger. Extra luggage may be charged by the operator at their discretion.',
    ],
    [
      'Are pets allowed on the bus?',
      'Pets are generally not permitted except for certified service animals. Check the operator\'s policy before booking.',
    ],
    [
      'What if I miss my bus?',
      'Missed buses are treated as no-shows and are typically non-refundable. Contact support immediately to explore rescheduling options.',
    ],
    [
      'Is food or water provided on board?',
      'Amenities vary by operator and bus type. AC sleeper and Volvo services often provide a water bottle and may include a meal on long routes.',
    ],
    [
      'Are charging points and Wi-Fi available?',
      'Most modern AC coaches offer charging points. Wi-Fi availability depends on the operator and route and is not guaranteed.',
    ],
  ],
  Offers: [
    [
      'How do I apply a promo code?',
      'Enter the code in the Offers field on the payment screen and tap Apply. The discount reflects instantly in the fare breakup.',
    ],
    [
      'Why is my promo code not working?',
      'Codes may have expired, be route-specific, require a minimum fare, or be limited to first-time users. Check the offer terms for eligibility.',
    ],
    [
      'Can I use multiple offers on one booking?',
      'Generally only one promo code can be applied per booking. Bank offers and cashback may stack depending on the campaign terms.',
    ],
    [
      'How do I earn or redeem loyalty points?',
      'Loyalty points are credited after each completed journey and can be redeemed against future bookings from your account wallet.',
    ],
    [
      'Do you offer student or senior citizen discounts?',
      'Some operators provide concessions for students and senior citizens. Availability is shown on the bus card when applicable.',
    ],
  ],
  Account: [
    [
      'How do I create an account?',
      'Tap Sign Up, enter your mobile number, verify the OTP, and set your name and email to complete registration.',
    ],
    [
      'I forgot my password. What should I do?',
      'Use the Forgot Password link on the login screen. A reset link or OTP will be sent to your registered mobile number or email.',
    ],
    [
      'How do I update my mobile number or email?',
      'Go to Profile → Personal Details and update your contact information. You may need to verify the new number or email with an OTP.',
    ],
    [
      'How do I delete my account?',
      'Open Profile → Privacy Settings and choose Delete Account. Any pending bookings or refunds must be settled before deletion.',
    ],
    [
      'Can I merge two accounts?',
      'Accounts cannot be merged. However, you can update the contact details on one account and use it going forward.',
    ],
  ],
}

export default function FAQ() {
  const [tab, setTab] = useState<keyof typeof groups>('Booking')
  const [open, setOpen] = useState(0)

  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6"
    >
      {/* Section Heading */}
      <header className="mb-8 text-center">
        <h2
          id="faq-heading"
          className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl"
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm text-neutral-500">
          Everything you need to know about booking, payments, and travel.
        </p>
      </header>

      {/* Tab Pills */}
      <div
        role="tablist"
        aria-label="FAQ categories"
        className="mb-8 flex flex-wrap justify-center gap-2.5"
      >
        {Object.keys(groups).map((k) => {
          const isActive = tab === k
          return (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`faq-panel-${k}`}
              id={`faq-tab-${k}`}
              onClick={() => {
                setTab(k as keyof typeof groups)
                setOpen(0)
              }}
              className={`group relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#bf2629] focus-visible:ring-offset-2 ${
                isActive
                  ? 'scale-[1.02] bg-[#bf2629] text-white shadow-lg shadow-red-900/20'
                  : 'bg-white text-neutral-600 ring-1 ring-neutral-200 hover:text-neutral-900 hover:shadow-sm hover:ring-neutral-300'
              }`}
            >
              <span className="relative z-10">{k}</span>
              {isActive && (
                <span className="absolute inset-0 -z-0 animate-pulse bg-gradient-to-r from-red-500/0 via-white/20 to-red-500/0" />
              )}
            </button>
          )
        })}
      </div>

      {/* Accordion Card */}
      <div
        role="tabpanel"
        id={`faq-panel-${tab}`}
        aria-labelledby={`faq-tab-${tab}`}
        className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm ring-1 ring-black/[0.02]"
      >
        {groups[tab].map(([q, a], i) => {
          const isOpen = open === i
          const index = String(i + 1).padStart(2, '0')

          return (
            <div
              key={q}
              className={`group relative transition-colors duration-200 ${
                i !== 0 ? 'border-t border-neutral-100' : ''
              } ${
                isOpen
                  ? 'bg-gradient-to-b from-red-50/40 to-transparent'
                  : 'hover:bg-neutral-50/60'
              }`}
            >
              {/* Left accent bar */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 h-full w-0.5 origin-top bg-[#bf2629] transition-all duration-300 ${
                  isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}
              />

              {/* Question toggle */}
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${tab}-${i}`}
                id={`faq-question-${tab}-${i}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left outline-none focus-visible:bg-neutral-50/80"
              >
                <span className="flex items-start gap-3.5">
                  <span
                    className={`mt-0.5 select-none text-xs font-bold tabular-nums transition-colors duration-200 ${
                      isOpen ? 'text-[#bf2629]' : 'text-neutral-400'
                    }`}
                    aria-hidden="true"
                  >
                    {index}
                  </span>
                  <span
                    className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${
                      isOpen
                        ? 'text-[#bf2629]'
                        : 'text-neutral-800 group-hover:text-neutral-900'
                    }`}
                  >
                    {q}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? 'rotate-180 bg-[#bf2629] text-white shadow-md shadow-red-900/20'
                      : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200 group-hover:text-neutral-700'
                  }`}
                >
                  <ChevronDown size={16} strokeWidth={2.5} />
                </span>
              </button>

              {/* Animated answer panel (CSS grid height animation) */}
              <div
                id={`faq-answer-${tab}-${i}`}
                role="region"
                aria-labelledby={`faq-question-${tab}-${i}`}
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 pl-[3.375rem] text-sm leading-relaxed text-neutral-600">
                    {a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom helper */}
      <p className="mt-6 text-center text-xs text-neutral-500">
        Still have questions?{' '}
        <a
          href="/contact"
          className="font-semibold text-[#bf2629] underline-offset-4 transition hover:underline"
        >
          Contact our support team
        </a>
      </p>
    </section>
  )
}