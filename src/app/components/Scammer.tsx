import React from 'react'

const Scammer = () => {
  return (
    <div className='flex flex-col items-center p-4 bg-slate-50'>
      <h1 className='  lg:text-3xl font-bold font-serif text-red-600 mb-4'>
        Beware of Scammers Using My Name
      </h1>
      <div className='bg-red-500 h-1 w-[100px] mb-4'></div>
      <ul className='list-disc pl-5 text-sm lg:text-lg text-gray-700 leading-relaxed max-w-2xl'>
        <li className='mb-2'>
          Recently, it has come to our attention that some individuals are fraudulently using Sardar Jagmohan Singh's name to deceive people with false promises of a Canada visa or job offers.
        </li>
        <li className='mb-2'>
          If anyone contacts you claiming to be Sardar Jagmohan Singh and demands money in exchange for a visa or job, please note:
          <ul className='list-disc pl-5'>
            <li>Sardar Jagmohan Singh does not charge for visa services.</li>
            <li>If you receive SMS or calls in his name, demanding payments, report the scam immediately by contacting our team.</li>
            <li>Our team is available 18 hours a day to address any concerns. To stay safe, ensure you check all official communications through our verified channels.</li>
          </ul>
        </li>
        <li className='mt-4'>
          <strong>Contact Sardar Jagmohan Singh's Official Team:</strong> For any inquiries related to Sardar Jagmohan Singh's Company in Canada, WhatsApp number, or contact details, feel free to visit our official website. All legitimate information regarding our services is provided here. Don't fall victim to scams—always verify through trusted sources.
        </li>
      </ul>
    </div>
  )
}

export default Scammer