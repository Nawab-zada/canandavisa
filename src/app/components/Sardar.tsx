import React from 'react'
import Image from 'next/image'

const Sardar = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center lg:items-start bg-slate-50 mt-7'>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-5">
        Sardar Jagmohan Singh
      </h1>
      <p className="text-center text-gray-600 mt-7">
        A Leader with Vision and Integrity
      </p>

      <div className="mt-6 text-gray-700 space-y-4 ">
        <p>
          Late Sardar Jagmohan Singh (Dec 8, 1980) was a remarkable leader known
          for his warmth and integrity. His contributions left a lasting impact
          on many, especially in Canada.
        </p>
        <p>
          As a Senior Supervisor at Eden Company, he played a key role in
          construction projects and food packing services, earning a reputation
          for dedication and excellence.
        </p>
        <p>
          His legacy of trust continues to inspire, with many searching for his
          company's presence in Canada and professional contributions.
        </p>
      </div>
    </div>
        
      <div className=' w-full lg:w-[400px]  lg:mx-auto'>
        <Image src={'/sardarpng.png'} alt='Sardar Jagmohan Singh' width={350} height={290} className='  '/>
      </div>
    </section>
  )
}

export default Sardar