import React from 'react';
import Image from 'next/image';
const VisaBanner = () => {
  return (

    <div className='p-1 lg:w-[1400px] lg:h-[450px]'>
           <Image src={'/immigrationvisa.png'}alt='banner' width={1350} height={200} className='h-[200px]'/>
    </div>
  )

};

export default VisaBanner;