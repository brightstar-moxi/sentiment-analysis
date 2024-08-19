"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import NavLink from './NavLink'; 
 import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
 import Image from "next/image";
// import Image2 from '/public/logo.png'

// //<Image 
// src={''}
// alt="about image"
// width={50}
// height={50}
// /> 

const navLinks =[
   
    {
        title: "Sign Up",
        path: "/signup"
    },
     {
         title: "Sign In",
         path: "/login"
     }
]

const Navbar = () => {
  const [navbarOpen, setNavarOpen] = useState(false);
  return (
   <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#040613] bg-opacity-100'>
     <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'> 
        <Link href={"/"} className='text-xl md:text-3xl text-white font-semibold '> The Polytechnic, Ibadan</Link>
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen ? (
              <button onClick={() => setNavarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className="h-5 w-5"/>
              </button>
            ):(
              <button onClick={() => setNavarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <XMarkIcon className="h-5 w-5"/>
            </button>
            )
          }
        </div> 
       
        <div className='menu hidden md:block md:w-auto' id="navbar">
          
            <ul className='flex p-3 md:p-0 md:flex-row md:space-x-7 mt-0'>
            <span className="text-white text-lg pt-2 pr-8">Sentiment Analysis</span>
              {
               navLinks.map((link,index) =>(
                <li key={index}>
                  
                    <NavLink href={link.path} title={link.title}/>
                </li>
               ))
              }
            </ul>
        </div>
     </div>
     { navbarOpen ? <MenuOverlay links={navLinks}/>: null}
   </nav>
  )
}

export default Navbar