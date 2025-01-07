import React from "react";
import Image from "next/image";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import SponsorsSection from '@/components/ShopSection/SponsorsSection'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const ProductDetails = () => {
  return (
    <div className="min-h-screen">
      {/* Header with green background */}
      <div className="bg-green">
        <Header />
      </div>

      <div className="min-h-screen py-8">
        {/* Add margin to separate navbar from breadcrumb */}
        <Navbar />

        {/* Breadcrumbs Section */}
        <div className="container mx-auto py-4 mb-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex text-gray-600 space-x-2">
              <li>
                <a href="/home" className="font-bold hover:text-gray-800">Home</a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="/shop" className="hover:text-gray-800">Shop</a>
              </li>
            </ol>
          </nav>
        </div>

        <div className="container mx-auto px-4">
          {/* Product Details Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {/* Product Image */}
            <div>
              <Image
                src="/product.png"
                alt="Folding Phone"
                width={500}
                height={500}
                className="rounded-lg"
              />

              {/* Two Smaller Images Below */}
              <div className="mt-4 flex space-x-2">
                {/* First Image */}
                <div className="flex justify-center">
                  <Image
                    src="/small-product1.png"
                    alt="Small Product 1"
                    width={130}
                    height={130}
                  />
                </div>

                {/* Second Image */}
                <div className="flex justify-center">
                  <Image
                    src="/small-product2.png"
                    alt="Small Product 2"
                    width={130}
                    height={130}
                  />
                </div>
              </div>
            </div>

            {/* Product Info and Icons */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Folding Phone</h2>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-yellow-500">★</span>
                <span className="ml-2 text-sm text-gray-500">Review</span>
              </div>
              <p className="text-2xl font-bold text-green-600 mb-4">€123.45</p>
              <p className="font-bold">Availability: <span className="text-blue-600">In stock</span></p>
              <p className="mb-6 text-gray-700">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                consequent sent nostrum met.
              </p>

              {/* Colors */}
              <div className="flex space-x-4 mb-6">
                <button className="w-8 h-8 rounded-full bg-[#23A6F0]"></button>
                <button className="w-8 h-8 rounded-full bg-[#2DC071]"></button>
                <button className="w-8 h-8 rounded-full bg-[#E77C40]"></button>
                <button className="w-8 h-8 rounded-full bg-[#252B42]"></button>
              </div>

              {/* Icons and "Select Options" Button */}
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Select Options
                </button>
                <button className="flex items-center px-4 py-2 hover:bg-gray-300">
                  <FaShoppingCart className="mr-2" />
                </button>
                <button className="flex items-center px-4 py-2 text-black hover:bg-gray-300">
                  <FaHeart className="mr-2 text-black" />
                </button>
                <button className="flex items-center px-4 py-2 text-black hover:bg-gray-300">
                  <FaEye className="mr-2 text-black" />
                </button>
              </div>
            </div>
          </section>

          {/* Tabs Section */}
          <section className="mb-12">
            <div className="text-center mb-4">
            </div>
            <div className="border-b">
              <ul className="flex items-center justify-center space-x-6">
                <li className="pb-2 text-gray-600 cursor-pointer hover:text-gray-800">
                  Description
                </li>
                <li className="pb-2 text-gray-600 cursor-pointer hover:text-gray-800">
                  Additional Information
                </li>
                <li className="pb-2 text-gray-600 cursor-pointer hover:text-gray-800">
                  Reviews <span className="text-green-600">(0)</span>
                </li>
              </ul>
              <hr className="border-t border-black w-1/2 mx-auto" />
            </div>
          </section>

          {/* Second Slide Section */}
          <section className="mb-12">
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* Product Image */}
              <div>
                <Image
                  src="/product-1.png"
                  alt="The Quick Fox"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>

              {/* Text and Small Divs */}
              <div className="flex gap-4 text-gray-600">
                {/* Large Text Section */}
                <div className="flex-1 font-serif">
                  <h2 className="text-2xl font-bold mb-4">The Quick Fox Jumps Over</h2>
                  <p className="mb-4">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                    consequent sent nostrum met.
                  </p>
                  <p className="mb-4">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                    consequent sent nostrum met.
                  </p>
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                    consequent sent nostrum met.
                  </p>
                </div>

                {/* Two Smaller Divs */}
                <div className="flex flex-col gap-4 w-1/2">
                  <div className="p-4">
                    <h4 className="text-lg font-bold">The Quick Fox Jumps Over</h4>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <span className="mr-4 text-gray-600">{'>'}</span>
                        Quick jumps over the lazy dog
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 text-gray-600">{'>'}</span>
                        Quick jumps over the lazy dog
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 text-gray-600">{'>'}</span>
                        Quick jumps over the lazy dog
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 text-gray-600">{'>'}</span>
                        Quick jumps over the lazy dog
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold">The Quick Fox Jumps Over</h4>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <span className="mr-4 text-gray-600">{'>'}</span>
                        Quick jumps over the lazy dog
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 text-gray-600">{'>'}</span>
                        Quick jumps over the lazy dog
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 text-gray-600">{'>'}</span>
                        Quick jumps over the lazy dog
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 text-gray-600">{'>'}</span>
                        Quick jumps over the lazy dog
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bestseller Products Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Bestseller Products</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-4 relative">
                  <Image
                    src={`/product${index + 1}.png`}
                    alt={`Product ${index + 1}`}
                    width={241}
                    height={442}
                    className="mx-auto"
                  />
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-bold">Graphic Design</h4>
                    <p className="font-bold text-sm text-gray-500">English Department</p>
                    <p className="text-gray-500 font-bold">€45.00 <span className="font-bold text-[#23856D]">€45.00</span></p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sponsors Section */}
          <SponsorsSection />

          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
