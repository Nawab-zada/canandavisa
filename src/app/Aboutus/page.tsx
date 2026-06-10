import React from 'react'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

const Aboutus = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
      {/* Contact Us Directly Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-8 sm:p-10 rounded-2xl shadow-sm mb-16 text-center max-w-4xl mx-auto">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-24 h-24 bg-red-500/5 rounded-full blur-xl"></div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 tracking-tight">
          Contact Us Directly
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
          Have questions or need quick assistance with your visa process? 
          Chat with our experts directly on WhatsApp for real-time support.
        </p>
        <a
          href="https://wa.me/18076973974"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <FaWhatsapp size={22} className="animate-pulse" />
          Chat on WhatsApp
        </a>
      </div>

      {/* About Visa Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-red-600 font-semibold tracking-wider uppercase text-sm">Our Focus</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
              About Visa & Career Guidance
            </h1>
            <div className="bg-red-500 h-1.5 w-20 rounded-full mt-3"></div>
          </div>
          
          <div className="space-y-4 text-gray-600 leading-relaxed text-base">
            <p>
              At <span className="font-semibold text-gray-800">Canada Visa Apply</span>, we specialize in providing expert guidance for <span className="text-red-600 font-semibold">visa assessment</span> and <span className="text-red-600 font-semibold">citizenship applications</span>. Our dedicated team ensures a smooth and legally compliant process for individuals seeking opportunities in various essential sectors across Canada.
            </p>
            <p>
              Whether you have experience in skilled trades, customer service, transportation, or other in-demand professions, we are here to assist you every step of the way. Our goal is to simplify the application process and help you navigate the path to a successful career in Canada.
            </p>
          </div>
        </div>

        {/* Logo/Graphic Area */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative p-6 bg-white border border-gray-100 rounded-2xl shadow-sm max-w-sm w-full flex justify-center items-center">
            <Image 
              src={'/logomohong.png'} 
              alt='Canada Visa Apply' 
              width={350} 
              height={150}
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
