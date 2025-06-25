'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

// Type definitions
interface NavigationItem {
  title: string
  href: string
  desc: string
  external?: boolean
}

interface NavigationSection {
  title: string
  key: string
  color: string
  items: NavigationItem[]
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems: NavigationSection[] = [
    {
      title: 'Commercial',
      key: 'sale',
      color: 'amber',
      items: [
        { title: 'Commercial Sales', href: '/sales', desc: 'Build Your Project' },
      ]
    },
    {
      title: 'Residential',
      key: 'rent',
      color: 'emerald',
      items: [
        { title: 'Build Your Home', href: '/residential', desc: 'Build Your Dream Home' },
         { title: 'Mortgage Calculator', href: '/mortgage', desc: 'Calculate your payments' },
        { title: 'Property Transfer Tax', href: '/ptt', desc: 'Tax calculations' },
         { title: 'Rental Properties', href: 'https://rentalskamloops.ca', desc: 'Redirects to rentalskamloops.ca', external: true }
      ]
    },
    {
      title: 'Projects & Plans',
      key: 'projects',
      color: 'blue',
      items: [
        { title: 'Current & Past Projects', href: '/projects', desc: 'See our craftsmanship' },
        { title: 'Find House Plans', href: '/plans', desc: 'Browse floor plans' }
      ]
    },
    {
      title: 'About Us',
      key: 'about',
      color: 'violet',
      items: [
        { title: 'Who We Are', href: '/about', desc: 'Our story' },
        { title: 'Join Us', href: '/about#joinus', desc: 'Career opportunities' }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      amber: 'from-amber-500/10 to-orange-500/10',
      emerald: 'from-emerald-500/10 to-teal-500/10',
      blue: 'from-blue-500/10 to-indigo-500/10',
      violet: 'from-violet-500/10 to-purple-500/10'
    }
    return colors[color as keyof typeof colors] || colors.amber
  }

  const getDotColor = (color: string) => {
    const colors = {
      amber: 'bg-amber-400',
      emerald: 'bg-emerald-400',
      blue: 'bg-blue-400',
      violet: 'bg-violet-400'
    }
    return colors[color as keyof typeof colors] || colors.amber
  }

  const getHoverColor = (color: string) => {
    const colors = {
      amber: 'hover:text-amber-500',
      emerald: 'hover:text-emerald-500',
      blue: 'hover:text-blue-500',
      violet: 'hover:text-violet-500'
    }
    return colors[color as keyof typeof colors] || colors.amber
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo - Always Visible */}
            <Link href="/" className="flex items-center space-x-3 group min-w-0 flex-1">
              <div className={`relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                isScrolled ? 'w-10 h-10 bg-gray-100' : 'w-12 h-12 bg-white/10 backdrop-blur-sm'
              }`}>
                <Image
                  src="/logo.png"
                  alt="Hodder Construction Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="min-w-0">
                <div className={`font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } group-hover:text-amber-500`}>
                  <span className="text-base md:text-lg lg:text-xl">HODDER CONSTRUCTION</span>
                  <span className="text-sm md:text-base lg:text-lg"> LTD.</span>
                </div>
              </div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1 flex-shrink-0">
              {navigationItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-amber-600 hover:bg-gray-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}>
                    <span className="relative">
                      {item.title}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                        activeDropdown === item.key ? 'w-full' : 'w-0'
                      }`} />
                    </span>
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === item.key ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Compact Dropdown */}
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-2 transition-all duration-300 ${
                    activeDropdown === item.key
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/20 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(item.color)}`} />
                      <div className="relative p-3 space-y-1">
                        {item.items.map((subItem, index) => (
                          subItem.external ? (
                            <a
                              key={index}
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/item flex items-center p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                            >
                              <div className={`w-1.5 h-1.5 ${getDotColor(item.color)} rounded-full mr-3 group-hover/item:scale-125 transition-transform`} />
                              <div>
                                <div className="font-medium text-gray-900 text-sm group-hover/item:text-amber-600 transition-colors">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-gray-600">{subItem.desc}</div>
                              </div>
                            </a>
                          ) : (
                            <Link
                              key={index}
                              href={subItem.href}
                              className="group/item flex items-center p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                            >
                              <div className={`w-1.5 h-1.5 ${getDotColor(item.color)} rounded-full mr-3 group-hover/item:scale-125 transition-transform`} />
                              <div>
                                <div className="font-medium text-gray-900 text-sm group-hover/item:text-amber-600 transition-colors">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-gray-600">{subItem.desc}</div>
                              </div>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            
            {/* Mobile Logo - Always Visible */}
            <Link href="/" className="flex items-center space-x-2 group min-w-0 flex-1">
              <div className={`relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                isScrolled ? 'w-8 h-8 bg-gray-100' : 'w-9 h-9 bg-white/10 backdrop-blur-sm'
              }`}>
                <Image
                  src="/logo.png"
                  alt="Hodder Construction Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="min-w-0">
                <div className={`font-bold transition-colors duration-300 leading-tight ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } group-hover:text-amber-500`}>
                  <div className="text-xs sm:text-sm">HODDER CONSTRUCTION</div>
                  <div className="text-xs text-amber-400 -mt-0.5">LTD.</div>
                </div>
              </div>
            </Link>

            {/* Spectacular Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
                setMobileSubmenu(null)
              }}
              className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 transform ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100 shadow-lg' 
                  : 'text-white hover:bg-white/20 shadow-xl'
              } ${isMobileMenuOpen ? 'scale-110 rotate-180' : 'scale-100 rotate-0'} hover:scale-105`}
            >
              {/* Animated Background Circle */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                isMobileMenuOpen 
                  ? 'bg-gradient-to-br from-amber-400 to-orange-500 scale-110' 
                  : 'bg-transparent scale-100'
              }`} />
              
              {/* Hamburger Lines with Spectacular Animation */}
              <div className="relative w-7 h-7 flex items-center justify-center">
                <span className={`absolute w-6 h-0.5 rounded-full transition-all duration-500 ease-out transform ${
                  isScrolled && !isMobileMenuOpen ? 'bg-gray-700' : 'bg-white'
                } ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-0 scale-110 w-7' 
                    : '-translate-y-2 scale-100'
                }`} />
                
                <span className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 ease-out ${
                  isScrolled && !isMobileMenuOpen ? 'bg-gray-700' : 'bg-white'
                } ${
                  isMobileMenuOpen 
                    ? 'opacity-0 scale-0 rotate-180' 
                    : 'opacity-100 scale-100 rotate-0'
                }`} />
                
                <span className={`absolute w-6 h-0.5 rounded-full transition-all duration-500 ease-out transform ${
                  isScrolled && !isMobileMenuOpen ? 'bg-gray-700' : 'bg-white'
                } ${
                  isMobileMenuOpen 
                    ? '-rotate-45 translate-y-0 scale-110 w-7' 
                    : 'translate-y-2 scale-100'
                }`} />
              </div>

           
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => {
              setIsMobileMenuOpen(false)
              setMobileSubmenu(null)
            }}
          />

          {/* Menu Container */}
          <div className="absolute top-20 left-4 right-4">
            
            {/* Main Menu */}
            {!mobileSubmenu && (
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden animate-slide-in">
                <div className="p-6 space-y-3">
                  {navigationItems.map((item, index) => (
                    <button
                      key={item.key}
                      onClick={() => {
                        console.log('Opening submenu:', item.key)
                        setMobileSubmenu(item.key)
                      }}
                      className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${getDotColor(item.color)} rounded-full mr-4 group-hover:scale-125 transition-transform duration-300`} />
                        <span className="font-semibold text-gray-900 text-lg">{item.title}</span>
                      </div>
                      <ChevronDown className="h-5 w-5 text-gray-400 -rotate-90 group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Submenu */}
            {mobileSubmenu && (
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden animate-slide-in">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  getColorClasses(navigationItems.find(item => item.key === mobileSubmenu)?.color || 'amber')
                }`} />
                <div className="relative p-6">
                  
                  {/* Back Button */}
                  <button
                    onClick={() => setMobileSubmenu(null)}
                    className="flex items-center mb-6 text-gray-600 hover:text-gray-900 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center mr-3 group-hover:bg-white/70 transition-all duration-300">
                      <ChevronDown className="h-5 w-5 rotate-90 group-hover:-translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="font-semibold text-lg">Back to Menu</span>
                  </button>

                  {/* Submenu Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className={`w-5 h-5 ${getDotColor(navigationItems.find(item => item.key === mobileSubmenu)?.color || 'amber')} rounded-full mr-3`} />
                    {navigationItems.find(item => item.key === mobileSubmenu)?.title}
                  </h3>

                  {/* Submenu Items */}
                  <div className="space-y-3">
                    {navigationItems.find(item => item.key === mobileSubmenu)?.items.map((subItem, index) => (
                      subItem.external ? (
                        <a
                          key={index}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block p-5 rounded-2xl bg-white/30 hover:bg-white/50 transition-all duration-300 group ${getHoverColor(navigationItems.find(item => item.key === mobileSubmenu)?.color || 'amber')}`}
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setMobileSubmenu(null)
                          }}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="font-semibold text-gray-900 group-hover:text-current transition-colors text-lg mb-1">
                            {subItem.title}
                          </div>
                          <div className="text-sm text-gray-600 leading-relaxed">{subItem.desc}</div>
                        </a>
                      ) : (
                        <Link
                          key={index}
                          href={subItem.href}
                          className={`block p-5 rounded-2xl bg-white/30 hover:bg-white/50 transition-all duration-300 group ${getHoverColor(navigationItems.find(item => item.key === mobileSubmenu)?.color || 'amber')}`}
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setMobileSubmenu(null)
                          }}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="font-semibold text-gray-900 group-hover:text-current transition-colors text-lg mb-1">
                            {subItem.title}
                          </div>
                          <div className="text-sm text-gray-600 leading-relaxed">{subItem.desc}</div>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Add Custom CSS for Animations */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}