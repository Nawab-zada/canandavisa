import React from 'react'

const Scammer = () => {
  return (
    <div className='flex flex-col  p-4 bg-slate-50'>
      <h1 className='lg:text-3xl font-bold font-serif text-red-600 mb-4 animate__animated animate__fadeInLeft'>
        Beware of Scammers Using My Name
      </h1>
      <div className='bg-red-500 h-1 w-[100px] mb-4'></div>
      <p className='text-sm lg:text-lg text-gray-700 leading-relaxed max-w-2xl animate__animated animate__fadeIn animate__delay-1s'>
        Scammers are fraudulently using Sardar Jagmohan Singh’s name to make false promises about Canada visas and job offers.
        <br />
        If anyone contacts you claiming to be him and asks for money, remember:
        <ul className='list-disc pl-5 mt-2'>
          <li>Sardar Jagmohan Singh does not charge for visa services.</li>
          <li>Report any suspicious calls or SMS immediately.</li>
        </ul>
        <br />
        <strong>For legitimate inquiries:</strong> Visit our official website for verified contact details and services. Always verify through trusted channels to avoid scams.
      </p>
    </div>
  )
}

export default Scammer;
