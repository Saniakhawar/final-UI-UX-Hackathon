'use client'
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and Close icons

const TeamPage = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="team-page bg-gray-50">
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
        </>
      )}


      {/* Hero Section */}
      <section className="hero bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          {/* What We Do */}
          <p className="text-gray-600 text-lg font-bold">What We Do</p>
          {/* Innovation Heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Innovation tailored for you</h1>
          {/* Breadcrumb */}
          <div className="py-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex justify-center text-gray-600 space-x-2">
                <li>
                  <a href="/" className="hover:text-gray-800 font-bold">Home</a>
                </li>
                <li>&gt;</li>
                <li>
                  <a href="/team" className="hover:text-gray-800 font-bold">Team</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Full-Screen Image Layout Section */}
      <section className="h-screen w-full m-0 p-0">
        <div className="flex flex-col md:flex-row items-center h-full w-full">
          {/* Left: 1 Image */}
          <div className="flex justify-center items-center w-full md:w-1/2 h-full">
            <Image
              src="/team-m1.png" // Replace with your image
              alt="Featured Team Member"
              width={800}
              height={530}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right: 4 Images (2 rows of 2) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 h-full p-4">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="flex justify-center items-center w-full h-full">
                  <Image
                    src={`/team-m${index + 2}.png`} // Replace with your images
                    alt={`Team Member ${index + 2}`}
                    width={460}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          {/* Team Grid */}
          <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {/* Team Member Card */}
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="team-card p-6 text-center"
                >
                  {/* Team Member Image */}
                  <div className="mb-4">
                    <Image
                      src={`/team-member${index + 1}.png`} // Replace with your images
                      alt={`Team Member ${index + 1}`}
                      width={316}
                      height={213}
                      className="mx-auto"
                    />
                  </div>
                  {/* Team Member Name */}
                  <h3 className="text-xl font-semibold px-4 text-gray-800">
                    Username
                  </h3>
                  <p className="text-gray-600 px-4 text-sm">Profession</p>
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-6 mt-2 mb-16">
                    <Link href="#">
                      <FaFacebookF className="text-blue-600 hover:text-blue-800" />
                    </Link>
                    <Link href="#">
                      <FaInstagram className="text-black hover:text-blue-800" />
                    </Link>
                    <Link href="#">
                      <FaTwitter className="text-blue-400 hover:text-blue-600" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <div className="text-center py-16 bg-white">
        <h2 className="text-4xl mt-8 font-bold text-gray-800">Start your 14-day free trial!</h2>
        <h3 className="text-gray-600">Met mini molio non desert alamo est sit cliquey dolo <br /> do met sent .RELIT official consequent</h3>
        <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">
          Try it for Free
        </button>
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="#">
            <FaFacebookF className="text-blue-600 hover:text-blue-800" />
          </Link>
          <Link href="#">
            <FaInstagram className="text-black hover:text-blue-800" />
          </Link>
          <Link href="#">
            <FaTwitter className="text-blue-400 hover:text-blue-600" />
          </Link>
          <Link href="#">
            <FaLinkedin className="text-blue-400 hover:text-blue-600" />
          </Link>
        </div>
      </div>

   
    </div>
  );
};

export default TeamPage;
