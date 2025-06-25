'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, Home, Grid, List, X, Eye, ZoomIn, ZoomOut, RotateCcw, Ruler, Hammer } from 'lucide-react'
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
    <div className="page-plans min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center lg:bg-fixed scale-110 transition-transform duration-1000"
            style={{ backgroundImage: 'url(houseplan-cover/1.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 text-center text-white">
          <div className="animate-fade-in-up space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="hidden sm:inline-flex items-center px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium tracking-wide border border-white/20">
              <Ruler className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              HOUSE PLANS
            </div>
            
            <h1 className="font-bold leading-none tracking-tight">
              <span 
                className="block mb-2 sm:mb-3"
                style={{ fontSize: 'clamp(1.75rem, 8vw, 5rem)' }}
              >
                START BUILDING
              </span>
              <span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500"
                style={{ fontSize: 'clamp(1.5rem, 7vw, 5rem)' }}
              >
                YOUR DREAM HOME
              </span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto px-2 sm:px-4">
              Pick from over 1200+ different house plans and we can customize it for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <button 
                onClick={() => {
                  const term = prompt('Search for a plan number:')
                  if (term !== null) handleSearch(term)
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Search Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <span className="inline-block px-3 sm:px-4 py-1 bg-amber-100 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4 text-amber-700">
                AVAILABLE PLANS
              </span>
              <h2 className="font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)' }}>
                House Plans
                <span className="block text-amber-500">Collection</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {loading ? 'Loading plans...' : `Showing ${plans.length} of ${totalPlans.toLocaleString()}+ available plans`}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              {/* Simple Search */}
              <div className="flex items-center space-x-2">
                <div className="relative flex-1 sm:flex-none">
                  <input
                    type="text"
                    placeholder="Search plan number..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full sm:w-64 px-4 py-2.5 sm:py-2 border border-amber-200 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                </div>
                {searchTerm && (
                  <button 
                    onClick={clearSearch}
                    className="p-2 text-amber-600 hover:text-amber-700 bg-white rounded-full shadow-sm border border-amber-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              {/* View Toggle */}
              <div className="bg-white rounded-full p-1 border border-amber-200 shadow-sm">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'text-amber-600 hover:text-amber-700'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'text-amber-600 hover:text-amber-700'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Plans Grid/List */}
          {loading ? (
            // Loading State
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-amber-100">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100 animate-pulse" />
                  <div className="p-4 sm:p-6">
                    <div className="h-5 sm:h-6 bg-gradient-to-r from-amber-100 to-yellow-100 rounded animate-pulse mb-2" />
                    <div className="h-3 sm:h-4 bg-gradient-to-r from-amber-100 to-yellow-100 rounded animate-pulse w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            // Error State
            <div className="text-center py-12 sm:py-16">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200 max-w-md mx-auto">
                <div className="text-amber-500 text-4xl sm:text-6xl mb-4">⚠️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Error Loading Plans</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{error}</p>
                <button 
                  onClick={loadPlans}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : plans.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6' : 'space-y-4'}>
              {plans.map((plan) => (
                <div key={plan.id} className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:border-amber-300 ${viewMode === 'list' ? 'flex' : 'hover:-translate-y-1'}`}>
                  
                  {/* Plan Image */}
                  <div className={`relative group ${viewMode === 'list' ? 'w-48 sm:w-64 flex-shrink-0' : 'aspect-square'}`}>
                    <img
                      src={`/plans/${plan.images}`}
                      alt={`Plan ${plan.plan_number}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder-plan.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* View Plan Overlay */}
                    <button 
                      onClick={() => setSelectedPlan(plan)}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="bg-white text-gray-900 px-3 sm:px-4 py-2 rounded-full font-semibold flex items-center text-xs sm:text-sm shadow-lg">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        View Plan
                      </div>
                    </button>
                  </div>

                  {/* Plan Details - Just Plan Number */}
                  <div className={`p-4 sm:p-6 text-center ${viewMode === 'list' ? 'flex-1 flex items-center justify-center' : ''}`}>
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1">
                        Plan {plan.plan_number}
                      </h3>
                      <div className="inline-flex items-center text-xs sm:text-sm text-amber-600 font-medium">
                        <Hammer className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Ready to Build
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200 max-w-md mx-auto">
                <Home className="h-12 w-12 sm:h-16 sm:w-16 text-amber-300 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Plans Found</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">No house plan found matching your search criteria.</p>
                <button 
                  onClick={clearSearch}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 sm:mt-12">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-white border border-amber-200 rounded-full text-gray-700 hover:bg-amber-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Previous
              </button>
              
              <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto">
                {/* Show page numbers */}
                {currentPage > 2 && (
                  <>
                    <button onClick={() => handlePageChange(1)} className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 min-w-[32px]">1</button>
                    {currentPage > 3 && <span className="text-gray-400 text-xs sm:text-sm">...</span>}
                  </>
                )}
                
                {currentPage > 1 && (
                  <button onClick={() => handlePageChange(currentPage - 1)} className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 min-w-[32px]">
                    {currentPage - 1}
                  </button>
                )}
                
                <span className="px-2 sm:px-3 py-1 sm:py-2 bg-amber-600 text-white rounded-lg font-medium text-xs sm:text-sm min-w-[32px] text-center">
                  {currentPage}
                </span>
                
                {currentPage < totalPages && (
                  <button onClick={() => handlePageChange(currentPage + 1)} className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 min-w-[32px]">
                    {currentPage + 1}
                  </button>
                )}
                
                {currentPage < totalPages - 1 && (
                  <>
                    {currentPage < totalPages - 2 && <span className="text-gray-400 text-xs sm:text-sm">...</span>}
                    <button onClick={() => handlePageChange(totalPages)} className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 min-w-[32px]">
                      {totalPages}
                    </button>
                  </>
                )}
              </div>
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-white border border-amber-200 rounded-full text-gray-700 hover:bg-amber-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Next
              </button>
            </div>
          )}
          
          <div className="text-center text-gray-600 text-xs sm:text-sm mt-4">
            Page {currentPage} of {totalPages} ({totalPlans.toLocaleString()} total plans)
          </div>
        </div>
      </section>

      {/* Plan Viewer Modal with Zoom */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-amber-200 gap-3 sm:gap-0">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Plan {selectedPlan.plan_number}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Use mouse wheel to zoom, drag to pan</p>
              </div>
              
              {/* Zoom Controls */}
              <div className="flex items-center space-x-2 bg-amber-50 rounded-full p-1">
                <button 
                  onClick={handleZoomOut}
                  className="p-2 bg-white hover:bg-amber-100 rounded-full transition-colors shadow-sm"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-4 w-4 sm:h-5 sm:w-5 text-amber-700" />
                </button>
                
                <span className="text-xs sm:text-sm font-medium text-amber-700 min-w-[50px] sm:min-w-[70px] text-center px-2">
                  {Math.round(zoom * 100)}%
                </span>
                
                <button 
                  onClick={handleZoomIn}
                  className="p-2 bg-white hover:bg-amber-100 rounded-full transition-colors shadow-sm"
                  title="Zoom In"
                >
                  <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5 text-amber-700" />
                </button>
                
                <button 
                  onClick={resetZoom}
                  className="p-2 bg-white hover:bg-amber-100 rounded-full transition-colors shadow-sm"
                  title="Reset Zoom"
                >
                  <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5 text-amber-700" />
                </button>
                
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="p-2 bg-white hover:bg-red-100 rounded-full transition-colors shadow-sm ml-2"
                >
                  <X className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
                </button>
              </div>
            </div>
            
            {/* Zoomable Image Container */}
            <div 
              className="flex-1 bg-gradient-to-br from-amber-50 to-yellow-50 overflow-hidden relative flex items-center justify-center"
              style={{ 
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                minHeight: '300px',
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
                  className="block max-w-full max-h-full object-contain select-none shadow-2xl rounded-lg"
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
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                {zoom === 1 ? (
                  <span>🔍 Scroll to zoom • Click and drag when zoomed</span>
                ) : (
                  <span>🖱️ Drag to move • Scroll to zoom • Click reset to center</span>
                )}
              </div>
              
              {/* Zoom Level Indicator */}
              <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                {Math.round(zoom * 100)}%
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-amber-200 text-center bg-gradient-to-r from-amber-50 to-yellow-50">
              <a 
                href={`mailto:info@hodder.ca?subject=Inquiry about Plan ${selectedPlan.plan_number}`}
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-black px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                <Hammer className="mr-2 h-4 w-4" />
                Inquire About Plan {selectedPlan.plan_number}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-amber-100 to-yellow-100">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 lg:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-amber-200">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full mb-6 sm:mb-8">
              <Ruler className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            
            <h2 className="font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8" style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)' }}>
              Found Your
              <span className="block text-amber-500">Perfect Plan?</span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s bring your dream home to life. Contact us to discuss customization options and get started on your building journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a 
                href="mailto:info@hodder.ca" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Hammer className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Us About Plans
              </a>
              
              <Link 
                href="/about" 
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-amber-600 hover:border-amber-700 text-amber-600 hover:text-amber-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        .page-plans {
          --theme-primary: theme('colors.amber.600');
          --theme-primary-hover: theme('colors.amber.700');
          --theme-accent: theme('colors.yellow.500');
          --theme-background: theme('colors.amber.50');
          --theme-light: theme('colors.amber.100');
          --theme-gradient-from: theme('colors.amber.500');
          --theme-gradient-to: theme('colors.yellow.600');
        }
      `}</style>
    </div>
  )
}