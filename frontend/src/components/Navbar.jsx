import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X, Search, PhoneCall, ChevronDown } from 'lucide-react'

export default function Navbar({ onOpenBooking, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Track window scroll for smart backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-close mobile drawer on location change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  const headerBgClass = isHome && !isScrolled
    ? 'bg-transparent py-7'
    : 'bg-[#121316]/90 backdrop-blur-xl border-b border-white/10 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.25)]'

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        
        {/* Brand / Logo - Redesigned Luxury Typographic Wordmark & Architectural Hallmark */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-[26px] sm:text-[28px] font-normal tracking-[0.16em] text-white leading-none group-hover:text-[#c8a876] transition-colors">
                L U X E
              </span>
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1e2025] to-[#0f1013] border border-[#c8a876]/80 flex items-center justify-center text-[#c8a876] shadow-[0_0_15px_rgba(200,168,118,0.25)] group-hover:scale-105 group-hover:border-[#c8a876] transition-all">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11 L12 4 L21 11" />
                  <path d="M12 4 V20" />
                  <path d="M4 20 H20" />
                </svg>
              </div>
              <span className="text-[9px] uppercase tracking-[0.22em] text-[#c8a876] font-mono px-1.5 py-0.5 rounded bg-[#c8a876]/10 border border-[#c8a876]/30">
                ESTATES
              </span>
            </div>
            <span className="text-[8px] uppercase tracking-[0.36em] text-[#c8a876] font-medium leading-none mt-1.5">
              Architectural Residences
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Dropdown Menus */}
        <nav className="hidden lg:flex items-center gap-7 lg:gap-8 text-[13px] font-medium tracking-wider text-white/80">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 cursor-pointer relative py-1 text-left ${
                isActive 
                  ? 'text-white font-semibold after:w-full after:bg-[#c8a876]' 
                  : 'hover:text-white after:w-0 hover:after:w-full after:bg-[#c8a876]'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-300`
            }
          >
            Home
          </NavLink>

          {/* About with Dropdown (Matching Screenshot: Top Accent Line + 'Our Team') */}
          <div className="relative group py-2">
            <div className="flex items-center gap-1.5 cursor-pointer relative py-1 text-left">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive || location.pathname === '/about'
                      ? 'text-white font-semibold after:w-full after:bg-[#c8a876]' 
                      : 'hover:text-white after:w-0 hover:after:w-full after:bg-[#c8a876]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-300`
                }
              >
                About
              </NavLink>
              <ChevronDown className="w-3.5 h-3.5 text-white/70 transition-transform duration-200 group-hover:rotate-180" />
            </div>

            {/* Dropdown Menu - Exactly Matching User Screenshot with Top Accent Bar */}
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white text-[#141517] min-w-[190px] shadow-2xl rounded-b-md border-t-2 border-[#b89255] border-x border-b border-[#ded7cc] py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                <Link
                  to="/about#team"
                  className="block px-4 py-2.5 text-[14px] font-medium text-[#141517] hover:bg-[#fbf9f5] hover:text-[#b89255] transition-colors"
                >
                  Our Team
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-[12px] font-light text-[#5c5e66] hover:bg-[#fbf9f5] hover:text-[#141517] transition-colors border-t border-[#f0eae1]"
                >
                  About Overview
                </Link>
              </div>
            </div>
          </div>

          {/* Projects with Dropdown */}
          <div className="relative group py-2">
            <div className="flex items-center gap-1.5 cursor-pointer relative py-1 text-left">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive || location.pathname === '/projects'
                      ? 'text-white font-semibold after:w-full after:bg-[#c8a876]' 
                      : 'hover:text-white after:w-0 hover:after:w-full after:bg-[#c8a876]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-300`
                }
              >
                Projects
              </NavLink>
              <ChevronDown className="w-3.5 h-3.5 text-white/70 transition-transform duration-200 group-hover:rotate-180" />
            </div>

            {/* Projects Dropdown Menu */}
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white text-[#141517] min-w-[195px] shadow-2xl rounded-b-md border-t-2 border-[#b89255] border-x border-b border-[#ded7cc] py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                <Link
                  to="/projects"
                  className="block px-4 py-2.5 text-[14px] font-medium text-[#141517] hover:bg-[#fbf9f5] hover:text-[#b89255] transition-colors"
                >
                  All Residences
                </Link>
                <Link
                  to="/projects"
                  className="block px-4 py-2 text-[12px] font-light text-[#5c5e66] hover:bg-[#fbf9f5] hover:text-[#141517] transition-colors border-t border-[#f0eae1]"
                >
                  Villas & Penthouses
                </Link>
              </div>
            </div>
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `transition-colors duration-200 cursor-pointer relative py-1 text-left ${
                isActive 
                  ? 'text-white font-semibold after:w-full after:bg-[#c8a876]' 
                  : 'hover:text-white after:w-0 hover:after:w-full after:bg-[#c8a876]'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-300`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors duration-200 cursor-pointer relative py-1 text-left ${
                isActive 
                  ? 'text-white font-semibold after:w-full after:bg-[#c8a876]' 
                  : 'hover:text-white after:w-0 hover:after:w-full after:bg-[#c8a876]'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-300`
            }
          >
            Contact
          </NavLink>

          {/* Quick Search trigger in navbar */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 hover:text-[#c8a876] transition-colors cursor-pointer text-xs uppercase tracking-widest text-white/70 pl-2 border-l border-white/20"
          >
            <Search className="w-3.5 h-3.5 text-[#c8a876]" />
            <span>Search</span>
          </button>
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="group flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-semibold text-white/90 hover:text-[#c8a876] transition-all duration-300 cursor-pointer py-2.5 px-4 rounded-full border border-white/20 hover:border-[#c8a876]/60 hover:bg-white/5 backdrop-blur-sm"
          >
            <span>Book a private viewing</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#c8a876]" />
          </button>
        </div>

        {/* Mobile Menu & Search Buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 text-white/80 hover:text-white rounded-full bg-black/40 backdrop-blur-md border border-white/10"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/90 hover:text-white rounded-full bg-black/50 backdrop-blur-md border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-24 z-50 p-6 rounded-2xl bg-[#141517] border border-white/15 shadow-2xl text-white animate-in fade-in slide-in-from-top-4 duration-300 backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-sm tracking-wider py-2 border-b border-white/10 text-white/80 hover:text-[#c8a876]"
            >
              Home
            </NavLink>

            {/* Mobile About with Submenu */}
            <div className="py-2 border-b border-white/10">
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wider text-white font-medium hover:text-[#c8a876] block mb-2"
              >
                About
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  to="/about#team"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#c8a876] hover:text-white transition-colors"
                >
                  ↳ Our Team
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-white/60 hover:text-white transition-colors"
                >
                  ↳ Heritage & Philosophy
                </Link>
              </div>
            </div>

            {/* Mobile Projects with Submenu */}
            <div className="py-2 border-b border-white/10">
              <Link
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wider text-white font-medium hover:text-[#c8a876] block mb-2"
              >
                Projects
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  to="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-white/60 hover:text-white transition-colors"
                >
                  ↳ All Residences
                </Link>
              </div>
            </div>

            <NavLink
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-sm tracking-wider py-2 border-b border-white/10 text-white/80 hover:text-[#c8a876]"
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-sm tracking-wider py-2 border-b border-white/10 text-white/80 hover:text-[#c8a876]"
            >
              Contact
            </NavLink>

            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenSearch()
              }}
              className="flex items-center gap-2 text-left text-sm tracking-wider text-white/80 hover:text-[#c8a876] py-2 border-b border-white/10"
            >
              <Search className="w-4 h-4 text-[#c8a876]" />
              <span>Search Residences</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenBooking()
              }}
              className="mt-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#141517] bg-[#c8a876] hover:bg-white py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a private viewing</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
