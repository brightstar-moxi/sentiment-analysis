
"use client"
import React, { useState } from 'react'
import Image from "next/image";
// import Image1 from '/public/pic1.png'
import Image2 from '/public/R.png';






const Fourth = () => {
    
  return (
   
    <section className='text-white'>
       
        
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-6 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image 
        src={Image2}
        alt="about image"
        width={600}
        height={400}
        />
        <div className='mt-2 pt-10 md:mt-0  flex flex-col h-full'>
            <span className='text-5xl font-extrabold text-white mb-4'>Improve institution performance</span>
            <p className='text-xl font-semibold text-[#9b9c9e]'> By leveraging students feedback, institution can identify areas for improvement and make data-driven decision to enhance the overall performance and experience for students.
               </p>
          
        </div>
       
        </div></section>
  )
}

export default Fourth