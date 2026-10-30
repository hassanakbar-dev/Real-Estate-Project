import React, { useState, useMemo } from 'react'
import { 
  ArrowUpRight, 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  X, 
  Sparkles, 
  Check, 
  Search, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Share2, 
  Download, 
  FileText,
  Quote,
  CheckCircle2
} from 'lucide-react'
import { BLOG_POSTS } from '../data/blogData'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('ALL')
  const [activeArticle, setActiveArticle] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  
  // Audio narration simulated state inside reader
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  // Download monograph state
  const [downloadedPaper, setDownloadedPaper] = useState(null)

  const categories = ['ALL', 'Architecture & Design', 'Market Insights', 'Interior Craft', 'Private Advisory', 'Sustainability']
  const topics = ['#BiophilicDesign', '#DiplomaticSecurity', '#ItalianMarble', '#AcousticSilence', '#MargallaFoothills', '#NetZero']

  const whitepapers = [
    {
      id: 1,
      title: "2026 Margalla Foothills Topographical & Valuation Study",
      desc: "An exhaustive 36-page spatial analysis tracking land scarcity, microclimate shifts, and 10-year capital appreciation in Islamabad's northern corridor.",
      pages: "36 Pages",
      filesize: "4.8 MB PDF"
    },
    {
      id: 2,
      title: "Acoustic Engineering in Diplomatic Residences",
      desc: "Standard protocols for achieving sub-28dB interior ambient noise levels using decoupled post-tensioned slabs and triple-glazed curtain walls.",
      pages: "22 Pages",
      filesize: "3.2 MB PDF"
    },
    {
      id: 3,
      title: "Foreign Capital Remittance & Sovereign Escrow Manual",
      desc: "Legal frameworks for non-resident patrons, overseas Pakistanis, and international family offices acquiring prime capital real estate.",
      pages: "18 Pages",
      filesize: "2.1 MB PDF"
    }
  ]

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory
      const query = searchQuery.toLowerCase()
      const matchesSearch = 
        !searchQuery ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)

      const matchesTopic = selectedTopic === 'ALL' || post.content.toLowerCase().includes(selectedTopic.replace('#', '').toLowerCase())

      return matchesCategory && matchesSearch && matchesTopic
    })
  }, [selectedCategory, searchQuery, selectedTopic])

  const featuredPost = BLOG_POSTS[0]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterSubscribed(true)
    setTimeout(() => {
      setNewsletterEmail('')
    }, 3000)
  }

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2500)
  }

  const handleDownloadPaper = (id) => {
    setDownloadedPaper(id)
    setTimeout(() => setDownloadedPaper(null), 3000)
  }

  return (
    <div className="bg-[#fbf9f5] text-[#141517] min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 px-6 sm:px-10 lg:px-14 bg-[#141517] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=80" 
            alt="The Journal" 
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-[#141517]/85 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a876]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#c8a876] font-medium">
              The Luxe Gazette & Journal
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
            Perspectives on Space, Light & Value
          </h1>

          <p className="text-white/70 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Curated essays, private market analyses, and interviews with leading architectural voices shaping the South Asian luxury landscape.
          </p>
        </div>
      </section>

      {/* Categories & Search Toolbar */}
      <section className="sticky top-0 z-30 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#e5dfd3] py-4 px-6 sm:px-10 lg:px-14 shadow-sm">
        <div className="max-w-7xl mx-auto space-y-3">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a6834]" />
              <input 
                type="text" 
                placeholder="Search essays, authors, concepts..."
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
                  {cat === 'ALL' ? 'All Publications' : cat}
                </button>
              ))}
            </div>

            <span className="text-xs text-[#7e8088] font-mono hidden lg:inline-block">
              {filteredPosts.length} Articles
            </span>
          </div>

          {/* Trending Topic Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs border-t border-[#eee7dd] pt-2">
            <span className="text-[#8a6834] font-medium uppercase tracking-wider text-[10px] whitespace-nowrap">
              Trending Topics:
            </span>
            <button
              onClick={() => setSelectedTopic('ALL')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                selectedTopic === 'ALL' ? 'bg-[#b89255] text-white' : 'bg-white border border-[#ded6c7] text-[#5c5e66]'
              }`}
            >
              All Topics
            </button>
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTopic(t)}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTopic === t ? 'bg-[#141517] text-[#c8a876]' : 'bg-white border border-[#ded6c7] text-[#5c5e66] hover:bg-[#ede7dc]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Lead Article (when ALL categories and no query) */}
      {selectedCategory === 'ALL' && !searchQuery && selectedTopic === 'ALL' && (
        <section className="pt-16 pb-12 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
          <div className="group rounded-3xl overflow-hidden bg-white border border-[#e8e2d5] hover:border-[#b89255]/70 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#e4ded3]">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute top-6 left-6 bg-[#141517]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-[#c8a876] border border-white/10">
                Featured Editorial
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#7e8088] font-mono mb-4">
                  <span className="text-[#8a6834] font-semibold">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#141517] group-hover:text-[#b89255] transition-colors mb-4 leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-[#5c5e66] font-light leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#eee7dd]">
                  <img 
                    src={featuredPost.author.avatar} 
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#b89255]"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-[#141517]">{featuredPost.author.name}</h4>
                    <p className="text-[11px] text-[#7e8088]">{featuredPost.author.role}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(featuredPost)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#141517] hover:text-[#b89255] transition-colors cursor-pointer group/btn"
                >
                  <span>Read Complete Essay</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Articles */}
      <section className="py-12 pb-24 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#ded6c7] p-8">
            <BookOpen className="w-8 h-8 text-[#b89255] mx-auto mb-3" />
            <h3 className="font-serif text-2xl font-light text-[#141517] mb-2">No Articles Found</h3>
            <p className="text-xs text-[#7e8088] max-w-md mx-auto mb-4">
              Try adjusting your search criteria or resetting category filters.
            </p>
            <button
              onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); setSelectedTopic('ALL'); }}
              className="px-6 py-2 rounded-full bg-[#141517] text-white text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e8e2d5] hover:border-[#b89255]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_6px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e5dfd3]">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-[#141517]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-[#c8a876] border border-white/10">
                    {post.category}
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#7e8088] font-mono mb-3">
                      <Calendar className="w-3.5 h-3.5 text-[#8a6834]" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-light text-[#141517] group-hover:text-[#b89255] transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5c5e66] font-light leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#ede7dd] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#c8a876]/40"
                      />
                      <div>
                        <span className="text-xs text-[#141517] font-medium block">{post.author.name}</span>
                        <span className="text-[10px] text-[#7e8088]">{post.author.role}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveArticle(post)}
                      className="p-2.5 rounded-full bg-[#fbf9f5] hover:bg-[#141517] text-[#8a6834] hover:text-[#c8a876] transition-colors cursor-pointer border border-[#ded6c7]"
                      aria-label="Read article"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Downloadable Architectural Monographs & Quarterly Whitepapers */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 bg-[#141517] text-white border-t border-[#2a2b30]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a876]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#c8a876] font-semibold">
                  Architectural Research Library
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
                Quarterly Monographs & Whitepapers
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-md">
              In-depth treatises published by our architectural evaluation board for patrons, institutional investors, and structural scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((paper) => (
              <div 
                key={paper.id}
                className="bg-[#1b1c21] rounded-2xl border border-white/10 p-7 flex flex-col justify-between hover:border-[#c8a876]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#c8a876] mb-4">
                    <span>{paper.pages}</span>
                    <span>{paper.filesize}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-white mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                    {paper.desc}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => handleDownloadPaper(paper.id)}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-[#c8a876] hover:text-[#141517] text-white text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {downloadedPaper === paper.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Dispatched to Patron</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Monograph</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Gazette Subscription Banner */}
      <section className="bg-[#ede7dc] border-t border-[#ded5c5] py-20 px-6 sm:px-10 lg:px-14">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-[#141517] text-[#c8a876] flex items-center justify-center mx-auto mb-5 shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#8a6834] font-semibold">
            Confidential Correspondence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#141517] mt-2 mb-4">
            Subscribe to The Private Gazette
          </h2>
          <p className="text-sm text-[#5c5e66] font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Quarterly architectural critiques, private market telemetry, and unlisted off-market releases delivered directly to your inbox.
          </p>

          {newsletterSubscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141517] text-white text-xs font-medium">
              <Check className="w-4 h-4 text-[#c8a876]" />
              <span>You have been enrolled in The Private Gazette.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your confidential email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full px-5 py-3 rounded-full bg-white border border-[#d6cdc0] text-xs text-[#141517] placeholder-[#9c9992] focus:outline-none focus:border-[#b89255]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto whitespace-nowrap px-8 py-3 rounded-full bg-[#141517] hover:bg-[#b89255] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer shadow-md"
              >
                Enroll
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Enhanced Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#fbf9f5] border border-[#ded5c5] text-[#141517] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Action Buttons Top Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-[#fbf9f5]/90 backdrop-blur-md border-b border-[#ded5c5]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isPlayingAudio ? 'bg-[#b89255] text-white' : 'bg-white border border-[#ded6c7] text-[#141517] hover:bg-[#ede7dc]'
                  }`}
                >
                  {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlayingAudio ? 'Playing Audio Essay' : 'Listen to Essay (5:40 min)'}</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="p-1.5 rounded-full bg-white border border-[#ded6c7] text-[#5c5e66] hover:text-[#141517] transition-colors cursor-pointer"
                  title="Copy link"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
                {copiedLink && (
                  <span className="text-[10px] text-green-700 font-mono">Link Copied!</span>
                )}
              </div>

              <button
                onClick={() => {
                  setActiveArticle(null)
                  setIsPlayingAudio(false)
                }}
                className="p-2 rounded-full bg-[#141517] hover:bg-[#b89255] text-white transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Header Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e5dfd3]">
              <img 
                src={activeArticle.image} 
                alt={activeArticle.title}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#c8a876] font-semibold">{activeArticle.category}</span>
                <h2 className="font-serif text-2xl sm:text-4xl font-light mt-1 text-white leading-tight">
                  {activeArticle.title}
                </h2>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 sm:p-12">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#ede7dd] text-xs text-[#7e8088] font-mono">
                <div className="flex items-center gap-3">
                  <img 
                    src={activeArticle.author.avatar} 
                    alt={activeArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#c8a876]" 
                  />
                  <div>
                    <h5 className="font-sans font-bold text-[#141517] text-xs">{activeArticle.author.name}</h5>
                    <p className="text-[11px]">{activeArticle.author.role}</p>
                  </div>
                </div>
                <div>{activeArticle.date} • {activeArticle.readTime}</div>
              </div>

              {/* Simulated Audio Bar if playing */}
              {isPlayingAudio && (
                <div className="mb-8 p-4 rounded-2xl bg-[#ede7dc] border border-[#ded5c5] flex items-center justify-between gap-4 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-xs font-mono text-[#141517]">Audio Narration: Architectural Atelier Studio Voice</span>
                  </div>
                  <div className="w-32 bg-[#d6cdc0] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#b89255] h-full w-2/5 animate-pulse" />
                  </div>
                </div>
              )}

              {/* Body Text with Markdown formatting */}
              <div className="space-y-6 text-[#383a42] text-sm sm:text-base font-light leading-relaxed whitespace-pre-line">
                {activeArticle.content.trim()}
              </div>

              {/* Author Dossier Box */}
              <div className="mt-12 p-6 rounded-2xl bg-[#f2ede4] border border-[#ded5c5] flex flex-col sm:flex-row items-center gap-6">
                <img 
                  src={activeArticle.author.avatar} 
                  alt={activeArticle.author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#b89255]" 
                />
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8a6834] font-semibold">Contributing Editor</span>
                  <h4 className="font-serif text-lg font-light text-[#141517]">{activeArticle.author.name}</h4>
                  <p className="text-xs text-[#5c5e66] font-light mt-1">
                    Specializes in spatial diagnostics, acoustic isolation, and high-value residential advisory at Luxe Estates & Residences.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[#ede7dd] flex items-center justify-between">
                <span className="text-xs text-[#7e8088] font-mono">The Luxe Gazette • Islamabad</span>
                <button
                  onClick={() => {
                    setActiveArticle(null)
                    setIsPlayingAudio(false)
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#141517] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#b89255] transition-colors cursor-pointer"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
