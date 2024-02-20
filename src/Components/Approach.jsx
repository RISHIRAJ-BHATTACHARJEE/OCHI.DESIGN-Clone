import React from 'react'
import { FaCircle } from "react-icons/fa";

const Approach = () => {
  return (
    <div className='w-full bg-[#cdea68] flex justify-between border-t-[1px] border-zinc-600 px-20'>
        <div className='py-5'>
            <h1 className='text-black text-[69px] font-["Neue_Montreal"]'>Our approach:</h1>
            <div className='mt-3 cursor-pointer font-["Neue_Montreal"] font-medium text-[19px] uppercase bg-[#212121] flex justify-between w-[63%] px-10 py-6 rounded-[4vw]'>
                read more
                <FaCircle className='mt-1'/>
            </div>
        </div>
        <div className="mt-7 mb-20 rounded-2xl overflow-hidden w-[50%]">
            <img src="src/assets/Homepage-Photo-663x469.jpg" alt="Your image" className="w-full h-auto" />
        </div>

    </div>
  )
}

export default Approach