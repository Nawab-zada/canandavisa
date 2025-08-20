import React from 'react'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

const Aboutus = () => {
  return (
    <section className='mt-8 lg:mt-10'>

      {/* Contact Us Directly Section */}
      <div className="bg-gray-100 py-10 px-6 rounded-lg shadow-md mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 font-serif mb-3">Contact Us Directly</h2>
        <p className="text-gray-600 font-serif mb-6">
          Have questions or need quick assistance with your visa process?  
          Chat with our experts directly on WhatsApp.
        </p>
        <a
          href="https://wa.me/+15819000405" // 👈 replace with your WhatsApp number in international format
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
        >
          <FaWhatsapp size={22} />
          Chat on WhatsApp
        </a>
      </div>

      {/* About Visa Section */}
      <div className='flex flex-col lg:gap-[100px] lg:flex-row mt-3'>
        <div className='min-w-md lg:w-1/2'>
          <h1 className='text-3xl font-bold font-serif p-2'>About Visa</h1>
          <div className='bg-red-500 h-1 w-[120px] m-2'></div>
          <p className='p-4 font-serif'>
            At Canada Visa Apply, we specialize in providing expert guidance for <span className='font-semibold'>visa assessment</span> and <span className='font-semibold'>citizenship applications</span>. Our dedicated team ensures a smooth and legally compliant process for individuals seeking opportunities in various essential sectors across Canada.
          </p>
          <p className='p-4 font-serif'>
            Whether you have experience in skilled trades, customer service, transportation, or other in-demand professions, we are here to assist you every step of the way. Our goal is to simplify the application process and help you navigate the path to a successful career in Canada.
          </p>
        </div>
        <div className='min-w-md mx-10 flex justify-end'>
          <Image src={'/logomohong.png'} alt='logo' width={500} height={100} />
        </div>
      </div>
    </section>
  )
}

export default Aboutus
