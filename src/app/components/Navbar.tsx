'use client'

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Dummy menu names with links
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'FAQ', link: '/faq' },
  ];

  return (
    <nav className="bg-red-800 p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/" className="text-white hover:text-gray-400">
            MyLogo
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-white hover:text-gray-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
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
        className={` z-10 fixed top-0 right-0 h-full w-64 bg-gray-800 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
              className="text-white hover:text-gray-400"
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