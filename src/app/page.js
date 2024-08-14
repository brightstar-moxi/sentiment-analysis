// pages/index.js
'use client'
import First from '@/components/home/First';
import Fourth from '@/components/home/Fourth';
// import { useState } from 'react';

// import SentimentChart from '@/components/home/SentimentChart';
// import SentimentForm from '@/components/home/SentimentForm';
import Navbar from '@/components/home/Navbar';
import Second from '@/components/home/Second';
import Third from '@/components/home/Third';
const Home = () => {
  

  return (
    <main className="flex min-h-screen flex-col bg-[#040613] "> 

    <Navbar/>
    <div className= "container mt-20 mx-auto px-12 py-4">
   <First/>
   <Second/>
   <Third/>
   <Fourth/>
    </div>
    
    {/* <Footer/> */}
         </main>
  );
};

export default Home;
