'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Building, Calendar, MapPin, Eye, Grid, List, Search } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { getProjectsByCategory, getProjectStats } from '../../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const stats = getProjectStats()
  const filteredProjects = getProjectsByCategory(activeFilter).filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesSearch
  })

  const categories = [
    { key: 'all', label: 'All Projects', count: stats.total },
    { key: 'residential', label: 'Residential', count: stats.residential },
    { key: 'commercial', label: 'Commercial', count: stats.commercial },
    { key: 'renovation', label: 'Renovations', count: stats.renovation },
    { key: 'current', label: 'Current Projects', count: stats.current }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Mobile Optimized */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-1000"
            style={{ backgroundImage: 'url(/banner.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-none tracking-tight">
              <span className="block">PROJECTS &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                CRAFTSMANSHIP
              </span>
            </h1>
            
            <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed font-light max-w-4xl mx-auto px-4">
              Explore our portfolio of exceptional construction projects, from luxury custom homes to commercial developments across Kamloops and the Thompson Valley.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button 
                onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                View Our Work
                <Eye className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <Link 
                href="/sales" 
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-amber-400 text-white hover:text-amber-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300"
              >
                Available Homes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Mobile Optimized */}
      <section id="projects-section" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header - Mobile Optimized */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 text-gray-600">
              OUR PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-8">
              Featured
              <span className="block text-amber-500">Projects</span>
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
              Over 30+ years of construction excellence. Each project represents our commitment to quality craftsmanship and innovative design.
            </p>
          </div>

          {/* Filters and Search - Mobile Optimized */}
          <div className="mb-8 sm:mb-12">
            
            {/* Search Bar - Mobile Optimized */}
            <div className="relative max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              <Search className="absolute left-7 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Filter Tabs - Mobile Optimized */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-4 mb-4 sm:mb-6 px-2 sm:px-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveFilter(category.key)}
                  className={`px-2.5 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                    activeFilter === category.key
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">
                    {category.key === 'all' ? 'All' : 
                     category.key === 'residential' ? 'Home' :
                     category.key === 'commercial' ? 'Comm' :
                     category.key === 'renovation' ? 'Reno' : 'Current'}
                  </span>
                  <span className="ml-1 sm:ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* View Toggle - Mobile Optimized */}
            <div className="flex justify-center items-center gap-1 sm:gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Current Projects Notice - Mobile Optimized */}
          {activeFilter === 'current' && stats.current === 0 && (
            <div className="text-center py-12 sm:py-16 px-4">
              <Building className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">No Current Projects</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                We don&apos;t have any active projects at the moment. Check back soon for updates on our upcoming developments.
              </p>
            </div>
          )}

          {/* Projects Grid/List - Mobile Optimized */}
          {activeFilter !== 'current' && (
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8' 
                : 'space-y-4 sm:space-y-6 lg:space-y-8'
            }`}>
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group cursor-pointer ${
                    viewMode === 'grid' 
                      ? 'bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 sm:duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden mx-2 sm:mx-0' 
                      : 'bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 overflow-hidden mx-2 sm:mx-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => {
                    window.location.href = `/projects/${project.id}`
                  }}
                >
                  {viewMode === 'grid' ? (
                    // Grid View - Mobile Optimized
                    <>
                      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500 sm:duration-700"
                          style={{ backgroundImage: `url(/projects/${project.folder}/1.jpg)` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        
                        {/* Project Status Badge - Mobile Optimized */}
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                          </span>
                        </div>

                        {/* Project Value - Mobile Optimized */}
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                            {project.value}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center space-x-1.5 sm:space-x-2 mb-2 sm:mb-3 text-xs sm:text-sm">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500 flex-shrink-0" />
                          <span className="text-gray-500">{project.year}</span>
                          <span className="text-gray-300">•</span>
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500 flex-shrink-0" />
                          <span className="text-gray-500 truncate">{project.location}</span>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 2 && (
                            <span className="px-2 py-0.5 sm:py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                              +{project.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View - Mobile Optimized
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3 h-40 sm:h-48 lg:h-auto relative overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                          style={{ backgroundImage: `url(/projects/${project.folder}/1.jpg)` }}
                        />
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="sm:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3 text-xs sm:text-sm">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
                              <span className="text-gray-500">{project.year}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
                              <span className="text-gray-500">{project.location}</span>
                            </div>
                            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                              {project.value}
                            </span>
                          </div>
                          
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-500 transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 text-gray-600 text-xs sm:text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* No Results - Mobile Optimized */}
          {filteredProjects.length === 0 && activeFilter !== 'current' && (
            <div className="text-center py-12 sm:py-16 px-4">
              <Search className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">No Projects Found</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Track Record
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Three decades of construction excellence in Kamloops and the Thompson Valley
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-500 mb-1 sm:mb-2">30+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-500 mb-1 sm:mb-2">{stats.total}</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-500 mb-1 sm:mb-2">$50M+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Total Investment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-500 mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Ready to Start
            <span className="block text-amber-500">Your Project?</span>
          </h2>
          
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
            Let&apos;s discuss your vision and bring it to life with our proven expertise and commitment to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start Your Project
            </button>
            
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center border-2 border-gray-900 hover:border-amber-500 text-gray-900 hover:text-amber-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}