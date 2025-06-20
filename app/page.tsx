import Link from 'next/link'
import { ArrowRight, Play, Award, Users, Calendar, ArrowDown } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Fully Responsive with proper spacing */}
      <section className="relative h-screen flex items-center justify-center pt-20 lg:pt-24">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center lg:bg-fixed scale-110 transition-transform duration-1000"
            style={{ backgroundImage: 'url(/banner.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        {/* Floating Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium tracking-wide mb-6 sm:mb-8 border border-white/20">
              BUILDING KAMLOOPS FOR 30+ YEARS
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-none tracking-tight">
              <span className="block">EXCEPTIONAL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                CRAFTSMANSHIP
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              From custom homes to commercial developments, we transform visions into reality with 
              uncompromising quality and innovative design
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="w-full sm:w-auto group bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-500 hover:bg-amber-400 hover:scale-110 hover:shadow-2xl flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center text-white hover:text-amber-400 transition-colors duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 flex items-center justify-center mr-3 sm:mr-4 group-hover:border-amber-400 group-hover:scale-110 transition-all duration-300">
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 ml-1" />
                </div>
                <span className="text-base sm:text-lg font-medium">Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-white/70" />
        </div>
      </section>

      {/* About Us Section - Improved Layout */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 text-gray-600">
                ABOUT US
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Concept to
                <span className="block text-amber-500">Reality</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                From all facets of design and construction to general contracting, Hodder Construction 
                creates beautiful and value-engineered products that vary from mid to high-end luxury finishes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-2">30+</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-2">500+</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Projects Completed</div>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <Link href="/about" className="inline-flex items-center text-gray-900 font-semibold hover:text-amber-500 transition-colors group">
                  <span className="border-b-2 border-amber-500 pb-1 text-sm sm:text-base">EXPLORE MORE</span>
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
              <div className="aspect-[4/3] lg:aspect-square">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/banner.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 text-gray-600">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              What We
              <span className="block text-amber-500">Build</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hodder Construction is continually moving forward to keep up with the demands and changes 
              of today's construction technology.
            </p>
          </div>
          
          {/* Services Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Custom Homes - Featured Card */}
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 md:row-span-2">
              <div className="aspect-square md:aspect-auto md:h-full relative min-h-80 sm:min-h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Custom Homes</h3>
                  <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
                    Find the dream home you've been looking for, or let us build it for you with exceptional craftsmanship.
                  </p>
                  <Link href="/sales" className="inline-flex items-center text-white font-semibold hover:text-amber-200 transition-colors group/link">
                    <span className="border-b border-white/50 pb-1 text-sm sm:text-base">VIEW HOMES</span>
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Rental Properties */}
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Rental Properties</h3>
                  <p className="text-sm sm:text-base mb-3 sm:mb-4 text-white/90">Premium residential and commercial spaces</p>
                  <Link href="/rentals" className="inline-flex items-center text-white font-medium hover:text-green-200 transition-colors group/link">
                    <span className="text-xs sm:text-sm border-b border-white/50 pb-1">EXPLORE</span>
                    <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Our Projects</h3>
                  <p className="text-sm sm:text-base mb-3 sm:mb-4 text-white/90">See our latest developments and craftsmanship</p>
                  <Link href="/projects" className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors group/link">
                    <span className="text-xs sm:text-sm border-b border-white/50 pb-1">VIEW WORK</span>
                    <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section - Mobile Responsive */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/banner.jpg)' }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            
            {/* Content */}
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 sm:px-4 py-1 bg-white/10 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6">
                FEATURED PROJECT
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                Coming in
                <span className="block text-amber-400">2025</span>
              </h2>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Luxury Residential Complex</h3>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                A groundbreaking development featuring modern architecture, sustainable design, 
                and premium amenities in the heart of Kamloops.
              </p>
              
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">120</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Units</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">$45M</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">2025</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Completion</div>
                </div>
              </div>
              
              <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                View Project Details
              </button>
            </div>
            
            {/* Project Visualization */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/banner.jpg)' }}
                />
              </div>
              
              {/* Floating Stats - Responsive */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white text-black p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-center">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 mx-auto mb-2" />
                  <div className="text-sm sm:text-lg font-bold">Award Winning</div>
                  <div className="text-xs sm:text-sm text-gray-600">Design Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            Ready to Build
            <span className="block text-amber-500">Your Vision?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
            Let's discuss your next project and bring your dreams to life with our expertise and craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Get Free Consultation
            </button>
            
            <Link href="/projects" className="w-full sm:w-auto inline-flex items-center justify-center text-gray-900 font-semibold hover:text-amber-500 transition-colors group px-8 sm:px-10 py-3 sm:py-4">
              View Our Portfolio
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}