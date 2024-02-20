import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-[#cdea68] rounded-t-3xl text-black relative '>
        <h1 className='font-["Neue_Montreal"] pt-32 pb-20 px-20 text-[70px] leading-[3.6vw]'>
          Ochi is a strategic partner for fast-growing tech businesses that need to
          &nbsp;<span className='underline'>raise funds</span>, 
          &nbsp;<span className='underline'>sell products</span>, 
          &nbsp;<span className='underline'>explain complex ideas</span>, and 
          &nbsp;<span className='underline'>hire great people</span>. 
        </h1>
        <div className='font-["Neue_Montreal"] w-full flex justify-between border-t-[0.5px] border-zinc-600 text-[1.2vw] px-20 py-5 '>
          <p className='w-[50%]'>What you can expect: </p>
          <p className='w-[25%]'>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
            <br />
            <br />
            <br />
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </p>
          <p className='w-[25%] flex flex-col pt-28 pl-52 mb-40'>
            S:
            <a href="" className='mt-6 underline'>Instagram</a>
            <a href="" className='underline'>Behance</a>
            <a href="" className='underline'>Facebook</a>
            <a href="" className='underline'>LinkedIn</a>
          </p>
        </div>
    </div>
  )
}

export default About