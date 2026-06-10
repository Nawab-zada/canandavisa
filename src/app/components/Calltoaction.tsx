import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-800 py-16 px-6 text-white text-center">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Your Dream Job in Canada Starts Here!
        </h2>
        <p className="text-base sm:text-xl text-red-50 max-w-2xl mx-auto leading-relaxed">
          Secure your <span className="font-semibold underline decoration-yellow-400 decoration-2 underline-offset-4">Work Visa</span> with our expert guidance. Take the first step toward a brighter future today!
        </p>

        {/* Dynamic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <a
            href="https://wa.me/18076973974"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-700 hover:bg-red-50 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <FaWhatsapp size={22} className="text-green-600" />
            Connect via WhatsApp
          </a>
          
          <a
            href="tel:+18076973974"
            className="inline-flex items-center gap-3 bg-red-900/40 hover:bg-red-900/60 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <FaPhoneAlt size={18} />
            Call Our Desk
          </a>
        </div>

        <p className="text-xs sm:text-sm text-red-200/80 pt-4">
          Our specialized consultants are ready to assist you.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
