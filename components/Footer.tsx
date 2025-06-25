import { MapPin, Phone, Mail, Facebook, Twitter, ArrowRight, Award, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">
            
            {/* Left - Company Brand */}
            <div>
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-2xl bg-white/10 p-2 sm:p-3 mr-4">
                  <Image
                    src="/logo.png"
                    alt="Hodder Construction Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">HODDER</h3>
                  <p className="text-base sm:text-lg text-amber-400 font-semibold">CONSTRUCTION LTD.</p>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Building exceptional homes and commercial spaces in Kamloops for over 30 years. 
                We transform visions into reality with uncompromising quality and craftsmanship.
              </p>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">30+</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">17+</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Projects Built</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right - Quick Links & CTA */}
            <div className="space-y-8">
              
              {/* Quick Navigation */}
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-6 text-white">Quick Links</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Link href="/sales" className="group flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm sm:text-base">Homes for Sale</span>
                    </Link>
                    <Link href="/rentals" className="group flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm sm:text-base">Rental Properties</span>
                    </Link>
                    <Link href="/projects" className="group flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm sm:text-base">Our Projects</span>
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link href="/plans" className="group flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm sm:text-base">Floor Plans</span>
                    </Link>
                    <Link href="/about" className="group flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm sm:text-base">About Us</span>
                    </Link>
                    <Link href="/mortgage" className="group flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm sm:text-base">Mortgage Calc</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-amber-500/20">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 text-white">Ready to Start Building?</h4>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  Get a free consultation and bring your vision to life with Kamloops&apos; most trusted builders.
                </p>
                <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="border-t border-gray-800 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            
            {/* Address */}
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-sm sm:text-base">Visit Our Office</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    419 Mt.Paul Way<br />
                    Kamloops BC<br />
                    V2H 1A7
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-sm sm:text-base">Call Us Today</h4>
                  <a href="tel:2508288760" className="text-gray-300 hover:text-green-400 transition-colors text-sm sm:text-base">
                    (250) 828 - 8760
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Mon-Fri 8AM-5PM</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-sm sm:text-base">Email Us</h4>
                  <a href="mailto:info@hodder.ca" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">
                    info@hodder.ca
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Quick response guaranteed</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-sm sm:text-base">Follow Us</h4>
                  <div className="space-y-2">
                    <a 
                      href="https://www.facebook.com/Hodder-Construction-1993-LTD-114131665332190" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </a>
                    <a 
                      href="https://www.twitter.com/Hodder_CA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Award className="h-5 w-5 text-amber-400" />
              <p className="text-gray-400 text-sm">
                Licensed & Insured • Kamloops Chamber of Commerce Member
              </p>
            </div>
            
            <p className="text-gray-400 text-sm text-center sm:text-right">
              &copy; 2025 Hodder Construction LTD. All rights reserved. | Built with excellence in Kamloops, BC
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}