'use client'

import SponsorsSection from "@/components/ShopSection/SponsorsSection";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and Close icons


const PricingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="pricing-page bg-gray-50 py-16 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand Name */}
          <div className="text-2xl font-bold text-black">Bandage</div>

          {/* Hamburger Menu (Visible on Small Screens) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            <HiMenuAlt3 />
          </button>

          {/* Navigation Links (Hidden on Small Screens) */}
          <div className="hidden md:flex gap-6">
            <Link href="/home">Home</Link>
            <Link href="/product">Product</Link>
            <Link href="/team">Team</Link>
            <Link href="/price">Pricing</Link>
          </div>

          {/* Login & Signup */}
          <div className="hidden md:flex space-x-4">
            <button className="text-blue-600 text-lg border border-blue-600 py-2 px-4">Login</button>
            <button className="bg-blue-600 text-white text-lg py-2 px-6 hover:bg-blue-700 transition">Get a Member</button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <>
          {/* Sidebar Content */}
          <div
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white text-black transform translate-x-0 transition-transform duration-300 shadow-lg"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setSidebarOpen(false)}
            >
              <HiX />
            </button>

            {/* Sidebar Links */}
            <div className="p-6 space-y-6">
              <nav className="space-y-4">
                <Link href="/home" className="block text-lg hover:text-blue-500 transition" onClick={() => setSidebarOpen(false)}>Home</Link>
                <Link href="/team" className="block text-lg hover:text-blue-500 transition" onClick={() => setSidebarOpen(false)}>Team</Link>
                <Link href="/product" className="block text-lg hover:text-blue-500 transition" onClick={() => setSidebarOpen(false)}>Product</Link>
              </nav>
            </div>
          </div>

          {/* Backdrop (Closes Sidebar on Click) */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>

          <h2 className="text-4xl text-center text-gray-800 mt-18 mb-4">Pricing</h2>
          <h1 className="text-4xl text-center font-bold text-gray-800">Simple Pricing</h1>
        </>
      )}

      {/* Breadcrumbs Section */}
      <div className="container mx-auto py-8 mb-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex text-center text-gray-600 space-x-2">
            <li>
              <a href="/" className="font-bold hover:text-gray-800">Home</a>
            </li>
            <li>&gt;</li>
            <li>
              <a href="/shop" className="hover:text-gray-800">Shop</a>
            </li>
          </ol>
        </nav>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto py-8 md:py-12 lg:py-6">
        <div className="text-center py-6">
          <h1 className="text-4xl mt-8 mb-8 font-bold text-gray-800">Pricing</h1>
          <p className="text-gray-600 mt-8">
            Problems trying to solve conflict between <br />
            the two major realms of Classical Physics: Newtonian mechanics
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex py-8 flex-col md:flex-row justify-center gap-8"> 
          {/* Free Plan */}
          <div
            className="bg-white text-black shadow-lg rounded-lg p-4 text-center border border-[#23A6F0]"
            style={{
              width: "427px",  
              height: "704px", 
              opacity: 1,     
            }}
          >
            <h2 className="text-2xl font-semibold text-black">Free</h2>
            <p className="mt-6 font-semibold text-black">Organize across all apps by hand</p>
            {/* Price with Superscript Dollar */}
            <div className="flex justify-center items-center mt-6">
              <p className="text-4xl text-[#23A6F0] font-bold flex items-center">
                0
                <sup className="flex w-6 h-6 rounded-full text-[#b9e0f7] font-bold text-xs items-center justify-center ml-1">
                  $
                </sup>
                <sub className="text-[#b7e2fc] font-medium text-lg ml-2">Per month</sub>
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#2DC071] text-white rounded-full text-xs font-bold">
                  ✔
                </div>
                <span>Unlimited Product Updates</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#BDBDBD] text-white rounded-full text-xs font-bold">
                  ✔
                </div>
                <span>1GB Cloud storage</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#BDBDBD] text-white rounded-full text-xs font-bold">
                  ✔
                </div>
                <span>Email and community support</span>
              </li>
            </ul>

            {/* Call-to-Action Button */}
            <button className="mt-6 bg-[#252B42] text-white py-2 px-4 rounded hover:bg-[#1D8ADB]">
              Try For Free
            </button>
          </div>

          {/* Standard Plan */}
          <div
            className="bg-[#252B42] text-white shadow-lg rounded-lg p-6 text-center"
            style={{
              width: "429px",  
              height: "704px", 
              opacity: 1,     
            }}
          >
            <h2 className="text-2xl font-semibold">Standard</h2>
            <p className="mt-6 font-semibold text-white">Organize across all apps by hand</p>

            {/* Price with Superscript Dollar */}
            <div className="flex justify-center items-center mt-6">
              <p className="text-4xl text-[#23A6F0] font-bold flex items-center">
                9.99
                <sup className="flex w-6 h-6 rounded-full text-[#b9e0f7] font-bold text-xs items-center justify-center ml-1">
                  $
                </sup>
                <sub className="text-[#b7e2fc] font-medium text-lg ml-2">Per month</sub>
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-2 text-white text-sm">
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#2DC071] text-white rounded-full text-xs font-bold">
                  ✔
                </div>
                <span>Unlimited Product Updates</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#BDBDBD] text-white rounded-full text-xs font-bold">
                  ✔
                </div>
                <span>1GB Cloud storage</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#BDBDBD] text-white rounded-full text-xs font-bold">
                  ✔
                </div>
                <span>Email and community support</span>
              </li>
            </ul>

            {/* Call-to-Action Button */}
            <button className="mt-6 bg-[#23A6F0] text-white py-2 px-4 rounded hover:bg-[#1D8ADB]">
              Try For Free
            </button>
          </div>

          {/* Premium Plan */}
          <div
            className="bg-white shadow-lg rounded-lg p-6 text-center border border-[#23A6F0]"
            style={{
              width: "427px",  
              height: "704px", 
              opacity: 1,     
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">Premium</h2>
            <p className="mt-4 font-semibold text-gray-600">Organize across all apps by hand</p>
            <div className="flex justify-center items-center mt-6">
              <p className="text-4xl text-[#23A6F0] font-bold flex items-center">
                19.99
                <sup className="flex w-6 h-6 rounded-full text-[#b9e0f7] font-bold text-xs items-center justify-center ml-1">
                  $
                </sup>
                <sub className="text-[#b7e2fc] font-medium text-lg ml-2">Per month</sub>
              </p>
            </div>

            <ul className="mt-6 space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#2DC071] text-white rounded-full text-xs font-bold">
                  ✔
                </div>
                <span>Unlimited Product Updates</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#BDBDBD] text-white rounded-full text-xs font-bold">
                  ✔
                </div>
                <span>1GB Cloud storage</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#BDBDBD] text-white rounded-full text-xs font-bold">
                  ✔
                </div>
                <span>Email and community support</span>
              </li>
            </ul>

            <button className="mt-6 bg-[#252B42] text-white py-2 px-4 rounded hover:bg-[#1D8ADB]">
              Try For Free
            </button>
          </div>
        </div>
      </div>

    
      <SponsorsSection />
    </div>
  );
};

export default PricingPage;
