import React, { useEffect, useState } from 'react'
import { FaCircle } from "react-icons/fa";

const Eye2 = () => {
    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener('mousemove', (e)=>{
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)

            setRotate(angle-180)
        })
    })


  return (
        <div className='w-full bg-[#CDEA68] h-[130vh] flex items-center relative justify-center flex-col font-["Founders_Grotesk_X-Condensed"] font-extrabold'>
            {["READY", "TO START", "THE PROJECT"].map(item => <h1 className='text-[#212121] text-[15vw]/[23vh] '>{item}</h1>)}
            
            <div className="absolute w-[38%] h-[30%] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center gap-10 items-center">
                <div className="w-[30.5%] h-[61%] bg-white rounded-full flex justify-center items-center mb-[15vw]">
                    <div className='bg-black w-[64%] h-[64%] relative rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10'>
                            <div className='bg-white w-7 h-7 m-1 rounded-full'></div>
                        </div>
                    </div>
                </div>

                <div className="w-[30.5%] h-[61%] bg-white rounded-full flex justify-center items-center mb-[15vw]">
                    <div className='bg-black w-2/3 h-2/3 relative rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10'>
                            <div className='bg-white w-7 h-7 m-1 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-1/2 flex flex-col justify-center ml-[30vw]'>
                <div className="button flex cursor-pointer items-center justify-between bg-[#212121] px-10 py-6 rounded-full w-[37%]">
                    <p className='uppercase font-["Neue_Montreal"] text-xl font-thin'>start the project</p>
                    <FaCircle />
                </div>
                <h1 className='mx-32 font-["Neue_Montreal"] text-zinc-900 text-2xl font-extralight px-10 py-8'>OR</h1>
                <div className="button flex items-center cursor-pointer justify-between bg-transparent border-[1px] rounded-full w-[37%] font-thin px-8 py-5 border-zinc-900">
                    <p className='font-["Neue_Montreal"] uppercase text-xl text-zinc-900'>hello@ochi.design</p>
                    <FaCircle className='text-zinc-900'/>
                </div>
            </div>
        </div>
  )
}

export default Eye2