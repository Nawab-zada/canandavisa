import React from 'react'
import Image from 'next/image'

const Sardar = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center lg:items-start bg-slate-50'>
      <div className='p-5 lg:w-1/2'>
        <h1 className='text-sm lg:text-3xl font-bold p-3 mt-9 font-serif text-gray-800'>
          Welcome to the Official Website of Sardar Jagmohan Singh
        </h1>
        <div className='bg-red-500 h-1 w-[100px] m-2'></div>
        <h3 className='font-bold p-3 text-2xl font-serif text-gray-700'>
          A Leader with Vision and Integrity
        </h3>
        <ul className='list-disc pl-5 text-sm lg:text-lg text-gray-600 leading-relaxed'>
          <li>Late Sardar Jagmohan Singh, born on December 8, 1980, was a remarkable individual who left a lasting impact on people from all walks of life.</li>
          <li>With his warm and soulful nature, Sardar Jagmohan Singh touched the hearts of millions worldwide.</li>
          <li>His legacy of trust and reliability continues to inspire, especially in Canada, where he made significant contributions through his work.</li>
        </ul>
        <h4 className='text-xl font-bold mt-4 text-gray-800'>
          Sardar Jagmohan Singh's Impact in Canada
        </h4>
        <ul className='list-disc pl-5 text-sm lg:text-lg text-gray-600 leading-relaxed'>
          <li>As a Senior Supervisor at Eden Company, Sardar Jagmohan Singh played a key role in various projects, particularly in Canada.</li>
          <li>His leadership in overseeing construction work and managing food packing services helped elevate his reputation as a dedicated and skilled professional.</li>
          <li>Today, people often search for Sardar Jagmohan Singh's Company in Canada or seek to contact him for professional inquiries, including his WhatsApp number and contact details.</li>
        </ul>
      </div>
      <div className='p-4 w-full lg:w-[400px] lg:mt-[200px] lg:mx-auto'>
        <Image src={'/sardarpng.png'} alt='Sardar Jagmohan Singh' width={350} height={300} className='  '/>
      </div>
    </section>
  )
}

export default Sardar