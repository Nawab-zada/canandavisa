import React from 'react';
import Image from 'next/image';

const VisaBanner = () => {
  return (
    <div className="w-full h-auto ">
      <div className="relative mt-1 w-full h-[130px] sm:h-[300px] md:h-[350px] lg:h-[450px]">
        <Image
          src="/immigrationvisa.png"
          alt="banner"
          fill // Use `fill` to make the image responsive
          className="object-cover object-center" // Ensure the image covers the container
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1350px" // Optimize image loading
        />
      </div>
    </div>
  );
};

export default VisaBanner;