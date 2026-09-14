'use client'

import { Copy, Check } from 'lucide-react'
import { useState, useCallback } from 'react'

interface CopyCodeButtonProps {
  code: string
  className?: string
}

export default function CopyCodeButton({ code, className = '' }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard may be blocked; fail silently
    }
  }, [code])

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `${code} copied` : `Copy code ${code}`}
      className={`group inline-flex items-center gap-2 rounded-lg border border-dashed px-3 py-2 font-mono text-xs font-bold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#bf2629] focus-visible:ring-offset-2 ${
        copied
          ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
          : 'border-neutral-300 bg-neutral-50 text-neutral-800 hover:border-[#bf2629]/40 hover:bg-red-50/40 hover:text-[#bf2629]'
      } ${className}`}
    >
      {copied ? (
        <>
          <Check size={14} strokeWidth={2.5} />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy size={14} className="transition-transform duration-200 group-hover:scale-110" />
          <span>{code}</span>
        </>
      )}
    </button>
  )
}