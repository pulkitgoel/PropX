
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin, CheckCircle, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const quickFilters = [
    { label: '2 BHK', icon: '🏠' },
    { label: '3 BHK', icon: '🏡' },
    { label: 'Gurugram', icon: '📍' },
    { label: 'Under ₹2 Cr', icon: '💰' },
  ]

  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.25)), url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=2000')`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Decorative Elegant Elements - Green Theme */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-300/8 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300/8 rounded-full blur-3xl -z-0" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200">
              <CheckCircle size={16} className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Verified & Trusted Platform</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl" style={{textShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'}}>
                Find Your Perfect <span className="text-white">Home</span>
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-lg font-medium drop-shadow-2xl" style={{textShadow: '0 3px 8px rgba(0, 0, 0, 0.3)'}}>
                Explore verified properties with transparent pricing and expert guidance. Your dream home is just a few clicks away.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all group">
                <span>Explore Properties</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" className="px-8 py-6 text-base font-semibold rounded-lg bg-white/90 text-slate-900 border border-slate-300 hover:bg-white transition-all shadow-md">
                Schedule a Tour
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/30">
              <div>
                <div className="text-4xl font-bold text-white drop-shadow-2xl" style={{textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'}}>50K+</div>
                <p className="text-sm text-white mt-2 font-medium drop-shadow-lg">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white drop-shadow-2xl" style={{textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'}}>15K+</div>
                <p className="text-sm text-white mt-2 font-medium drop-shadow-lg">Properties</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white drop-shadow-2xl" style={{textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'}}>99.8%</div>
                <p className="text-sm text-white mt-2 font-medium drop-shadow-lg">Verified</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Property Cards */}
          <div className="hidden md:block relative">
            <style>{`
              @keyframes float-up {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes card-shine {
                0% { box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); }
                50% { box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4); }
                100% { box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); }
              }
              .card-animated {
                animation: float-up 3s ease-in-out infinite;
              }
              .card-animated:nth-child(2) {
                animation-delay: 0.3s;
              }
              .card-animated:nth-child(3) {
                animation-delay: 0.6s;
              }
              .card-animated:hover {
                animation: card-shine 0.6s ease-in-out !important;
              }
            `}</style>
            <div className="space-y-4 relative">
              {/* Card 1 */}
              <div className="card-animated bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-emerald-300 group cursor-pointer hover:scale-105 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 border border-orange-200">
                    <span className="text-3xl group-hover:animate-bounce">🏢</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">Modern Apartment</h3>
                    <p className="text-sm text-slate-500 mt-1">Sector 43, Gurugram</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-bold text-emerald-600">₹3.9 Cr</span>
                      <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold border border-green-200 group-hover:bg-green-100 transition-all">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card-animated bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-emerald-300 group cursor-pointer ml-8 hover:scale-105 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 border border-blue-200">
                    <span className="text-3xl group-hover:animate-bounce">🏰</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">Luxury Penthouse</h3>
                    <p className="text-sm text-slate-500 mt-1">Sector 47, Gurugram</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-bold text-emerald-600">₹8.5 Cr</span>
                      <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold border border-green-200 group-hover:bg-green-100 transition-all">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card-animated bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-emerald-300 group cursor-pointer hover:scale-105 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 border border-teal-200">
                    <span className="text-3xl group-hover:animate-bounce">🏡</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">Premium Villa</h3>
                    <p className="text-sm text-slate-500 mt-1">Golf Course Road</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-bold text-emerald-600">₹6.2 Cr</span>
                      <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold border border-green-200 group-hover:bg-green-100 transition-all">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar - Enhanced */}
        <div className="mt-20 bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Find Your Property</h3>
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="flex-1 relative">
                <MapPin size={20} className="absolute left-4 top-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search by location or project name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-slate-900 placeholder:text-slate-400 rounded-lg py-3 text-base"
                />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl gap-2 transition-all">
                <Search size={20} />
                <span>Search</span>
              </Button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3">
              {quickFilters.map((filter) => (
                <button
                  key={filter.label}
                  className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm border border-slate-200 transition-all hover:border-emerald-300"
                >
                  {filter.icon} {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
