
"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Image1 from '/public/pic1.png'
import Image2 from '/public/Graduation-removebg-preview.png';






const First = () => {
    
  return (
   
    <section className='text-white'id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='mt-4 md:mt-0  flex flex-col h-full'>
            <span className='text-7xl font-extrabold text-white mb-4'>Analyze Student Feedback</span>
            <p className='text-2xl'>Gain valuable insights from Student reviews across various faculties. 
               </p>
           <p className='text-2xl'> Students can conveniently share their feedback through the client interface</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white border-white py-2 px-4 rounded w-60 mt-8">Get Started</button>
                <div className=' flex pt-4 space-x-3'>
                <div className="flex gap-0.5">
    <svg className="h-5 w-5 shrink-0 fill-amber-400" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg className="h-5 w-5 shrink-0 fill-amber-400" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg className="h-5 w-5 shrink-0 fill-amber-400" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg className="h-5 w-5 shrink-0 fill-gray-300" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg className="h-5 w-5 shrink-0 fill-gray-300" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
</div>
<div className="left-1/2 -ml-0.5 w-0.5 h-50 bg-white"></div>

<div className='left-1/2'>
<span > Data Analysis</span>
</div>
<div className="left-1/2 -ml-0.5 w-0.5 h-50 bg-white"></div>

<div className='left-1/2'>
<span > Student Review</span>
</div>

</div>
 <strong className='pt-6 text-xl'> "Enhance our understanding of student needs"</strong>
 <div className='flex space-x-5 mt-4'>
 <Image 
        src={Image2}
        alt="about image"
        width={50}
        height={50}
        />
        <strong className='pt-5 '> Addison Hall</strong>
</div>
        </div>
         <Image 
        src={Image1}
        alt="about image"
        width={600}
        height={600}
        />
        
        </div></section>
  )
}

export default First