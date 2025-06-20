'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calculator, DollarSign, Calendar, Percent, Home, TrendingUp, AlertCircle } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

interface AmortizationRow {
  month: number
  startingBalance: number
  principal: number
  interest: number
  endingBalance: number
  isYearEnd: boolean
  year: number
}

export default function MortgageCalculator() {
  const [price, setPrice] = useState<number>(500000)
  const [downpayment, setDownpayment] = useState<number>(50000)
  const [interestRate, setInterestRate] = useState<number>(5.25)
  const [amortization, setAmortization] = useState<number>(25)
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0)
  const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationRow[]>([])
  const [showSchedule, setShowSchedule] = useState<boolean>(false)

  const calculateMortgage = () => {
    const monthlyInterest = (interestRate / 12) / 100
    const loanAmount = price - downpayment
    const totalPayments = amortization * 12

    if (loanAmount <= 0 || monthlyInterest <= 0) {
      setMonthlyPayment(0)
      setAmortizationSchedule([])
      return
    }

    // Calculate monthly payment
    const monthly = loanAmount * (monthlyInterest + monthlyInterest / (Math.pow(1 + monthlyInterest, totalPayments) - 1))
    setMonthlyPayment(monthly)

    // Generate amortization schedule
    let balance = loanAmount
    const schedule: AmortizationRow[] = []
    let year = 1

    for (let i = 1; i <= totalPayments; i++) {
      const interestPayment = balance * monthlyInterest
      const principalPayment = monthly - interestPayment
      const startingBalance = balance
      
      balance = balance - principalPayment
      
      const isYearEnd = i % 12 === 0
      if (isYearEnd) year++

      schedule.push({
        month: i,
        startingBalance,
        principal: principalPayment,
        interest: interestPayment,
        endingBalance: balance,
        isYearEnd,
        year: isYearEnd ? year - 1 : Math.floor((i - 1) / 12) + 1
      })
    }

    setAmortizationSchedule(schedule)
  }

  useEffect(() => {
    calculateMortgage()
  }, [price, downpayment, interestRate, amortization])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD'
    }).format(amount)
  }

  const loanAmount = price - downpayment
  const totalInterest = (monthlyPayment * amortization * 12) - loanAmount
  const downpaymentPercent = (downpayment / price) * 100

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white pt-20 lg:pt-24 pb-16 lg:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium tracking-wide mb-6 border border-white/20">
            <Calculator className="h-4 w-4 mr-2" />
            MORTGAGE CALCULATOR
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Calculate Your
            <span className="block text-blue-400">Mortgage Payments</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            See how much interest you are likely to pay and estimated principal balances. 
            The calculator is absolutely free to use.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Calculator Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Calculator className="h-8 w-8 text-blue-600 mr-3" />
                Mortgage Calculator
              </h2>
              
              <div className="space-y-6">
                {/* Property Price */}
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Home className="h-4 w-4 mr-2" />
                    Property List Price
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      min="0"
                      step="1000"
                    />
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Down Payment
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      value={downpayment}
                      onChange={(e) => setDownpayment(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      min="0"
                      step="1000"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {downpaymentPercent.toFixed(1)}% of purchase price
                  </p>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Percent className="h-4 w-4 mr-2" />
                    Annual Mortgage Rate
                  </label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      min="0"
                      step="0.01"
                      max="20"
                    />
                  </div>
                </div>

                {/* Amortization Period */}
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    Amortization Period
                  </label>
                  <select
                    value={amortization}
                    onChange={(e) => setAmortization(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    {[5, 10, 15, 20, 25, 30].map(years => (
                      <option key={years} value={years}>{years} Years</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Monthly Payment Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Calculator className="h-6 w-6 mr-2" />
                  Monthly Payment
                </h3>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {formatCurrency(monthlyPayment)}
                </div>
                <p className="text-blue-100">Principal & Interest</p>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Loan Amount</h4>
                  <div className="text-2xl font-bold text-gray-900">{formatCurrency(loanAmount)}</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Total Interest</h4>
                  <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalInterest)}</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Total Payments</h4>
                  <div className="text-2xl font-bold text-gray-900">{amortization * 12} months</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Total Cost</h4>
                  <div className="text-2xl font-bold text-gray-900">{formatCurrency(loanAmount + totalInterest)}</div>
                </div>
              </div>

              {/* Show Schedule Button */}
              <button
                onClick={() => setShowSchedule(!showSchedule)}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {showSchedule ? 'Hide' : 'Show'} Amortization Schedule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Amortization Schedule */}
      {showSchedule && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Amortization Schedule</h2>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Month</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Starting Balance</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Principal</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Interest</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {amortizationSchedule.map((row, index) => (
                      <tr 
                        key={index} 
                        className={`${row.isYearEnd ? 'bg-blue-50 border-t-2 border-blue-200' : 'hover:bg-gray-50'} transition-colors`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="font-medium">{row.month}</span>
                            {row.isYearEnd && (
                              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                Year {row.year} End
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-mono text-sm">{formatCurrency(row.startingBalance)}</td>
                        <td className="px-6 py-4 text-right font-mono text-sm text-green-600">{formatCurrency(row.principal)}</td>
                        <td className="px-6 py-4 text-right font-mono text-sm text-red-600">{formatCurrency(row.interest)}</td>
                        <td className="px-6 py-4 text-right font-mono text-sm font-semibold">{formatCurrency(row.endingBalance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h4>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    The information provided by this calculator is intended for illustrative purposes only and is not intended to purport actual user-defined parameters. 
                    The default figures shown are hypothetical and may not be applicable to your individual situation. 
                    Be sure to consult a financial professional prior to relying on the results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Information Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Estimate Mortgage Payments</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                There are a number of factors that go into estimating how much your regular mortgage payments will be. 
                The most important numbers are the total mortgage amount, the amortization period, and the mortgage rate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                To use the calculator, enter the purchase price, and select your amortization period and mortgage rate. 
                Then you can see how your payment will be affected by the size of your down payment and frequency of payments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Lower Your Payments</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                There are a few ways to lower your monthly mortgage payments. You can reduce the purchase price, 
                make a bigger down payment, extend the amortization period, or choose a lower mortgage rate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Use the calculator above to try different variables to see what your payment will be with different scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Ready to Find
            <span className="block text-blue-500">Your Dream Home?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Now that you know your budget, explore our available properties and find the perfect home for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/sales" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Available Homes
              <Home className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/ptt" 
              className="inline-flex items-center border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Calculate Transfer Tax
              <Calculator className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}