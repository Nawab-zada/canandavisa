import React from 'react'
import Image from 'next/image'
const Aboutus = () => {
  return (
   <section className=' mt-8 lg:mt-10'>
            <div className='flex flex-col lg:gap-[100px] lg:flex-row mt-3'>
              <div className=' min-w-md lg:w-1/2'>
                <h1 className='text-3xl font-bold font-serifj p-2'>Who we Are </h1>
                <div className='bg-red-500 h-1 w-[120px] m-2 '></div>
                <p className='p-4 font-serif'>
                  
                 Canada Visa Apply is a trusted immigration consultancy, offering expert guidance for Canada Immigration Visas. Our team has extensive experience in immigration visa and citizenship law, specializing in Skilled & Business Migration and study abroad opportunities. We work closely with each client to understand their unique needs and interests, providing tailored solutions and representation within the legal framework of immigration to achieve their personal goals.
                </p>
              </div>
                <div className=' min-w-md mx-10 flex justify-end  '><Image src={'/logomohong.png'} alt='logo' width={500} height={100}/> </div>
            </div>
          


   </section>
  )
}

export default Aboutus