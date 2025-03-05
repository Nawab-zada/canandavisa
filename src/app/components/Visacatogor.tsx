'use client'

import React, { useState } from "react";
import { 
  FaHardHat, FaShieldAlt, FaCashRegister, FaTruck, FaUsers, 
  FaPlug, FaBroom, FaConciergeBell, FaTools, FaCalculator, 
  FaCar, FaShippingFast, FaBox, FaUtensils 
} from "react-icons/fa";
import Image from 'next/image';

const features = [
  { title: "Security Guard", description: "Ensure safety and security at company premises.", salary: 5000, icon: <FaShieldAlt size={30} />, image: "/secrityguard.png" },
  { title: "Food Packing", description: "Pack and prepare food products for distribution.", salary: 5000, icon: <FaBox size={30} />, image: "/foodpacker.png" },
  { title: "Cooker", description: "Prepare and cook meals according to company standards.", salary: 5000, icon: <FaUtensils size={30} />, image: "/cook.png" },
  { title: "Driver", description: "Transport goods and employees safely to designated locations.", salary: 5000, icon: <FaTruck size={30} />, image: "/driver.png" },
];

const FeatureCards = () => {
  const [search, setSearch] = useState("");

  const filteredFeatures = features.filter((feature) => 
    feature.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full p-5 bg-gray-50  ">
      <h1 className="font-bold text-2xl font-serif mb-3 text-red-600">Search Visa</h1>
      <h5 className="text-sm font-semibold font-serif mb-4 text-gray-700 bg-yellow-100 p-2 rounded-md shadow-sm">
        No age limit | No degree | Without IELTS
      </h5>
      {/* Search Bar */}
      <div className="w-full max-w-md mb-6">
        <input 
          type="text"
          placeholder="Search for a visa..."
          className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Job Listings */}
      <div className=" grid  grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg font-serif p-5">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={feature.image || '/images/default.jpg'}
                  alt={feature.title}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">SAR {feature.salary}</p>
                <button className="mt-4 bg-red-500 text-white px-6 py-2 hover:bg-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 font-semibold text-lg">No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default FeatureCards;