import React from 'react'
import { X, Bed, Bath, Maximize2, MapPin, Check, PhoneCall, Calendar } from 'lucide-react'

export default function ResidenceModal({ residence, isOpen, onClose, onBookViewing }) {
  if (!isOpen || !residence) return null

  const amenities = [
    'Private Heated Infinity Pool',
    'Custom Boffi Kitchen with Miele Appliances',
    'Biometric Smart Access & 24/7 Concierge',
    'Floor-to-Ceiling Acoustically Insulated Glass',
    'Italian Calacatta Gold Marble Bathrooms',
    'Private 3-Vehicle Dedicated Garage',
    'Integrated Bang & Olufsen Architectural Sound',
    'Sub-Zero Temperature Controlled Wine Storage'
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#fbf9f5] border border-[#ded5c5] text-[#141517] shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/50 text-white hover:text-[#b89255] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#e2dacb]">
          <img 
            src={residence.image} 
            alt={residence.specs.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:left-10 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#d6be90] text-xs font-mono font-bold">{residence.slideNum}</span>
                <span className="text-white/80 text-xs flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#b89255]" /> {residence.location}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light drop-shadow">
                {residence.specs.name}
              </h2>
            </div>
            <div className="font-serif text-3xl sm:text-4xl text-[#d6be90] font-light drop-shadow">
              {residence.price}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Key Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white border border-[#e4ded2] text-center shadow-sm">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#7a7c85] block mb-1 font-semibold">Bedrooms</span>
              <span className="text-lg font-serif text-[#141517] font-semibold">{residence.specs.beds}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#7a7c85] block mb-1 font-semibold">Bathrooms</span>
              <span className="text-lg font-serif text-[#141517] font-semibold">{residence.specs.baths}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#7a7c85] block mb-1 font-semibold">Internal Area</span>
              <span className="text-lg font-serif text-[#141517] font-semibold">{residence.specs.area}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#7a7c85] block mb-1 font-semibold">Status</span>
              <span className="text-lg font-serif text-[#b89255] font-semibold">Ready for Handover</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#b89255] font-bold mb-2">
              Architectural Overview
            </h4>
            <p className="text-[#5c5e66] text-sm sm:text-base font-light leading-relaxed">
              Designed as a quiet sanctuary amidst Islamabad's most prestigious neighborhood. Floor-to-ceiling panoramic glass panels flood the grand living area with soft natural light, while custom acoustic engineering ensures complete interior serenity. Finished with bookmatched Italian marble, handcrafted white oak joinery, and fully automated Lutron lighting scenes.
            </p>
          </div>

          {/* Amenities Grid */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#b89255] font-bold mb-4">
              Curated Residences Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2e3037]">
              {amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-[#e8e2d5]">
                  <div className="w-4 h-4 rounded-full bg-[#b89255]/15 flex items-center justify-center text-[#b89255] shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-6 border-t border-[#ded5c5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#7a7c85]">
              Exclusive representation by Luxe Estates Private Office.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose()
                  onBookViewing(residence.specs.name)
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#b89255] hover:bg-[#9e7a40] text-white font-semibold text-xs uppercase tracking-[0.2em] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Schedule Private Tour
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
