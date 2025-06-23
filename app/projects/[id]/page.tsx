'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, MapPin, Building, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { getProject, getProjectImages } from '../../../data/projects'

export default function ProjectDetail() {
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false)

  // Get project data from our single source
  const project = getProject(params.id as string)
  const images = project ? getProjectImages(project) : []

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return
      
      if (e.key === 'Escape') {
        setIsLightboxOpen(false)
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isLightboxOpen, images.length])

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-amber-500 hover:text-amber-600">
            Return to Projects
          </Link>
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Main Image */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={images[currentImageIndex]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Back Button */}
        <div className="absolute top-20 lg:top-24 left-4 sm:left-6 lg:left-8 z-20">
          <Link 
            href="/projects"
            className="inline-flex items-center bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 lg:p-12">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
              <div className="flex items-center space-x-2 text-white/90">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{project.year}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{project.location}</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image Navigation Controls */}
        <div className="absolute bottom-6 right-6 flex items-center space-x-2 z-20">
          <button
            onClick={prevImage}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-white/90 text-sm px-3 py-1 bg-black/30 rounded-full">
            {currentImageIndex + 1} / {images.length}
          </span>
          <button
            onClick={nextImage}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => openLightbox(currentImageIndex)}
            className="bg-amber-500/80 hover:bg-amber-500 text-white p-2 rounded-full transition-all duration-300 ml-2"
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info Sidebar */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
              
              <div className="space-y-4 mb-8">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-semibold text-gray-900">{value}</span>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Project Value:</span>
                    <span className="font-semibold text-gray-900">{project.value}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Project Category</h4>
                <span className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                  <Building className="h-4 w-4 mr-2" />
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Explore all {images.length} images of this exceptional project
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] mx-4">
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] w-auto"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}

      {/* Related Projects CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Interested in Similar Work?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Explore more of our exceptional construction projects or discuss your own vision with our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Projects
            </Link>
            
            <Link 
              href="/sales"
              className="border-2 border-gray-900 hover:border-amber-500 text-gray-900 hover:text-amber-600 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Available Homes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}