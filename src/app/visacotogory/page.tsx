'use client'

import React, { useState } from "react";
import { 
  FaShieldAlt, FaBox, FaUtensils, FaTruck, FaCashRegister, FaCalculator, FaWrench, FaBolt, FaSearch, FaDollarSign
} from "react-icons/fa";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

const features = [
  { title: "Security Guard", description: "Ensure safety and security at company premises.", salary: 2300, icon: <FaShieldAlt />, image: "/secrityguard.png" },
  { title: "Food Packing", description: "Pack and prepare food products for distribution.", salary: 3500, icon: <FaBox />, image: "/foodpacker.png" },
  { title: "Cook", description: "Prepare and cook meals according to company standards.", salary: 2500, icon: <FaUtensils />, image: "/cook.png" },
  { title: "Driver", description: "Transport goods and employees safely to designated locations.", salary: 3800, icon: <FaTruck />, image: "/driver.png" },
  { title: "Cashier", description: "Handle financial transactions and customer payments.", salary: 2700, icon: <FaCashRegister />, image: "/cashier.png" },
  { title: "Accounting", description: "Manage financial records and transactions.", salary: 3200, icon: <FaCalculator />, image: "/accounting.png" },
  { title: "Plumber", description: "Install and repair piping systems.", salary: 2100, icon: <FaWrench />, image: "/plumber.png" },
  { title: "Electrician", description: "Install and maintain electrical systems.", salary: 3000, icon: <FaBolt />, image: "/electric.png" },
];

const FeatureCards = () => {
  const [search, setSearch] = useState("");

  const filteredFeatures = features.filter((feature) => 
    feature.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full py-16 px-6 bg-gradient-to-b from-slate-50 to-white flex flex-col items-center">
      <div className="max-w-4xl text-center mb-10">
        <span className="text-red-600 font-semibold tracking-wider uppercase text-sm">Available Pathways</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-1 mb-4">
          Search Available Visas
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="bg-red-50 text-red-700 border border-red-100 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
            No Age Limit
          </span>
          <span className="bg-yellow-50 text-yellow-800 border border-yellow-100 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
            No Degree Required
          </span>
          <span className="bg-blue-50 text-blue-800 border border-blue-100 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
            Without IELTS
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-12 relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-red-500 transition-colors">
          <FaSearch size={18} />
        </div>
        <input 
          type="text"
          placeholder="Search for a visa or role..."
          className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-gray-700 bg-white transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Job Listings with Smooth Animations */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl px-4">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={feature.image || '/images/default.jpg'}
                  alt={feature.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-red-600 shadow-sm">
                  {React.cloneElement(feature.icon, { size: 20 })}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-red-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
                
                {/* Salary Display */}
                <div className="mt-4 py-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center gap-1">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Salary:</span>
                  <span className="text-lg font-bold text-gray-800 flex items-center">
                    <FaDollarSign size={14} className="text-green-600" />
                    {feature.salary} <span className="text-xs text-gray-400 font-normal ml-0.5">/ mo</span>
                  </span>
                </div>

                <Link href="/create" className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 block text-sm">
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400 font-medium text-lg">No pathways found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCards;
