import React, { useState, useEffect, useRef } from 'react'
import { ChevronDown, ArrowLeft, ArrowRight, Search, Play, Pause, Compass, MapPin } from 'lucide-react'

import { RESIDENCE_SLIDES } from '../data/residencesData'

// Curate the 4 premier residences for the Hero Section Gallery
export const HERO_SLIDES = RESIDENCE_SLIDES.slice(0, 4).map((slide, index) => ({
  ...slide,
  slideNum: `0${index + 1} / 04`
}))

export { RESIDENCE_SLIDES }

export default function HeroSlider({ onOpenBooking, onOpenSearch, onSelectResidence }) {
  // Start on slide 1 (02 / 04 BANANI • ISLAMABAD)
  const [current, setCurrent] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const timerRef = useRef(null)

  const slideDuration = 6000 // 6 seconds per slide

  // Next / Prev slide handlers (cycles through exactly 4 slides)
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const goToSlide = (index) => {
    setCurrent(index)
  }

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying) return
    timerRef.current = setInterval(() => {
      nextSlide()
    }, slideDuration)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, current])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Touch swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    if (distance > minSwipeDistance) nextSlide()
    if (distance < -minSwipeDistance) prevSlide()
    setTouchStart(0)
    setTouchEnd(0)
  }

  const activeSlide = HERO_SLIDES[current]

  const scrollToResidences = () => {
    const element = document.getElementById('collection')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative w-full h-[100dvh] min-h-[640px] max-h-[1100px] overflow-hidden select-none bg-[#fbf9f5]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Luxury Estates Slideshow"
    >
      {/* 4 Background Images with Smooth Crossfade & Cinematic Ken Burns */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === current
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div
              className={`w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundColor: '#f5efe6',
              }}
            />
          </div>
        )
      })}

      {/* Radiant Luxury Natural Light Overlays for Elegance & Readability */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/65 via-transparent to-black/25" />

      {/* Main Content Area */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 flex flex-col justify-end pb-24 sm:pb-20 lg:pb-24">
        
        {/* Left Headline & Content Block - Perfectly Aligned with Logo Wordmark */}
        <div className="max-w-2xl text-left">
          
          {/* Eyebrow / Tag */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4 animate-fadeIn">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a876] inline-block shadow-[0_0_8px_#c8a876]" />
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.22em] sm:tracking-[0.24em] font-medium text-white/90">
              {activeSlide.tag}
            </span>
          </div>

          {/* Luxury Dual-Tone Typography */}
          <h1 className="font-serif tracking-tight leading-[1.08] sm:leading-[1.05]">
            <span className="block text-4xl sm:text-7xl lg:text-8xl xl:text-[92px] font-light text-white drop-shadow-sm">
              {activeSlide.titleLine1}
            </span>
            <span className="block text-4xl sm:text-7xl lg:text-8xl xl:text-[92px] font-normal italic text-[#c8a876] mt-0.5 sm:mt-1 drop-shadow-sm">
              {activeSlide.titleLine2}
            </span>
          </h1>

          {/* Subtext description */}
          <div className="mt-4 sm:mt-7 text-white/80 text-xs sm:text-base font-light leading-relaxed max-w-md">
            <p>Distinctive homes for the quietly discerning.</p>
            <p>Presented by Luxe Estates & Residences.</p>
          </div>

          {/* Explore Residences Button */}
          <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={scrollToResidences}
              className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#fbf9f5] hover:bg-[#b89255] hover:text-white text-[#141517] transition-all duration-300 font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.22em] shadow-lg shadow-black/25 hover:shadow-[0_10px_25px_rgba(184,146,85,0.35)] cursor-pointer"
            >
              <span>Explore Residences</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 text-current opacity-80" />
            </button>

            {/* Quick View Details Badge */}
            <button
              onClick={() => onSelectResidence && onSelectResidence(activeSlide)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 glass-panel-dark text-white/95 hover:border-[#b89255]/70 transition-all text-xs tracking-wider cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-[#b89255]" />
              <span>{activeSlide.specs.name} • {activeSlide.price}</span>
            </button>
          </div>
        </div>

        {/* Bottom Right Carousel Controls */}
        <div className="absolute right-4 sm:right-10 lg:right-14 bottom-6 sm:bottom-16 lg:bottom-20 flex flex-col items-end gap-2.5 sm:gap-3 z-30">
          
          {/* Main Control Strip: [ ←   02 / 04   BANANI • ISLAMABAD   → ] */}
          <div className="flex items-center gap-3 sm:gap-6 text-white select-none glass-pill-dark px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-2xl border border-white/15 backdrop-blur-md">
            
            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              className="p-1 text-white/70 hover:text-[#b89255] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              title="Previous Residence (←)"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Slide Counter (e.g. 02 / 04) */}
            <span className="font-mono text-xs sm:text-sm tracking-widest text-white/95 font-medium min-w-[45px] sm:min-w-[50px] text-center">
              {activeSlide.slideNum}
            </span>

            {/* Location (e.g. BANANI • ISLAMABAD) */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] font-medium text-white/90 whitespace-nowrap">
              <span className="text-[#b89255] hidden sm:inline">•</span>
              <span>{activeSlide.location}</span>
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="p-1 text-white/70 hover:text-[#b89255] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              title="Next Residence (→)"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Interactive Thumbnail Previews & Autoplay Controls */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Exactly 4 Mini Thumbnails */}
            <div className="flex items-center gap-2 p-1.5 glass-panel-dark rounded-xl border border-white/10">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === current
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`relative w-12 h-8 sm:w-14 sm:h-9 rounded-md overflow-hidden transition-all duration-300 border cursor-pointer ${
                      isActive 
                        ? 'border-[#b89255] ring-2 ring-[#b89255]/40 scale-105 shadow-[0_0_12px_rgba(184,146,85,0.4)]' 
                        : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                    }`}
                    title={`Slide ${slide.slideNum}: ${slide.location}`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.location} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute bottom-0.5 right-1 text-[8px] font-mono text-white font-bold drop-shadow">
                      {idx + 1}
                    </span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b89255]" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Play/Pause Auto-slide Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl glass-panel-dark text-white/80 hover:text-white hover:border-[#b89255]/50 transition-colors cursor-pointer"
              title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#b89255]" /> : <Play className="w-3.5 h-3.5 text-white" />}
            </button>
          </div>
        </div>

        {/* Floating Search Button */}
        <button
          onClick={onOpenSearch}
          className="fixed bottom-7 right-7 sm:bottom-9 sm:right-9 z-40 w-12 h-12 rounded-full bg-white/95 border border-[#dfd6c8] text-[#141517] hover:text-[#b89255] hover:border-[#b89255] flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
          title="Search all residences"
          aria-label="Search all residences"
        >
          <Search className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
        </button>

      </div>
    </section>
  )
}
