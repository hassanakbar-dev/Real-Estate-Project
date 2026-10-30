import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  Check, 
  Send, 
  Sparkles, 
  Building, 
  MessageSquare,
  Globe2,
  CalendarCheck,
  Video,
  KeyRound,
  FileCheck,
  Compass,
  Loader2
} from 'lucide-react'
import { submitInquiry } from '../services/api'

export default function ContactPage({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Private Viewing',
    channel: 'In-Person at Sector F-7 Flagship Salon',
    timeSlot: 'Morning (10:00 – 12:30)',
    budget: '$3.5M – $5M',
    location: 'Sector F-7 / Diplomatic Avenue',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const globalDesks = [
    {
      city: "Islamabad Flagship Salons",
      district: "Sector F-7 • Embassy Boulevard",
      lead: "Asif Ahmed, Founder & Managing Director",
      phone: "+92 (51) 289-9100",
      email: "islamabad@luxeestates.pk",
      hours: "Mon – Sat: 09:30 – 19:00 PKT"
    },
    {
      city: "London Mayfair Desk",
      district: "42 Berkeley Square, Mayfair W1J 5AW",
      lead: "Syed Tariq Mansoor, UK & International Director",
      phone: "+44 (20) 7946-0922",
      email: "mayfair@luxeestates.pk",
      hours: "Mon – Fri: 09:00 – 18:00 GMT"
    },
    {
      city: "Dubai DIFC Chambers",
      district: "Gate Village 04, Level 05, DIFC",
      lead: "Hamza Farooq, Middle East & Diplomatic Lead",
      phone: "+971 (4) 312-8800",
      email: "dubai@luxeestates.pk",
      hours: "Sun – Thu: 09:00 – 18:00 GST"
    }
  ]

  const faqs = [
    {
      q: "How are confidential off-market viewings arranged?",
      a: "Off-market properties are never publicly advertised or geotagged. Once mutual credentials and a standard non-disclosure agreement (NDA) are confirmed, our advisory director coordinates a private chauffeured inspection at your chosen time."
    },
    {
      q: "Can non-resident patrons and overseas citizens acquire property?",
      a: "Yes. Our private client legal counsel manages full sovereign title clearance, State Bank repatriation compliance, and consular power-of-attorney documentation for diaspora families and international buyers."
    },
    {
      q: "What is the scope of the Luxe Architectural Audit?",
      a: "Every home presented in our portfolio undergoes a 120-point diagnostic by licensed structural engineers. We inspect foundation post-tensioning, acoustic attenuation ratings, subterranean moisture barriers, and smart HVAC redundancy."
    },
    {
      q: "Do you represent sellers with high-profile estates?",
      a: "Yes. We offer discreet seller representation where residences are matched directly with vetted buyers from our private diplomatic ledger, avoiding public open-houses or speculative inquiries."
    },
    {
      q: "What sovereign escrow and State Bank repatriation mechanisms are used?",
      a: "We collaborate with tier-1 international banks and State Bank authorized foreign exchange dealers to structure Special Convertible Rupee Accounts (SCRA) and verified escrow trusts ensuring clean funds repatriation in USD, GBP, or EUR upon asset liquidation."
    },
    {
      q: "Can diplomatic immunity or special consular security provisions be accommodated?",
      a: "Absolutely. Several residences in our Baridhara and Sector F-7 collections are pre-engineered to UN Level 5 and host-nation diplomatic compound security standards, including biometric perimeter cordons and independent backup life-support utilities."
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        channel: formData.channel,
        timeSlot: formData.timeSlot,
        budget: formData.budget,
        location: formData.location,
        notes: formData.message,
      })
      setIsSubmitted(true)
    } catch (err) {
      console.warn('Backend offline fallback:', err)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#fbf9f5] text-[#141517] min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-28 pb-14 sm:pt-44 sm:pb-28 px-4 sm:px-10 lg:px-14 bg-[#141517] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2560&q=80" 
            alt="Private Office" 
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-[#141517]/85 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a876]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#c8a876] font-medium">
              Private Client Office
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Initiate Private Representation
          </h1>

          <p className="text-white/70 text-sm sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Our advisory partners are at your service for discreet consultations, off-market portfolio inquiries, and private viewings.
          </p>
        </div>
      </section>

      {/* Global Advisory Desks Showcase */}
      <section className="py-12 sm:py-16 px-4 sm:px-10 lg:px-14 bg-[#ede7dc] border-b border-[#ded5c5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold">
              International Reach
            </span>
            <h2 className="font-serif text-3xl font-light text-[#141517] mt-1">
              Global Advisory Desks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalDesks.map((desk, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#ded5c5] p-7 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#8a6834]">
                  <Globe2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold">{desk.city}</span>
                </div>
                <h4 className="font-serif text-xl font-light text-[#141517] mb-1">{desk.district}</h4>
                <p className="text-xs text-[#7e8088] font-mono mb-4">{desk.lead}</p>
                <div className="space-y-1.5 text-xs text-[#5c5e66] border-t border-[#f2ede4] pt-3">
                  <p><span className="font-medium text-[#141517]">Direct:</span> {desk.phone}</p>
                  <p><span className="font-medium text-[#141517]">Email:</span> {desk.email}</p>
                  <p><span className="font-medium text-[#141517]">Hours:</span> {desk.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Office Details & FAQs */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Headquarters Card */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold block mb-2">
                Regional Headquarters
              </span>
              <h2 className="font-serif text-3xl font-light text-[#141517] mb-6">
                Islamabad Advisory Chambers
              </h2>

              <div className="space-y-6 text-sm text-[#45474f] font-light">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#ded6c7] flex items-center justify-center text-[#b89255] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#141517] text-sm">Diplomatic Advisory Suites</h4>
                    <p className="text-xs text-[#7e8088] mt-0.5">Sector F-7 Private Pavilion • Embassy Boulevard, Islamabad</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#ded6c7] flex items-center justify-center text-[#b89255] shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#141517] text-sm">Margalla Heights Studio</h4>
                    <p className="text-xs text-[#7e8088] mt-0.5">Avenue 04, Hillside Sanctuary, Islamabad</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#ded6c7] flex items-center justify-center text-[#b89255] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#141517] text-sm">Direct Concierge Telephony</h4>
                    <p className="text-xs text-[#7e8088] mt-0.5">+92 (51) 289-9100 • Priority WhatsApp Desk</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#ded6c7] flex items-center justify-center text-[#b89255] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#141517] text-sm">Confidential Correspondence</h4>
                    <p className="text-xs text-[#7e8088] mt-0.5">privateoffice@luxeestates.pk</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#ded6c7] flex items-center justify-center text-[#b89255] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#141517] text-sm">Consultation Hours</h4>
                    <p className="text-xs text-[#7e8088] mt-0.5">Monday – Saturday: 09:30 – 19:00 (By Appointment Only)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discretion Guarantee Box */}
            <div className="p-6 rounded-2xl bg-[#f4efe6] border border-[#e4ded2] flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#b89255] shrink-0 mt-1" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#141517] mb-1">
                  Discretion & Protocol Assurance
                </h4>
                <p className="text-xs text-[#5c5e66] font-light leading-relaxed">
                  All correspondence submitted to our Private Client Office is encrypted and handled exclusively by managing partners under strict non-disclosure terms.
                </p>
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div>
              <h3 className="font-serif text-2xl font-light text-[#141517] mb-4">
                Frequently Addressed Inquiries
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx
                  return (
                    <div 
                      key={idx}
                      className="rounded-xl border border-[#ded6c7] bg-white overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-medium text-[#141517] hover:text-[#b89255] cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-[#8a6834] transition-transform duration-300 shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs text-[#5c5e66] font-light leading-relaxed border-t border-[#f4efe6]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Representation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#ded6c7] p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              
              <div className="flex items-center gap-2 mb-2 text-[#8a6834] text-xs uppercase tracking-[0.2em] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Confidential Dossier</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#141517] mb-2">
                Request Representation
              </h2>
              <p className="text-xs sm:text-sm text-[#7e8088] font-light mb-8">
                Please provide your contact preferences. A designated senior advisory partner will respond within four business hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#f4efe6] border border-[#b89255]/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#141517] text-[#c8a876] flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#141517]">
                    Inquiry Received Discreetly
                  </h3>
                  <p className="text-xs text-[#5c5e66] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-medium text-[#141517]">{formData.name}</span>. Your request has been assigned to our Senior Acquisitions Director. You will be contacted via {formData.email} to confirm your {formData.timeSlot} reservation.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Private Viewing',
                        channel: 'In-Person at Sector F-7 Flagship Salon',
                        timeSlot: 'Morning (10:00 – 12:30)',
                        budget: '$3.5M – $5M',
                        location: 'Sector F-7 / Diplomatic Avenue',
                        message: ''
                      })
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#141517] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#b89255] transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-2">
                        Full Legal / Patron Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Ambassador Z. Hameed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#fbf9f5] border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-2">
                        Confidential Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="patron@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#fbf9f5] border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-2">
                        Telephone / WhatsApp
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#fbf9f5] border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-2">
                        Representation Objective
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#fbf9f5] border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] focus:bg-white cursor-pointer"
                      >
                        <option value="Private Viewing">Schedule a Private Residence Viewing</option>
                        <option value="Off-Market Acquisition">Confidential Off-Market Acquisition</option>
                        <option value="Seller Representation">Discreet Seller Representation</option>
                        <option value="Bespoke Commission">Bespoke Architectural Build Commission</option>
                        <option value="Diplomatic Lease">Diplomatic Enclave Long-Term Lease</option>
                      </select>
                    </div>
                  </div>

                  {/* Consultation Medium & Time Slot Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-2">
                        Consultation Medium
                      </label>
                      <select
                        value={formData.channel}
                        onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#fbf9f5] border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] focus:bg-white cursor-pointer"
                      >
                        <option value="In-Person at Sector F-7 Flagship Salon">In-Person at Sector F-7 Flagship Salon</option>
                        <option value="On-Site at Private Residence">On-Site at Private Residence</option>
                        <option value="Encrypted Signal / Zoom Video">Encrypted Signal / Zoom Video</option>
                        <option value="London Mayfair Desk Consultation">London Mayfair Desk Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-2">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#fbf9f5] border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] focus:bg-white cursor-pointer"
                      >
                        <option value="Morning (10:00 – 12:30)">Morning (10:00 – 12:30)</option>
                        <option value="Afternoon (14:00 – 16:30)">Afternoon (14:00 – 16:30)</option>
                        <option value="Twilight / Sunset Salon (17:30 – 19:30)">Twilight / Sunset Salon (17:30 – 19:30)</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Location Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-2">
                        Target Acquisition Capital
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#fbf9f5] border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] focus:bg-white cursor-pointer"
                      >
                        <option value="$2M – $3.5M">$2,000,000 – $3,500,000</option>
                        <option value="$3.5M – $5M">$3,500,000 – $5,000,000</option>
                        <option value="$5M – $8M">$5,000,000 – $8,000,000</option>
                        <option value="$8M+">$8,000,000+ (Trophy Estates)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-2">
                        Preferred Enclave
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#fbf9f5] border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] focus:bg-white cursor-pointer"
                      >
                        <option value="Sector F-7 / Diplomatic Avenue">Sector F-7 / Embassy Boulevard</option>
                        <option value="Gulshan-2 / Diplomatic Zone">Gulshan-2 Diplomatic Avenue</option>
                        <option value="Banani Lake Enclave">Banani Lakefront</option>
                        <option value="Baridhara Parkway">Baridhara Diplomatic Enclave</option>
                        <option value="Margalla Ridge Foothills">Margalla Ridge Foothills</option>
                        <option value="Rawal Lakefront District">Rawal Lakefront Promenade</option>
                      </select>
                    </div>
                  </div>

                  {/* Confidential Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-2">
                      Specific Architectural or Security Requirements
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Specify requirements such as private subterranean parking, ballistic glass, lap pool, or specific timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#fbf9f5] border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] focus:bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#141517] hover:bg-[#b89255] disabled:opacity-70 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#c8a876]" />
                        <span>Transmitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Confidential Request</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#7e8088] text-center font-light">
                    Protected by diplomatic protocol & TLS 256-bit encryption. No public dissemination.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Diplomatic Arrival & Secure Parking Protocol */}
      <section className="bg-[#141517] text-white py-16 px-6 sm:px-10 lg:px-14 border-t border-[#2a2b30]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l border-[#c8a876]/40 pl-5">
            <h4 className="font-serif text-xl font-light text-white mb-2">Subterranean Valet Reception</h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              Discreet underground vehicle turntable and direct private elevator transit to 2nd-floor advisory chambers.
            </p>
          </div>

          <div className="border-l border-[#c8a876]/40 pl-5">
            <h4 className="font-serif text-xl font-light text-white mb-2">Diplomatic Escort Protocol</h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              Armed motorcade parking and close-protection waiting salons equipped with dedicated communication terminals.
            </p>
          </div>

          <div className="border-l border-[#c8a876]/40 pl-5">
            <h4 className="font-serif text-xl font-light text-white mb-2">Margalla Ridge Helipad</h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              Helicopter arrival coordinates and advance air-traffic clearance available for hillside compound viewings.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
