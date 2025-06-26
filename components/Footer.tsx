import { MapPin, Phone, Mail, Facebook, Twitter, ArrowRight, Award, Share2, Clock, CheckCircle } from 'lucide-react'
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
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        
        {/* Top Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
            
            {/* Left - Company Brand */}
            <div className="text-center lg:text-left">
              {/* Brand Logo Section - Clean Design */}
              <div className="inline-flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-2xl p-2 shadow-xl mr-4">
                  <Image
                    src="/logo.png"
                    alt="Hodder Construction"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-2xl sm:text-3xl lg:text-4xl tracking-wider">
                    HODDER
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 tracking-wider -mt-1">
                    CONSTRUCTION
                  </div>
                  <div className="text-sm sm:text-base text-amber-400 font-medium tracking-widest -mt-1">
                    LTD.
                  </div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Building exceptional homes and commercial spaces in Kamloops for over 40 years. 
                We transform visions into reality with uncompromising quality and craftsmanship.
              </p>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center lg:text-left p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
                    40+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">Years Experience</div>
                </div>
                <div className="text-center lg:text-left p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
                    46+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">Projects Built</div>
                </div>
                <div className="text-center lg:text-left p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right - Quick Links & CTA */}
            <div className="space-y-8">
              
              {/* Quick Navigation */}
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-white text-center lg:text-left">Quick Links</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Link href="/residential" className="group flex items-center justify-center lg:justify-start text-gray-300 hover:text-amber-400 transition-all duration-300">
                      <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform text-amber-500" />
                      <span className="font-medium">Custom Homes</span>
                    </Link>
                    <Link href="/commercial" className="group flex items-center justify-center lg:justify-start text-gray-300 hover:text-amber-400 transition-all duration-300">
                      <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform text-amber-500" />
                      <span className="font-medium">Commercial</span>
                    </Link>
                    <Link href="/projects" className="group flex items-center justify-center lg:justify-start text-gray-300 hover:text-amber-400 transition-all duration-300">
                      <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform text-amber-500" />
                      <span className="font-medium">Our Projects</span>
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link href="/plans" className="group flex items-center justify-center lg:justify-start text-gray-300 hover:text-amber-400 transition-all duration-300">
                      <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform text-amber-500" />
                      <span className="font-medium">Floor Plans</span>
                    </Link>
                    <Link href="/about" className="group flex items-center justify-center lg:justify-start text-gray-300 hover:text-amber-400 transition-all duration-300">
                      <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform text-amber-500" />
                      <span className="font-medium">About Us</span>
                    </Link>
                    <Link href="/mortgage" className="group flex items-center justify-center lg:justify-start text-gray-300 hover:text-amber-400 transition-all duration-300">
                      <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform text-amber-500" />
                      <span className="font-medium">Mortgage Calc</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl p-6 sm:p-8 border border-amber-500/30 backdrop-blur-sm shadow-2xl">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left">Ready to Start Building?</h4>
                <p className="text-gray-200 mb-6 text-center lg:text-left leading-relaxed">
                  Get a free consultation and bring your vision to life with Kamloops&apos; most trusted builders.
                </p>
                <a 
                  href="mailto:info@hodder.ca?subject=Free Construction Consultation"
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section - Compact Professional Layout */}
        <div className="border-t border-gray-700/50 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Visit Our Office */}
            <div className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/20">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 w-4 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm mb-1">Visit Our Office</h4>
                <div className="text-gray-400 text-xs space-y-0.5">
                  <div>419 Mt.Paul Way</div>
                  <div>Kamloops BC V2H 1A7</div>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  Mon-Fri 8AM-4PM
                </div>
              </div>
            </div>

            {/* Call Us Today */}
            <div className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/20">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm mb-1">Call Us Today</h4>
                <a 
                  href="tel:2508288760" 
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  (250) 828-8760
                </a>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Quick Response
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/20">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-4 w-4 text-purple-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm mb-1">Email Us</h4>
                <a 
                  href="mailto:info@hodder.ca" 
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  info@hodder.ca
                </a>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Quick Response
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/20">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Share2 className="h-4 w-4 text-indigo-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm mb-1">Follow Us</h4>
                <div className="space-y-1">
                  <a 
                    href="https://www.facebook.com/Hodder-Construction-1993-LTD-114131665332190" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-200 transition-colors text-xs"
                  >
                    <Facebook className="h-3 w-3 mr-2" />
                    Facebook
                  </a>
                  <a 
                    href="https://www.twitter.com/Hodder_CA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-200 transition-colors text-xs"
                  >
                    <Twitter className="h-3 w-3 mr-2" />
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Clean & Professional */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Credentials Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full px-6 py-3 border border-amber-500/30">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <Award className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Licensed & Insured</div>
              
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center sm:text-right">
              <div className="text-gray-400 text-sm">
                © 2025 Hodder Construction LTD.
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Built with excellence in Kamloops, BC
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}