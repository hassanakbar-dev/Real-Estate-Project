import React, { useState, useMemo } from 'react'
import { 
  Search, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Sparkles, 
  Filter, 
  ArrowUpRight, 
  Check, 
  SlidersHorizontal,
  LayoutGrid,
  ListFilter,
  FileDown,
  Scale,
  X,
  ShieldCheck,
  Eye,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react'
import { RESIDENCE_SLIDES } from '../data/residencesData'

export default function ProjectsPage({ onOpenBooking, onSelectResidence }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedLocation, setSelectedLocation] = useState('ALL')
  const [selectedBeds, setSelectedBeds] = useState('ALL')
  const [selectedAmenity, setSelectedAmenity] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'table'
  
  // Residence Comparison State (max 2)
  const [compareList, setCompareList] = useState([])
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false)

  // Dossier Download Modal State
  const [isDossierOpen, setIsDossierOpen] = useState(false)
  const [dossierForm, setDossierForm] = useState({ name: '', email: '', format: 'Full 48-Page Monograph' })
  const [dossierDownloaded, setDossierDownloaded] = useState(false)

  const categories = ['ALL', 'Modern Villa', 'Penthouse', 'Manor Estate', 'Waterfront Pavilion']
  const locations = ['ALL', 'GULSHAN', 'BANANI', 'BARIDHARA', 'NORTH PARK', 'MARGALLA HILLS', 'SECTOR F-7', 'RAWAL LAKEFRONT']
  const bedOptions = ['ALL', '3 Beds', '4 Beds', '5+ Beds']
  const amenityOptions = ['ALL', 'Pool', 'Garage', 'Wine', 'Diplomatic Security', 'Acoustic']

  const filteredProjects = useMemo(() => {
    return RESIDENCE_SLIDES.filter((res) => {
      const matchesCategory = selectedCategory === 'ALL' || res.category === selectedCategory
      const matchesLocation = selectedLocation === 'ALL' || res.location.toUpperCase().includes(selectedLocation)
      
      const numBeds = parseInt(res.specs.beds) || 0
      let matchesBeds = true
      if (selectedBeds === '3 Beds') matchesBeds = numBeds === 3
      if (selectedBeds === '4 Beds') matchesBeds = numBeds === 4
      if (selectedBeds === '5+ Beds') matchesBeds = numBeds >= 5

      let matchesAmenity = true
      if (selectedAmenity !== 'ALL') {
        const query = selectedAmenity.toLowerCase()
        const text = (res.description + ' ' + (res.highlights ? res.highlights.join(' ') : '')).toLowerCase()
        matchesAmenity = text.includes(query)
      }

      const matchesQuery = 
        res.specs.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (res.architect && res.architect.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (res.description && res.description.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesLocation && matchesBeds && matchesAmenity && matchesQuery
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceNumber - b.priceNumber
      if (sortBy === 'price-desc') return b.priceNumber - a.priceNumber
      if (sortBy === 'area') {
        const areaA = parseInt(a.specs.area.replace(/\D/g, '')) || 0
        const areaB = parseInt(b.specs.area.replace(/\D/g, '')) || 0
        return areaB - areaA
      }
      return 0 // featured order
    })
  }, [selectedCategory, selectedLocation, selectedBeds, selectedAmenity, searchQuery, sortBy])

  const toggleCompare = (res) => {
    if (compareList.some(item => item.id === res.id)) {
      setCompareList(compareList.filter(item => item.id !== res.id))
    } else {
      if (compareList.length >= 2) {
        setCompareList([compareList[1], res])
      } else {
        setCompareList([...compareList, res])
      }
    }
  }

  const handleDossierSubmit = (e) => {
    e.preventDefault()
    if (!dossierForm.email) return
    setDossierDownloaded(true)
    setTimeout(() => {
      setDossierDownloaded(false)
      setIsDossierOpen(false)
    }, 3500)
  }

  return (
    <div className="bg-[#fbf9f5] text-[#141517] min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-28 pb-14 sm:pt-44 sm:pb-28 px-4 sm:px-10 lg:px-14 bg-[#141517] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2560&q=80" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-[#141517]/85 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a876]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#c8a876] font-medium">
              Curated Portfolio • 2026 Edition
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Distinguished Residences & Estates
          </h1>

          <p className="text-white/70 text-sm sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Explore our curated inventory of premier villas, sky penthouses, and private compounds across Islamabad's most exclusive avenues.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsDossierOpen(true)}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#c8a876] hover:bg-[#d6be90] text-[#141517] text-[11px] sm:text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer shadow-md"
            >
              <FileDown className="w-4 h-4" />
              <span>Download 2026 Portfolio Dossier (PDF)</span>
            </button>
            {compareList.length > 0 && (
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs uppercase tracking-widest font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <Scale className="w-4 h-4 text-[#c8a876]" />
                <span>Compare Selected ({compareList.length}/2)</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-0 z-30 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#e5dfd3] py-3 sm:py-4 px-4 sm:px-10 lg:px-14 shadow-sm">
        <div className="max-w-7xl mx-auto space-y-3">
          
          {/* Top Row: Search, Categories, and View Switcher */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a6834]" />
              <input 
                type="text" 
                placeholder="Search architect, title, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-[#ded6c7] rounded-full text-[#141517] placeholder-[#9c9992] focus:outline-none focus:border-[#b89255]"
              />
            </div>

            {/* Category Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat 
                      ? 'bg-[#141517] text-white shadow-sm' 
                      : 'bg-white text-[#5c5e66] hover:bg-[#eee7dd] border border-[#ded6c7]'
                  }`}
                >
                  {cat === 'ALL' ? 'All Residences' : cat}
                </button>
              ))}
            </div>

            {/* View Switcher & Dropdowns */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              
              {/* Location Select */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="text-xs bg-white border border-[#ded6c7] rounded-full px-3 py-1.5 text-[#141517] focus:outline-none focus:border-[#b89255] cursor-pointer"
              >
                <option value="ALL">All Enclaves</option>
                {locations.filter(l => l !== 'ALL').map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>

              {/* Sort Select */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs bg-white border border-[#ded6c7] rounded-full px-3 py-1.5 text-[#141517] focus:outline-none focus:border-[#b89255] cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="area">Area: Largest First</option>
              </select>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center border border-[#ded6c7] rounded-full bg-white p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-full cursor-pointer transition-colors ${
                    viewMode === 'grid' ? 'bg-[#141517] text-white' : 'text-[#7e8088] hover:text-[#141517]'
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-full cursor-pointer transition-colors ${
                    viewMode === 'table' ? 'bg-[#141517] text-white' : 'text-[#7e8088] hover:text-[#141517]'
                  }`}
                  aria-label="Architectural list view"
                >
                  <ListFilter className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Secondary Filter Row: Bedrooms & Specific Features */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#eee7dd] text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#8a6834] font-medium uppercase tracking-wider text-[10px]">Bedrooms:</span>
              {bedOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedBeds(opt)}
                  className={`px-2.5 py-0.5 rounded-md font-mono text-[11px] transition-all cursor-pointer ${
                    selectedBeds === opt
                      ? 'bg-[#b89255] text-white font-semibold'
                      : 'bg-white border border-[#ded6c7] text-[#5c5e66] hover:bg-[#ede7dc]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-[#8a6834] font-medium uppercase tracking-wider text-[10px]">Key Feature:</span>
              {amenityOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedAmenity(opt)}
                  className={`px-2.5 py-0.5 rounded-md text-[11px] whitespace-nowrap transition-all cursor-pointer ${
                    selectedAmenity === opt
                      ? 'bg-[#141517] text-white font-semibold'
                      : 'bg-white border border-[#ded6c7] text-[#5c5e66] hover:bg-[#ede7dc]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Projects Grid / Architectural Table Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        
        {/* Results Counter & Active Filters Reset */}
        <div className="flex items-center justify-between mb-8 text-xs text-[#7e8088] font-mono">
          <div className="flex items-center gap-3">
            <span>Showing {filteredProjects.length} of {RESIDENCE_SLIDES.length} curated estates</span>
            {compareList.length > 0 && (
              <span className="text-[#b89255] font-semibold">
                • {compareList.length} selected for comparison
              </span>
            )}
          </div>

          {(selectedCategory !== 'ALL' || selectedLocation !== 'ALL' || selectedBeds !== 'ALL' || selectedAmenity !== 'ALL' || searchQuery) && (
            <button 
              onClick={() => { 
                setSelectedCategory('ALL')
                setSelectedLocation('ALL') 
                setSelectedBeds('ALL')
                setSelectedAmenity('ALL')
                setSearchQuery('') 
              }}
              className="text-[#8a6834] underline hover:text-[#141517] cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-[#ded6c7] p-8">
            <Sparkles className="w-8 h-8 text-[#b89255] mx-auto mb-3" />
            <h3 className="font-serif text-2xl font-light text-[#141517] mb-2">No Matching Residences Found</h3>
            <p className="text-sm text-[#7e8088] max-w-md mx-auto mb-6">
              We frequently represent undisclosed estates in our private diplomatic registry that match your specific criteria.
            </p>
            <button
              onClick={() => onOpenBooking('Off-Market Inquiries')}
              className="px-6 py-2.5 rounded-full bg-[#141517] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#b89255] transition-colors cursor-pointer"
            >
              Request Confidential Search
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          
          /* Card Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => {
              const isCompared = compareList.some(c => c.id === item.id)
              return (
                <article 
                  key={item.id}
                  className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between ${
                    isCompared ? 'border-[#b89255] ring-2 ring-[#b89255]/30' : 'border-[#e8e2d5] hover:border-[#b89255]/70'
                  }`}
                >
                  {/* Image & Badges */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#eee7dc]">
                    <img 
                      src={item.image} 
                      alt={item.specs.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white/90 border border-white/10">
                      {item.category}
                    </div>

                    {/* Compare Button on Image */}
                    <button
                      onClick={() => toggleCompare(item)}
                      className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer backdrop-blur-md border ${
                        isCompared 
                          ? 'bg-[#c8a876] text-[#141517] border-[#c8a876]' 
                          : 'bg-black/60 text-white/90 border-white/20 hover:bg-white hover:text-[#141517]'
                      }`}
                      title={isCompared ? "Remove from comparison" : "Add to side-by-side comparison"}
                    >
                      {isCompared ? "✓ In Compare" : "+ Compare"}
                    </button>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4 text-2xl font-serif text-white font-light tracking-wide drop-shadow">
                      {item.price}
                    </div>
                  </div>

                  {/* Details Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#8a6834] font-medium mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </div>
                        <span className="font-mono text-[10px] text-[#7e8088]">{item.yearBuilt}</span>
                      </div>

                      <h3 className="font-serif text-2xl font-light text-[#141517] group-hover:text-[#b89255] transition-colors leading-snug">
                        {item.specs.name}
                      </h3>
                      
                      <p className="text-xs text-[#7e8088] mt-0.5 font-mono">
                        {item.neighborhood} • {item.architect}
                      </p>

                      <p className="text-xs text-[#5c5e66] font-light mt-3 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Specs Bar */}
                    <div className="mt-6 pt-4 border-t border-[#ede7dd]">
                      <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#45474f] font-light mb-5">
                        <div className="flex flex-col items-center">
                          <Bed className="w-4 h-4 text-[#8a6834] mb-1" />
                          <span>{item.specs.beds}</span>
                        </div>
                        <div className="flex flex-col items-center border-x border-[#ede7dd]">
                          <Bath className="w-4 h-4 text-[#8a6834] mb-1" />
                          <span>{item.specs.baths}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Maximize2 className="w-4 h-4 text-[#8a6834] mb-1" />
                          <span>{item.specs.area}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onSelectResidence(item)}
                          className="py-2.5 px-3 rounded-lg border border-[#d6cdc0] hover:border-[#141517] text-[#141517] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
                        >
                          Inspect Specs
                        </button>
                        <button
                          onClick={() => onOpenBooking(item.specs.name)}
                          className="py-2.5 px-3 rounded-lg bg-[#141517] hover:bg-[#b89255] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
                        >
                          Book Viewing
                        </button>
                      </div>
                    </div>

                  </div>
                </article>
              )
            })}
          </div>

        ) : (

          /* Architectural Blueprint Table View */
          <div className="bg-white rounded-2xl border border-[#ded6c7] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#141517] text-white uppercase tracking-wider font-mono text-[11px] border-b border-[#2a2b30]">
                    <th className="py-4 px-6">Residence & Enclave</th>
                    <th className="py-4 px-4">Typology</th>
                    <th className="py-4 px-4">Architect</th>
                    <th className="py-4 px-4">Specs (Beds / Area)</th>
                    <th className="py-4 px-4">Price</th>
                    <th className="py-4 px-4">Compare</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ede7dd]">
                  {filteredProjects.map((item) => {
                    const isCompared = compareList.some(c => c.id === item.id)
                    return (
                      <tr key={item.id} className="hover:bg-[#fbf9f5] transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <img 
                              src={item.image} 
                              alt={item.specs.name} 
                              className="w-12 h-12 rounded-lg object-cover" 
                            />
                            <div>
                              <h4 className="font-serif text-base font-light text-[#141517]">{item.specs.name}</h4>
                              <p className="text-[11px] text-[#7e8088] font-mono">{item.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-[#5c5e66] font-medium">
                          {item.category}
                        </td>
                        <td className="py-4 px-4 text-[#5c5e66] font-mono text-[11px]">
                          {item.architect}
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-mono text-[#141517] font-semibold">{item.specs.beds}</span>
                          <span className="text-[#7e8088] block text-[11px]">{item.specs.area}</span>
                        </td>
                        <td className="py-4 px-4 font-serif text-base text-[#141517]">
                          {item.price}
                        </td>
                        <td className="py-4 px-4">
                          <button
                            onClick={() => toggleCompare(item)}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-mono transition-colors cursor-pointer ${
                              isCompared 
                                ? 'bg-[#b89255] text-white font-bold' 
                                : 'bg-[#ede7dc] text-[#5c5e66] hover:bg-[#141517] hover:text-white'
                            }`}
                          >
                            {isCompared ? "Selected" : "+ Add"}
                          </button>
                        </td>
                        <td className="py-4 px-6 text-right space-x-2">
                          <button
                            onClick={() => onSelectResidence(item)}
                            className="px-3 py-1.5 rounded-md border border-[#ded6c7] hover:border-[#141517] text-xs font-semibold cursor-pointer"
                          >
                            Inspect
                          </button>
                          <button
                            onClick={() => onOpenBooking(item.specs.name)}
                            className="px-3 py-1.5 rounded-md bg-[#141517] hover:bg-[#b89255] text-white text-xs font-semibold cursor-pointer"
                          >
                            Book
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

        )}
      </section>

      {/* Floating Comparison Bar (when items are selected) */}
      {compareList.length > 0 && (
        <aside 
          aria-label="Estate comparison dock"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#141517] text-white px-6 py-3.5 rounded-full shadow-2xl border border-white/20 flex items-center gap-6 animate-fadeIn"
        >
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-[#c8a876]" />
            <div className="text-xs">
              <span className="font-semibold text-[#c8a876]">{compareList.length} of 2 Estates</span>
              <span className="text-white/60 ml-2 hidden sm:inline">selected for side-by-side architectural audit</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="px-5 py-2 rounded-full bg-[#c8a876] hover:bg-[#d6be90] text-[#141517] text-xs uppercase tracking-wider font-bold transition-all cursor-pointer shadow-md"
            >
              Compare Now
            </button>
            <button
              onClick={() => setCompareList([])}
              className="p-1 rounded-full text-white/50 hover:text-white transition-colors cursor-pointer"
              title="Clear comparison"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Side-by-Side Comparison Modal */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#fbf9f5] border border-[#ded5c5] text-[#141517] shadow-2xl p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCompareModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#ede7dc] hover:bg-[#141517] hover:text-white transition-colors cursor-pointer"
              aria-label="Close comparison"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold">Architectural Telemetry</span>
              <h2 className="font-serif text-3xl font-light text-[#141517] mt-1">
                Side-by-Side Estate Audit
              </h2>
            </div>

            {compareList.length < 2 ? (
              <div className="text-center py-10 bg-white rounded-2xl border border-[#ded6c7]">
                <p className="text-sm text-[#7e8088] mb-4">Please select a second estate from the portfolio to enable full comparative diagnostics.</p>
                <button
                  onClick={() => setIsCompareModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#141517] text-white text-xs uppercase tracking-wider font-semibold"
                >
                  Return to Portfolio
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6 sm:gap-10">
                {compareList.map((res) => (
                  <div key={res.id} className="bg-white rounded-2xl border border-[#ded6c7] p-5 sm:p-6 shadow-sm">
                    <img 
                      src={res.image} 
                      alt={res.specs.name} 
                      className="w-full aspect-[16/10] object-cover rounded-xl mb-4" 
                    />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8a6834] font-semibold">{res.category}</span>
                    <h3 className="font-serif text-2xl font-light text-[#141517] mb-1">{res.specs.name}</h3>
                    <div className="font-serif text-2xl text-[#b89255] font-light mb-4">{res.price}</div>

                    <div className="space-y-3 text-xs border-t border-[#f2ede4] pt-4 font-mono text-[#45474f]">
                      <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                        <span className="text-[#8a6834]">Enclave:</span>
                        <span>{res.location}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                        <span className="text-[#8a6834]">Architect:</span>
                        <span>{res.architect}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                        <span className="text-[#8a6834]">Bedrooms:</span>
                        <span className="font-bold">{res.specs.beds}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                        <span className="text-[#8a6834]">Bathrooms:</span>
                        <span>{res.specs.baths}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                        <span className="text-[#8a6834]">Gross Living Area:</span>
                        <span className="font-bold">{res.specs.area}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#f2ede4]">
                        <span className="text-[#8a6834]">Year Completed:</span>
                        <span>{res.yearBuilt}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-[#8a6834]">Registry Status:</span>
                        <span className="text-green-700 font-bold">{res.status}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#ede7dd] space-y-2">
                      <button
                        onClick={() => {
                          setIsCompareModalOpen(false)
                          onSelectResidence(res)
                        }}
                        className="w-full py-2.5 rounded-lg border border-[#ded6c7] hover:border-[#141517] text-[#141517] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Inspect Full Blueprint
                      </button>
                      <button
                        onClick={() => {
                          setIsCompareModalOpen(false)
                          onOpenBooking(res.specs.name)
                        }}
                        className="w-full py-2.5 rounded-lg bg-[#141517] hover:bg-[#b89255] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Book Private Viewing
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Dossier Download Modal */}
      {isDossierOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div 
            className="relative w-full max-w-lg rounded-3xl bg-[#fbf9f5] border border-[#ded5c5] text-[#141517] shadow-2xl p-8 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDossierOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#ede7dc] hover:bg-[#141517] hover:text-white transition-colors cursor-pointer"
              aria-label="Close dossier dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#141517] text-[#c8a876] flex items-center justify-center mx-auto mb-3 shadow-md">
                <FileDown className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold">Confidential Publication</span>
              <h2 className="font-serif text-3xl font-light text-[#141517] mt-1">
                2026 Portfolio Monograph
              </h2>
              <p className="text-xs text-[#7e8088] mt-2">
                Includes architectural blueprints, seismic certificates, and private off-market financial telemetry.
              </p>
            </div>

            {dossierDownloaded ? (
              <div className="p-6 rounded-2xl bg-white border border-[#b89255]/40 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl font-light text-[#141517]">Encrypted Dossier Transmitted</h4>
                <p className="text-xs text-[#5c5e66] leading-relaxed">
                  The monograph download package has been securely dispatched to <span className="font-mono font-medium text-[#141517]">{dossierForm.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDossierSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-1.5">
                    Patron / Representative Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. M. Tariq Al-Hussaini"
                    value={dossierForm.name}
                    onChange={(e) => setDossierForm({ ...dossierForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-white border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-1.5">
                    Confidential Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="patron@domain.com"
                    value={dossierForm.email}
                    onChange={(e) => setDossierForm({ ...dossierForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-white border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141517] mb-1.5">
                    Dossier Edition
                  </label>
                  <select
                    value={dossierForm.format}
                    onChange={(e) => setDossierForm({ ...dossierForm, format: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-white border border-[#ded6c7] rounded-xl text-[#141517] focus:outline-none focus:border-[#b89255] cursor-pointer"
                  >
                    <option value="Full 48-Page Monograph">Full 48-Page Architectural Monograph</option>
                    <option value="Executive Investment Prospectus">Executive Investment & Yield Prospectus</option>
                    <option value="Diplomatic Security & Ballistics Annex">Diplomatic Security & Ballistics Annex</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#141517] hover:bg-[#b89255] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-lg mt-2"
                >
                  Request Monograph Access
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Bespoke Commissions Banner */}
      <section className="bg-[#ede7dc] border-t border-[#ded5c5] py-20 px-6 sm:px-10 lg:px-14">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white p-8 sm:p-14 border border-[#e2d9cb] shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#8a6834] text-xs uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Private Commissions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#141517] mb-3">
              Need a Custom Architectural Build?
            </h2>
            <p className="text-sm text-[#5c5e66] font-light max-w-xl leading-relaxed">
              Our bespoke development desk manages land acquisition, international architectural design, and turnkey diplomatic-grade construction for private clients.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Private Commission Inquiry')}
            className="whitespace-nowrap px-8 py-4 rounded-full bg-[#141517] hover:bg-[#b89255] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md"
          >
            Commission an Estate
          </button>
        </div>
      </section>
    </div>
  )
}
