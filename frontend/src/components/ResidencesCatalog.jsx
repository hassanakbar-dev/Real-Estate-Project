import React from 'react'
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin, Sparkles } from 'lucide-react'
import { HERO_SLIDES } from './HeroSlider'

export default function ResidencesCatalog({ onOpenBooking, onSelectResidence }) {
  return (
    <section id="collection" className="py-16 sm:py-28 px-4 sm:px-10 lg:px-14 bg-[#fbf9f5] text-[#141517] border-t border-[#ede7dd]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b89255]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#b89255] font-semibold">
                The 2026 Private Portfolio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#141517]">
              Curated Architectural Residences
            </h2>
          </div>
          <p className="text-[#5c5e66] text-sm max-w-md font-light leading-relaxed">
            Each property in our Islamabad collection is selected for rare architectural integrity, bespoke craftsmanship, and effortless privacy.
          </p>
        </div>

        {/* 4 Residences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {HERO_SLIDES.map((item) => (
            <article 
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#e8e2d5] hover:border-[#b89255]/70 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_rgba(184,146,85,0.16)] flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#eee7dc]">
                <img 
                  src={item.image} 
                  alt={item.specs.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 glass-pill-dark px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs text-white/95">
                  <MapPin className="w-3.5 h-3.5 text-[#b89255]" />
                  <span>{item.location}</span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 text-2xl sm:text-3xl font-serif text-white font-light tracking-wide drop-shadow-md">
                  {item.price}
                </div>

                {/* Slide Number Badge */}
                <div className="absolute top-4 right-4 glass-pill-dark px-3 py-1 rounded-md text-[11px] font-mono text-[#d6be90]">
                  {item.slideNum}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141517] group-hover:text-[#b89255] transition-colors">
                      {item.specs.name}
                    </h3>
                    <button
                      onClick={() => onSelectResidence && onSelectResidence(item)}
                      className="p-2.5 rounded-full border border-[#e2dacb] text-[#141517] group-hover:border-[#b89255] group-hover:bg-[#b89255] group-hover:text-white transition-all cursor-pointer"
                      aria-label={`View ${item.specs.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm text-[#5c5e66] mb-6 font-light line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                <div>
                  {/* Specs Bar */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-[#ede6da] text-xs sm:text-sm text-[#33353c]">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-[#b89255]" />
                      <span>{item.specs.beds}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-[#b89255]" />
                      <span>{item.specs.baths}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-[#b89255]" />
                      <span>{item.specs.area}</span>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-[#82848c] tracking-wider">
                      {item.neighborhood}
                    </span>
                    <button
                      onClick={() => onOpenBooking(item.specs.name)}
                      className="text-xs uppercase tracking-[0.2em] font-semibold text-[#b89255] hover:text-[#141517] transition-colors cursor-pointer py-1"
                    >
                      Book Private Viewing →
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
