import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Award, 
  Building, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  MapPin, 
  Eye, 
  Play, 
  Pause, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Calculator, 
  Landmark, 
  KeyRound, 
  Truck, 
  Globe2,
  Sliders,
  DollarSign,
  TrendingUp,
  Quote
} from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import TrustSection from '../components/TrustSection'
import ResidencesCatalog from '../components/ResidencesCatalog'
import AmenitiesSection from '../components/AmenitiesSection'
import { BLOG_POSTS } from '../data/blogData'

export default function HomePage({ onOpenBooking, onOpenSearch, onSelectResidence }) {
  const latestArticles = BLOG_POSTS.slice(0, 2)
  const [isPlayingTour, setIsPlayingTour] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState(0)
  
  // Interactive Capital Calculator State
  const [investmentCapital, setInvestmentCapital] = useState(4000000)

  const enclaves = [
    {
      name: "Sector F-7 • Embassy Boulevard",
      tagline: "The Diplomatic Heart of the Capital",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      avgPlot: "1,000 – 2,000 sq.yds",
      security: "Tier-1 Diplomatic Patrols",
      style: "Monolithic Travertine & Glass",
      description: "Centuries-old banyans line manicured avenues hosting international embassies, chancery residences, and private diplomatic salons."
    },
    {
      name: "Banani Lakefront Enclave",
      tagline: "Waterfront Serenity & Architectural Poise",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      avgPlot: "800 – 1,500 sq.yds",
      security: "Private Waterway Perimeter",
      style: "Horizontal Biophilic Pavilions",
      description: "Direct shoreline access with private docks, weeping willows, and quiet cul-de-sacs favored by cultural patrons and artists."
    },
    {
      name: "Baridhara Parkway Diplomatic Zone",
      tagline: "Fortress-Grade Privacy & Manorial Scale",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      avgPlot: "1,500 – 3,000 sq.yds",
      security: "Biometric Diplomatic Cordon",
      style: "European Neoclassical & Modern Concrete",
      description: "Sprawling walled compounds with mature gardens, multi-vehicle motor courts, and state banquet facilities."
    },
    {
      name: "Margalla Ridge Sanctuary",
      tagline: "Foothill Mountain Vistas & Clean Air",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      avgPlot: "2,000 – 5,000 sq.yds",
      security: "Private Ridge Gated Gates",
      style: "Cantilevered Hillside Compounds",
      description: "Nestled directly against the protected national park, offering 5°C cooler summer temperatures and uninterrupted valley sunrises."
    }
  ]

  const services = [
    {
      icon: Landmark,
      title: "Confidential Acquisitions",
      subtitle: "The Private Off-Market Ledger",
      desc: "More than 60% of our ultra-prime estates are traded off-market without public signage or digital footprints, ensuring absolute discretion for sovereign families."
    },
    {
      icon: Sparkles,
      title: "Turnkey Bespoke Commissions",
      subtitle: "From Geological Bore to Final Millwork",
      desc: "Our architectural atelier pairs clients with Pritzker-level international studios and master Italian craftsmen to erect one-of-a-kind trophy residences."
    },
    {
      icon: KeyRound,
      title: "Diplomatic Chancery Leasing",
      subtitle: "UN & Embassy Grade Residential Tenancies",
      desc: "We curate fortified, acoustic-certified residences engineered specifically for ambassadorial tenancies and international delegation chiefs."
    },
    {
      icon: Truck,
      title: "Fine Art & Secure Asset Transit",
      subtitle: "White-Glove International Relocation",
      desc: "Climate-monitored secure transport of priceless art collections, wine cellars, and heritage artifacts directly into your newly acquired residence."
    }
  ]

  const hotspots = [
    {
      title: "Acoustic Glazing (28dB)",
      desc: "St. Gobain triple-glazed thermal curtain wall isolating external noise.",
      x: "28%",
      y: "42%"
    },
    {
      title: "Cantilevered Lap Pool",
      desc: "25-meter heated infinity pool suspended over natural rock terraces.",
      x: "64%",
      y: "75%"
    },
    {
      title: "Sub-Zero Chef Galley",
      desc: "Dual concealed Gaggenau appliances with temperature-zoned wine cellar.",
      x: "48%",
      y: "55%"
    },
    {
      title: "Japanese Zen Courtyard",
      desc: "Internal biophilic garden promoting natural air cross-ventilation.",
      x: "78%",
      y: "35%"
    }
  ]

  const testimonials = [
    {
      quote: "Luxe Estates handled our ambassadorial compound acquisition with an elegance and security protocol that met every stringent requirement of our foreign ministry. Their architectural audit was remarkably comprehensive.",
      author: "H.E. Ambassador Jean-Pierre Durand",
      role: "Head of European Diplomatic Delegation",
      location: "Islamabad Diplomatic Enclave"
    },
    {
      quote: "In 25 years of family office asset allocation, I have rarely encountered a team that understands acoustic engineering and structural mass as intimately as capital returns. A truly peerless advisory firm.",
      author: "M. Tariq Al-Hussaini",
      role: "Managing Trustee, Heritage Family Trust",
      location: "London Mayfair & Islamabad"
    },
    {
      quote: "Their commitment to architectural honesty is genuinely rare. They decline properties that most brokers would flaunt, ensuring that only homes of authentic architectural pedigree enter their catalog.",
      author: "Sophia R. Sterling",
      role: "Architectural Digest Contributing Editor",
      location: "Geneva & Dubai"
    }
  ]

  // Calculated metrics
  const projectedAppreciation5Y = Math.round(investmentCapital * 0.72)
  const projectedAnnualRentalYield = Math.round(investmentCapital * 0.088)
  const estimatedStampDuty = Math.round(investmentCapital * 0.02)

  return (
    <div>
      {/* Hero 4-Slide Dynamic Architectural Slider */}
      <HeroSlider 
        onOpenBooking={onOpenBooking} 
        onOpenSearch={onOpenSearch}
        onSelectResidence={onSelectResidence}
      />

      {/* Building Trust, Creating Value Section (exact match to user screenshot in Islamabad) */}
      <TrustSection onOpenBooking={onOpenBooking} />

      {/* Curated Residences Catalog Section */}
      <ResidencesCatalog 
        onOpenBooking={onOpenBooking}
        onSelectResidence={onSelectResidence}
      />

      {/* View All Projects Callout */}
      <div className="bg-[#fbf9f5] pb-16 px-6 text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#141517] text-white hover:bg-[#b89255] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium group shadow-lg hover:shadow-xl"
        >
          <span>Explore Entire Architectural Portfolio (8 Estates)</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Prime Enclaves Guide Section */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 bg-[#ede7dc] border-t border-[#ded5c5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8a6834]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold">
                  Topographical Distinction
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#141517]">
                Islamabad's Premier Enclaves
              </h2>
            </div>
            <p className="text-sm text-[#5c5e66] font-light max-w-md leading-relaxed">
              Every neighborhood in our collection is evaluated for diplomatic security cordons, mature tree canopies, and strict low-density municipal zoning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enclaves.map((enclave, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#ded5c5] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#b89255]/70 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#ded5c5]">
                    <img 
                      src={enclave.image} 
                      alt={enclave.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-xs font-serif text-white font-light">
                      {enclave.tagline}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-light text-[#141517] mb-2 group-hover:text-[#b89255] transition-colors">
                      {enclave.name}
                    </h3>
                    <p className="text-xs text-[#5c5e66] font-light leading-relaxed mb-5">
                      {enclave.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-[#f2ede4] text-[11px] text-[#45474f]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#8a6834] font-medium">Plot Scale:</span>
                        <span className="font-mono">{enclave.avgPlot}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#8a6834] font-medium">Security:</span>
                        <span>{enclave.security}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#8a6834] font-medium">Style:</span>
                        <span>{enclave.style}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/projects"
                    className="w-full py-2.5 rounded-lg border border-[#ded6c7] hover:border-[#141517] hover:bg-[#141517] hover:text-white text-[#141517] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Residences</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Standards & Luxury Amenities */}
      <AmenitiesSection onOpenBooking={onOpenBooking} />

      {/* Interactive Virtual Atelier & Architectural Tour Preview */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 bg-[#141517] text-white overflow-hidden relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#c8a876]/10 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#c8a876]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c8a876] font-medium">
                Immersive Architectural Tour
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Anatomy of the Lumina Pavilion
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light mt-4">
              Explore key spatial features engineered into our flagship modern villa. Click on any architectural focal point to inspect specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Interactive Image Box */}
            <div className="lg:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85" 
                alt="The Lumina Pavilion Showcase"
                className={`w-full h-full object-cover transition-all duration-1000 ${isPlayingTour ? 'scale-105 filter brightness-110' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Hotspot Pins */}
              {hotspots.map((spot, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHotspot(idx)}
                  style={{ left: spot.x, top: spot.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    activeHotspot === idx 
                      ? 'w-10 h-10 rounded-full bg-[#c8a876] text-[#141517] ring-4 ring-[#c8a876]/40 scale-110 shadow-xl z-20' 
                      : 'w-7 h-7 rounded-full bg-black/70 border border-white/50 text-white hover:bg-[#c8a876] hover:text-[#141517] z-10'
                  }`}
                  aria-label={`Hotspot: ${spot.title}`}
                >
                  <span className="text-xs font-mono font-bold">{idx + 1}</span>
                </button>
              ))}

              {/* Media Controls Bar */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlayingTour(!isPlayingTour)}
                    className="w-9 h-9 rounded-full bg-[#c8a876] text-[#141517] flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                    aria-label={isPlayingTour ? 'Pause tour preview' : 'Play tour preview'}
                  >
                    {isPlayingTour ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Virtual Spatial Scan</h4>
                    <p className="text-[10px] text-white/60 font-mono">4K Ultra-Definition • Matterport 3D Verified</p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking('The Lumina Pavilion Virtual Tour')}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold border border-white/20 transition-colors cursor-pointer"
                >
                  Request VR Headset Demo
                </button>
              </div>
            </div>

            {/* Hotspot Details Card */}
            <div className="lg:col-span-4 bg-[#1b1c21] rounded-3xl border border-white/10 p-8 shadow-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c8a876] font-semibold block mb-2">
                Focal Point 0{activeHotspot + 1} of 0{hotspots.length}
              </span>
              <h3 className="font-serif text-3xl font-light text-white mb-4">
                {hotspots[activeHotspot].title}
              </h3>
              <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
                {hotspots[activeHotspot].desc}
              </p>

              <div className="space-y-3 mb-8">
                {hotspots.map((spot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHotspot(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer ${
                      activeHotspot === idx
                        ? 'bg-[#25272e] border-[#c8a876] text-white'
                        : 'bg-[#151619] border-white/5 text-white/60 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[#c8a876]">0{idx + 1}</span>
                      <span>{spot.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => onOpenBooking('The Lumina Pavilion Spatial Inspection')}
                className="w-full py-3.5 rounded-full bg-[#c8a876] hover:bg-[#d6be90] text-[#141517] font-semibold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-md text-center block"
              >
                Schedule Physical Viewing
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Private Advisory & Sovereign Services Grid */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b89255]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold">
              Bespoke Representation
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#141517]">
            Private Client Office Mandates
          </h2>
          <p className="text-sm text-[#5c5e66] font-light mt-4 leading-relaxed">
            From cross-border wealth repatriation to turnkey custom estates, our senior partners execute high-complexity real estate mandates with absolute privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#e8e2d5] hover:border-[#b89255]/70 transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] border border-[#ded6c7] flex items-center justify-center text-[#b89255] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#141517] mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#8a6834] font-medium uppercase tracking-wider mb-3">
                    {srv.subtitle}
                  </p>
                  <p className="text-xs text-[#5c5e66] font-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#f2ede4]">
                  <button
                    onClick={() => onOpenBooking(srv.title)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#141517] hover:text-[#b89255] transition-colors cursor-pointer"
                  >
                    <span>Request Mandate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Interactive Capital Allocation & Yield Calculator */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 bg-[#ede7dc] border-t border-[#ded5c5]">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white p-8 sm:p-14 border border-[#ded5c5] shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#eee7dd]">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#8a6834] text-xs uppercase tracking-[0.2em] font-semibold">
                <Calculator className="w-4 h-4" />
                <span>Capital Telemetry</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#141517]">
                Prime Real Estate Yield Estimator
              </h2>
              <p className="text-xs sm:text-sm text-[#7e8088] font-light mt-1">
                Based on historical 2016–2026 transaction data across Sector F-7, Banani, and Baridhara enclaves.
              </p>
            </div>

            {/* Capital Preset Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              {[2500000, 4000000, 6000000, 8000000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setInvestmentCapital(amt)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                    investmentCapital === amt
                      ? 'bg-[#141517] text-[#c8a876] shadow-sm'
                      : 'bg-[#fbf9f5] border border-[#ded6c7] text-[#45474f] hover:bg-[#ede7dc]'
                  }`}
                >
                  ${(amt / 1000000).toFixed(1)}M
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Slider */}
          <div className="py-8 border-b border-[#eee7dd]">
            <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider font-semibold text-[#141517]">
              <span>Selected Portfolio Capital</span>
              <span className="font-mono text-xl text-[#8a6834] font-normal">
                ${investmentCapital.toLocaleString()} USD
              </span>
            </div>
            <input 
              type="range"
              min={1500000}
              max={10000000}
              step={250000}
              value={investmentCapital}
              onChange={(e) => setInvestmentCapital(Number(e.target.value))}
              className="w-full accent-[#b89255] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#7e8088] font-mono mt-2">
              <span>$1.5M (Boutique Villa)</span>
              <span>$5.5M (Diplomatic Compound)</span>
              <span>$10M (Trophy Manor)</span>
            </div>
          </div>

          {/* Estimated Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-center sm:text-left">
            <div className="p-5 rounded-2xl bg-[#fbf9f5] border border-[#ded6c7]">
              <div className="flex items-center gap-1.5 text-xs text-[#8a6834] font-medium mb-1 justify-center sm:justify-start">
                <TrendingUp className="w-4 h-4" />
                <span>5-Year Capital Gain Est.</span>
              </div>
              <div className="font-serif text-3xl font-light text-[#141517] mt-1">
                +${projectedAppreciation5Y.toLocaleString()}
              </div>
              <p className="text-[11px] text-[#7e8088] mt-1 font-mono">~14.4% CAGR prime corridor average</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fbf9f5] border border-[#ded6c7]">
              <div className="flex items-center gap-1.5 text-xs text-[#8a6834] font-medium mb-1 justify-center sm:justify-start">
                <DollarSign className="w-4 h-4" />
                <span>Annual Diplomatic Lease</span>
              </div>
              <div className="font-serif text-3xl font-light text-[#141517] mt-1">
                ${projectedAnnualRentalYield.toLocaleString()} /yr
              </div>
              <p className="text-[11px] text-[#7e8088] mt-1 font-mono">Net USD embassy lease contracts</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fbf9f5] border border-[#ded6c7]">
              <div className="flex items-center gap-1.5 text-xs text-[#8a6834] font-medium mb-1 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4" />
                <span>Estimated Conveyancing</span>
              </div>
              <div className="font-serif text-3xl font-light text-[#141517] mt-1">
                ~${estimatedStampDuty.toLocaleString()}
              </div>
              <p className="text-[11px] text-[#7e8088] mt-1 font-mono">Includes sovereign title & audit fees</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenBooking(`Custom Investment Mandate ($${(investmentCapital / 1000000).toFixed(1)}M)`)}
              className="px-8 py-3.5 rounded-full bg-[#141517] hover:bg-[#b89255] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md"
            >
              Request Full Portfolio Financial Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Diplomatic & Patron Testimonials / Press Endorsements */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Quote className="w-4 h-4 text-[#8a6834]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold">
              Distinguished Endorsements
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#141517]">
            Trusted by Sovereign Patrons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#e8e2d5] shadow-[0_6px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              <p className="text-sm text-[#45474f] font-light leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-[#f2ede4]">
                <h4 className="font-serif text-base font-light text-[#141517]">{t.author}</h4>
                <p className="text-xs text-[#8a6834] font-medium">{t.role}</p>
                <p className="text-[11px] text-[#7e8088] font-mono mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Journal & Insights Preview */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 bg-[#fbf9f5] border-t border-[#ede7dd]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89255]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#b89255] font-semibold">
                  The Architectural Journal
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#141517]">
                Perspectives on Space, Light & Value
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8a6834] hover:text-[#141517] transition-colors"
            >
              <span>View All Journal Entries</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {latestArticles.map((article) => (
              <article 
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e8e2d5] hover:border-[#b89255]/60 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_25px_rgba(0,0,0,0.03)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#e4ded3]">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#141517]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-[#c8a876] border border-white/10">
                    {article.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-xs text-[#7e8088] mb-3 font-mono">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#141517] group-hover:text-[#b89255] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#5c5e66] font-light leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-[#141517] group-hover:text-[#b89255] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Private Consultation CTA Banner */}
      <section className="bg-gradient-to-r from-[#17181c] via-[#101114] to-[#1c1d22] text-white py-20 px-6 sm:px-10 lg:px-14 relative overflow-hidden">
        <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-[#c8a876]/10 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c8a876] font-semibold mb-3 inline-block">
            Private Client Office
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white mb-6">
            Seeking off-market estates or confidential representation?
          </h2>
          <p className="text-[#a4a6b0] text-sm sm:text-base font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Our advisory team operates with sovereign discretion, representing distinguished patrons across the diplomatic and private sectors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking('Confidential Advisory Request')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#c8a876] hover:bg-[#d6be90] text-[#141517] font-semibold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-lg hover:shadow-xl"
            >
              Schedule Private Consultation
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 hover:border-[#c8a876] text-white hover:text-[#c8a876] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
