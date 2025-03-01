import Image from 'next/image';
import Link from 'next/link';

const CanadaVisaHero = () => {
  return (
    <div className="relative w-full">
      {/* Red top bar */}
      <div className="bg-red-600 h-2 w-full"></div>
      
      {/* Hero section with background image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Background image with Toronto skyline and lake */}
        <div className="absolute inset-0">
          <Image
            src="/stockphot.png" 
            alt="Toronto skyline with lake and Canadian flag"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Content overlay */}
        <div className="relative top-20 h-full flex items-center mb-3">
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Flag section */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              {/* This would be handled by the background image which includes the flag */}
            </div>
            
            {/* Right side - Text content */}
            <div className="md:w-1/2 text-right">
              <div className=" backdrop-blur-sm p-6 rounded-lg inline-block">
                <p className="text-2xl md:text-3xl font-medium text-gray-900">
                  Can apply from India only
                </p>
                
                <h1 className="text-5xl md:text-7xl font-bold text-red-600 my-4">
                  Step by step
                </h1>
                
                <p className="text-xl md:text-2xl font-medium text-gray-900 mb-4">
                  which will cost you Until arrival in Canada
                </p>
                
                <p className="text-5xl md:text-7xl font-bold text-red-600">
                  $ 880
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* WhatsApp floating button */}
        
      </div>
    </div>
  );
};

export default CanadaVisaHero;