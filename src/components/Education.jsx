import React from 'react'

const Education = () => {
    return (
        <div className="flex flex-col justify-start text-start lg:pl-[250px] md:pl-[60px] pl-[60px]">
          <div className="bg-[#008073] pl-4 md:pl-8 lg:pl-12 py-2 pr-2">
            <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[54px] font-thin text-white">Education</h1>
          </div>
          <div className='sm:w-[300px] md:w-[500px] lg:w-[600px] p-8 md:p-12 shadow-lg mx-6 md:mx-12 mt-16'>
            <h1 className='text-thin text-[#008073] text-[20px] md:text-[24px] lg:text-[32px]'>University of Lahore</h1>
            <li className='pt-3 text-[16px] md:text-[20px] text-[#795548]'>B.S. in Computer Science</li>
          </div>
          </div>
      )
}

export default Education
