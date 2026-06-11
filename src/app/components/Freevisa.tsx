import React from 'react'
import { FaClock, FaGift } from 'react-icons/fa'

export const Freevisa = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-6 lg:mt-10">
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-xl -translate-x-8 translate-y-8"></div>

        {/* Content Details */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="bg-white/10 p-3.5 rounded-xl shadow-inner text-yellow-300">
            <FaGift size={24} />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-extrabold tracking-tight">
              Free from Visa & Ticket charges
            </h4>
            <p className="text-xs sm:text-sm text-red-100 mt-0.5">
              Available for essential select sectors and skilled job packages.
            </p>
          </div>
        </div>

        {/* Highlight Badge */}
        <div className="relative z-10 bg-yellow-400 text-red-950 font-bold px-6 py-3 rounded-xl shadow-md flex items-center gap-2 hover:scale-105 transition-transform duration-200 text-sm sm:text-base">
          <FaClock size={16} className="text-red-950/80 animate-spin" style={{ animationDuration: '6s' }} />
          Processing: 2 months
        </div>

      </div>
    </div>
  )
}
