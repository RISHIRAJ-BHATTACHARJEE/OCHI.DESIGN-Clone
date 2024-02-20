import React, { useEffect, useState } from 'react'

const Eyes = () => {
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
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-full relative bg-cover bg-center bg-[url('src/assets/Top-Viewbbcbv-1-1440x921.jpg')]">

            <div className="absolute w-[40%] h-[40%] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-evenly items-center">
                <div className="w-[37.5%] h-[75%] bg-white rounded-full flex justify-center items-center mb-[15vw]">
                    <div className='bg-black w-2/3 h-2/3 relative rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10'>
                            <div className='bg-white w-10 h-10 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className="w-[37.5%] h-[75%] bg-white rounded-full flex justify-center items-center mb-[15vw]">
                    <div className='bg-black w-2/3 h-2/3 relative rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10'>
                            <div className='bg-white w-10 h-10 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Eyes