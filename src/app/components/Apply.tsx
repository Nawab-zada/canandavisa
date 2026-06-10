import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mt-4 sm:mt-6">
      <div className="relative w-full h-[180px] sm:h-[320px] md:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-slate-100">
        {/* Sliding & Fade-in animation */}
        <div className="absolute inset-0 animate-fadeIn animate-slideInFromLeft">
          <Image
            src="/banner.jpg"
            alt="Canada Study Visa - APNI Immigration Inc."
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
