import Link from 'next/link'
import { ArrowRight, Award, ArrowDown } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

{/* Hero Section - Ultra Responsive Mobile-First Design */}
<section className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
  {/* Background with Parallax Effect */}
  <div className="absolute inset-0">
    <div 
      className="absolute inset-0 bg-cover bg-center lg:bg-fixed scale-110 transition-transform duration-1000"
      style={{ backgroundImage: 'url(/projects/1470-capilano/28.jpg)' }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 sm:from-black/70 sm:via-black/50 sm:to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
  </div>
  
  {/* Responsive Content Container */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
      
      {/* Text Content - Mobile Optimized */}
      <div className="text-white text-center lg:text-left order-1 lg:order-1">
        <div className="animate-fade-in-up space-y-4 sm:space-y-6">
        <span className="hidden sm:inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium tracking-wide border border-white/20 shadow-lg">
  BUILDING KAMLOOPS FOR 40+ YEARS
</span>
          
         <h1 className="font-bold leading-tight tracking-tight">
  <span 
    className="block mb-1 sm:mb-2 text-white"
    style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}
  >
    EXCEPTIONAL
  </span>
  <span 
    className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"
    style={{ fontSize: 'clamp(1.75rem, 7vw, 4rem)' }}
  >
    CRAFTSMANSHIP
  </span>
</h1>
          
         <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
  From custom homes to commercial developments, we transform visions into reality with 
  uncompromising quality and innovative design
</p>
        </div>
      </div>

      {/* Action Content - Compact Mobile Design */}
      <div className="flex flex-col items-center lg:items-start justify-center space-y-6 order-2 lg:order-2">
        
        {/* Responsive CTA Button */}
        <Link 
          href="/projects"
          className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center text-sm sm:text-base lg:text-lg"
        >
          View Projects
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Compact Stats Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 text-center lg:text-left w-full max-w-xs sm:max-w-sm lg:max-w-none">
          <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-1">
              40+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-1">
              46+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">Projects Completed</div>
          </div>
        </div>

        {/* Mobile-Only Additional Info */}
        <div className="flex flex-wrap justify-center gap-2 lg:hidden">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20">
            Custom Homes
          </span>
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20">
            Commercial Build
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator - Responsive */}
  <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
      <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 text-white/70" />
    </div>
  </div>
