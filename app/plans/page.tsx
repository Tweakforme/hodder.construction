'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, Home, Grid, List, X, Eye, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

// Type definitions
interface Plan {
  id: number
  plan_number: string
  images: string
}

interface PanPosition {
  x: number
  y: number
}

// Simple plan data - just plan number and image
const createSimplePlan = (filename: string, index: number): Plan => ({
  id: index + 1,
  plan_number: filename.replace('.gif', ''),
  images: filename
})

// Fetch plan files from API
const getAllPlanFilenames = async (): Promise<string[]> => {
  try {
    const response = await fetch('/api/plan-files')
    const data = await response.json()
    
    if (data.error) {
      console.error('Error fetching plan files:', data.error)
      return []
    }
    
    return data.files || []
  } catch (error) {
    console.error('Failed to fetch plan files:', error)
    return []
  }
}

// Simple filtering - just by plan number
const filterPlans = (allPlans: Plan[], searchTerm: string): Plan[] => {
  if (!searchTerm || !searchTerm.trim()) return allPlans
  
  return allPlans.filter(plan => 
    plan.plan_number.toLowerCase().includes(searchTerm.toLowerCase().trim())
  )
}

// Simple sorting - alphabetical by plan number
const sortPlans = (plans: Plan[]): Plan[] => {
  return [...plans].sort((a, b) => a.plan_number.localeCompare(b.plan_number))
}


