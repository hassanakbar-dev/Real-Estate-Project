import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function TrustSection({ onOpenBooking }) {
  const marqueeItems = [
    "SMART PROPERTY DECISION",
    "LUXE GROUP ISLAMABAD",
    "REAL ESTATE INVESTMENTS",
    "ARCHITECTURAL EXCELLENCE",
    "SMART PROPERTY DECISION",
    "BUILDING TRUST CREATING VALUE",
    "ISLAMABAD REAL ESTATE"
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-20 lg:pb-28 border-b border-[#ede7dd]">
      
      {/* Top Giant Stroke Marquee Ticker */}
      <div 
        className="relative w-full overflow-hidden py-2.5 sm:py-5 mb-8 sm:mb-12 select-none border-b border-[#f3eee7]"
        aria-label="Running Marquee Banner"
      >
        <div className="flex animate-marquee items-center whitespace-nowrap">
          {/* Track 1 */}
          <div className="flex items-center gap-6 sm:gap-16 shrink-0">
            {marqueeItems.map((text, idx) => (
              <div key={`m1-${idx}`} className="flex items-center gap-6 sm:gap-16">
                <span className="font-sans font-black tracking-tight uppercase text-3xl sm:text-6xl lg:text-8xl xl:text-[100px] leading-none stroke-text-rose hover:opacity-80 transition-opacity">
                  {text}
                </span>
                <span className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-[#c41e3a]/30 border border-[#c41e3a] inline-block shrink-0" />
              </div>
            ))}
          </div>

          {/* Track 2 for seamless loop */}
          <div className="flex items-center gap-6 sm:gap-16 shrink-0 ml-6 sm:ml-16" aria-hidden="true">
            {marqueeItems.map((text, idx) => (
              <div key={`m2-${idx}`} className="flex items-center gap-6 sm:gap-16">
                <span className="font-sans font-black tracking-tight uppercase text-3xl sm:text-6xl lg:text-8xl xl:text-[100px] leading-none stroke-text-rose hover:opacity-80 transition-opacity">
                  {text}
                </span>
                <span className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-[#c41e3a]/30 border border-[#c41e3a] inline-block shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main 2-Column Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-6">
            
            {/* Top Red Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
              <span className="w-6 sm:w-8 h-[2px] bg-[#c41e3a]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] font-extrabold text-[#c41e3a]">
                BUILDING TRUST. CREATING VALUE.
              </span>
            </div>

            {/* Main 3-Line Headline */}
            <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-[56px] leading-[1.12] sm:leading-[1.08] tracking-tight text-[#141517] mb-4 sm:mb-6">
              <span className="block text-[#141517]">Beyond Property,</span>
              <span className="block text-[#c41e3a]">We Build Real Estate</span>
              <span className="block text-[#141517]">in Islamabad.</span>
            </h2>

            {/* Red Underline Dash */}
            <div className="w-12 sm:w-14 h-1 sm:h-1.5 bg-[#c41e3a] rounded-full mb-4 sm:mb-6" />

            {/* Description */}
            <p className="text-[#4b5563] text-sm sm:text-base font-normal leading-relaxed max-w-xl mb-6 sm:mb-8">
              Beyond buildings, we create opportunities, develop lasting relationships, and help shape the future of real estate in Islamabad.
            </p>

            {/* Leadership Box */}
            <div className="flex items-center gap-3.5 border-l-2 border-[#c41e3a] pl-3.5 sm:pl-4 py-1 mb-6 sm:mb-10">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=face&w=200&h=200&q=80" 
                alt="Asif Ahmed - Founder & Leadership" 
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover object-top ring-2 ring-[#c41e3a]/30 shadow-sm shrink-0"
              />
              <div className="min-w-0">
                <h4 className="font-sans text-xs sm:text-sm font-extrabold tracking-wider text-[#141517] uppercase truncate">
                  ASIF AHMED
                </h4>
                <p className="text-[11px] sm:text-xs text-[#6b7280] font-medium mt-0.5 leading-snug">
                  Founder & Leadership • Luxe Estates Group Islamabad
                </p>
              </div>
            </div>

            {/* Red CTA Button */}
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#c41e3a] hover:bg-[#a6172f] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group text-center"
              >
                <span>CONTACT US</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

          {/* Right Column: 2x2 Metric Card Grid */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#e5e7eb] shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-y divide-[#e5e7eb]">
                
                {/* 1: 70+ Delivered Projects */}
                <div className="relative group overflow-hidden p-4 sm:p-8 lg:p-10 flex flex-col justify-center transition-all duration-300 hover:bg-[#fffafa] active:bg-[#fff5f5] cursor-default">
                  {/* Top Red Hover Indicator Line */}
                  <span className="absolute top-0 left-0 right-0 h-[3px] sm:h-[3.5px] bg-[#c41e3a] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                  
                  <div className="text-2xl sm:text-5xl lg:text-6xl font-black font-sans text-[#141517] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5">
                    70<span className="text-[#c41e3a]">+</span>
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-[#141517] mt-1.5 sm:mt-3 leading-snug">
                    Delivered Projects
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#6b7280] font-normal mt-0.5 sm:mt-1 leading-relaxed">
                    Turning real estate visions into reality
                  </p>
                </div>

                {/* 2: 10M+ Delivered SqFt */}
                <div className="relative group overflow-hidden p-4 sm:p-8 lg:p-10 flex flex-col justify-center transition-all duration-300 hover:bg-[#fffafa] active:bg-[#fff5f5] cursor-default">
                  {/* Top Red Hover Indicator Line */}
                  <span className="absolute top-0 left-0 right-0 h-[3px] sm:h-[3.5px] bg-[#c41e3a] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                  
                  <div className="text-2xl sm:text-5xl lg:text-6xl font-black font-sans text-[#141517] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5">
                    10M<span className="text-[#c41e3a]">+</span>
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-[#141517] mt-1.5 sm:mt-3 leading-snug">
                    Delivered SqFt
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#6b7280] font-normal mt-0.5 sm:mt-1 leading-relaxed">
                    Creating spaces for living and business.
                  </p>
                </div>

                {/* 3: 15,000+ Satisfied Clients (Highlighted in Red) */}
                <div className="relative group overflow-hidden p-4 sm:p-8 lg:p-10 flex flex-col justify-center transition-all duration-300 hover:bg-[#fffafa] active:bg-[#fff5f5] cursor-default">
                  {/* Top Red Hover Indicator Line */}
                  <span className="absolute top-0 left-0 right-0 h-[3px] sm:h-[3.5px] bg-[#c41e3a] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                  
                  <div className="text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-sans text-[#c41e3a] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5 whitespace-nowrap">
                    15,000<span className="text-[#c41e3a]">+</span>
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-[#141517] mt-1.5 sm:mt-3 leading-snug">
                    Satisfied Clients
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#6b7280] font-normal mt-0.5 sm:mt-1 leading-relaxed">
                    Relationships built on trust and confidence.
                  </p>
                </div>

                {/* 4: 30+ Years of Experience */}
                <div className="relative group overflow-hidden p-4 sm:p-8 lg:p-10 flex flex-col justify-center transition-all duration-300 hover:bg-[#fffafa] active:bg-[#fff5f5] cursor-default">
                  {/* Top Red Hover Indicator Line */}
                  <span className="absolute top-0 left-0 right-0 h-[3px] sm:h-[3.5px] bg-[#c41e3a] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                  
                  <div className="text-2xl sm:text-5xl lg:text-6xl font-black font-sans text-[#141517] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5">
                    30<span className="text-[#c41e3a]">+</span>
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-[#141517] mt-1.5 sm:mt-3 leading-snug">
                    Years of Experience
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#6b7280] font-normal mt-0.5 sm:mt-1 leading-relaxed">
                    Experience shaping Islamabad's real estate.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