</section>

      {/* About Us Section - Improved Layout */}
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
<div className="text-center lg:text-left">
  <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium tracking-wide mb-6 text-gray-600">
    ABOUT US
  </span>
  
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
    Concept to
    <span className="block text-amber-500">Reality</span>
  </h2>
  
  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
    From all facets of design and construction to general contracting, Hodder Construction 
    creates beautiful and value-engineered products that vary from mid to high-end luxury finishes.
  </p>
  
  <div className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto lg:mx-0">
    <div className="text-center lg:text-left">
      <div className="text-3xl font-bold text-amber-500 mb-2">40+</div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
    </div>
    <div className="text-center lg:text-left">
      <div className="text-3xl font-bold text-amber-500 mb-2">46+</div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">Projects Completed</div>
    </div>
  </div>
  
  <div className="text-center lg:text-left">
    <Link href="/about" className="inline-flex items-center text-gray-900 font-semibold hover:text-amber-500 transition-colors group">
      <span className="border-b-2 border-amber-500 pb-1 text-base">EXPLORE MORE</span>
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
</div>
            
            {/* Right Side - Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="aspect-[4/3] lg:aspect-square">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/projects/heffley-creek-residence/30.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Services Section - Mobile Optimized */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    
    {/* Section Header */}
<div className="text-center mb-20">
  <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium tracking-wide mb-6 text-gray-600">
    OUR SERVICES
  </span>
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
    What We
    <span className="block text-amber-500">Build</span>
  </h2>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    Hodder Construction is continually moving forward to keep up with the demands and changes 
    of today&apos;s construction technology.
  </p>
</div>
    
    {/* Services Grid - Responsive */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Custom Homes */}
      <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700">
        <div className="aspect-square relative">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url(projects/tumbleweeds-pub/1.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-amber-500/20 group-hover:bg-amber-500/10 transition-colors duration-500" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">Commercial</h3>
            <p className="text-base mb-4 text-white/95 drop-shadow-md leading-snug">
         From offices to storefronts, we build commercial spaces that stand out and last
            </p>
            <Link href="/sales" className="inline-flex items-center text-white font-semibold hover:text-amber-200 transition-colors group/link">
              <span className="border-b-2 border-white/70 hover:border-amber-200 pb-1 text-sm transition-colors">VIEW WORK</span>
              <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Rental Properties */}
      <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700">
        <div className="aspect-square relative">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url(/front-page/fp1.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-green-500/20 group-hover:bg-green-500/10 transition-colors duration-500" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">Rental Properties</h3>
            <p className="text-base mb-4 text-white/95 drop-shadow-md">Premium residential and commercial spaces</p>
            <Link href="/rentals" className="inline-flex items-center text-white font-medium hover:text-green-200 transition-colors group/link">
              <span className="text-sm border-b-2 border-white/70 hover:border-green-200 pb-1 transition-colors">EXPLORE</span>
              <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700">
        <div className="aspect-square relative">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url(/front-page/fp3.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/10 transition-colors duration-500" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">Residential</h3>
            <p className="text-base mb-4 text-white/95 drop-shadow-md">See our latest developments and craftsmanship</p>
            <Link href="/projects" className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors group/link">
              <span className="text-sm border-b-2 border-white/70 hover:border-blue-200 pb-1 transition-colors">VIEW WORK</span>
              <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Featured Project Section - Ultra Responsive & Modern */}
<section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 text-white overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url(/projects/1470-capilano/23.jpg)' }}
    />
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      {/* Content */}
      <div className="order-1 lg:order-1 text-center lg:text-left">
        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6">
          FEATURED PROJECT
        </span>
        
  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
  Capilano
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Estate</span>
</h2>

<h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-200">
  1470 Capilano Place
</h3>

<p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
  Absolutely stunning view estate property with tons of privacy, located on over 4.5 acres 
  featuring resort living with guest house. Sprawling rancher with heated infinity saltwater 
  pool and breathtaking South Thompson River views.
</p>
        
        {/* Stats Grid - Mobile Optimized */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              4.5+
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Acres</div>
          </div>
          <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              $2M+
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Investment</div>
          </div>
          <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              2016
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Completed</div>
          </div>
        </div>
        
        <Link 
          href="/projects/1470-capilano" 
          className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          View Project Details
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Link>
      </div>
      
      {/* Project Visualization - Mobile First */}
      <div className="relative order-2 lg:order-2">
        <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div 
            className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: 'url(/projects/1470-capilano/1.jpg)' }}
          />
          
          {/* Mobile-First Overlay Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm text-black p-2 sm:p-3 rounded-xl shadow-lg">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
              <div className="text-xs sm:text-sm font-bold">Estate Living</div>
            </div>
          </div>
        </div>
        
        {/* Floating Stats - Desktop Only Enhanced */}
        <div className="absolute -bottom-4 sm:-bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-sm text-black p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-200/20 hidden lg:block">
          <div className="text-center">
            <Award className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 mx-auto mb-2" />
            <div className="text-base sm:text-lg font-bold">Resort Amenities</div>
            <div className="text-xs sm:text-sm text-gray-600">Infinity Pool & Guest House</div>
          </div>
        </div>
        
        {/* Additional Mobile Stats */}
        <div className="flex justify-center space-x-4 mt-4 lg:hidden">
          <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
            <div className="text-xs font-medium text-amber-400">Resort Amenities</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
            <div className="text-xs font-medium text-amber-400">River Views</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section - Mobile Responsive */}
 <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
      Ready to Build
      <span className="block text-amber-500">Your Vision?</span>
    </h2>
    
    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
      Let&apos;s discuss your next project and bring your dreams to life with our expertise and craftsmanship.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
        Get Free Consultation
      </button>
      
      <Link href="/projects" className="w-full sm:w-auto inline-flex items-center justify-center text-gray-900 font-semibold hover:text-amber-500 transition-colors group px-10 py-4">
        View Our Portfolio
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
</section>

      <Footer />
    </div>
  )
}