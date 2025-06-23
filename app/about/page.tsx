'use client'

import { ArrowRight, Users, Award, Building, Wrench, MapPin, Clock, Star, Mail, } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { useEffect } from 'react'

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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center lg:bg-fixed scale-110 transition-transform duration-1000"
            style={{ backgroundImage: 'url(/banner.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium tracking-wide mb-6 border border-white/20">
              ABOUT HODDER CONSTRUCTION
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none tracking-tight">
              <span className="block">HOW CAN WE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                HELP YOU TODAY?
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed font-light max-w-4xl mx-auto">
              Considering a new project? Wondering about a make-over? We would love to be part of your building and renovating dreams.
            </p>
            
            <a 
              href="mailto:info@hodderconstruction.com" 
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Contact Us Today
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium tracking-wide mb-6 text-gray-600">
                OUR STORY
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Who We
                <span className="block text-amber-500">Are</span>
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
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
            <div className="relative">
              <div className="aspect-square rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/banner.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">40+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Years in Business</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <Award className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600 font-medium">Quality Craftsmanship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium tracking-wide mb-6 text-gray-600">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              What We
              <span className="block text-amber-500">Do</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Whether replacing your windows, renovating your bathroom, kitchen or whole home, building your dream home or even developing commercial/residential property, we are committed to providing the best of both personal and professional service.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Custom Homes */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Homes</h3>
              <p className="text-gray-600 leading-relaxed">From small to grand custom homes, we bring your vision to life with exceptional craftsmanship and attention to detail.</p>
            </div>

            {/* Renovations */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Renovations</h3>
              <p className="text-gray-600 leading-relaxed">Kitchen, bathroom, or whole home renovations. We transform spaces with quality workmanship and innovative design.</p>
            </div>

            {/* Commercial Work */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Projects</h3>
              <p className="text-gray-600 leading-relaxed">Commercial and residential property development with professional service and proven expertise.</p>
            </div>
          </div>
          
          {/* Experience Highlight */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Experienced Team You Can Trust</h3>
              <p className="text-lg sm:text-xl mb-6 text-white/90">
                If you have hired us before, chances are we have the same loyal staff, sub trades and suppliers. In fact, we have approximately 150 years of combined experience between all of us. We also employ a full time plumber.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm opacity-90">Years Combined Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm opacity-90">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1</div>
                  <div className="text-sm opacity-90">Full-Time Plumber</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section id="joinus" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium tracking-wide mb-6 text-gray-600">
                CAREERS
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                How To Join
                <span className="block text-amber-500">Our Team</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are always on the look out for new talent and hard workers. Experience is key. We accept resumés and conduct interviews all year round so please do not hesitate to contact us.
              </p>
              
              <a 
                href="mailto:info@hodderconstruction.com" 
                className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Send Your Resume
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            {/* Requirements */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">All wages are negotiable depending on level of experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Valid Driver&apos;s Licence is an asset</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Experience in home construction, renovations, or plumbing is an asset</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">All positions can expect full time work, 8+ hours/day, 5 days a week</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="h-5 w-5 text-amber-500" />
                  <span className="font-semibold text-gray-900">Location</span>
                </div>
                <p className="text-gray-600 text-sm">
                  All work sites are in and around Kamloops area, with the main office located in the Mount Paul Industrial Park in Kamloops, B.C. Canada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Other Businesses Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-white rounded-full text-sm font-medium tracking-wide mb-6 text-gray-600 border border-gray-200">
              OUR FAMILY OF BUSINESSES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              More Ways We
              <span className="block text-amber-500">Serve You</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond construction, we&apos;ve expanded to serve our community with quality rental properties, innovative automotive solutions, and essential home services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Rentals Kamloops */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/rentals/1.png)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Property Rentals</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Quality commercial and residential rental properties throughout Kamloops.
                </p>
                <a 
                  href="https://rentalskamloops.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                >
                  <span className="text-sm border-b border-blue-600/30 pb-0.5">Visit RentalsKamloops.ca</span>
                  <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Tesla Sales */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/cars/1.png)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tesla Sales & Service</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Pre-owned Tesla sales and professional automotive services.
                </p>
                <a 
                  href="https://cars.theevstore.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group/link"
                >
                  <span className="text-sm border-b border-red-600/30 pb-0.5">Visit Cars.TheEVStore.ca</span>
                  <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* EV Parts & Accessories */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-slate-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-2xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20" />
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white font-bold text-lg mb-2 tracking-wide">COMING SOON</div>
                  <div className="text-white/70 text-xs font-medium tracking-wider">LAUNCHING 2025</div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    NEW
                  </div>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tesla Parts & Accessories</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Model 3 & Y parts and accessories shipping across Canada.
                </p>
                <div className="inline-flex items-center text-gray-500 font-semibold">
                  <span className="text-sm">TheEVStore.ca</span>
                  <Clock className="ml-2 h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Advanced Plumbing */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/apk/1.png)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plumbing & HVAC</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Professional plumbing, HVAC, and gas fitting services for your home.
                </p>
                <a 
                  href="https://advancedplumbingkamloops.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group/link"
                >
                  <span className="text-sm border-b border-amber-600/30 pb-0.5">Visit AdvancedPlumbing.ca</span>
                  <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
              <Star className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">
                One family of businesses, serving all your needs in Kamloops and beyond
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Location Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium tracking-wide mb-6">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Ready to Start
              <span className="block text-amber-400">Your Project?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stand proudly behind what we build. Let&apos;s discuss how we can bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-amber-400" />
                  <span className="font-semibold">Email Us</span>
                </div>
                <a href="mailto:info@hodderconstruction.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                  info@hodderconstruction.com
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-amber-400" />
                  <span className="font-semibold">Our Location</span>
                </div>
                <p className="text-gray-300">
                  Mount Paul Industrial Park<br />
                  Kamloops, BC, Canada
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-amber-400" />
                  <span className="font-semibold">Service Area</span>
                </div>
                <p className="text-gray-300">
                  Kamloops & Thompson<br />
                  Okanagan Region
                </p>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl h-96 flex items-center justify-center border border-gray-600">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-gray-400">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a 
              href="mailto:info@hodderconstruction.com" 
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-black px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}