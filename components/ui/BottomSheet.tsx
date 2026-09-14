'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children: React.ReactNode
  wide?: boolean
  showHeader?: boolean
}

export default function BottomSheet({ open, onClose, title, description, children, wide = false, showHeader = true }: BottomSheetProps) {
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
      <button aria-label="Close seat selection" onClick={onClose} className="absolute inset-0 h-full w-full bg-black/50 backdrop-blur-[2px]" />
      <div className={cn('absolute inset-x-0 bottom-0 max-h-[96dvh] overflow-hidden rounded-t-[22px] bg-[#f5f6fa] shadow-2xl', 'animate-[sheet-in_220ms_ease-out]')}>
        <div className={cn('mx-auto w-full', !wide && 'max-w-6xl')}>
          {showHeader && <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3.5 sm:px-7">
            <div className="min-w-0">
              <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-slate-200 sm:hidden" />
              <h2 id="sheet-title" className="truncate text-base font-black sm:text-lg">{title}</h2>
              {description && <p className="truncate text-xs text-slate-500 sm:text-sm">{description}</p>}
            </div>
            <button onClick={onClose} className="ml-4 shrink-0 rounded-full border border-slate-200 bg-white p-2 hover:bg-slate-50" aria-label="Close"><X size={19} /></button>
          </div>}
          <div className="max-h-[calc(96dvh-72px)] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}
