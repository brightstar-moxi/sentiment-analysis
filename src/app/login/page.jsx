
"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Image1 from '/public/Polytechnic-Ibadan.jpg'
// import Image2 from '/public/R.png';






const page = () => {
    
  return (
   
    <div className="relative h-screen w-full">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image 
        src={Image1} 
        alt="Background Image" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
      />
    </div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content on Top of the Background */}
    <div className="min-h-screen flex items-center justify-center ">
    <div className=" bg-[#ffffffad] p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105   ">
      <div className="bg-[#ffffff86] p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-150"
            >
              Sign In
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="text-blue-700 hover:underline text-sm">
              Forgot your password?
            </a>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Already have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default page