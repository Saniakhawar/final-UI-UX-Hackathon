'use client';

import React, { useState } from "react";
import Link from "next/link";
import { BsSearch, BsCart } from "react-icons/bs"; // Search and Cart icons
import { FiHeart } from "react-icons/fi"; // Heart icon
import { FaUser } from "react-icons/fa"; // User icon for Login/Register
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and Close icons

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="text-xl font-bold">Bandage</div>

          {/* Navigation Links (Hidden on Small Screens) */}
          <div className="hidden md:flex gap-6">
            <Link href="/home" className="block text-lg hover:text-blue-500 transition">Home</Link>
            <Link href="/shop" className="block text-lg hover:text-blue-500 transition">Shop</Link>
            <Link href="/about" className="block text-lg hover:text-blue-500 transition">About</Link>
            <Link href="/product" className="block text-lg hover:text-blue-500 transition">Product</Link>
            <Link href="/contact" className="block text-lg hover:text-blue-500 transition">Contact</Link>
            <Link href="/team" className="block text-lg hover:text-blue-500 transition">Team</Link>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-6">
            {/* Hamburger Menu (Visible on Small Screens) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setSidebarOpen(true)}
            >
              <HiMenuAlt3 />
            </button>

            {/* Login/Register */}
            <Link href="#" className="hidden md:flex items-center gap-2 hover:text-blue-500 transition">
              <FaUser className="text-lg" />
              <span>Login/Register</span>
            </Link>

            {/* Heart Icon */}
            <span className="hidden md:flex items-center text-lg cursor-pointer hover:text-blue-500 transition">
              <FiHeart />
              1
            </span>

            {/* Search Icon */}
            <BsSearch className="hidden md:block text-lg cursor-pointer hover:text-blue-500 transition" />

            {/* Cart Icon */}
            <span className="hidden md:flex items-center text-lg cursor-pointer hover:text-blue-500 transition">
              <BsCart />
              1
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-black transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          <HiX />
        </button>

        {/* Sidebar Content */}
        <div className="p-6 space-y-6">
          {/* Navigation Links */}
          <nav className="space-y-4">
            <Link href="/home" onClick={() => setSidebarOpen(false)}>
              <span className="block text-lg hover:text-blue-500 transition">Home</span>
            </Link>
            <Link href="/shop" onClick={() => setSidebarOpen(false)}>
              <span className="block text-lg hover:text-blue-500 transition">Shop</span>
            </Link>
            <Link href="/about" onClick={() => setSidebarOpen(false)}>
              <span className="block text-lg hover:text-blue-500 transition">About</span>
            </Link>
            <Link href="/product" onClick={() => setSidebarOpen(false)}>
              <span className="block text-lg hover:text-blue-500 transition">Product</span>
            </Link>
            <Link href="/contact" onClick={() => setSidebarOpen(false)}>
              <span className="block text-lg hover:text-blue-500 transition">Contact</span>
            </Link>
            <Link href="/team" onClick={() => setSidebarOpen(false)}>
              <span className="block text-lg hover:text-blue-500 transition">Team</span>
            </Link>
          </nav>

          {/* User Options */}
          <div className="space-y-4">
            <Link href="#" onClick={() => setSidebarOpen(false)}>
              <span className="flex items-center gap-2 hover:text-blue-500 transition">
                <FaUser className="text-lg" />
                Login/Register
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <FiHeart className="text-lg" />
              <span>1</span>
            </div>
            <div className="flex items-center gap-2">
              <BsCart className="text-lg" />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
