'use client'

import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import type { Bus, BusPoint } from '@/lib/types/bus'

type PolicyTab = 'highlights' | 'cancellation' | 'reschedule' | 'boarding' | 'drop'

const TABS: { key: PolicyTab; label: string }[] = [
  { key: 'highlights', label: 'Highlights' },
  { key: 'cancellation', label: 'Cancellation policy' },
  { key: 'reschedule', label: 'Reschedule policy' },
  { key: 'boarding', label: 'Boarding point' },
  { key: 'drop', label: 'Drop' },
]

function PointList({ points, emptyLabel }: { points: BusPoint[]; emptyLabel: string }) {
  if (points.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600">
        {emptyLabel}
      </div>
    )
  }

  return (
    <div className="mt-3 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {points.map((point) => (
        <div key={point.id} className="flex items-center justify-between gap-3 px-4 py-3 text-xs">
          <div>
            <div className="font-black text-slate-800">{point.name}</div>
            <div className="mt-0.5 font-semibold text-slate-500">{point.address}</div>
          </div>
          <div className="font-black text-slate-700">{point.time}</div>
        </div>
      ))}
    </div>
  )
}

export default function PolicyTabs({ bus }: { bus: Bus }) {
  const [activeTab, setActiveTab] = useState<PolicyTab>('highlights')

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-xl px-3 py-2 text-xs font-bold transition ${
              activeTab === tab.key
                ? 'border border-[#bf2629] bg-[#fff1f1] text-[#bf2629]'
                : 'border border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        {activeTab === 'highlights' && (
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-slate-800">Bus safety</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                <ShieldCheck size={14} /> Enhanced
              </span>
            </div>
            <div className="mt-4 grid gap-2 text-xs font-semibold text-slate-600">
              {bus.amenities.length > 0 ? (
                bus.amenities.map((amenity) => (
                  <div key={amenity} className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                    {amenity}
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                  No amenity details available for this bus.
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'cancellation' && (
          <div>
            <div className="text-sm font-black text-slate-800">Cancellation policy</div>
            {bus.cancellation_policy.allowed ? (
              <div className="mt-3 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                <div className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3 text-xs font-black text-slate-600">
                  <span>Time before departure</span>
                  <span>Refund</span>
                </div>
                {bus.cancellation_policy.rules.map((rule) => (
                  <div
                    key={rule.before_hours}
                    className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3 text-xs font-semibold text-slate-600"
                  >
                    <span>{rule.before_hours > 0 ? `More than ${rule.before_hours}h before departure` : 'Within the departure window'}</span>
                    <span>{rule.refund_percent}% Refund</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600">
                This ticket is non-cancellable.
              </div>
            )}
          </div>
        )}

        {activeTab === 'reschedule' && (
          <div>
            <div className="text-sm font-black text-slate-800">Reschedule policy</div>
            <div className="mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600">
              You can reschedule with the same operator before 24 hours of departure. Reschedule charges depend on the fare difference and operator rules.
            </div>
          </div>
        )}

        {activeTab === 'boarding' && (
          <div>
            <div className="text-sm font-black text-slate-800">Boarding points</div>
            <PointList points={bus.boarding_points} emptyLabel={`Pickup at ${bus.boarding}. Opens 30 minutes before departure.`} />
          </div>
        )}

        {activeTab === 'drop' && (
          <div>
            <div className="text-sm font-black text-slate-800">Drop points</div>
            <PointList points={bus.dropping_points} emptyLabel={`Drop at ${bus.dropping}. Assistance coordinated near the boarding counter.`} />
          </div>
        )}
      </div>
    </div>
  )
}
