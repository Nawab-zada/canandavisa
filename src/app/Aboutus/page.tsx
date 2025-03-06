import React from 'react'
import Image from 'next/image'
const Aboutus = () => {
  return (
   <section className=' mt-8 lg:mt-10 '>
            <div className='flex flex-col lg:gap-[100px] lg:flex-row mt-3'>
              <div className=' min-w-md lg:w-1/2'>
                <h1 className='text-3xl font-bold font-serifj p-2'>About visa </h1>
                <div className='bg-red-500 h-1 w-[120px] m-2 '></div>
                <p className='p-4 font-serif'>
                  
                At Canada Visa Apply, we provide expert guidance on Canada Immigration Visas. Our services include visa assessment, permanent residency applications, and citizenship processing. Whether you're applying for a skilled or business migration visa or seeking study abroad opportunities, our experienced team ensures a smooth and legally compliant process. We work closely with each client, offering personalized solutions to help them achieve their immigration goals.
                </p>
              </div>
                <div className=' min-w-md mx-10 flex justify-end  '><Image src={'/logomohong.png'} alt='logo' width={500} height={100}/> </div>
            </div>
          


   </section>
  )
}

export default Aboutus