"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from '@/components/Navbar'

const Hero = ()=> {
  return (
    <div>
      <div className="bg-[darkblue] hidden sm:block">
        <Header />
        </div>

       <Navbar/>
    <div
      className="relative bg-lightblue h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/banner.jpg')`, // Ensure correct image path
      }}
    >
      <div className="container mx-auto px-4 flex flex-col justify-center h-full">
        {/* Content aligned to the center vertically */}
        <div className="text-left text-white space-y-4">
          <h1 className="text-4xl sm:text-2xl md:text-5xl font-bold mb-4">
            NEW COLLECTION
          </h1>
          <p className="text-base sm:text-sm md:text-lg mb-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 text-sm sm:text-xs md:text-lg rounded">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Hero;
