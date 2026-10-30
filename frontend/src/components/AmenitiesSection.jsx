import React from 'react'
import { ShieldCheck, Sparkles, Building2, Compass, Layers, Leaf } from 'lucide-react'

export default function AmenitiesSection({ onOpenBooking }) {
  const pillars = [
    {
      icon: Building2,
      title: "Rare Architectural Integrity",
      desc: "Every residence features double-height living volumes, cantilevered terraces, and structural thermal glass engineered to maximize natural daylight while eliminating urban glare."
    },
    {
      icon: ShieldCheck,
      title: "Discreet Diplomatic Security",
      desc: "Comprehensive perimeter protection, biometric elevator access, and 24/7 dedicated private security personnel trained to international diplomatic and UN standards."
    },
    {
      icon: Sparkles,
      title: "Handcrafted Luxury Materials",
      desc: "Bookmatched Calacatta marble, brushed European bronze fixtures, and sustainably harvested French white oak millwork tailored to absolute perfection."
    },
    {
      icon: Compass,
      title: "Prime Enclaves of the Capital",
      desc: "Carefully positioned within quiet avenues of Banani Lake, Gulshan-2 Diplomatic Avenue, and Sector F-7, minutes from premier foreign embassies."
    },
    {
      icon: Layers,
      title: "Acoustic Silence Engineering",
      desc: "Ultrasonic transmission testing and decoupled concrete floor slabs ensuring interior ambient noise remains below 28dB—as quiet as a secluded alpine monastery."
    },
    {
      icon: Leaf,
      title: "Biophilic Microclimate & Air",
      desc: "High-efficiency ERV ventilation filtering PM2.5 particulates, integrated internal courtyards for passive cooling, and geothermal heat pumps for zero-grid draw."
    }
  ]

  return (
    <section id="amenities" className="py-16 sm:py-32 px-4 sm:px-10 lg:px-14 bg-[#f4efe6] text-[#141517] relative overflow-hidden border-t border-[#e8e1d3]">

      {/* Subtle warm champagne background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#b89255]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b89255]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#b89255] font-semibold">
              The Luxe Standard
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#141517] leading-tight">
            Designed for those who understand that simplicity is the ultimate sophistication.
          </h2>
          <p className="text-[#5c5e66] text-xs sm:text-base font-light mt-3 sm:mt-4 leading-relaxed">
            Our multi-disciplinary architectural standards guarantee structural longevity, acoustical isolation, and sovereign comfort for generations.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e5ded1] hover:border-[#b89255]/70 transition-all duration-300 group hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(184,146,85,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] border border-[#e4dcd0] flex items-center justify-center text-[#b89255] group-hover:scale-110 group-hover:bg-[#b89255]/10 transition-all mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-[#141517] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#5c5e66] text-xs sm:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Private acquisition banner */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-12 rounded-3xl bg-[#141517] text-white border border-[#b89255]/30 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-4xl font-light text-white mb-2">
              Begin Your Private Acquisition Journey
            </h3>
            <p className="text-white/75 text-xs sm:text-sm font-light leading-relaxed">
              Our private client advisors offer confidential consultations and VIP site access at your convenience.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking && onOpenBooking('Amenities Standard Inquiries')}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#b89255] hover:bg-[#d6be90] text-black font-semibold text-xs uppercase tracking-[0.22em] rounded-full transition-all shadow-xl shadow-[#b89255]/20 cursor-pointer whitespace-nowrap text-center"
          >
            Inquire Confidential Portfolio
          </button>
        </div>

      </div>
    </section>
  )
}
