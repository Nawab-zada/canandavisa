'use client'

import React, { useState } from "react";
import { 
  FaShieldAlt, FaBox, FaUtensils, FaTruck, FaCashRegister, FaCalculator, FaWrench, FaBolt, FaSearch, FaDollarSign, FaWhatsapp
} from "react-icons/fa";
import Image from 'next/image';
import { motion } from "framer-motion";

const features = [
  { title: "Security Guard", description: "Ensure safety and security at company premises.", salary: 2500, icon: <FaShieldAlt />, image: "/secrityguard.png" },
  { title: "Food Packing", description: "Pack and prepare food products for distribution.", salary: 3700, icon: <FaBox />, image: "/foodpacker.png" },
  { title: "Cook", description: "Prepare and cook meals according to company standards.", salary: 2700, icon: <FaUtensils />, image: "/cook.png" },
  { title: "Driver", description: "Transport goods and employees safely to designated locations.", salary: 4000, icon: <FaTruck />, image: "/driver.png" },
  { title: "Cashier", description: "Handle financial transactions and customer payments.", salary: 2900, icon: <FaCashRegister />, image: "/cashier.png" },
  { title: "Accounting", description: "Manage financial records and transactions.", salary: 3400, icon: <FaCalculator />, image: "/accounting.png" },
  { title: "Plumber", description: "Install and repair piping systems.", salary: 2300, icon: <FaWrench />, image: "/plumber.png" },
  { title: "Electrician", description: "Install and maintain electrical systems.", salary: 3200, icon: <FaBolt />, image: "/electric.png" },
];

const FeatureCards = () => {
  const [search, setSearch] = useState("");

  const filteredFeatures = features.filter((feature) => 
    feature.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full py-16 lg:py-20 px-6 bg-gradient-to-b from-slate-50 to-white flex flex-col items-center">
      <div className="max-w-4xl text-center mb-12">
        <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-red-100 mb-3">Available Pathways</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mt-1 mb-6">
          Search <span className="text-red-600">Available Visas</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-2.5 mb-4">
          <span className="bg-red-50 text-red-700 border border-red-100 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5">
            ✅ No Age Limit
          </span>
          <span className="bg-yellow-50 text-yellow-800 border border-yellow-100 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5">
            ✅ No Degree Required
          </span>
          <span className="bg-blue-50 text-blue-800 border border-blue-100 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5">
            ✅ Without IELTS
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-14 relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-red-500 transition-colors">
          <FaSearch size={18} />
        </div>
        <input 
          type="text"
          placeholder="Search for a visa or role..."
          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-gray-700 bg-white transition-all text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl px-4">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={feature.image || '/images/default.jpg'}
                  alt={`${feature.title} - Canada Work Visa`}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl text-red-600 shadow-sm">
                  {React.cloneElement(feature.icon, { size: 20 })}
                </div>
                {/* Salary Badge on Image */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1">
                  <FaDollarSign size={12} className="text-green-600" />
                  <span className="text-sm font-bold text-gray-800">{feature.salary}</span>
                  <span className="text-[10px] text-gray-400">/mo</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 tracking-tight group-hover:text-red-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>

                <a
                  href={`https://wa.me/18076973974?text=${encodeURIComponent(`Hi, I am interested in applying for the ${feature.title} visa. Please guide me further.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <FaWhatsapp size={18} />
                  Apply Now
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-gray-400 font-medium text-lg">No pathways found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCards;
