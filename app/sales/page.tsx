'use client'

import Link from 'next/link'
import { Home, ArrowRight, Mail, MapPin, Clock, Building, Users, Award, Heart } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Sales() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24">
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
            <div className="hidden sm:inline-flex items-center px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium tracking-wide mb-6 border border-white/20">
              <Home className="h-4 w-4 mr-2" />
              NEW HOMES FOR SALE
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none tracking-tight">
              <span className="block">YOUR DREAM</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                HOME AWAITS
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed font-light max-w-4xl mx-auto">
              While we don&apos;t currently have completed homes available for immediate purchase, we&apos;re always planning exciting new projects. Let us build your custom dream home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@hodder.ca?subject=Custom Home Consultation Request"
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Schedule Consultation
                <Mail className="ml-2 h-5 w-5" />
              </a>
              
              <Link 
                href="/projects" 
                className="inline-flex items-center border-2 border-white/30 hover:border-amber-400 text-white hover:text-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium tracking-wide mb-6 text-gray-600">
              CURRENT STATUS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Building Dreams,
              <span className="block text-amber-500">One Home at a Time</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content Side */}
            <div className="text-center lg:text-left">
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">
                      Currently Building Dreams
                    </h3>
                    <p className="text-amber-700 leading-relaxed">
                      We&apos;re currently focused on custom builds and don&apos;t have any spec homes immediately available. However, this means we can dedicate our full attention to creating your perfect custom home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Home Construction</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Let us build your dream home from the ground up, tailored to your exact specifications and lifestyle needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Personal Consultation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Work directly with our experienced team to design and plan your perfect home within your budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">30+ Years of Excellence</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Trust in our proven track record of quality construction and customer satisfaction in Kamloops.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <div className="aspect-square rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: 'url(/banner.jpg)' }}
                />
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-500 mb-1">17+</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Projects Completed</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <Heart className="h-6 w-6 text-red-500 mx-auto mb-1" />
                  <div className="text-xs text-gray-600 font-medium">100% Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Build Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ready to Build Your Dream Home?
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                Don&apos;t wait for the perfect house to come on the market. Let us create the perfect house for you, designed exactly to your specifications and lifestyle needs.
              </p>

              <a 
                href="mailto:info@hodder.ca?subject=Custom Home Consultation Request"
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Start Your Custom Home Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Other Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While you&apos;re waiting, here are other ways we can help you with your housing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Custom Build */}
        

            {/* Rental Properties */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rental Properties</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Looking for a place to rent? Check out our quality rental properties in Kamloops.
              </p>
              <a 
                href="https://rentalskamloops.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-full font-semibold transition-all duration-300"
              >
                Visit RentalsKamloops.ca
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* View Projects */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">View Our Work</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                See examples of our exceptional craftsmanship and get inspired for your own project.
              </p>
              <Link 
                href="/projects"
                className="w-full inline-flex items-center justify-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 rounded-full font-semibold transition-all duration-300"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Planning?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t wait for a spec home. Let&apos;s start planning your custom dream home today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-amber-400" />
                  <span className="font-semibold">Email Us</span>
                </div>
                <a href="mailto:info@hodder.ca" className="text-amber-400 hover:text-amber-300 transition-colors">
                  info@hodder.ca
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
            
            {/* CTA Side */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 lg:p-12 h-full flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                  Let&apos;s Build Your Dream Home Together
                </h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  With over 30 years of experience in Kamloops, we know how to turn your vision into reality. From initial consultation to final walkthrough, we&apos;re with you every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:info@hodder.ca?subject=Custom Home Consultation Request"
                    className="inline-flex items-center justify-center bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Schedule Consultation
                  </a>
                  <Link 
                    href="/about"
                    className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                  >
                    Learn More About Us
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