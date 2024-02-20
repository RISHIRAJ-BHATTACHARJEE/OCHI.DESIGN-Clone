import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 bg-[#004D43] rounded-t-3xl">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 flex overflow-hidden whitespace-nowrap">
        {["we are ochi","we are ochi","we are ochi","we are ochi",].map((item)=>{
            return (
              <motion.h1
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
                className='uppercase font-bold text-[27vw] pt-6 -mb-[9vw] leading-none font-["Founders_Grotesk_X-Condensed"]'>
                &nbsp;{item}
              </motion.h1>
            )
        })}
      </div>
    </div>
  );
};

export default Marquee;
