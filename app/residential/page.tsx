'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, ArrowRight, Clock, Building, Users, Award, Key, Star, CheckCircle, Calendar, DollarSign, Eye, Search } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Sales() {
  const [activeTab, setActiveTab] = useState('custom')

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      {/* Hero Section with Warm Key Image Theme */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
            style={{ 
              backgroundImage: 'url(/residential/1.jpg)',
              filter: 'sepia(15%) saturate(110%) hue-rotate(10deg)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/75 via-stone-800/65 to-amber-900/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 text-center text-white">
          <div className="animate-fade-in-up space-y-4 sm:space-y-6 lg:space-y-8">
            
            {/* Elegant Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium tracking-wide border border-white/20 shadow-xl">
              <Key className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-amber-300" />
              YOUR KEYS TO HOME OWNERSHIP
            </div>
            
            {/* More Reasonable Typography */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-bold leading-none tracking-tight">
                <span 
                  className="block mb-2 sm:mb-3 text-white"
                  style={{ fontSize: 'clamp(1.75rem, 6vw, 4rem)' }}
                >
                  UNLOCK YOUR
                </span>
                <span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-200 to-rose-300"
                  style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
                >
                  DREAM HOME
                </span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-stone-200 leading-relaxed font-light max-w-3xl mx-auto px-2 sm:px-4">
                While we don&apos;t currently have completed homes available for immediate purchase, we&apos;re creating something even better - custom homes designed exclusively for you.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a 
                href="mailto:info@hodder.ca?subject=Custom Home Consultation Request"
                className="group w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                Schedule Consultation
              </a>
              
              <Link 
                href="/projects" 
                className="group w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/30 hover:border-amber-300 text-white hover:text-amber-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              >
                <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-4 sm:left-8 opacity-15">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
            <Key className="h-6 w-6 sm:h-8 sm:w-8 text-white transform rotate-45" />
          </div>
        </div>
        
        <div className="absolute top-1/3 right-4 sm:right-8 opacity-15">
          <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
            <Home className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-stone-50 to-amber-50/30">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6">
              CURRENT OPPORTUNITY
            </span>
            <h2 className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              Crafting Dreams,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">One Home at a Time</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content Side */}
            <div className="order-1 lg:order-1">
              
              {/* Featured Notice */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 sm:p-6 rounded-r-xl mb-6 sm:mb-8 shadow-md">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-2">
                      Building Your Future
                    </h3>
                    <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                      We&apos;re currently focused on creating bespoke custom homes rather than spec builds. This means every ounce of our expertise goes into making your dream home a reality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 sm:space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">Bespoke Custom Construction</h4>
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      Every detail tailored to your lifestyle, from architectural design to the finest finishing touches.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">White-Glove Service</h4>
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      Personal consultation and guidance throughout every phase of your home building journey.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">40+ Years of Mastery</h4>
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      Four decades of crafting exceptional homes throughout Kamloops and the Thompson Valley.
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
                      filter: 'sepia(5%) saturate(105%) hue-rotate(3deg)'
                    }}
                  />
                </div>
                
                {/* Floating Achievement Cards */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-stone-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 mb-1">40+</div>
                    <div className="text-xs text-stone-600 font-medium">Years Excellence</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-stone-100">
                  <div className="text-center">
                    <Star className="h-6 w-6 text-amber-500 mx-auto mb-1" />
                    <div className="text-xs text-stone-600 font-medium">Premium Quality</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-3 bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-lg shadow-lg transform -translate-y-1/2">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          
          {/* Tabbed Interface */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex bg-white rounded-xl p-1 shadow-lg border border-stone-200">
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'custom' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Key className="h-4 w-4 inline mr-2" />
                Custom Homes
              </button>
              <button
                onClick={() => setActiveTab('consultation')}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'consultation' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Calendar className="h-4 w-4 inline mr-2" />
                Free Consultation
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'custom' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-stone-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="h-8 w-8 text-white" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 leading-tight">
                  Ready to Build Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Dream Home?</span>
                </h2>
                
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
                  Don&apos;t wait for the perfect house to come on the market. Let us create the perfect house for you, designed exactly to your specifications and lifestyle needs.
                </p>

                <a 
                  href="mailto:info@hodder.ca?subject=Custom Home Consultation Request"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <Key className="mr-2 h-5 w-5" />
                  Start Your Custom Home Journey
                </a>
              </div>
            </div>
          )}

          {activeTab === 'consultation' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-stone-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 leading-tight">
                  Free Design
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Consultation</span>
                </h2>
                
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
                  Meet with our expert team to discuss your vision, explore possibilities, and receive professional guidance on your custom home project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4">
                    <Calendar className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                    <h4 className="font-bold text-stone-900 mb-1">Schedule Meeting</h4>
                    <p className="text-stone-600 text-sm">Book your free consultation</p>
                  </div>
                  <div className="text-center p-4">
                    <Search className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                    <h4 className="font-bold text-stone-900 mb-1">Explore Options</h4>
                    <p className="text-stone-600 text-sm">Discuss design possibilities</p>
                  </div>
                  <div className="text-center p-4">
                    <DollarSign className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                    <h4 className="font-bold text-stone-900 mb-1">Budget Planning</h4>
                    <p className="text-stone-600 text-sm">Transparent cost estimates</p>
                  </div>
                </div>

                <a 
                  href="mailto:info@hodder.ca?subject=Free Design Consultation Request"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Alternative Options */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-1 bg-stone-100 text-stone-700 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4">
              EXPLORE MORE OPTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 leading-tight">
              While You Plan Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Perfect Home</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
              Discover other ways we can help you with your housing needs in the meantime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Rental Properties Card */}
            <div className="group bg-gradient-to-br from-stone-50 to-amber-50/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Home className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">Premium Rental Properties</h3>
              
              <p className="text-sm sm:text-base text-stone-600 mb-6 leading-relaxed">
                Discover our collection of quality rental properties in Kamloops. Perfect temporary homes while you plan your custom build.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-stone-700 text-sm">Quality maintained properties</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-stone-700 text-sm">Prime Kamloops locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-stone-700 text-sm">Professional management</span>
                </div>
              </div>
              
              <a 
                href="https://rentalskamloops.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Visit RentalsKamloops.ca
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Portfolio Card */}
            <div className="group bg-gradient-to-br from-stone-50 to-amber-50/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-200">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">Our Masterpiece Portfolio</h3>
              
              <p className="text-sm sm:text-base text-stone-600 mb-6 leading-relaxed">
                Explore our gallery of exceptional craftsmanship and get inspired for your own custom home project.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-stone-700 text-sm">17+ completed projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-stone-700 text-sm">Diverse architectural styles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-stone-700 text-sm">Detailed project insights</span>
                </div>
              </div>
              
              <Link 
                href="/projects"
                className="w-full inline-flex items-center justify-center border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                View Our Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}