export default function Plans() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPlans, setTotalPlans] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  
  // Zoom functionality state
  const [zoom, setZoom] = useState<number>(1)
  const [pan, setPan] = useState<PanPosition>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [dragStart, setDragStart] = useState<PanPosition>({ x: 0, y: 0 })
  
  const perPage = 20

  // Load plans when component mounts or search changes
  useEffect(() => {
    loadPlans()
  }, [searchTerm, currentPage])

  const loadPlans = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Get all plan filenames from the API
      const allFilenames = await getAllPlanFilenames()
      
      if (allFilenames.length === 0) {
        throw new Error('No plan files found in the plans directory')
      }
      
      // Convert filenames to simple plan objects
      const allPlans = allFilenames.map((filename, index) => 
        createSimplePlan(filename, index)
      )
      
      // Apply search filter
      const filteredPlans = filterPlans(allPlans, searchTerm)
      
      // Sort alphabetically
      const sortedPlans = sortPlans(filteredPlans)
      
      // Calculate pagination
      const totalFilteredPlans = sortedPlans.length
      const calculatedTotalPages = Math.ceil(totalFilteredPlans / perPage)
      const startIndex = (currentPage - 1) * perPage
      const endIndex = startIndex + perPage
      const paginatedPlans = sortedPlans.slice(startIndex, endIndex)
      
      setPlans(paginatedPlans)
      setTotalPlans(totalFilteredPlans)
      setTotalPages(calculatedTotalPages)
      
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 200))
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      setError(`Failed to load house plans: ${errorMessage}`)
      console.error('Error loading plans:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1) // Reset to first page when searching
  }

  const clearSearch = () => {
    setSearchTerm('')
    setCurrentPage(1)
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Zoom and pan functions
  const resetZoom = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 5)) // Max zoom 5x
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.25)) // Min zoom 0.25x
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - pan.x,
        y: e.clientY - pan.y
      })
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && zoom > 1) {
      e.preventDefault()
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = (e: MouseEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const delta = e.deltaY > 0 ? -0.25 : 0.25
    const newZoom = Math.max(0.25, Math.min(5, zoom + delta))
    
    // Calculate zoom point relative to the image center
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Adjust pan to zoom towards mouse position
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const zoomRatio = newZoom / zoom
    const newPanX = centerX + (pan.x + centerX - mouseX) * zoomRatio - centerX
    const newPanY = centerY + (pan.y + centerY - mouseY) * zoomRatio - centerY
    
    setZoom(newZoom)
    setPan({ x: newPanX, y: newPanY })
  }

  // Reset zoom when modal opens/closes
  useEffect(() => {
    if (selectedPlan) {
      resetZoom()
    }
  }, [selectedPlan])

  // Add event listeners for mouse events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])


  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center lg:bg-fixed scale-110 transition-transform duration-1000"
            style={{ backgroundImage: 'url(/banner.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium tracking-wide mb-6 border border-white/20">
              HOUSE PLANS
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none tracking-tight">
              <span className="block">START BUILDING</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                YOUR DREAM HOME
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed font-light max-w-4xl mx-auto">
              Pick from over 1200+ different house plans and we can customize it for you.
            </p>
            
            <button 
              onClick={() => {
                const term = prompt('Search for a plan number:')
                if (term !== null) handleSearch(term)
              }}
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Plans
            </button>
          </div>
        </div>
      </section>

      {/* Filter Modal - Simplified Search */}
      <div className="hidden"></div>

      {/* Plans Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Available House Plans
              </h2>
              <p className="text-gray-600">
                {loading ? 'Loading plans...' : `Showing ${plans.length} of ${totalPlans.toLocaleString()}+ available plans`}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Simple Search */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search plan number..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button 
                    onClick={clearSearch}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              {/* View Toggle */}
              <div className="bg-white rounded-xl p-1 border border-gray-200">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Plans Grid/List */}
          {loading ? (
            // Loading State
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-square bg-gray-200 animate-pulse" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-2/3" />
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            // Error State
            <div className="text-center py-16">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Plans</h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <button 
                onClick={loadPlans}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : plans.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
              {plans.map((plan) => (
                <div key={plan.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                  
                  {/* Plan Image */}
                  <div className={`relative group ${viewMode === 'list' ? 'w-64 flex-shrink-0' : 'aspect-square'}`}>
                    <img
                      src={`/plans/${plan.images}`}
                      alt={`Plan ${plan.plan_number}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder-plan.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* View Plan Overlay */}
                    <button 
                      onClick={() => setSelectedPlan(plan)}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        View Plan
                      </div>
                    </button>
                  </div>

                  {/* Plan Details - Just Plan Number */}
                  <div className={`p-6 text-center ${viewMode === 'list' ? 'flex-1 flex items-center justify-center' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900">
                      Plan {plan.plan_number}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Home className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Plans Found</h3>
              <p className="text-gray-600 mb-6">No house plan found matching your search criteria.</p>
              <button 
                onClick={clearSearch}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex items-center space-x-2">
                {/* Show page numbers */}
                {currentPage > 2 && (
                  <>
                    <button onClick={() => handlePageChange(1)} className="px-3 py-2 text-gray-600 hover:text-gray-900">1</button>
                    {currentPage > 3 && <span className="text-gray-400">...</span>}
                  </>
                )}
                
                {currentPage > 1 && (
                  <button onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-2 text-gray-600 hover:text-gray-900">
                    {currentPage - 1}
                  </button>
                )}
                
                <span className="px-3 py-2 bg-amber-600 text-white rounded-lg font-medium">
                  {currentPage}
                </span>
                
                {currentPage < totalPages && (
                  <button onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-2 text-gray-600 hover:text-gray-900">
                    {currentPage + 1}
                  </button>
                )}
                
                {currentPage < totalPages - 1 && (
                  <>
                    {currentPage < totalPages - 2 && <span className="text-gray-400">...</span>}
                    <button onClick={() => handlePageChange(totalPages)} className="px-3 py-2 text-gray-600 hover:text-gray-900">
                      {totalPages}
                    </button>
                  </>
                )}
              </div>
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
          
          <div className="text-center text-gray-600 text-sm mt-4">
            Page {currentPage} of {totalPages} ({totalPlans.toLocaleString()} total plans)
          </div>
        </div>
      </section>

      {/* Plan Viewer Modal with Zoom */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Plan {selectedPlan.plan_number}</h3>
                <p className="text-gray-600 text-sm">Use mouse wheel to zoom, drag to pan</p>
              </div>
              
              {/* Zoom Controls */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleZoomOut}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-5 w-5 text-gray-700" />
                </button>
                
                <span className="text-sm font-medium text-gray-700 min-w-[70px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                
                <button 
                  onClick={handleZoomIn}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="h-5 w-5 text-gray-700" />
                </button>
                
                <button 
                  onClick={resetZoom}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw className="h-5 w-5 text-gray-700" />
                </button>
                
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors ml-4"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>
            </div>
            
            {/* Zoomable Image Container */}
            <div 
              className="flex-1 bg-gray-100 overflow-hidden relative flex items-center justify-center"
              style={{ 
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                minHeight: '500px',
                maxHeight: 'calc(95vh - 200px)'
              }}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
            >
              <div 
                className="relative transition-transform duration-200 ease-out"
                style={{ 
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                }}
              >
                <img 
                  src={`/plans/${selectedPlan.images}`} 
                  alt={`Plan ${selectedPlan.plan_number}`}
                  className="block max-w-full max-h-full object-contain select-none"
                  style={{ 
                    maxWidth: 'calc(90vw - 100px)',
                    maxHeight: 'calc(90vh - 300px)',
                    width: 'auto',
                    height: 'auto'
                  }}
                  draggable={false}
                  onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    // Ensure image is properly centered when loaded
                    const target = e.target as HTMLImageElement
                    console.log('Image loaded:', target.naturalWidth, 'x', target.naturalHeight)
                  }}
                />
              </div>
              
              {/* Zoom Instructions Overlay */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-lg">
                {zoom === 1 ? (
                  <span>🔍 Scroll to zoom • Click and drag when zoomed</span>
                ) : (
                  <span>🖱️ Drag to move • Scroll to zoom • Click reset to center</span>
                )}
              </div>
              
              {/* Zoom Level Indicator */}
              <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium">
                {Math.round(zoom * 100)}%
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 text-center">
              <a 
                href={`mailto:info@hodderconstruction.com?subject=Inquiry about Plan ${selectedPlan.plan_number}`}
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Inquire About Plan {selectedPlan.plan_number}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Found Your
            <span className="block text-amber-500">Perfect Plan?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let&apos;s bring your dream home to life. Contact us to discuss customization options and get started.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:info@hodderconstruction.com" 
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Contact Us About Plans
            </a>
            
            <Link 
              href="/about" 
              className="inline-flex items-center border-2 border-gray-900 hover:border-amber-500 text-gray-900 hover:text-amber-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}