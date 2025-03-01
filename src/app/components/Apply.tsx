import React from 'react';

const VisaBanner = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background created with CSS instead of image - responsive heights */}
      <div className="w-full h-[400px] sm:h-[400px] md:h-[500px] bg-gradient-to-r from-blue-800 to-blue-500 relative">
        {/* Stylized maple leaf using CSS - responsive sizing and positioning */}
        <div className="absolute right-4 sm:right-8 md:right-16 top-1/2 transform -translate-y-1/2 opacity-20">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 relative">
            <div className="absolute w-full h-full bg-red-600 rotate-45"></div>
            <div className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
        </div>
        
        {/* Abstract city skyline using CSS - responsive and hidden on smallest screens */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 flex items-end overflow-hidden">
          <div className="hidden xs:block w-4 sm:w-6 md:w-8 h-12 sm:h-16 md:h-20 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="w-6 sm:w-8 md:w-12 h-16 sm:h-20 md:h-28 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="w-5 sm:w-8 md:w-10 h-14 sm:h-18 md:h-24 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="hidden sm:block w-4 sm:w-5 md:w-6 h-10 sm:h-12 md:h-16 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="w-8 sm:w-10 md:w-14 h-20 sm:h-24 md:h-32 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="w-6 sm:w-8 md:w-10 h-12 sm:h-16 md:h-20 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="hidden xs:block w-5 sm:w-6 md:w-8 h-14 sm:h-18 md:h-24 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="w-6 sm:w-8 md:w-12 h-16 sm:h-20 md:h-28 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="w-8 sm:w-12 md:w-16 h-14 sm:h-18 md:h-24 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="hidden sm:block w-5 sm:w-6 md:w-8 h-12 sm:h-16 md:h-20 bg-gray-800 mx-[2px] sm:mx-1"></div>
          <div className="hidden md:block w-6 md:w-10 h-12 md:h-16 bg-gray-800 mx-[2px] md:mx-1"></div>
          <div className="w-8 sm:w-10 md:w-14 h-14 sm:h-18 md:h-24 bg-gray-800 mx-[2px] sm:mx-1"></div>
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
      </div>

      {/* Content overlay - improved responsive positioning and sizing */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center p-4 sm:px md:px-8 lg:px-16">
        <div className="bg-white/90 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto md:mx-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-1 sm:mb-2">
            Canadian Visa Services
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold mb-1 sm:mb-2">
            <span className="block sm:inline">only on </span> <span className="text-red-600 font-bold">$880</span>
          </h3>
          
          <div className="h-1 w-12 sm:w-16 md:w-20 bg-red-600 my-2 md:my-4"></div>
          
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 md:mb-6">
            Our comprehensive visa services assist citizens in successfully applying for Canadian visas with professional guidance. We offer complete documentation support, application filing, interview preparation, and tracking services. Our expert consultants ensure your visa process is smooth and hassle-free, from initial assessment to final approval. With our step-by-step assistance, your dream of reaching Canada is just $880 away.
          </p>
          
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-4">
           
          </div>
        </div>
      </div>
      
      {/* Red top banner */}
      <div className="absolute top-0 left-0 right-0 h-3 sm:h-4 md:h-6 bg-red-600"></div>
    </div>
  );
};

export default VisaBanner;