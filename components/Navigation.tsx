'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

function Navigation() {
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false)
        setMobileSubmenu(null)
      }
    }
    
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navigationItems = [
    {
      title: 'For Sale',
      key: 'sale',
      color: 'amber',
      items: [
        { title: 'New Homes For Sale', href: '/sales', desc: 'Discover your dream home' },
        { title: 'Mortgage Calculator', href: '/mortgage', desc: 'Calculate your payments' },
        { title: 'Property Transfer Tax', href: '/ptt', desc: 'Tax calculations' }
      ]
    },
    {
      title: 'For Rent',
      key: 'rent',
      color: 'emerald',
      items: [
        { title: 'Rental Properties', href: '/rentals', desc: 'Find your perfect rental' },
        { title: 'Inquiry & Application', href: '/rental-application', desc: 'Apply for rentals' }
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className={`relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-110 ${
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
              <div className="hidden xl:block">
                <div className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } group-hover:text-amber-500`}>
                  HODDER CONSTRUCTION LTD.
                </div>
              </div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
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

                  {/* Dropdown */}
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-2 transition-all duration-300 ${
                    activeDropdown === item.key
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/20 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(item.color)}`} />
                      <div className="relative p-6 space-y-2">
                        {item.items.map((subItem, index) => (
                          <Link
                            key={index}
                            href={subItem.href}
                            className="group/item flex items-start p-3 rounded-xl hover:bg-white/50 transition-all duration-300"
                          >
                            <div className={`w-2 h-2 ${getDotColor(item.color)} rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform`} />
                            <div>
                              <div className="font-semibold text-gray-900 group-hover/item:text-amber-600 transition-colors">
                                {subItem.title}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">{subItem.desc}</div>
                            </div>
                          </Link>
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
          : 'bg-black/80 backdrop-blur-xl'
      }`}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className={`relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-110 ${
                isScrolled ? 'w-8 h-8 bg-gray-100' : 'w-10 h-10 bg-white/10 backdrop-blur-sm'
              }`}>
                <Image
                  src="/logo.png"
                  alt="Hodder Construction Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className={`font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } group-hover:text-amber-500`}>
                <span className="text-sm sm:text-base">HODDER CONSTRUCTION</span>
                <span className="hidden sm:inline text-amber-400"> LTD.</span>
              </div>
            </Link>

            {/* Ultra Professional Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMenuOpen(!isMobileMenuOpen)
                setMobileSubmenu(null)
              }}
              className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100 active:bg-gray-200' 
                  : 'text-white hover:bg-white/10 active:bg-white/20'
              } ${isMobileMenuOpen ? 'scale-95' : 'scale-100'}`}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center">
                <span className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                } ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-0 top-1/2 transform -translate-y-1/2' 
                    : 'top-1'
                }`} />
                <span className={`absolute w-6 h-0.5 rounded-full top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                } ${
                  isMobileMenuOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                }`} />
                <span className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                } ${
                  isMobileMenuOpen 
                    ? '-rotate-45 translate-y-0 top-1/2 transform -translate-y-1/2' 
                    : 'bottom-1'
                }`} />
              </div>
              
              {/* Ripple Effect */}
              <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'border-amber-400/50 scale-110' 
                  : 'border-transparent scale-100'
              }`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Professional Animations */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out mobile-menu-container ${
        isMobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        
        {/* Enhanced Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => {
            setIsMobileMenuOpen(false)
            setMobileSubmenu(null)
          }}
        />

        {/* Menu Container with Staggered Animation */}
        <div className={`absolute top-20 left-4 right-4 transition-all duration-700 ease-out ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 scale-100' 
            : '-translate-y-12 opacity-0 scale-95'
        }`}>
          
          {/* Main Menu with Enhanced Animation */}
          <div className={`transition-all duration-500 ease-out ${
            mobileSubmenu ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'
          }`}>
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
              <div className="p-6 space-y-3">
                {navigationItems.map((item, index) => (
                  <div
                    key={item.key}
                    className={`transform transition-all duration-500 ease-out ${
                      isMobileMenuOpen 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => setMobileSubmenu(item.key)}
                      className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 group touch-manipulation"
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${getDotColor(item.color)} rounded-full mr-4 group-hover:scale-125 group-active:scale-110 transition-transform duration-300`} />
                        <span className="font-semibold text-gray-900 text-lg">{item.title}</span>
                      </div>
                      <div className="flex items-center">
                        <ChevronDown className="h-5 w-5 text-gray-400 -rotate-90 group-hover:translate-x-1 group-active:translate-x-2 transition-all duration-300" />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Submenu with Smooth Transitions */}
          <div className={`absolute top-0 left-0 right-0 transition-all duration-500 ease-out ${
            mobileSubmenu ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
          }`}>
            {mobileSubmenu && (
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  getColorClasses(navigationItems.find(item => item.key === mobileSubmenu)?.color || 'amber')
                }`} />
                <div className="relative p-6">
                  
                  {/* Enhanced Back Button */}
                  <button
                    onClick={() => setMobileSubmenu(null)}
                    className="flex items-center mb-6 text-gray-600 hover:text-gray-900 active:text-gray-700 transition-all duration-300 group touch-manipulation"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center mr-3 group-hover:bg-white/70 group-active:scale-95 transition-all duration-300">
                      <ChevronDown className="h-5 w-5 rotate-90 group-hover:-translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="font-semibold text-lg">Back to Menu</span>
                  </button>

                  {/* Enhanced Submenu Title */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                      <div className={`w-5 h-5 ${getDotColor(navigationItems.find(item => item.key === mobileSubmenu)?.color || 'amber')} rounded-full mr-3`} />
                      {navigationItems.find(item => item.key === mobileSubmenu)?.title}
                    </h3>
                  </div>

                  {/* Enhanced Submenu Items with Staggered Animation */}
                  <div className="space-y-3">
                    {navigationItems.find(item => item.key === mobileSubmenu)?.items.map((subItem, index) => (
                      <div
                        key={index}
                        className={`transform transition-all duration-500 ease-out ${
                          mobileSubmenu 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                      >
                        <Link
                          href={subItem.href}
                          className={`block p-5 rounded-2xl bg-white/30 hover:bg-white/50 active:bg-white/60 transition-all duration-300 group touch-manipulation ${getHoverColor(navigationItems.find(item => item.key === mobileSubmenu)?.color || 'amber')}`}
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setMobileSubmenu(null)
                          }}
                        >
                          <div className="font-semibold text-gray-900 group-hover:text-current transition-colors text-lg mb-1">
                            {subItem.title}
                          </div>
                          <div className="text-sm text-gray-600 leading-relaxed">{subItem.desc}</div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation