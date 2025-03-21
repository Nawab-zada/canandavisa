'use client'
'use client'

import React, { useState } from "react";
import { 
  FaShieldAlt, FaBox, FaUtensils, FaTruck, FaCashRegister, FaCalculator, FaWrench, FaHardHat, FaBolt
} from "react-icons/fa";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

const features = [
  { title: "Security Guard", description: "Ensure safety and security at company premises.", salary: 2300, icon: <FaShieldAlt size={30} />, image: "/secrityguard.png" },
  { title: "Food Packing", description: "Pack and prepare food products for distribution.", salary: 4000, icon: <FaBox size={30} />, image: "/foodpacker.png" },
  { title: "Cook", description: "Prepare and cook meals according to company standards.", salary: 2500, icon: <FaUtensils size={30} />, image: "/cook.png" },
  { title: "Driver", description: "Transport goods and employees safely to designated locations.", salary: 3800, icon: <FaTruck size={30} />, image: "/driver.png" },
  { title: "Cashier", description: "Handle financial transactions and customer payments.", salary: 2700, icon: <FaCashRegister size={30} />, image: "/cashier.png" },
  { title: "Accounting", description: "Manage financial records and transactions.", salary: 3200, icon: <FaCalculator size={30} />, image: "/accounting.png" },
  { title: "Plumber", description: "Install and repair piping systems.", salary: 2100, icon: <FaWrench size={30} />, image: "/plumber.png" },
 
  { title: "Electrician", description: "Install and maintain electrical systems.", salary: 3000, icon: <FaBolt size={30} />, image: "/electric.png" },
];

const FeatureCards = () => {
  const [search, setSearch] = useState("");

  const filteredFeatures = features.filter((feature) => 
    feature.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full p-5 bg-gray-50">
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

      {/* Job Listings with Zigzag Animation */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg font-serif p-5">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? 100 : -100 // Right for even, Left for odd
              }}
              whileInView={{ opacity: 1, x: 0 }} // Bring to normal position
              viewport={{ once: true }} // Animate only once
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }} // Smooth staggered effect
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={feature.image || '/images/default.jpg'}
                  alt={feature.title}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">$ {feature.salary}</p>
                <button className="mt-4 bg-red-500 text-white px-6 py-2 hover:bg-blue-600 transition-colors">
                  <Link href="/create">Apply Now</Link>
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-red-500 font-semibold text-lg">No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default FeatureCards;




