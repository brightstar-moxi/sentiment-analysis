
"use client"
import React, { useState } from 'react'
import Image from "next/image";
// import Image1 from '/public/pic1.png'
import Image2 from '/public/Screen-Shot-2020-01-22-at-3.05.27-PM-1.png';






const Second = () => {
    
  return (
   
    <section className='text-white'>
        <div className='text-center  mt-4'>
        <h1 className='text-6xl font-extrabold text-white '>Feedback Analysis Tool</h1>
        <p className=' text-[#5f616e] font-semibold text-2xl pt-6' >Gain insights from student feedback across faculties</p>
        
        </div>
        
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image 
        src={Image2}
        alt="about image"
        width={600}
        height={600}
        />
        <div className='mt-4 pt-20 md:mt-0  flex flex-col h-full'>
            <span className='text-5xl font-extrabold text-white mb-4'>Visualize feedback data</span>
            <p className='text-lg font-semibold text-[#9b9c9e]'>Easily analyze feedback from students in different faculties with our data Visualize tools. Understand trends and make informed decision to enhance the student experience.
               </p>
          
        </div>
        </div></section>
  )
}

export default Second