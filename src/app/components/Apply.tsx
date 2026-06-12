import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mt-4 sm:mt-6">
      <div className="relative w-full h-[200px] sm:h-[340px] md:h-[440px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-slate-100 group">
        {/* Banner Image with subtle zoom on hover */}
        <div className="absolute inset-0 animate-fadeIn">
          <Image
            src="/banner.jpg"
            alt="Canada Work Visa 2026 - Apply Now for Free Visa and Ticket"
            fill
            priority
            className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
          />
        </div>

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Bottom CTA overlay - mobile & desktop */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
          {/* Trust badges */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FaCheckCircle className="text-green-500" size={14} />
              <span className="text-xs font-semibold text-gray-800">No IELTS Required</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FaCheckCircle className="text-green-500" size={14} />
              <span className="text-xs font-semibold text-gray-800">Free Visa & Ticket</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/18076973974?text=Hi%2C%20I%20am%20interested%20in%20Canada%20Work%20Visa.%20Please%20guide%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2.5 text-sm sm:text-base animate-pulse-glow"
          >
            <FaWhatsapp size={20} />
            Apply Now – Free!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
