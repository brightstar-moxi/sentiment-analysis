
"use client"
import React, { useState } from 'react'
import Image from "next/image";
// import Image1 from '/public/pic1.png'
import Image2 from '/public/OIP.png';






const Third = () => {
    
  return (
   
    <section className='text-white'>
       
        
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        
        <div className='mt-4 pt-20 md:mt-0  flex flex-col h-full'>
            <span className='text-5xl font-extrabold text-white mb-4'>Streamline feedback collection</span>
            <p className='text-xl font-semibold text-[#9b9c9e]'> Students can conveniently share their feedback through our client inteerface, making it simple for the institution to gather and analyze valuable insights for improvement.
               </p>
          
        </div>
        <Image 
        src={Image2}
        alt="about image"
        width={600}
        height={600}
        />
        </div></section>
  )
}

export default Third