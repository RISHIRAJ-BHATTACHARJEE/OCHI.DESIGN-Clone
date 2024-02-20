import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure">
        {["We Create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div>
              <div
                className={`uppercase ${
                  index === 0 ? "mt-60" : ""
                } px-20 w-fit flex items-center`}
              >
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.12, 0, 0.39, 0], duration: 1 }}
                    className="w-[190px] h-[6.1vw] mb-15 relative top-[-1.6vw] bg-cover bg-center bg-[url('src/assets/content-image01.jpg')] mr-5 rounded-lg"
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className='text-[173px]/[140px] font-["Founders_Grotesk_Condensed"] font-extrabold'
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="border-t-[1px] border-zinc-700 mt-[133px] flex justify-between items-center
         py-[20px] px-20"
      >
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item) => {
          return (
            <div>
              <p className=' font-["Neue_Montreal"] text-[22px]/[32px] font-[400]'>
                {item}
              </p>
            </div>
          );
        })}
        <div className="flex items-center gap-2">
          <div className="px-5 py-3 border-[1px] uppercase border-zinc-400 font-[500] text-[18.6667px]/[18.6667px] rounded-full">
            start the project
          </div>
          <div className="w-11 h-11 rounded-full flex items-center justify-center text-2xl border-[1px] border-zinc-400 ">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
