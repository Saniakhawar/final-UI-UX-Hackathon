'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SponsorsSection from '@/components/ShopSection/SponsorsSection';
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and Close icons

const About = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100">
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
          <div className="hidden md:flex gap-6 font-semibold">
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
        </>
      )}

      {/* Hero Section */}
      <section className="relative bg-white min-h-[60vh] md:min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/banner2.png')` }}>
        <div className="container mx-auto px-6 text-left">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Company</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">ABOUT US</h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We know how large objects will act but things on a small scale.
            </p>
            <button className="bg-blue-600 text-white py-3 px-8 text-lg hover:bg-blue-700 transition">Get Quote Now</button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-black font-bold text-2xl mb-4">Mini Moli non desert</h3>
          <p className="text-gray-800 text-lg mb-8">
            Problems trying to solve conflict between the two major realms of Classical Physics: Newtonian mechanics
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '15K', label: 'Happy Customers' },
              { value: '150K', label: 'Products Sold' },
              { value: '15', label: 'Years in Business' },
              { value: '100+', label: 'Awards Won' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-6xl font-bold text-gray-600">{stat.value}</h3>
                <p className="font-bold text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto flex justify-center">
          <div className="relative w-full h-72 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image src="/video.png" alt="Video" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Big Companies Are Here</h2>
          <p className="text-gray-600 mb-6">
            Problems trying to solve conflict between the two major realms of Classical Physics: Newtonian mechanics
          </p>
          <SponsorsSection />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#2A7CC7] text-white py-16">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="max-w-lg text-left px-6">
            <h2 className="text-4xl mb-8">Work With Us</h2>
            <h2 className="text-4xl font-bold mb-4">Now Let’s Grow Yours</h2>
            <p className="text-lg mb-6">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
            </p>
            <button className="py-2 px-6 text-lg text-white border border-white hover:bg-white hover:text-blue-600 transition">
              Button
            </button>
          </div>

          <div className="w-full md:w-[50%] mt-8 md:mt-0">
            <Image src="/banner3.png" alt="banner" width={590} height={940} className="object-cover w-full" />
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default About;
