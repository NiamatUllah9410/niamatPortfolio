import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <div className="flex flex-col justify-start text-start lg:pl-[250px] md:pl-[60px] pl-[60px] pt-16">
      <div className="bg-[#008073] pl-4 md:pl-8 lg:pl-12 py-2 pr-2">
        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[54px] font-thin text-white">Contact</h1>
      </div>
      <div className='px-12 py-16'>
        <h1 className="flex items-center space-x-2 text-[16px] md:text-[28px] lg:text-[32px] font-bold py-6">
          Niamat Ullah<br /> Khan
        </h1>  
        <div className='flex flex-wrap md:justify-around justify-between'>
          <div className='flex flex-row items-center gap-2 py-3'>
            <FaMobileAlt className="w-8 h-8" />
            <span className='text-[16px] md:text-[18px] lg:text-[24px]'>(+92) 3059410097</span>
          </div>
          <div className='flex flex-row items-center gap-2 py-3'>
            <MdEmail className="w-8 h-8" />
            <span className='text-[16px] md:text-[18px] lg:text-[24px]'>niamatkhan9410@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
