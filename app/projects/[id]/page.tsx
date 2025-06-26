'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, MapPin, Building, Eye, ChevronLeft, ChevronRight, X, Images, Maximize, Grid3X3, List, Award, Home, Clock, DollarSign } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { getProject, getProjectImages } from '../../../data/projects'

export default function ProjectDetail() {
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [galleryView, setGalleryView] = useState<'preview' | 'grid' | 'carousel'>('preview')
  const [isLoading, setIsLoading] = useState(true)

  // Get project data from our single source
  const project = getProject(params.id as string)
  const images = project ? getProjectImages(project) : []

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false)
      } else if (isLightboxOpen) {
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isLightboxOpen, images.length])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-6">The project you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <Link 
              href="/projects" 
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Projects
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setIsLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)
  }

  const prevImage = () => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

    {/* Clean Mobile Hero Section */}
<section className="relative">
  <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh]">
    <div className="absolute inset-0">
      <Image
        src={images[currentImageIndex] || '/placeholder.jpg'}
        alt={project.title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </div>

    {/* Back Button - Hidden on Mobile */}
    <div className="hidden sm:block absolute top-24 sm:top-28 left-4 sm:left-6 z-20">
      <Link 
        href="/projects"
        className="inline-flex items-center bg-black/40 backdrop-blur-md hover:bg-black/60 text-white px-4 py-2.5 rounded-full transition-all duration-300 text-sm font-medium border border-white/20"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        <span>Back to Projects</span>
      </Link>
    </div>

    {/* Simplified Hero Content */}
    <div className="absolute bottom-0 left-0 right-0 z-10">
      <div className="px-4 sm:px-6 pb-8 sm:pb-12">
        
        {/* Minimal Project Meta - Only on larger screens */}
        <div className="hidden sm:flex items-center gap-3 mb-4">
          <span className={`px-3 py-1.5 text-white text-sm font-medium rounded-full backdrop-blur-sm ${
            project.status === 'completed' 
              ? 'bg-green-600/80' 
              : 'bg-blue-600/80'
          }`}>
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
          
          <div className="flex items-center space-x-2 text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{project.year}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{project.location}</span>
          </div>
        </div>
        
        {/* Clean Project Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {project.title}
        </h1>
        
        {/* Simplified Description */}
        <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
          {project.description}
        </p>

        {/* Clean Controls */}
        <div className="flex items-center gap-4">
          {/* Image Navigation */}
          <div className="flex items-center bg-black/40 backdrop-blur-md rounded-full border border-white/20">
            <button
              onClick={prevImage}
              className="p-3 text-white hover:bg-white/20 rounded-full transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="px-4 py-2 text-white text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
            
            <button
              onClick={nextImage}
              className="p-3 text-white hover:bg-white/20 rounded-full transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Action Buttons - Only on larger screens */}
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => openLightbox(currentImageIndex)}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2.5 rounded-full transition-all duration-300 text-sm font-medium flex items-center gap-2 border border-white/30"
            >
              <Maximize className="h-4 w-4" />
              Full Size
            </button>
            
            <button
              onClick={() => setGalleryView('grid')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2.5 rounded-full transition-all duration-300 text-sm font-medium flex items-center gap-2 border border-white/30"
            >
              <Images className="h-4 w-4" />
              Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Project Content */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Main Content */}
            <div className="xl:col-span-3">
              <div className="max-w-4xl">
                
                {/* Section Header */}
                <div className="mb-8 sm:mb-10">
                  <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
                    PROJECT OVERVIEW
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Crafted with Excellence
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full"></div>
                </div>

                {/* Enhanced Description */}
                <div className="prose prose-lg max-w-none mb-10 sm:mb-12">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                    {project.fullDescription || project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-10 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Key Features & Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features?.map((feature: string, index: number) => (
                      <div key={index} className="group">
                        <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:shadow-md">
                          <div className="flex-shrink-0 w-2 h-2 bg-gray-900 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300" />
                          <span className="text-gray-800 leading-relaxed font-medium">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Tags */}
                <div className="mb-10 sm:mb-12">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Project Categories</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tags?.map((tag: string, index: number) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-800 text-sm font-semibold rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="xl:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Project Stats Card */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-gray-700" />
                    Project Details
                  </h3>
                  
                  <div className="space-y-4">
                    {project.specifications && Object.entries(project.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start py-3 border-b border-gray-200 last:border-0">
                        <span className="text-gray-600 font-medium text-sm">{key}:</span>
                        <span className="font-semibold text-gray-900 text-sm text-right ml-4">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Value Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full mb-4">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Project Investment</h4>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{project.value}</div>
                    <p className="text-sm text-gray-600">Total project value</p>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Building className="h-5 w-5 text-gray-700" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 capitalize">{project.category}</div>
                        <div className="text-sm text-gray-600">Project Type</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-gray-700" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{project.status === 'completed' ? 'Completed' : 'In Progress'}</div>
                        <div className="text-sm text-gray-600">Current Status</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Gallery Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Project Gallery
              </h2>
              <p className="text-gray-600">
                {galleryView === 'preview' ? `Preview of ${Math.min(6, images.length)} images` : `All ${images.length} project images`}
              </p>
            </div>
            
            {/* Gallery Controls */}
            <div className="flex items-center gap-2">
              <div className="flex bg-white rounded-lg border border-gray-200 p-1">
                <button
                  onClick={() => setGalleryView('preview')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    galleryView === 'preview' 
                      ? 'bg-gray-900 text-white shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  title="Preview"
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGalleryView('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    galleryView === 'grid' 
                      ? 'bg-gray-900 text-white shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  title="Grid View"
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGalleryView('carousel')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    galleryView === 'carousel' 
                      ? 'bg-gray-900 text-white shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  title="Carousel"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Content */}
          {galleryView === 'preview' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
              {images.slice(0, 6).map((image: string, index: number) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {index + 1}
                  </div>
                </div>
              ))}
              
              {images.length > 6 && (
                <button
                  onClick={() => setGalleryView('grid')}
                  className="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-xl group"
                >
                  <Images className="h-6 w-6 sm:h-8 sm:w-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-semibold">+{images.length - 6}</span>
                  <span className="text-xs opacity-80">more</span>
                </button>
              )}
            </div>
          )}

          {galleryView === 'grid' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {images.map((image: string, index: number) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          )}

          {galleryView === 'carousel' && (
            <div className="relative">
              <div className="overflow-x-auto">
                <div className="flex space-x-4 pb-4 w-max">
                  {images.map((image: string, index: number) => (
                    <div
                      key={index}
                      className="relative w-80 h-64 flex-shrink-0 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="320px"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Eye className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full font-medium">
                        {index + 1} of {images.length}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Controls */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-[95vw] max-h-[90vh] mx-4">
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] w-auto rounded-lg shadow-2xl"
              quality={95}
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              {currentImageIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}

      {/* Professional CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/20">
              <Home className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 text-center leading-tight">
              Ready to Start
              <span className="block text-gray-300">Your Project?</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto text-center">
              Inspired by this work? Let&apos;s discuss how we can bring your vision to life with the same quality, craftsmanship, and attention to detail that defines every project we undertake.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
              <Link 
                href="/contact"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Building className="h-5 w-5" />
                Start Your Project
              </Link>
              
              <Link 
                href="/projects"
                className="w-full sm:w-auto border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Images className="h-5 w-5" />
                View All Projects
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">40+ Years</h4>
                  <p className="text-gray-400 text-sm">Construction Excellence</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">100+ Projects</h4>
                  <p className="text-gray-400 text-sm">Successfully Completed</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">On Time</h4>
                  <p className="text-gray-400 text-sm">Every Delivery</p>
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