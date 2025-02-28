import React from 'react'
import Image from 'next/image'
const Sardar = () => {
  return (
<section className='flex flex-col lg:flex-row lg:gap-[200px]'>


    <div className='p-3 lg:w-1/2 '>
      <h1 className='text-2xl font-bold p-3 mt-9 font-serif'>
      Welcome to the Official Website of Sardar Jagmohan Singh
      </h1>
      <div className='bg-red-500 h-1 w-[100px] m-2'></div>
      <h3 className='font-bold p-3 text-2xl font-serif'>A Leader with Vision and Integrity</h3>
      <p className='font-serif'>Late Sardar Jagmohan Singh, born on December 8, 1980, was a remarkable individual who left a lasting impact on people from all walks of life. With his warm and soulful nature Sardar Jagmohan Singh touched the hearts of millions worldwide. His legacy of trust and reliability continues to inspire, especially in Canada, where he made significant contributions through his work.</p>
      <h4 className='text-xl font-bold'>Sardar Jagmohan Singhs Impact in Canada</h4>
      <p className='font-serif'>As a Senior Supervisor at Eden Company Sardar Jagmohan Singh played a key role in various projects, particularly in Canada. His leadership in overseeing construction work and managing food packing services helped elevate his reputation as a dedicated and skilled professional. Today, people often search for Sardar Jagmohan Singhs Company in Canada or seek to contact him for professional inquiries, including his WhatsApp number and contact details.</p>
       </div> 
        <div className=' lg:mt-20'><Image src={'/mohamensingh.png'} alt='logo' width={400} height={400}/></div>
</section>
  )
}

export default Sardar