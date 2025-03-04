import React from 'react';
import Image from 'next/image';
const VisaBanner = () => {
  return (

    <div className='h-[100px] lg:w-[1400px] lg:h-[450px]'>
           <Image src={'/immigrationvisa.png'}alt='banner' width={1350} height={100}/>
    </div>
  )

};

export default VisaBanner;