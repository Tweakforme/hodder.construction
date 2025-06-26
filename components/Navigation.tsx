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
      key: 'commercial',
      items: [
        { title: 'Commercial Construction', href: '/commercial', desc: 'Tenant improvements & builds' },
      ]
    },
    {
      title: 'Residential',
      key: 'residential',
      items: [
        { title: 'Custom Homes', href: '/residential', desc: 'Build your dream home' },
        { title: 'Mortgage Calculator', href: '/mortgage', desc: 'Calculate your payments' },
        { title: 'Property Transfer Tax', href: '/ptt', desc: 'Tax calculations' },
        { title: 'Rental Properties', href: 'https://rentalskamloops.ca', desc: 'Available rental units', external: true }
      ]
    },
    {
      title: 'Projects & Plans',
      key: 'projects',
      items: [
        { title: 'Our Portfolio', href: '/projects', desc: 'Completed projects showcase' },
        { title: 'House Plans', href: '/plans', desc: 'Browse floor plans' }
      ]
    },
    {
      title: 'About',
      key: 'about',
      items: [
        { title: 'Our Company', href: '/about', desc: 'Our story & values' },
        { title: 'Careers', href: '/about#joinus', desc: 'Join our team' }
      ]
    }
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-xl shadow-lg border-b border-stone-200/30' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className={`relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'w-10 h-10 bg-stone-50 shadow-sm' : 'w-12 h-12 bg-white/10 backdrop-blur-sm shadow-lg'
              }`}>
                <Image
                  src="/logo.png"
                  alt="Hodder Construction"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <div className={`font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                } group-hover:text-amber-500`}>
                  <span className="text-xl">HODDER CONSTRUCTION</span>
                  <span className="text-xl font-medium"> LTD.</span>
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
                  <button className={`flex items-center px-4 py-2.5 rounded-xl font-medium text-base tracking-wide transition-all duration-300 ${
                    isScrolled 
                      ? 'text-stone-700 hover:text-amber-500 hover:bg-amber-50/50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}>
                    <span className="relative">
                      {item.title}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 ${
                        activeDropdown === item.key ? 'w-full' : 'w-0'
                      }`} />
                    </span>
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === item.key ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Elegant Dropdown */}
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-2 transition-all duration-300 ${
                    activeDropdown === item.key
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-stone-200/30 overflow-hidden">
                      <div className="p-4 space-y-1">
                        {item.items.map((subItem, index) => (
                          subItem.external ? (
                            <a
                              key={index}
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-start p-3 rounded-xl hover:bg-stone-50/80 transition-all duration-300"
                            >
                              <div className="flex-1">
                                <div className="font-semibold text-stone-900 text-sm group-hover:text-amber-500 transition-colors">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-stone-600 leading-relaxed mt-0.5">{subItem.desc}</div>
                              </div>
                            </a>
                          ) : (
                            <Link
                              key={index}
                              href={subItem.href}
                              className="group flex items-start p-3 rounded-xl hover:bg-stone-50/80 transition-all duration-300"
                            >
                              <div className="flex-1">
                                <div className="font-semibold text-stone-900 text-sm group-hover:text-amber-500 transition-colors">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-stone-600 leading-relaxed mt-0.5">{subItem.desc}</div>
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
      <nav className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-stone-200/30' 
          : 'bg-transparent'
      }`}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className={`relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'w-9 h-9 bg-stone-50 shadow-sm' : 'w-10 h-10 bg-white/10 backdrop-blur-sm shadow-lg'
              }`}>
                <Image
                  src="/logo.png"
                  alt="Hodder Construction"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <div className={`font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                } group-hover:text-amber-500`}>
                  <div className="text-sm leading-tight">HODDER CONSTRUCTION</div>
                  <div className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 -mt-0.5">LTD.</div>
                </div>
              </div>
            </Link>

            {/* Sophisticated Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
                setMobileSubmenu(null)
              }}
              className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled 
                  ? 'text-stone-700 hover:bg-stone-50 shadow-sm border border-stone-200/30' 
                  : 'text-white hover:bg-white/10 shadow-lg backdrop-blur-sm'
              } ${isMobileMenuOpen ? 'scale-95 rotate-180' : 'scale-100 rotate-0'}`}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className={`absolute w-5 h-0.5 rounded-full transition-all duration-500 ease-out transform ${
                  isScrolled && !isMobileMenuOpen ? 'bg-stone-700' : 'bg-white'
                } ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-0 scale-110 w-6' 
                    : '-translate-y-1.5 scale-100'
                }`} />
                
                <div className={`absolute w-5 h-0.5 rounded-full transition-all duration-300 ease-out ${
                  isScrolled && !isMobileMenuOpen ? 'bg-stone-700' : 'bg-white'
                } ${
                  isMobileMenuOpen 
                    ? 'opacity-0 scale-0 rotate-180' 
                    : 'opacity-100 scale-100 rotate-0'
                }`} />
                
                <div className={`absolute w-5 h-0.5 rounded-full transition-all duration-500 ease-out transform ${
                  isScrolled && !isMobileMenuOpen ? 'bg-stone-700' : 'bg-white'
                } ${
                  isMobileMenuOpen 
                    ? '-rotate-45 translate-y-0 scale-110 w-6' 
                    : 'translate-y-1.5 scale-100'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Sophisticated Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          
          {/* Elegant Backdrop */}
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            onClick={() => {
              setIsMobileMenuOpen(false)
              setMobileSubmenu(null)
            }}
          />

          {/* Professional Menu Container */}
          <div className="absolute top-16 left-4 right-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
            
            {/* Compact Main Menu */}
            {!mobileSubmenu && (
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-stone-200/30 overflow-hidden animate-scale-in">
                <div className="p-3 space-y-1">
                  {navigationItems.map((item, index) => (
                    <button
                      key={item.key}
                      onClick={() => setMobileSubmenu(item.key)}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-stone-50/80 active:bg-stone-100 transition-all duration-300 group animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center">
                        <span className="font-semibold text-stone-900 text-base">{item.title}</span>
                      </div>
                      <ChevronDown className="h-4 w-4 text-stone-400 -rotate-90 group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Compact Submenu */}
            {mobileSubmenu && (
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-stone-200/30 overflow-hidden animate-scale-in">
                <div className="p-4">
                  
                  {/* Compact Back Button */}
                  <button
                    onClick={() => setMobileSubmenu(null)}
                    className="flex items-center mb-4 text-stone-600 hover:text-stone-900 transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-200/50 flex items-center justify-center mr-2 group-hover:bg-stone-100 transition-colors">
                      <ChevronDown className="h-3 w-3 rotate-90 group-hover:-translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="font-medium text-sm">Back to Menu</span>
                  </button>

                  {/* Compact Submenu Title */}
                  <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center">
                    {navigationItems.find(item => item.key === mobileSubmenu)?.title}
                  </h3>

                  {/* Compact Submenu Items */}
                  <div className="space-y-1">
                    {navigationItems.find(item => item.key === mobileSubmenu)?.items.map((subItem, index) => (
                      subItem.external ? (
                        <a
                          key={index}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 rounded-xl bg-stone-50/30 hover:bg-stone-50 border border-stone-200/30 hover:border-stone-200/50 transition-all duration-300 group animate-fade-in-up"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setMobileSubmenu(null)
                          }}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="font-semibold text-stone-900 group-hover:text-amber-500 transition-colors text-base mb-0.5">
                            {subItem.title}
                          </div>
                          <div className="text-xs text-stone-600 leading-relaxed">{subItem.desc}</div>
                        </a>
                      ) : (
                        <Link
                          key={index}
                          href={subItem.href}
                          className="block p-3 rounded-xl bg-stone-50/30 hover:bg-stone-50 border border-stone-200/30 hover:border-stone-200/50 transition-all duration-300 group animate-fade-in-up"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setMobileSubmenu(null)
                          }}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="font-semibold text-stone-900 group-hover:text-amber-500 transition-colors text-base mb-0.5">
                            {subItem.title}
                          </div>
                          <div className="text-xs text-stone-600 leading-relaxed">{subItem.desc}</div>
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

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  )
}