'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/Aboutus' },
    { name: 'Visa Categories', link: '/visacotogory' },
    { name: 'Steps', link: '/steps' },
    { name: 'Contact Us', link: '/Contactus' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Image 
            src={'/thr.png'} 
            alt='Canada Visa Apply Logo' 
            width={120} 
            height={60} 
            className="object-contain" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-gray-600 hover:text-red-600 font-medium text-base transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-red-600 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden shadow-2xl flex flex-col`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <Image 
            src={'/thr.png'} 
            alt='Canada Visa Apply Logo' 
            width={90} 
            height={45} 
            className="object-contain" 
          />
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-red-600 focus:outline-none transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-5 p-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-gray-700 hover:text-red-600 text-lg font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;