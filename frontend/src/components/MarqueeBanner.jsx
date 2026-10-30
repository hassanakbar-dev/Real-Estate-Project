import React from 'react'

export default function MarqueeBanner() {
  const items = [
    "SMART PROPERTY DECISION",
    "ARCHITECTURAL EXCELLENCE",
    "SMART PROPERTY DECISION",
    "DISCREET PRIVATE ADVISORY",
    "LUXE ESTATES & RESIDENCES",
    "THE ART OF ARRIVING HOME",
    "SOVEREIGN ASSET REGISTRY"
  ]

  return (
    <div 
      className="relative w-full bg-white overflow-hidden py-5 sm:py-7 lg:py-8 border-b border-[#ede7dd] select-none shadow-[0_4px_25px_rgba(0,0,0,0.02)]"
      aria-label="Smart Property Decision Running Marquee"
    >
      {/* Subtle edge fades for ultra-smooth entry and exit */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling track (rendered twice for seamless continuous loop) */}
      <div className="flex animate-marquee items-center whitespace-nowrap">
        
        {/* Track 1 */}
        <div className="flex items-center gap-8 sm:gap-14 shrink-0">
          {items.map((text, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-8 sm:gap-14">
              <span className="font-sans font-black tracking-tight uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[96px] leading-none stroke-text-rose hover:stroke-text-gold transition-all duration-300">
                {text}
              </span>
              <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#e46e82]/40 border border-[#e46e82] inline-block shrink-0" />
            </div>
          ))}
        </div>

        {/* Track 2 (Exact duplicate for seamless looping without gaps) */}
        <div className="flex items-center gap-8 sm:gap-14 shrink-0 ml-8 sm:ml-14" aria-hidden="true">
          {items.map((text, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-8 sm:gap-14">
              <span className="font-sans font-black tracking-tight uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[96px] leading-none stroke-text-rose hover:stroke-text-gold transition-all duration-300">
                {text}
              </span>
              <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#e46e82]/40 border border-[#e46e82] inline-block shrink-0" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
