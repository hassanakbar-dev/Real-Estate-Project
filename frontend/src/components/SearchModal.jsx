import React, { useState } from 'react'
import { X, Search, MapPin, DollarSign, Bed, ArrowRight } from 'lucide-react'
import { RESIDENCE_SLIDES } from './HeroSlider'

export default function SearchModal({ isOpen, onClose, onSelectResidence }) {
  const [query, setQuery] = useState('')
  const [selectedZone, setSelectedZone] = useState('ALL')

  if (!isOpen) return null

  const filtered = RESIDENCE_SLIDES.filter((res) => {
    const matchesQuery = 
      res.specs.name.toLowerCase().includes(query.toLowerCase()) ||
      res.location.toLowerCase().includes(query.toLowerCase()) ||
      res.neighborhood.toLowerCase().includes(query.toLowerCase())
    
    const matchesZone = 
      selectedZone === 'ALL' || 
      res.location.toUpperCase().includes(selectedZone.toUpperCase())

    return matchesQuery && matchesZone
  })

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 bg-black/50 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-[#fbf9f5] border border-[#e2dacb] text-[#141517] shadow-[0_25px_60px_rgba(0,0,0,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Search Input */}
        <div className="p-6 border-b border-[#e5ded0] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#b89255]" />
          <input
            type="text"
            autoFocus
            placeholder="Search by neighborhood, residence name, or price..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base sm:text-lg text-[#141517] placeholder-[#a29e95] focus:outline-none font-light"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#7a7c85] hover:text-[#141517] rounded-full transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="px-6 py-3 bg-[#f5efe5] border-b border-[#e5ded0] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#7a7c85] uppercase tracking-widest text-[10px] mr-1 font-semibold">Locations:</span>
          {['ALL', 'ISLAMABAD', 'BANANI', 'GULSHAN', 'BARIDHARA', 'NORTH PARK'].map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                selectedZone === zone 
                  ? 'bg-[#b89255] text-white font-semibold shadow-sm' 
                  : 'bg-white text-[#5c5e66] hover:bg-[#ede5d8] border border-[#e2dacb]'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3.5">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#7a7c85] font-light">
              No residences found matching "{query}".
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectResidence(item)
                  onClose()
                }}
                className="group flex items-center gap-4 p-3.5 rounded-xl bg-white border border-[#e8e1d5] hover:border-[#b89255] hover:shadow-md transition-all cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.specs.name}
                  className="w-20 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#b89255] font-mono font-bold">{item.slideNum}</span>
                    <span className="text-xs text-[#7a7c85]">• {item.location}</span>
                  </div>
                  <h4 className="font-serif text-lg font-light text-[#141517] group-hover:text-[#b89255] transition-colors truncate">
                    {item.specs.name}
                  </h4>
                  <div className="text-xs text-[#5c5e66] flex items-center gap-3 mt-1">
                    <span>{item.specs.beds}</span>
                    <span>•</span>
                    <span>{item.specs.area}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-lg text-[#141517] font-light block">
                    {item.price}
                  </span>
                  <span className="text-[11px] text-[#b89255] group-hover:underline flex items-center justify-end gap-1 mt-1 font-medium">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
