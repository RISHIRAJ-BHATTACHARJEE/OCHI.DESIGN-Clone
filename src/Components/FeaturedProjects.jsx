import { motion, useAnimation } from 'framer-motion';
import React from 'react'
import { FaCircle } from "react-icons/fa";

const FeaturedProjects = () => {
    const allCards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]
  return (
    <div className='w-full bg-white py-10 '>
        <div className=''>
            <h1 className='text-[#212121] font-["Neue_Montreal"] text-[4vw] mt-[5vw] mb-[2vw] pl-[4vw] tracking-tight'>Featured Projects</h1>
        </div>
        <hr className='border-1 border-zinc-400'/>
        <div className='text-black flex justify-center w-full gap-6 px-20 py-20'>
            <div className='w-full relative flex flex-col justify-center'>
                <div className='flex items-center py-5 gap-4'>
                    <FaCircle />
                    <h1 className='font-["Neue_Montreal"] text-[1.1vw]'>FYDE</h1>
                </div>
                <motion.div onHoverStart={()=>allCards[0].start({y: 0})} onHoverEnd={()=>allCards[0].start({y: "100%"})} className='relative'>
                    <h1 className='text-[#cdea68] z-10 flex overflow-hidden -translate-x-1/2 top-[36%] left-full absolute text-[7vw] tracking-tighter font-[600] font-["Founders_Grotesk"]'>
                    {"FYDE".split('').map((item, index)=> {
                            return <>
                                <motion.span initial={{y: "100%"}} transition={{ease: [0.12, 0, 0.39, 0], delay: index*.05}} animate={allCards[0]} className='inline-block'>{item}</motion.span>
                            </> 
                        })}    
                    </h1>
                    <div className=' w-full h-[75vh] bg-cover bg-center bg-[url("src/assets/Fyde_Illustration_Crypto_2-663x551.png")] rounded-3xl transition-transform duration-[450ms] transform hover:scale-95'></div>
                </motion.div>

                <div className='font-["Neue_Montreal"] flex gap-2 '>
                    <button className='mt-7 py-[6px] uppercase text-xl px-3 rounded-full border-[1px] border-black'>audit</button>
                    <button className='mt-7 py-[6px] uppercase text-xl px-3 rounded-full border-[1px] border-black'>copywriting</button>
                    <button className='mt-7 py-[6px] uppercase text-xl px-3 rounded-full border-[1px] border-black'>sales deck</button>
                    <button className='mt-7 py-[6px] uppercase text-xl px-3 rounded-full border-[1px] border-black'>slides design</button>
                </div>
            </div>

            <div className='w-full flex flex-col relative justify-center'>
                <div className='flex items-center py-5 gap-4'>
                    <FaCircle />
                    <h1 className='font-["Neue_Montreal"] text-[1.1vw]'>VISE</h1>
                </div>
                <motion.div onHoverStart={()=>allCards[1].start({y: 0})} onHoverEnd={()=>allCards[1].start({y: "100%"})} className="relative">
                    <h1 className='text-[#cdea68] z-10 flex overflow-hidden -translate-x-1/2 top-[36%] right-[75%] absolute text-[7vw] tracking-tighter font-[600] font-["Founders_Grotesk"]'>
                        {"VISE".split('').map((item, index)=> {
                            return <>
                                <motion.span initial={{y: "100%"}} transition={{ease: [0.12, 0, 0.39, 0], delay: index*.05}} animate={allCards[1]} className=''>{item}</motion.span>
                            </> 
                        })}    
                    </h1>
                    <div className='w-full h-[75vh] bg-cover bg-center bg-[url("src/assets/Vise_front2-663x551.jpg")] rounded-3xl transition-transform duration-[450ms] transform hover:scale-95'></div>
                </motion.div>
                <div className='font-["Neue_Montreal"] flex gap-2 '>
                    <button className='mt-7 py-[5px] uppercase text-xl px-3 rounded-full border-[1px] border-black'>agency</button>
                    <button className='mt-7 py-[5px] uppercase text-xl px-3 rounded-full border-[1px] border-black'>company presentation</button>
                </div>
            </div>
        </div>
        <div className='text-black flex justify-center w-full gap-6 px-20 py-20'>
            <div className='w-full relative flex flex-col justify-center'>
                <div className='flex items-center py-5 gap-4'>
                    <FaCircle />
                    <h1 className='font-["Neue_Montreal"] text-[1.1vw]'>TRAWA</h1>
                </div>
                <motion.div onHoverStart={()=>allCards[2].start({y: 0})} onHoverEnd={()=>allCards[2].start({y: "100%"})} className='relative'>
                    <h1 className='text-[#cdea68] z-10 flex overflow-hidden -translate-x-1/2 top-[36%] left-full absolute text-[7vw] tracking-tighter font-[600] font-["Founders_Grotesk"]'>
                    {"TRAWA".split('').map((item, index)=> {
                            return <>
                                <motion.span initial={{y: "100%"}} transition={{ease: [0.12, 0, 0.39, 0], delay: index*.05}} animate={allCards[2]} className='inline-block'>{item}</motion.span>
                            </> 
                        })}    
                    </h1>
                    <div className=' w-full h-[75vh] bg-cover bg-center bg-[url("src/assets/Frame-3875-663x551.jpg")] rounded-3xl transition-transform duration-[450ms] transform hover:scale-95'></div>
                </motion.div>
                <div className='font-["Neue_Montreal"] flex gap-2 '>
                    <button className='mt-7 py-[5px] uppercase text-xl px-4 rounded-full border-[1px] border-black'>brand identity</button>
                    <button className='mt-7 py-[5px] uppercase text-xl px-4 rounded-full border-[1px] border-black'>design research</button>
                    <button className='mt-7 py-[5px] uppercase text-xl px-3 rounded-full border-[1px] border-black'>investor deck</button>
                </div>
            </div>
            <div className='w-full flex relative flex-col justify-center'>
                <div className='flex items-center py-5 gap-4'>
                    <FaCircle />
                    <h1 className='font-["Neue_Montreal"] text-[1.1vw]'>PREMIUM BLEND</h1>
                </div>
                <motion.div onHoverStart={()=>allCards[3].start({y: 0})} onHoverEnd={()=>allCards[3].start({y: "100%"})} className="relative">
                    <h1 className='text-[#cdea68] z-10 flex overflow-hidden -translate-x-1/2 top-[36%] right-[50%%] absolute text-[7vw] tracking-tighter font-[600] font-["Founders_Grotesk"]'>
                        {"PREMIUMBLEND".split('').map((item, index)=> {
                            return <>
                                <motion.span initial={{y: "100%"}} transition={{ease: [0.12, 0, 0.39, 0], delay: index*.05}} animate={allCards[3]} className=''>{item}</motion.span>
                            </> 
                        })}    
                    </h1>
                    <div className='w-full h-[75vh] bg-cover bg-center bg-[url("src/assets/PB-Front-4-663x551.png")] rounded-3xl transition-transform duration-[450ms] transform hover:scale-95'></div>
                </motion.div>
                <div className='font-["Neue_Montreal"] flex gap-2 '>
                    <button className='mt-7 py-[5px] uppercase text-xl px-4 rounded-full border-[1px] border-black'>branded template</button>
                </div>
            </div>
        </div>
        <div className='bg-black text-white px-10 text-xl font-["Neue_Montreal"] cursor-pointer py-5 w-[20%] flex justify-between items-center m-auto mt-32 rounded-full'>
            <h1>VIEW ALL CASE STUDIES</h1>
            <FaCircle className='text-sm'/>
        </div>
    </div>
  )
}

export default FeaturedProjects