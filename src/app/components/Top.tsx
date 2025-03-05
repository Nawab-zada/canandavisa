import Image from 'next/image';

import React from 'react';
import { Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

const CanadaVisaHeader = () => {
  return (
    <header className="bg-white shadow-sm mb-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={'/thr.png'} alt='logo' width={150} height={100}/>
         
        </div>

        {/* Contact Information */}
        <div className="flex items-center space-x-6">
          {/* Phone - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-2">
            <Phone className="text-red-600 w-5 h-5" />
            <span>+1 647-495-1207</span>
          </div>

          {/* Timings - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mon-Fri (10 am - 6:30 pm)</span>
          </div>

          {/* Mail - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-2">
            <Mail className="text-red-600 w-5 h-5" />
            <span>Sardarjagmohansinghnanda@gmail.com</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-red-600 w-5 h-5 hover:text-red-800" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-red-600 w-5 h-5 hover:text-red-800" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-red-600 w-5 h-5 hover:text-red-800" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CanadaVisaHeader;