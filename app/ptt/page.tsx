import Link from 'next/link'
import { ExternalLink, Calculator, Home, Users, FileText, CheckCircle, AlertTriangle } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function PropertyTransferTax() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 lg:pt-24 pb-16 lg:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium tracking-wide mb-6 border border-white/20">
            <Calculator className="h-4 w-4 mr-2" />
            TAX CALCULATOR
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Property Transfer
            <span className="block text-amber-400">Tax Guide</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            When you buy a house, condo or land in BC you are subject to land transfer tax which is due upon closing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="http://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              BC Provincial Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            
            <Link 
              href="/mortgage" 
              className="inline-flex items-center border-2 border-white/30 hover:border-amber-400 text-white hover:text-amber-400 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Mortgage Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Tax Calculation Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium tracking-wide mb-6 text-gray-600">
              TAX CALCULATION
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              How It&apos;s
              <span className="block text-amber-500">Calculated</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Property Transfer Tax is calculated using the following tiered structure based on property value.
            </p>
          </div>
          
          {/* Tax Brackets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Bracket 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1%</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">First $200,000</h3>
                <p className="text-green-600 font-semibold mb-4">Low Rate Bracket</p>
                <p className="text-gray-600 text-sm">
                  Most affordable rate for properties under $200,000
                </p>
              </div>
            </div>

            {/* Bracket 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2%</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">$200K - $2M</h3>
                <p className="text-amber-600 font-semibold mb-4">Standard Rate</p>
                <p className="text-gray-600 text-sm">
                  Standard rate for most residential properties
                </p>
              </div>
            </div>

            {/* Bracket 3 */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3%</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Over $2M</h3>
                <p className="text-red-600 font-semibold mb-4">Luxury Rate</p>
                <p className="text-gray-600 text-sm">
                  Higher rate for luxury properties over $2 million
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemptions Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium tracking-wide mb-6 text-gray-600">
              TAX EXEMPTIONS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Save Money with
              <span className="block text-amber-500">Exemptions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qualified buyers may be eligible for significant tax savings through these exemption programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* First Time Home Buyers */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">First Time Home Buyers</h3>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
                    Up to $500,000 exempt
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">No PTT on homes $500,000 or less</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Must live in property for first year</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Full PTT applies over $500,000</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mb-6">
                If one or more purchasers don&apos;t qualify, only the qualifying buyer&apos;s percentage of interest is eligible for the exemption.
              </p>
              
              <a 
                href="http://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax/understand/first-time-home-buyers/current-amount" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Check Qualification Requirements
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Newly Built Home */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Newly Built Home</h3>
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full text-sm font-medium text-green-700">
                    Up to $750,000 exempt
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">No PTT on homes $750,000 or less</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Includes new construction & condos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Full PTT applies over $800,000</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Qualifying Properties:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• New house on vacant land</li>
                  <li>• New apartment in new condo building</li>
                  <li>• Manufactured home on vacant land</li>
                  <li>• Converted non-residential buildings</li>
                </ul>
              </div>
              
              <a 
                href="http://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn More About This Exemption
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Need Help with
            <span className="block text-amber-500">Your Purchase?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Our team can help you navigate property transfer taxes and find the right home that fits your budget and qualifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/sales" 
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Available Homes
              <Home className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/mortgage" 
              className="inline-flex items-center border-2 border-gray-900 hover:border-amber-500 text-gray-900 hover:text-amber-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Calculate Mortgage
              <Calculator className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <FileText className="h-5 w-5" />
              <span className="text-sm font-medium">
                Always consult with a qualified real estate professional for specific tax advice
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}