import React from 'react'

const Cards = () => {
  return (
    <div className='w-full flex gap-5 px-20 py-36'>
        <div className='w-1/2 bg-[#004D43] h-[55vh] rounded-2xl relative'>
            <svg className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' xmlns="http://www.w3.org/2000/svg" width="101" height="42" fill="none"><path d="M13.802 14.071C5.933 14.243-.064 20.43.001 28.201c.057 7.125 6.421 14.147 14.99 13.532 6.773-.485 12.927-6.327 12.858-13.911-.069-7.584-6.54-13.907-14.047-13.75zm.08 21.74c-4.243 0-7.712-3.628-7.697-8.02a7.722 7.722 0 014.751-7.276 7.73 7.73 0 0110.701 7.322c.023 4.327-3.526 7.981-7.766 7.974h.012zm74.224 5.308h6.05v-26.44h-6.05v26.44zM94.941 0v8.363h5.402c.199 0 .382 0 .657-.027V0h-6.059zM44.277 35.81c-4.244 0-7.713-3.627-7.697-8.018a7.854 7.854 0 017.708-7.767 7.704 7.704 0 016.113 3.085l5.802-2.291c-2.494-4.109-7.014-6.874-12.018-6.755-7.87.172-13.867 6.358-13.802 14.129.058 7.125 6.422 14.147 14.99 13.533a14.137 14.137 0 0011.159-7.19l-5.677-2.525a7.757 7.757 0 01-6.578 3.8zM73.52 13.98a9.132 9.132 0 00-8.08 4.494V0h-6.112v41.096h6.112V26.104c0-4.33 1.7-7.5 5.834-7.5 5.325 0 5.348 5.587 5.348 8.783v13.751h6.18c0-.18.031-.317.031-.458 0-5.136.065-10.269-.023-15.405-.057-3.558-.745-11.295-9.29-11.295z" fill="#CDEA68"></path></svg> 
            <button className='absolute top-[80%] left-[5%] border-[1px] border-[#CDEA68] py-2 text-[1.10rem] w-[17%] rounded-full text-[#CDEA68] font-["Neue_Montreal"] tracking-wide'>©2019-2024</button>
        </div>
        <div className='w-1/2 h-[55vh] flex gap-5'>
            <div className='w-1/2 bg-[#212121] h-[55vh] rounded-2xl relative'>
                <svg  className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'xmlns="http://www.w3.org/2000/svg" width="119" height="63" fill="none"><path d="M32.305 5.822h5.037v31.097h-5.037V5.822zm22.56 21.242c0 4.818-3.943 5.256-5.257 5.256-3.066 0-3.504-2.847-3.504-4.38V15.895h-5.038v11.826c0 2.847.877 5.475 2.629 7.008 1.533 1.533 3.504 2.19 5.913 2.19 1.752 0 3.943-.438 5.257-1.752v1.752h5.037V15.896h-5.037v11.168zM69.757 8.231h-5.038v7.665h-3.723v4.818h3.723v16.205h5.038V20.714h3.723v-4.818h-3.723V8.23zm19.492 22.337c-1.095.876-2.628 1.533-4.162 1.533-3.504 0-5.913-2.628-5.913-6.132 0-3.504 2.41-5.913 5.913-5.913 1.534 0 3.067.438 4.162 1.533l.657.657 3.504-3.285-.876-.656a11.23 11.23 0 00-7.447-2.848c-6.132 0-10.731 4.6-10.731 10.731 0 6.132 4.599 10.731 10.731 10.731a11.23 11.23 0 007.447-2.847l.876-.657-3.504-3.504-.657.657zm21.903-12.92c-1.534-1.533-3.067-2.19-5.476-2.19-1.752 0-3.504.438-4.818 1.751V5.822H95.82v31.097h5.038V25.312c0-4.818 3.285-5.256 4.599-5.256 3.066 0 2.847 2.847 2.847 4.38V36.7h5.038V24.655c0-2.847-.657-5.475-2.19-7.008zM25.296 29.255c-1.752 1.751-4.38 2.846-7.228 2.846-5.475 0-9.418-4.38-9.418-10.292 0-5.913 3.943-10.293 9.637-10.293 2.629 0 5.257 1.095 7.228 3.066l.657.657 3.285-3.285-.657-.657c-2.847-2.847-6.57-4.38-10.513-4.38-8.322-.22-14.455 6.35-14.455 14.892 0 8.54 6.133 15.11 14.236 15.11 3.943 0 7.885-1.533 10.513-4.38l.657-.657-3.285-3.285-.657.657z" fill="#F4F4F4"></path><path d="M26.488 51.439l-1.726 3.382-3.75.597 2.683 2.687-.591 3.75 3.384-1.721 3.384 1.721-.591-3.75 2.683-2.687-3.75-.597-1.726-3.382zm16.125 0l-1.726 3.382-3.75.597 2.683 2.687-.592 3.75 3.385-1.721 3.385 1.721-.592-3.75 2.683-2.687-3.75-.597-1.726-3.382zm16.121 0l-1.726 3.382-3.75.597 2.683 2.687-.591 3.75 3.384-1.721 3.385 1.721-.592-3.75 2.683-2.687-3.75-.597-1.726-3.382zm16.121 0l-1.726 3.382-3.75.597 2.683 2.687-.591 3.75 3.384-1.721 3.385 1.721-.592-3.75 2.684-2.687-3.75-.597-1.727-3.382zm16.125 0l-1.726 3.382-3.75.597 2.683 2.687-.591 3.75 3.384-1.721 3.385 1.721-.592-3.75 2.684-2.687-3.75-.597-1.727-3.382z" fill="#CDEA68"></path></svg>
                <button className='absolute top-[80%] left-[5%] border-[1px] border-zinc-100 py-[0.3rem] text-[1.10rem] w-[53%] rounded-full text-zinc-100 font-["Neue_Montreal"]'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='relative w-1/2 bg-[#212121] h-[55vh] rounded-2xl'>
                <img src="src/assets/logo003.png" alt="" className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[30%]'/>
                <button className='absolute top-[80%] left-[5%] border-[1px] border-zinc-100 py-[0.3rem] text-[1.10rem] w-[68%] rounded-full text-zinc-100 font-["Neue_Montreal"]'>BUSINESS BOOTCAMP ALUMNI</button>

            </div>
        </div>

    </div>
  )
}

export default Cards