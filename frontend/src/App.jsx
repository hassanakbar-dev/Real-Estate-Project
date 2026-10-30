import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import SearchModal from './components/SearchModal'
import ResidenceModal from './components/ResidenceModal'
import ScrollToTop from './components/ScrollToTop'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedResidence, setSelectedResidence] = useState(null)
  const [bookingResidenceName, setBookingResidenceName] = useState('')

  const handleOpenBooking = (residenceName = '') => {
    if (typeof residenceName === 'string' && residenceName) {
      setBookingResidenceName(residenceName)
    } else {
      setBookingResidenceName('General Advisory / Viewing')
    }
    setIsBookingOpen(true)
  }

  const handleCloseBooking = () => {
    setIsBookingOpen(false)
  }

  const handleOpenSearch = () => {
    setIsSearchOpen(true)
  }

  const handleCloseSearch = () => {
    setIsSearchOpen(false)
  }

  const handleSelectResidence = (residence) => {
    setSelectedResidence(residence)
  }

  const handleCloseResidenceModal = () => {
    setSelectedResidence(null)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#fbf9f5] text-[#141517] selection:bg-[#b89255] selection:text-white font-sans antialiased flex flex-col justify-between">
        {/* Top Navbar with smart scroll & routing */}
        <Navbar 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenSearch={handleOpenSearch} 
        />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenBooking={handleOpenBooking}
                  onOpenSearch={handleOpenSearch}
                  onSelectResidence={handleSelectResidence}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutPage 
                  onOpenBooking={handleOpenBooking}
                />
              } 
            />
            <Route 
              path="/projects" 
              element={
                <ProjectsPage 
                  onOpenBooking={handleOpenBooking}
                  onSelectResidence={handleSelectResidence}
                />
              } 
            />
            <Route 
              path="/blog" 
              element={
                <BlogPage />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ContactPage 
                  onOpenBooking={handleOpenBooking}
                />
              } 
            />
            {/* Fallback to Home */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenBooking={handleOpenBooking}
                  onOpenSearch={handleOpenSearch}
                  onSelectResidence={handleSelectResidence}
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Global Interactive Modals (accessible from any page) */}
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={handleCloseBooking} 
          preselectedResidence={bookingResidenceName} 
        />

        <SearchModal 
          isOpen={isSearchOpen} 
          onClose={handleCloseSearch} 
          onSelectResidence={handleSelectResidence} 
        />

        <ResidenceModal 
          residence={selectedResidence} 
          isOpen={!!selectedResidence} 
          onClose={handleCloseResidenceModal}
          onBookViewing={(name) => handleOpenBooking(name)}
        />
      </div>
    </BrowserRouter>
  )
}
