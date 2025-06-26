'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Building, Calendar, MapPin, Eye, Grid, List, Search, Award, Wrench, Briefcase } from 'lucide-react'
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
    <div className="page-projects min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Mobile & Desktop Responsive */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center lg:bg-fixed scale-110 transition-transform duration-1000"
            style={{ backgroundImage: 'url(project-cover/1.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 text-center text-white">
          <div className="animate-fade-in-up space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="hidden sm:inline-flex items-center px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium tracking-wide border border-white/20">
              <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              OUR PORTFOLIO
            </div>
            
            <h1 className="font-bold leading-none tracking-tight">
              <span 
                className="block mb-2 sm:mb-3"
                style={{ fontSize: 'clamp(1.75rem, 8vw, 5rem)' }}
              >
                PROJECTS &
              </span>
              <span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-500"
                style={{ fontSize: 'clamp(1.5rem, 7vw, 5rem)' }}
              >
                CRAFTSMANSHIP
              </span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto px-2 sm:px-4">
              Explore our portfolio of exceptional construction projects, from luxury custom homes to commercial developments across Kamloops and the Thompson Valley.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <button 
                onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-600 hover:bg-slate-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                View Our Work
                <Eye className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <Link 
                href="/sales" 
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/30 hover:border-slate-400 text-white hover:text-slate-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300"
              >
                Available Homes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Mobile & Desktop Responsive */}
      <section id="projects-section" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          
          {/* Section Header with Controls */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1 bg-slate-100 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 text-slate-700">
              OUR PORTFOLIO
            </span>
            <h2 className="font-bold text-gray-900 mb-6 sm:mb-8" style={{ fontSize: 'clamp(1.5rem, 6vw, 4rem)' }}>
              Featured
              <span className="block text-slate-500">Projects</span>
            </h2>
            <p className="text-base sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2 sm:px-4">
              Over 40+ years of construction excellence. Each project represents our commitment to quality craftsmanship and innovative design.
            </p>
          </div>

          {/* Filters and Search - Mobile Responsive */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            
            {/* Search Bar */}
            <div className="relative max-w-full sm:max-w-md mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
              <Search className="absolute left-4 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm sm:text-base bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* Filter Tabs - Mobile Scroll, Desktop Wrap */}
            <div className="mb-4 sm:mb-6">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide px-2 sm:px-0 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveFilter(category.key)}
                    className={`flex-shrink-0 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${
                      activeFilter === category.key
                        ? 'bg-slate-600 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
            </div>

            {/* View Toggle */}
            <div className="flex justify-center items-center gap-1 sm:gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-slate-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Grid className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-slate-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <List className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Current Projects Notice */}
          {activeFilter === 'current' && stats.current === 0 && (
            <div className="text-center py-12 sm:py-16 px-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 max-w-md mx-auto">
                <Building className="h-12 w-12 sm:h-16 sm:w-16 text-slate-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">No Current Projects</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We don&apos;t have any active projects at the moment. Check back soon for updates on our upcoming developments.
                </p>
              </div>
            </div>
          )}

          {/* Projects Grid/List - Ultra Responsive */}
          {activeFilter !== 'current' && (
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8' 
                : 'space-y-4 sm:space-y-6 lg:space-y-8'
            } px-2 sm:px-0`}>
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group cursor-pointer ${
                    viewMode === 'grid' 
                      ? 'bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 sm:duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden border border-slate-100 hover:border-slate-300' 
                      : 'bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => {
                    window.location.href = `/projects/${project.id}`
                  }}
                >
                  {viewMode === 'grid' ? (
                    // Grid View - Mobile & Desktop Responsive
                    <>
                      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500 sm:duration-700"
                          style={{ backgroundImage: `url(/projects/${project.folder}/1.jpg)` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                        
                        {/* Project Status Badge */}
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                          <span className={`px-2 sm:px-3 py-1 text-white text-xs font-semibold rounded-full ${
                            project.status === 'completed' 
                              ? 'bg-slate-600' 
                              : 'bg-blue-600'
                          }`}>
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                          </span>
                        </div>

                        {/* Project Category */}
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                          <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-semibold rounded-full capitalize">
                            {project.category}
                          </span>
                        </div>

                        {/* View Project Overlay */}
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 px-4 py-2 rounded-full font-semibold flex items-center shadow-lg">
                            <Eye className="h-4 w-4 mr-2" />
                            View Project
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-5 lg:p-6">
                        <div className="flex items-center space-x-1.5 sm:space-x-2 mb-2 sm:mb-3 text-xs sm:text-sm">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500" />
                          <span className="text-gray-500">{project.year}</span>
                          <span className="text-gray-300">•</span>
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500" />
                          <span className="text-gray-500 truncate">{project.location}</span>
                        </div>
                        
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-slate-600 transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {project.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-0.5 sm:py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 2 && (
                            <span className="px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              +{project.tags.length - 2} more
                            </span>
                          )}
                        </div>

                        {/* Project Value */}
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center text-xs sm:text-sm text-slate-600 font-medium">
                            <Wrench className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            Professional Build
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700">
                            {project.value}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View - Mobile & Desktop Responsive
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3 h-40 sm:h-48 lg:h-auto relative overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                          style={{ backgroundImage: `url(/projects/${project.folder}/1.jpg)` }}
                        />
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                          <span className={`px-2 sm:px-3 py-1 text-white text-xs font-semibold rounded-full ${
                            project.status === 'completed' 
                              ? 'bg-slate-600' 
                              : 'bg-blue-600'
                          }`}>
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="sm:w-2/3 p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3 text-xs sm:text-sm">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500" />
                              <span className="text-gray-500">{project.year}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500" />
                              <span className="text-gray-500">{project.location}</span>
                            </div>
                            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full capitalize">
                              {project.category}
                            </span>
                            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                              {project.value}
                            </span>
                          </div>
                          
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-slate-600 transition-colors">
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
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-100 text-slate-600 text-xs sm:text-sm rounded-full"
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

          {/* No Results */}
          {filteredProjects.length === 0 && activeFilter !== 'current' && (
            <div className="text-center py-12 sm:py-16 px-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 max-w-md mx-auto">
                <Search className="h-12 w-12 sm:h-16 sm:w-16 text-slate-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">No Projects Found</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Try adjusting your search terms or filters to find what you&apos;re looking for.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Mobile & Desktop Responsive */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 bg-slate-100 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 text-slate-700">
              PROVEN EXCELLENCE
            </span>
            <h2 className="font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(1.25rem, 5vw, 2.5rem)' }}>
              Our Track Record
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Four decades of construction excellence in Kamloops and the Thompson Valley
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            <div className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl mb-3 sm:mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="font-bold text-slate-600 mb-1 sm:mb-2" style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)' }}>40+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Years Experience</div>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-3 sm:mb-4">
                <Building className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="font-bold text-slate-600 mb-1 sm:mb-2" style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)' }}>{stats.total}+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Completed Projects</div>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-3 sm:mb-4">
                <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="font-bold text-slate-600 mb-1 sm:mb-2" style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)' }}>$50M+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Total Investment</div>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-3 sm:mb-4">
                <Building className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="font-bold text-slate-600 mb-1 sm:mb-2" style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)' }}>100%</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile & Desktop Responsive */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 lg:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-slate-200">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full mb-6 sm:mb-8">
              <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            
            <h2 className="font-bold text-gray-900 mb-6 sm:mb-8" style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)' }}>
              Ready to Start
              <span className="block text-slate-500">Your Project?</span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s discuss your vision and bring it to life with our proven expertise and commitment to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="w-full sm:w-auto bg-slate-600 hover:bg-slate-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Your Project
              </button>
              
              <Link 
                href="/about" 
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-slate-600 hover:border-slate-700 text-slate-600 hover:text-slate-700 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}