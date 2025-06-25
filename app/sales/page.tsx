'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Building2, ArrowRight, Mail, MapPin, Clock, Building, Award, ShoppingBag, Factory, Utensils, Warehouse, Stethoscope, Truck, Monitor } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { getProjectsByCategory, getProjectImages, type Project } from '../../data/projects'

export default function Commercial() {
  // Get ALL commercial projects dynamically
  const commercialProjects = getProjectsByCategory('commercial')

  // Helper function to get status badge
  const getStatusBadge = (project: Project) => {
    const statusConfig = {
      'Fire Rebuild': { color: 'bg-red-500', text: 'Fire Rebuild' },
      'New Build': { color: 'bg-emerald-500', text: 'New Build' },
      'Renovation': { color: 'bg-indigo-500', text: 'Renovation' },
      'Tenant Improvement': { color: 'bg-blue-500', text: 'Tenant Improvement' }
    }
    
    // Determine status from project data
    if (project.tags.includes('Fire Rebuild')) return statusConfig['Fire Rebuild']
    if (project.tags.includes('New Build')) return statusConfig['New Build']
    if (project.category === 'renovation') return statusConfig['Renovation']
    return statusConfig['Tenant Improvement']
  }

  // Helper function to get category icon
  const getCategoryIcon = (project: Project) => {
    if (project.tags.includes('Restaurant') || project.tags.includes('Bakery')) return Utensils
    if (project.tags.includes('Retail') || project.tags.includes('Liquor Store')) return ShoppingBag
    if (project.tags.includes('Gas Station')) return Truck
    if (project.tags.includes('Industrial')) return Warehouse
    return Building
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      {/* Hero Section - Blue Hour Commercial Focus */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
            style={{ 
              backgroundImage: 'url(/sale/1.jpg)',
              filter: 'saturate(110%) contrast(105%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-slate-800/75 to-indigo-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 text-center text-white">
          <div className="animate-fade-in-up space-y-4 sm:space-y-6 lg:space-y-8">
            
            {/* Elegant Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium tracking-wide border border-white/20 shadow-xl">
              <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-blue-300" />
              COMMERCIAL CONSTRUCTION & TENANT IMPROVEMENTS
            </div>
            
            {/* Professional Typography - Smaller Scale */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-bold leading-none tracking-tight">
                <span 
                  className="block mb-2 sm:mb-3 text-white"
                  style={{ fontSize: 'clamp(1.75rem, 6vw, 4rem)' }}
                >
                  BUILDING
                </span>
                <span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-cyan-300"
                  style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
                >
                  BUSINESS SPACES
                </span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-light max-w-3xl mx-auto px-2 sm:px-4">
                From restaurants and retail stores to medical offices and warehouses, we&apos;re your trusted partner for commercial construction and tenant improvements across Kamloops and Western Canada.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a 
                href="mailto:info@hodder.ca?subject=Commercial Construction Consultation"
                className="group w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Discuss Your Project
              </a>
              
              <Link 
                href="/projects" 
                className="group w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/30 hover:border-blue-300 text-white hover:text-blue-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              >
                <Building className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-4 sm:left-8 opacity-15">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
            <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
        </div>
        
        <div className="absolute top-1/3 right-4 sm:right-8 opacity-15">
          <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
            <Factory className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-stone-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6">
              OUR EXPERTISE
            </span>
            <h2 className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              Trusted Commercial Partners,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Proven Results</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content Side */}
            <div className="order-1 lg:order-1">
              
              {/* Featured Notice */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-xl mb-6 sm:mb-8 shadow-md">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                      Established Commercial Partnerships
                    </h3>
                    <p className="text-sm sm:text-base text-blue-800 leading-relaxed">
                      We&apos;ve successfully established ourselves as the trusted, long-term partners for recognizable brands in the marketplace, completing projects for Purdys Chocolatier, Amplifon Canada, and many others across Western Canada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 sm:space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <ShoppingBag className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Retail & Restaurant Builds</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Complete tenant improvements, restaurant remodels, retail builds and dismantling services for businesses across multiple industries.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Warehouse className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Industrial & Warehouse</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Warehouse racking, mezzanines for storage or office space, manufacturing facilities, and complete industrial builds.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Office & Healthcare Spaces</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Complete office builds, medical and dental offices, soundproofing, and security systems installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative order-2 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <div 
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                    style={{ 
                      backgroundImage: 'url(/banner.jpg)',
                      filter: 'hue-rotate(15deg) saturate(105%)'
                    }}
                  />
                </div>
                
                {/* Floating Achievement Cards */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{commercialProjects.length}+</div>
                    <div className="text-xs text-gray-600 font-medium">Commercial Projects</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <Factory className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600 font-medium">Western Canada</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-3 bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg shadow-lg transform -translate-y-1/2">
                  <Award className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Projects Portfolio */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-slate-100 to-blue-100/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-xs sm:text-sm font-bold tracking-wide mb-4 sm:mb-6 shadow-lg">
              COMMERCIAL PORTFOLIO
            </span>
            <h2 className="font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              Building Kamloops Business Community
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From new builds to renovations, we&apos;ve helped establish and revitalize some of Kamloops&apos; most beloved local businesses. Each project represents our commitment to quality craftsmanship and community partnership.
            </p>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{commercialProjects.length}</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">Projects Complete</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">{commercialProjects.filter(p => p.tags.includes('New Build')).length}</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">New Builds</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">{commercialProjects.filter(p => p.category === 'renovation' || p.tags.includes('Renovation')).length}</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">Renovations</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">10+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">BC Projects</div>
            </div>
          </div>

          {/* Professional Project Grid */}
          {commercialProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {commercialProjects.map((project) => {
                const StatusBadge = getStatusBadge(project)
                const CategoryIcon = getCategoryIcon(project)
                const projectImages = getProjectImages(project)
                
                return (
                  <Link href={`/projects/${project.id}`} key={project.id}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-200 hover:border-blue-300">
                      {/* Project Image */}
                      <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                        {projectImages[0] ? (
                          <Image
                            src={projectImages[0]}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                            <div className="text-center">
                              <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <div className="text-sm text-gray-500 font-medium">Project Image</div>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        
                        {/* Status Badge */}
                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 ${StatusBadge.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                            {StatusBadge.text}
                          </span>
                        </div>
                        
                        {/* Year Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-bold rounded-full shadow-lg">
                            {project.year}
                          </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
                      </div>

                      {/* Project Content */}
                      <div className="p-5 sm:p-6">
                        {/* Category & Location */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <CategoryIcon className="h-4 w-4 text-blue-500" />
                            <span className="font-medium capitalize">{project.category}</span>
                          </div>
                          <div className="text-xs text-gray-400 font-medium">
                            {project.location.split(',')[0]}
                          </div>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {project.title}
                        </h3>

                        {/* Project Description */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Project Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tags.slice(0, 3).map((tag, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* View Project Button */}
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            Click to view details
                          </div>
                          <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors">
                            View Project
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto">
                <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Commercial Projects Yet</h3>
                <p className="text-gray-600 text-sm">
                  Commercial projects will appear here once they&apos;re added to the portfolio.
                </p>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Commercial Project?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Join the growing list of Kamloops businesses that trust Hodder Construction for their commercial construction and renovation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@hodder.ca?subject=Commercial Project Consultation"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Get Free Consultation
                  <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <Link 
                  href="/projects"
                  className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300"
                >
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Diverse Commercial
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              From simple bathroom facelifts to complete mezzanine builds with fully functional office spaces, we deliver the best results on time and on budget.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            
            {/* Food Industry */}
            <div className="group bg-gradient-to-br from-stone-50 to-blue-50/50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Utensils className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Food Industry</h3>
              <p className="text-xs sm:text-sm text-gray-600">Restaurants, cafes, food courts</p>
            </div>

            {/* Retail */}
            <div className="group bg-gradient-to-br from-stone-50 to-blue-50/50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Retail Stores</h3>
              <p className="text-xs sm:text-sm text-gray-600">Clothing, specialty shops</p>
            </div>

            {/* Commercial Buildings */}
            <div className="group bg-gradient-to-br from-stone-50 to-blue-50/50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Building className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Commercial</h3>
              <p className="text-xs sm:text-sm text-gray-600">Office buildings, mixed-use</p>
            </div>

            {/* Warehousing */}
            <div className="group bg-gradient-to-br from-stone-50 to-blue-50/50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Warehouse className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Warehousing</h3>
              <p className="text-xs sm:text-sm text-gray-600">Storage, distribution</p>
            </div>

            {/* Healthcare */}
            <div className="group bg-gradient-to-br from-stone-50 to-blue-50/50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Stethoscope className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-xs sm:text-sm text-gray-600">Medical, dental offices</p>
            </div>

            {/* Transportation */}
            <div className="group bg-gradient-to-br from-stone-50 to-blue-50/50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Transportation</h3>
              <p className="text-xs sm:text-sm text-gray-600">Logistics, fleet services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Comprehensive Commercial
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Whether your project is a simple renovation or a complete build-out, our team delivers exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Commercial Construction */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tenant Improvements</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Complete tenant improvements, restaurant remodels, retail builds, and commercial renovations throughout Kamloops and Western Canada.
              </p>
              <a 
                href="mailto:info@hodder.ca?subject=Tenant Improvement Inquiry"
                className="w-full inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Discuss Your Build
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Rental Properties */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Building className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rental Properties</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Quality commercial and residential rental properties available throughout Kamloops, managed by our experienced team.
              </p>
              <a 
                href="https://rentalskamloops.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                View Available Rentals
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* View Projects */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Portfolio</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Explore our completed commercial projects including the Tumbleweed Pub renovation and other successful builds across Western Canada.
              </p>
              <Link 
                href="/projects"
                className="w-full inline-flex items-center justify-center border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-bold mb-3 sm:mb-4" style={{ fontSize: 'clamp(1.25rem, 5vw, 2.5rem)' }}>
              Ready to Transform Your Business Space?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Let&apos;s discuss your commercial construction or tenant improvement project today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Email Us</span>
                </div>
                <a href="mailto:info@hodder.ca" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
                  info@hodder.ca
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Our Location</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  419 Mount Paul Way, V2H 1A7<br />
                  Kamloops, BC, Canada
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Service Area</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Western Canada<br />
                  Kamloops & Thompson Valley
                </p>
              </div>
            </div>
            
            {/* CTA Side */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 h-full flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-white">
                  Your Trusted Commercial Construction Partner
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
                  From restaurant renovations like Tumbleweed Pub to major retail tenant improvements for brands like Purdys Chocolatier, we deliver exceptional commercial construction services on time and on budget across Western Canada.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href="mailto:info@hodder.ca?subject=Commercial Construction Consultation"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Start Your Project
                  </a>
                  <Link 
                    href="/projects"
                    className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300"
                  >
                    View Our Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}