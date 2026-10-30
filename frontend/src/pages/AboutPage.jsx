import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShieldCheck, Compass, Sparkles, Building2, Award, Users, CheckCircle2, ArrowRight, Eye, Globe2, Layers, Cpu, Leaf, FileCheck2 } from 'lucide-react'

export default function AboutPage({ onOpenBooking }) {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }, [hash])

  const leadership = [
    {
      name: "Asif Ahmed",
      role: "Founder & Chief Executive Officer",
      badge: "Founder",
      credentials: "Founder & Chairman • 25+ Years Real Estate Mastery",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=face&w=800&h=1000&q=80",
      bio: "Founding visionary of Luxe Estates Group Islamabad. Over 25 years steering iconic residential master developments, sovereign diplomatic enclaves, and establishing unprecedented benchmarks for luxury living in Pakistan."
    },
    {
      name: "Syed Tariq Mansoor",
      role: "Managing Director & Acquisitions",
      credentials: "B.Sc. Real Estate Economics (LSE), MRICS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=face&w=800&h=1000&q=80",
      bio: "Over two decades of experience representing international diplomatic corps, sovereign family offices, and prominent overseas industrialists in high-value asset acquisitions and cross-border mandates."
    },
    {
      name: "Ayesha Rehman",
      role: "Design Director & Principal Architect",
      credentials: "M.Arch (National College of Arts / AA London), PCATP",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=face&w=800&h=1000&q=80",
      bio: "Directs Luxe's architectural evaluation board, biophilic spatial planning, and turnkey custom residential commissions across Islamabad's premier enclaves in F-6, F-7, and Margalla Ridge."
    },
    {
      name: "Hamza Farooq",
      role: "Diplomatic & Private Advisory Lead",
      credentials: "LL.M. International Law, Diplomatic Advisory Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=face&w=800&h=1000&q=80",
      bio: "Specializing in confidential off-market transactions, embassy compound mandates, sovereign immunity compliance, and ultra-high-security residential specifications across the capital."
    },
    {
      name: "Fatima Zahra Khan",
      role: "Head of Interior Bespoke Finishes",
      credentials: "B.Des Interior Architecture (Indus Valley / Milan)",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&crop=face&w=800&h=1000&q=80",
      bio: "Personally curates European marble extraction in Carrara, artisanal teak joinery, and custom acoustic millwork for our premier penthouse and manor collections."
    },
    {
      name: "Engr. Dr. Kamran Rashid",
      role: "Chief Sustainable Structural Engineer",
      credentials: "Ph.D. Seismic & Environmental Engineering (UET / ETH Zurich), PEC",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&crop=face&w=800&h=1000&q=80",
      bio: "Author of leading treatises on seismic resilience and geothermal microgrids. Spearheads Luxe's net-zero transition and 120-point structural integrity audits."
    },
    {
      name: "Zainab Malik",
      role: "Director of Private Client Concierge",
      credentials: "M.A. Luxury Brand Management (LUMS / ESSEC Paris)",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=face&w=800&h=1000&q=80",
      bio: "Oversees discreet post-acquisition onboarding, fine art transit, staff recruitment, and private estate management for our international and overseas patrons."
    }
  ]

  const auditPillars = [
    {
      icon: Layers,
      title: "1. Acoustic Isolation & Mass",
      desc: "Every residence undergoes ultrasonic sound transmission loss testing. Minimum threshold: interior ambient noise below 28dB with triple-glazed decoupled curtain walls."
    },
    {
      icon: Compass,
      title: "2. Solar Azimuth & Thermal Tuning",
      desc: "Simulating summer and winter sun paths to ensure living volumes receive rich ambient daylight while preventing solar heat gain through motorized louvers."
    },
    {
      icon: ShieldCheck,
      title: "3. Seismic & Ballistic Integrity",
      desc: "Independent soil bore testing, post-tensioned foundation slab analysis, and diplomatic Level-5 security perimeter reinforcement verification."
    },
    {
      icon: Leaf,
      title: "4. Biophilic Microclimate & Air",
      desc: "High-efficiency ERV ventilation filtering PM2.5 particulates, integrated internal courtyards for passive cross-ventilation, and organic stone surfaces."
    },
    {
      icon: Cpu,
      title: "5. Redundant Smart Infrastructure",
      desc: "Dual independent fiber gateways, backup lithium microgrids, subterranean water storage, and integrated Lutron HomeWorks circadian lighting controls."
    },
    {
      icon: FileCheck2,
      title: "6. Sovereign Title & Legal Cleansing",
      desc: "Exhaustive 50-year title lineage verification, municipal zoning confirmation, and zero-encumbrance certificates reviewed by senior constitutional barristers."
    }
  ]

  const offices = [
    {
      city: "Islamabad Headquarters",
      address: "Sector F-7 Diplomatic Pavilion, Embassy Boulevard",
      phone: "+92 (51) 289-9100",
      role: "Flagship Advisory Salons & Architectural Atelier"
    },
    {
      city: "London Liaison Desk",
      address: "42 Berkeley Square, Mayfair, London W1J 5AW",
      phone: "+44 (20) 7946-0922",
      role: "European Family Office & Non-Resident Patron Counsel"
    },
    {
      city: "Dubai DIFC Advisory",
      address: "Gate Village 04, DIFC, Dubai, UAE",
      phone: "+971 (4) 312-8800",
      role: "Middle East Acquisitions & Sovereign Wealth Mandates"
    }
  ]

  const milestones = [
    { year: "2012", title: "Founding of Luxe Estates", desc: "Established as Islamabad's first boutique advisory dedicated purely to prime architectural residences." },
    { year: "2016", title: "Diplomatic Representation Mandate", desc: "Appointed preferred residential counsel for seven foreign embassies in the capital enclave." },
    { year: "2019", title: "The Architectural Audit Framework", desc: "Introduced our proprietary 120-point structural, acoustic, and thermal integrity evaluation." },
    { year: "2022", title: "London & Dubai Liaison Desks", desc: "Opened dedicated overseas advisory suites in Mayfair and DIFC for global diaspora families." },
    { year: "2024", title: "$450M Portfolio Benchmark", desc: "Surpassed half a billion dollars in private transaction volume across verified off-market estates." },
    { year: "2026", title: "Margalla Ridge Sanctuary Launch", desc: "Debuted Pakistan's first biophilic, net-zero luxury hillside residential series." }
  ]

  return (
    <div className="bg-[#fbf9f5] text-[#141517]">
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 sm:pt-44 sm:pb-32 px-4 sm:px-10 lg:px-14 bg-[#141517] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=80" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-[#141517]/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a876]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#c8a876] font-medium">
              Our Heritage & Philosophy
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-5 sm:mb-6 leading-tight">
            Curating Homes for the Quietly Discerning
          </h1>

          <p className="text-white/70 text-sm sm:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Luxe Estates & Residences was founded on a singular conviction: that true luxury is not defined by excess, but by architectural integrity, acoustic serenity, and sovereign privacy.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#c8a876]">
            <span>ESTABLISHED 2012</span>
            <span>•</span>
            <span>ISLAMABAD</span>
            <span>•</span>
            <span>MAYFAIR</span>
            <span>•</span>
            <span>DIFC</span>
          </div>
        </div>
      </section>

      {/* Brand Ethos / 3 Pillars */}
      <section className="py-16 sm:py-24 px-4 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold">Our Foundation</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#141517] mt-2">
            The Three Inviolable Tenets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl bg-white border border-[#e8e2d5] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#b89255]/70 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] border border-[#e5dfd3] flex items-center justify-center text-[#b89255] mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-light text-[#141517] mb-3">
              Architectural Honesty
            </h3>
            <p className="text-sm text-[#5c5e66] font-light leading-relaxed">
              We decline over 80% of properties submitted to our catalog. Every home in our collection must meet stringent standards of structural mass, natural light orientation, and acoustic isolation.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e8e2d5] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#b89255]/70 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] border border-[#e5dfd3] flex items-center justify-center text-[#b89255] mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-light text-[#141517] mb-3">
              Sovereign Discretion
            </h3>
            <p className="text-sm text-[#5c5e66] font-light leading-relaxed">
              Our patrons include ambassadors, cultural leaders, and multi-generational family trusts. Confidentiality is non-negotiable; off-market transactions remain strictly unadvertised.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e8e2d5] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#b89255]/70 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] border border-[#e5dfd3] flex items-center justify-center text-[#b89255] mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-light text-[#141517] mb-3">
              Enduring Materiality
            </h3>
            <p className="text-sm text-[#5c5e66] font-light leading-relaxed">
              We believe in materials that grow more magnificent with age: French white oak, hand-cut travertine, bookmatched Italian marble, and structural thermal glass that stands timeless.
            </p>
          </div>
        </div>
      </section>

      {/* The 6-Stage Proprietary Architectural Audit Framework */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 bg-[#141517] text-white border-y border-[#2a2b30]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a876]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c8a876] font-semibold">
                Rigorous Evaluation Standard
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              The Luxe 120-Point Architectural Audit
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light mt-4 leading-relaxed">
              Before any residence is admitted to our private registry, our multi-disciplinary engineering and architectural board conducts an exhaustive six-stage diagnostic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditPillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div key={idx} className="p-8 rounded-2xl bg-[#1b1c21] border border-white/10 hover:border-[#c8a876]/60 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[#24262c] flex items-center justify-center text-[#c8a876] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Board */}
      <section id="team" className="py-16 sm:py-24 px-4 sm:px-10 lg:px-14 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b89255]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#b89255] font-semibold">
              The Advisory Board
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#141517]">
            Architectural Curators & Senior Advisors
          </h2>
          <p className="text-[#5c5e66] text-sm mt-4 font-light">
            Guiding patrons through Pakistan's most distinguished residential acquisitions with decades of collective global mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#e8e2d5] hover:border-[#b89255]/60 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#e5dfd3] relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                />
                {member.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#141517]/85 text-[#b89255] border border-[#b89255]/40 text-[10px] uppercase font-bold tracking-widest rounded-full backdrop-blur-sm shadow-sm">
                    {member.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-light text-[#141517] group-hover:text-[#b89255] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-[#8a6834] font-medium tracking-wider uppercase mt-1 mb-1">
                  {member.role}
                </p>
                <p className="text-[11px] text-[#7e8088] font-mono mb-3">
                  {member.credentials}
                </p>
                <p className="text-xs text-[#5c5e66] font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global & Regional Advisory Desks */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 bg-[#ede7dc] border-t border-[#ded5c5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold">
              Global Representation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#141517] mt-2">
              Private Client Advisory Desks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-[#ded5c5] shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#8a6834]">
                  <Globe2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold">{office.city}</span>
                </div>
                <h4 className="font-serif text-lg font-light text-[#141517] mb-2">{office.role}</h4>
                <p className="text-xs text-[#5c5e66] font-light mb-3">{office.address}</p>
                <p className="text-xs font-mono font-medium text-[#141517]">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section id="heritage" className="py-20 px-6 sm:px-10 lg:px-14 bg-[#f4efe6] border-t border-[#e8e1d3] scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b89255] font-semibold">
              Chronicle of Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#141517] mt-2">
              Our Journey (2012 — 2026)
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-[#ded6c7] hidden sm:block">
            {milestones.map((item, idx) => (
              <div 
                key={idx} 
                className={`relative flex items-center justify-between ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-[45%]" />
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#141517] text-[#c8a876] border-2 border-[#c8a876] flex items-center justify-center text-xs font-mono font-bold z-10 shadow-md">
                  •
                </div>
                <div className="w-[45%] p-6 rounded-2xl bg-white border border-[#e5dfd3] shadow-sm">
                  <span className="text-xs font-mono font-semibold text-[#b89255] uppercase tracking-wider">{item.year}</span>
                  <h4 className="font-serif text-lg font-light text-[#141517] mt-1 mb-2">{item.title}</h4>
                  <p className="text-xs text-[#5c5e66] font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden space-y-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#e5dfd3]">
                <span className="text-xs font-mono font-semibold text-[#b89255]">{item.year}</span>
                <h4 className="font-serif text-lg font-light text-[#141517] mt-1 mb-2">{item.title}</h4>
                <p className="text-xs text-[#5c5e66] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 bg-[#141517] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-5xl font-light mb-6">
            Experience Our Portfolio in Person
          </h2>
          <p className="text-white/70 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8">
            Whether you are acquiring a permanent residence, expanding a family trust portfolio, or seeking bespoke architectural representation, we welcome your inquiry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking('Advisory Consultation')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#c8a876] hover:bg-[#d6be90] text-[#141517] font-semibold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-lg"
            >
              Book a Private Consultation
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 hover:border-[#c8a876] text-white hover:text-[#c8a876] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Contact Advisory Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
