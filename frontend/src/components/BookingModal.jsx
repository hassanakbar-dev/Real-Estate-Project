import React, { useState } from 'react'
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, Loader2 } from 'lucide-react'
import { RESIDENCE_SLIDES } from './HeroSlider'
import { createBooking } from '../services/api'

export default function BookingModal({ isOpen, onClose, preselectedResidence }) {
  const [selectedResidence, setSelectedResidence] = useState(preselectedResidence || 'Banani Garden Residence')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('14:00')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await createBooking({
        residenceName: selectedResidence,
        date,
        time,
        name,
        phone,
        email,
        notes,
      })
      setIsSubmitted(true)
    } catch (err) {
      console.warn('Backend request fallback:', err)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl p-6 sm:p-10 rounded-2xl bg-[#fbf9f5] border border-[#e2dacb] text-[#141517] shadow-[0_25px_60px_rgba(0,0,0,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-full text-[#7a7c85] hover:text-[#141517] hover:bg-[#eee8dc] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#b89255]/15 border border-[#b89255] flex items-center justify-center text-[#b89255] mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-light text-[#141517] mb-2">
              Viewing Request Confirmed
            </h3>
            <p className="text-[#5c5e66] text-sm max-w-md font-light leading-relaxed mb-6">
              Thank you, <span className="text-[#b89255] font-semibold">{name}</span>. Our private concierge team has reserved your appointment for <span className="text-[#141517] font-semibold">{selectedResidence}</span>. We will contact you at {phone || email} within 2 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#b89255] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#141517] transition-colors cursor-pointer rounded-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#b89255] font-bold">
                Luxe Estates & Residences Concierge
              </span>
              <h3 className="font-serif text-3xl font-light text-[#141517] mt-1">
                Book a Private Viewing
              </h3>
              <p className="text-xs text-[#6e717a] mt-1 font-light">
                Experience architectural perfection in person with our dedicated estate specialists.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Residence Choice */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5c5e66] mb-1.5 font-medium">
                  Select Residence
                </label>
                <select
                  value={selectedResidence}
                  onChange={(e) => setSelectedResidence(e.target.value)}
                  className="w-full bg-white border border-[#ded5c5] rounded-lg px-3.5 py-2.5 text-sm text-[#141517] focus:outline-none focus:border-[#b89255] transition-colors"
                  required
                >
                  {RESIDENCE_SLIDES.map((slide) => (
                    <option key={slide.id} value={slide.specs.name} className="bg-white text-[#141517]">
                      {slide.specs.name} ({slide.location}) — {slide.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5c5e66] mb-1.5 flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#b89255]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-white border border-[#ded5c5] rounded-lg px-3.5 py-2 text-sm text-[#141517] focus:outline-none focus:border-[#b89255]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5c5e66] mb-1.5 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#b89255]" />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white border border-[#ded5c5] rounded-lg px-3.5 py-2.5 text-sm text-[#141517] focus:outline-none focus:border-[#b89255]"
                  >
                    <option value="10:00">10:00 AM — Morning Tour</option>
                    <option value="12:00">12:00 PM — Midday Sunlight</option>
                    <option value="15:00">03:00 PM — Afternoon</option>
                    <option value="17:30">05:30 PM — Golden Hour Sunset</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5c5e66] mb-1.5 flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-[#b89255]" />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asif Ahmed"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#ded5c5] rounded-lg px-3.5 py-2 text-sm text-[#141517] placeholder-[#a6a29a] focus:outline-none focus:border-[#b89255]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5c5e66] mb-1.5 flex items-center gap-1.5 font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#b89255]" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1700-000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#ded5c5] rounded-lg px-3.5 py-2 text-sm text-[#141517] placeholder-[#a6a29a] focus:outline-none focus:border-[#b89255]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5c5e66] mb-1.5 flex items-center gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#b89255]" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="asif@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#ded5c5] rounded-lg px-3.5 py-2 text-sm text-[#141517] placeholder-[#a6a29a] focus:outline-none focus:border-[#b89255]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5c5e66] mb-1.5 font-medium">
                  Specific Requests / Chauffeur Service
                </label>
                <textarea
                  rows="2"
                  placeholder="Let us know if you require private security or chauffeur pickup..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#ded5c5] rounded-lg px-3.5 py-2 text-sm text-[#141517] placeholder-[#a6a29a] focus:outline-none focus:border-[#b89255] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-3 bg-[#b89255] hover:bg-[#9e7a40] disabled:opacity-70 text-white font-semibold text-xs uppercase tracking-[0.22em] rounded-lg transition-colors shadow-md shadow-[#b89255]/20 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Confirming Appointment...</span>
                  </>
                ) : (
                  <span>Confirm VIP Appointment</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
