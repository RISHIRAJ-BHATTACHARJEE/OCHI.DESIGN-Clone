import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ClientsReviews = () => {

    const reviews = [
        {
            title: "Planetly",
            name: "Nina Walloch",
            btn: "READ"
        },
        {
            title: "Workiz Easy",
            name: "Tomer Levy",
            btn: "READ"
        },
        {
            title: "Premium Blend",
            name: "Ellen Kim",
            btn: "READ"
        },
        {
            title: "Hypercare Systems",
            name: "Brenden Goss",
            btn: "READ"
        },
        {
            title: "Officevibe",
            name: "Raff Labrie",
            btn: "READ"
        },
        {
            title: "Orderlion",
            name: "Strefan Strohmer",
            btn: "READ"
        },
        {
            title: "Black Book",
            name: "Jackie Smith",
            btn: "READ"
        },
        {
            title: "Trawa Energy",
            name: "David Budde",
            btn: "READ"
        },
    ]

  return (
    <div className='w-full h-full'>
        <h1 className='text-7xl font-["Neue_Montreal"] font-[400] px-20 pt-40 pb-10'>Client's reviews</h1>
        <hr className='border-1 border-zinc-600'/>
        <div className='parent w-full flex justify-between px-20 py-7 font-["Neue_Montreal"]'>
            <h1 className='text-2xl w-[25%]'>Karman Ventures</h1>

            <div className='w-[25%] flex flex-col gap-5'>
                <h1 className='text-2xl'>Services:</h1>
                <div className='flex items-center gap-5 mt-28'>
                    <button className='font-thin border-[1px] border-zinc-400 w-[44%] uppercase text-xl py-2 rounded-full'>investor deck</button>
                    <BsArrowUpRightCircleFill className='text-[2.9rem] text-zinc-200'/>
                </div>
                <div className='flex items-center gap-5'>
                    <button className='border-[1px] border-zinc-400 w-[35%] uppercase text-xl py-2 rounded-full'>sales deck</button>
                    <BsArrowUpRightCircleFill className='text-[2.9rem] text-zinc-200'/>
                </div>
            </div>

            <div className='w-[30%]'>
                <h1 className='text-2xl '>William Barnes</h1>
                <img src="src/assets/William-Barnes-1-300x300.png" alt="" className='w-[25%] rounded-2xl mt-28'/>
                <p className='text-xl leading-8 mt-10'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
            </div>

            <button className='text-2xl w-[20%] pb-[670px] pl-56'>READ</button>
        </div>
        <hr className='border-1 border-zinc-600'/>
        {reviews.map((item)=>{
            return (
                <div className='font-["Neue_Montreal"]'>
                    <div className='flex justify-between px-20 py-7 text-xl'>
                        <h1 className='w-1/2'>{item.title}</h1>
                        <div className='flex w-1/2 justify-between'>
                            <h1>{item.name}</h1>
                            <button>{item.btn}</button>
                        </div>
                    </div>
                    <hr className='border-1 border-zinc-600'/>
                </div>
            )
        })}
        
    </div>
  )
}

export default ClientsReviews