'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Dummy menu names with links
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/aboutus' },
    { name: 'Visa Categories', link: '/visacategory' },
    { name: 'Steps', link: '/steps' },
    { name: 'Contact Us', link: '/contactus' },
  ];

  return (
    <nav className="bg-primary-500 p-4 z-10 shadow-md bg-red-700">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <Image src={'/thr.png'} alt='Logo' width={100} height={100} className="mr-4" />
        </div>
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className=" hover:text-primary-200 text-lg font-semibold transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`z-10 fixed top-0 right-0 h-full w-64 bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-10 h-10"
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
        <div className="flex flex-col space-y-4 p-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-black hover:text-primary-500 text-lg font-semibold transition-colors duration-200"
              onClick={() => setIsOpen(false)} // Close menu on link click
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