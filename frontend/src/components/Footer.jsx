import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, Mail, MapPin, Phone, Check, ShieldCheck, Award, Globe2, Sparkles, Loader2 } from 'lucide-react'
import { subscribeNewsletter } from '../services/api'

export default function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribing(true)
    try {
      await subscribeNewsletter(email)
      setSubscribed(true)
    } catch (err) {
      console.warn('Backend offline fallback:', err)
      setSubscribed(true)
    } finally {
      setSubscribing(false)
      setTimeout(() => {
        setEmail('')
      }, 3500)
    }
  }

  return (
    <footer className="bg-[#ede7dc] text-[#141517] pt-14 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-10 lg:px-14 border-t border-[#ded5c5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Global Desks Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-10 sm:pb-14 border-b border-[#ded5c5]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#d6cdc0] flex items-center justify-center text-[#b89255] shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif text-base font-light text-[#141517]">Islamabad Flagship Chambers</h5>
              <p className="text-xs text-[#5c5e66] font-light mt-0.5">Sector F-7 Diplomatic Pavilion • Embassy Boulevard</p>
              <p className="text-xs font-mono text-[#8a6834] mt-1">+92 (51) 289-9100</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#d6cdc0] flex items-center justify-center text-[#b89255] shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif text-base font-light text-[#141517]">London Mayfair Liaison Desk</h5>
              <p className="text-xs text-[#5c5e66] font-light mt-0.5">42 Berkeley Square, Mayfair, London W1J 5AW</p>
              <p className="text-xs font-mono text-[#8a6834] mt-1">+44 (20) 7946-0922</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#d6cdc0] flex items-center justify-center text-[#b89255] shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif text-base font-light text-[#141517]">Dubai DIFC Advisory Suites</h5>
              <p className="text-xs text-[#5c5e66] font-light mt-0.5">Gate Village 04, Level 05, DIFC, UAE</p>
              <p className="text-xs font-mono text-[#8a6834] mt-1">+971 (4) 312-8800</p>
            </div>
          </div>
        </div>

        {/* Main 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-[#ded5c5]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3.5 mb-6 group inline-flex">
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <span className="font-serif text-[26px] font-normal tracking-[0.16em] text-[#141517] leading-none">
                    L U X E
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white border border-[#b89255]/70 flex items-center justify-center text-[#b89255] shadow-[0_2px_10px_rgba(184,146,85,0.15)] group-hover:scale-105 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11 L12 4 L21 11" />
                      <path d="M12 4 V20" />
                      <path d="M4 20 H20" />
                    </svg>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-[#8a6834] font-mono px-1.5 py-0.5 rounded bg-[#b89255]/10 border border-[#b89255]/30">
                    ESTATES
                  </span>
                </div>
                <span className="text-[8px] uppercase tracking-[0.36em] text-[#8a6834] font-semibold leading-none mt-1.5">
                  Architectural Residences
                </span>
              </div>
            </Link>
            
            <p className="text-[#5c5e66] text-sm font-light max-w-sm leading-relaxed mb-6">
              Representing Pakistan's most distinguished residential architecture, bespoke penthouses, and private estates. Operating under strict non-disclosure protocol.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-[#8a6834]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>MRICS Certified</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>RIBA Chartered Atelier</span>
              </span>
            </div>
          </div>

          {/* Column 1: Residences / Portfolio */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8a6834] font-semibold mb-4">
              Curated Estates
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#45474f] font-light">
              <li><Link to="/projects" className="hover:text-[#141517] transition-colors">The Lumina Pavilion</Link></li>
              <li><Link to="/projects" className="hover:text-[#141517] transition-colors">The Baridhara Manor</Link></li>
              <li><Link to="/projects" className="hover:text-[#141517] transition-colors">Crown Skyline Penthouse</Link></li>
              <li><Link to="/projects" className="hover:text-[#141517] transition-colors">The Ridge Monolith</Link></li>
              <li><Link to="/projects" className="hover:text-[#141517] transition-colors">The Sovereign Compound</Link></li>
              <li><Link to="/projects" className="hover:text-[#141517] transition-colors">The Lakefront Glasshouse</Link></li>
            </ul>
          </div>

          {/* Column 2: Navigation & Advisory */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8a6834] font-semibold mb-4">
              The Firm & Practice
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#45474f] font-light">
              <li><Link to="/about" className="hover:text-[#141517] transition-colors">Heritage & Ethos</Link></li>
              <li><Link to="/about#team" className="hover:text-[#141517] transition-colors">Our Advisory Board</Link></li>
              <li><Link to="/about#heritage" className="hover:text-[#141517] transition-colors">14-Year Timeline</Link></li>
              <li><Link to="/blog" className="hover:text-[#141517] transition-colors">The Architectural Gazette</Link></li>
              <li><Link to="/contact" className="hover:text-[#141517] transition-colors">Private Client Chambers</Link></li>
              <li><Link to="/contact" className="hover:text-[#141517] transition-colors">Off-Market Inquiries</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8a6834] font-semibold mb-4">
              The Private Gazette
            </h4>
            <p className="text-xs text-[#5c5e66] font-light mb-4 leading-relaxed">
              Quarterly architectural critiques, private market telemetry, and unlisted off-market releases delivered directly to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white border border-[#b89255] rounded-lg text-xs text-[#141517] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#b89255]" />
                <span>Enrolled in Private Gazette.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter confidential email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#d6cdc0] rounded-lg px-3.5 py-2.5 text-xs text-[#141517] placeholder-[#9e9a92] focus:outline-none focus:border-[#b89255]"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#141517] hover:bg-[#b89255] text-white font-semibold text-[11px] uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
                >
                  Request Dispatch
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7e8088] font-light gap-4">
          <p>© {new Date().getFullYear()} Luxe Estates & Residences Ltd. Registered in Islamabad, London & Dubai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#141517] transition-colors">Representation Terms</Link>
            <Link to="/contact" className="hover:text-[#141517] transition-colors">Confidentiality Guarantee</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#5c5e66] hover:text-[#b89255] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
