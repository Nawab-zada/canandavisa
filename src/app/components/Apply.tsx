import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-[130px] sm:h-[300px] md:h-[350px] lg:h-[450px] overflow-hidden">
        {/* Sliding animation using Tailwind CSS */}
        <div className="absolute inset-0 animate-slideInFromLeft">
          <Image
            src="/immigrationvisa.png"
            alt="banner"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1350px"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
