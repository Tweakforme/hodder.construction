'use client'

import { ArrowRight, Users, Award, Building, Wrench, MapPin, Clock, Star, Mail, } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { useEffect } from 'react'
import InteractiveMap from '../../components/InteractiveMap'

export default function About() {
  useEffect(() => {
    // Smooth scroll to anchor after page loads
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 500) // Small delay to let page fully load first
      }
    }

    // Run on initial load
    handleHashScroll()

    // Also run if hash changes while on the page
    window.addEventListener('hashchange', handleHashScroll)
    
    return () => window.removeEventListener('hashchange', handleHashScroll)
  }, [])

  return (
    <div className="page-about min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center lg:bg-fixed scale-110 transition-transform duration-1000"
            style={{ backgroundImage: 'url(about/about.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 text-center text-white">
          <div className="animate-fade-in-up space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="hidden sm:inline-flex items-center px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium tracking-wide border border-white/20">
              <Building className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              ABOUT HODDER CONSTRUCTION
            </div>
            
            <h1 className="font-bold leading-none tracking-tight">
              <span 
                className="block mb-2 sm:mb-3"
                style={{ fontSize: 'clamp(1.75rem, 8vw, 5rem)' }}
              >
                HOW CAN WE
              </span>
              <span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500"
                style={{ fontSize: 'clamp(1.5rem, 7vw, 5rem)' }}
              >
                HELP YOU TODAY?
              </span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto px-2 sm:px-4">
              Considering a new project? Wondering about a make-over? We would love to be part of your building and renovating dreams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a 
                href="mailto:info@hodder.ca" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Contact Us Today
                <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Content */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              <span className="inline-block px-3 sm:px-4 py-1 bg-amber-100 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 text-amber-700">
                OUR STORY
              </span>
              
              <h2 className="font-bold text-gray-900 mb-6 sm:mb-8" style={{ fontSize: 'clamp(1.5rem, 6vw, 4rem)' }}>
                Who We
                <span className="block text-amber-500">Are</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  In 1981, Mark Hodder started construction by doing contract foundation and framing work. As the economy changed, he then moved on to doing window replacements and small renovations. In 1993, he incorporated his business, Hodder Construction (1993) Ltd.
                </p>
                
                <p>
                  Mark and his staff have completed hundreds of building projects. We still do the small residential renovations, but we also build small to grand custom homes and do a lot of commercial work too.
                </p>
                
                <p className="font-medium text-gray-900">
                  Over the years, Hodder Construction has developed a real sense of pride in both our community and our work. We have been a small local business for over 40 years and we are dedicated to hard work, quality craftsmanship and customer service.
                </p>
              </div>
            </div>
            
            {/* Stats & Image */}
            <div className="relative order-2 lg:order-2">
              <div className="aspect-square rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/banner.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Stats - Responsive */}
              <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 -left-2 sm:-left-4 lg:-left-6 bg-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-500 mb-1 sm:mb-2">40+</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Years in Business</div>
                </div>
              </div>
              
              <div className="absolute -top-2 sm:-top-4 lg:-top-6 -right-2 sm:-right-4 lg:-right-6 bg-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100">
                <div className="text-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-amber-500 mx-auto mb-1 sm:mb-2" />
                  <div className="text-xs text-gray-600 font-medium">Quality Craftsmanship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 bg-amber-100 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 text-amber-700">
              OUR SERVICES
            </span>
            <h2 className="font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8" style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)' }}>
              What We
              <span className="block text-amber-500">Do</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Whether replacing your windows, renovating your bathroom, kitchen or whole home, building your dream home or even developing commercial/residential property, we are committed to providing the best of both personal and professional service.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
            
            {/* Custom Homes */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 lg:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Building className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Custom Homes</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">From small to grand custom homes, we bring your vision to life with exceptional craftsmanship and attention to detail.</p>
            </div>

            {/* Renovations */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 lg:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Wrench className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Renovations</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Kitchen, bathroom, or whole home renovations. We transform spaces with quality workmanship and innovative design.</p>
            </div>

            {/* Commercial Work */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 lg:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Commercial Projects</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Commercial and residential property development with professional service and proven expertise.</p>
            </div>
          </div>
          
          {/* Experience Highlight */}
          <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Experienced Team You Can Trust</h3>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
                If you have hired us before, chances are we have the same loyal staff, sub trades and suppliers. In fact, we have approximately 150 years of combined experience between all of us. We also employ a full time plumber.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">150+</div>
                  <div className="text-xs sm:text-sm opacity-90 font-medium">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">17+</div>
                  <div className="text-xs sm:text-sm opacity-90 font-medium">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">15+</div>
                  <div className="text-xs sm:text-sm opacity-90 font-medium">Skilled Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section id="joinus" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block px-3 sm:px-4 py-1 bg-amber-100 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 text-amber-700">
                CAREERS
              </span>
              
              <h2 className="font-bold text-gray-900 mb-6 sm:mb-8" style={{ fontSize: 'clamp(1.5rem, 6vw, 4rem)' }}>
                How To Join
                <span className="block text-amber-500">Our Team</span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                We are always on the look out for new talent and hard workers. Experience is key. We accept resumés and conduct interviews all year round so please do not hesitate to contact us.
              </p>
              
              <a 
                href="mailto:info@hodder.ca" 
                className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Send Your Resume
                <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
            
            {/* Requirements */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Important Info</h3>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-600">All wages are negotiable depending on level of experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-600">Valid Driver&apos;s Licence is an asset</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-600">Experience in home construction, renovations, or plumbing is an asset</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-600">All positions can expect full time work, 8+ hours/day, 5 days a week</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-amber-200/50">
                <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Location</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  All work sites are in and around Kamloops area, with the main office located in the Mount Paul Industrial Park in Kamloops, B.C. Canada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Other Businesses Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 bg-white rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 text-gray-600 border border-gray-200">
              OUR FAMILY OF BUSINESSES
            </span>
            <h2 className="font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8" style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)' }}>
              More Ways We
              <span className="block text-amber-500">Serve You</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Beyond construction, we&apos;ve expanded to serve our community with quality rental properties, innovative automotive solutions, and essential home services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            
            {/* Rentals Kamloops */}
            <div className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/rentals/1.png)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Property Rentals</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  Quality commercial and residential rental properties throughout Kamloops.
                </p>
                <a 
                  href="https://rentalskamloops.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                >
                  <span className="text-xs sm:text-sm border-b border-blue-600/30 pb-0.5">Visit RentalsKamloops.ca</span>
                  <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Tesla Sales */}
            <div className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/cars/1.png)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Tesla Sales & Service</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  Pre-owned Tesla sales and professional automotive services.
                </p>
                <a 
                  href="https://cars.theevstore.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group/link"
                >
                  <span className="text-xs sm:text-sm border-b border-red-600/30 pb-0.5">Visit Cars.TheEVStore.ca</span>
                  <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* EV Parts & Accessories */}
            <div className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="relative h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-slate-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20" />
                <div className="absolute top-0 right-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-2xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20" />
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <div className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 tracking-wide">COMING SOON</div>
                  <div className="text-white/70 text-xs font-medium tracking-wider">LAUNCHING 2025</div>
                </div>
                
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <div className="bg-amber-400 text-gray-900 text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full animate-pulse">
                    NEW
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Tesla Parts & Accessories</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  Model 3 & Y parts and accessories shipping across Canada.
                </p>
                <div className="inline-flex items-center text-gray-500 font-semibold">
                  <span className="text-xs sm:text-sm">TheEVStore.ca</span>
                  <Clock className="ml-2 h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Advanced Plumbing */}
            <div className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/apk/1.png)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Plumbing & HVAC</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  Professional plumbing, HVAC, and gas fitting services for your home.
                </p>
                <a 
                  href="https://advancedplumbingkamloops.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group/link"
                >
                  <span className="text-xs sm:text-sm border-b border-amber-600/30 pb-0.5">Visit AdvancedPlumbing.ca</span>
                  <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Message */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-lg border border-gray-200">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2" />
              <span className="text-gray-700 font-medium text-xs sm:text-sm">
                One family of businesses, serving all your needs in Kamloops and beyond
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Location Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 bg-white/10 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6">
              GET IN TOUCH
            </span>
            <h2 className="font-bold mb-4 sm:mb-6 lg:mb-8" style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)' }}>
              Ready to Start
              <span className="block text-amber-400">Your Project?</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              We stand proudly behind what we build. Let&apos;s discuss how we can bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Email Us</span>
                </div>
                <a href="mailto:info@hodder.ca" className="text-amber-400 hover:text-amber-300 transition-colors text-sm sm:text-base">
                  info@hodder.ca
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Our Location</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  419 Mount Paul Way, V2H 1A7<br />
                  Kamloops, BC, Canada
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Service Area</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Kamloops & Thompson<br />
                  Okanagan Region
                </p>
              </div>
            </div>
            
            <InteractiveMap />
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a 
              href="mailto:info@hodder.ca" 
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        .page-about {
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