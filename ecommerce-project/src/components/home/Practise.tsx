import React from "react";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa"; // Clock icon
import { FaChartLine } from "react-icons/fa"; // Graph icon for comments

const FeaturedPostsSlide: React.FC = () => {
  return (
    <section className="text-center py-12 mx-auto" style={{ width: "100%", height: "auto", gap: "30px" }}>
      <h1 className="text-sky-500 text-4xl font-bold mb-4">Practice Advice</h1>
      <h2 className="text-black text-3xl font-bold mb-4">Featured Posts</h2>
      <p className="text-gray-700 text-lg mb-4">
        Problems trying to resolve the conflict between
      </p>
      <p className="text-gray-700 text-lg mb-12">
        The two major realms of Classical physics: Newtonian mechanics
      </p>

      {/* Grid of images and text content as cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="relative bg-white shadow-lg overflow-hidden border border-gray-200">
          <div className="h-80 w-full relative">
            <Image src="/practise1.png" alt="Post 1" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="px-4 py-6">
            <div className="text-gray-800 text-sm mt-2">
              <span className="text-blue-500">Google</span> Trending New
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-800 text-lg font-bold">Loudest à la Madison #1</p>
              <p className="text-gray-600 text-sm">(L&apos;Integral)</p>
              <p className="text-gray-600 text-sm mt-2">
                We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
              </p>
            </div>
            {/* Horizontal Line */}
            <div className="mt-4 text-left px-2">
              <div className="flex items-center text-sm text-gray-500">
                <FaRegClock className="mr-2 text-blue-500" /> {/* Clock in blue */}
                <p>22 April 2021</p>
                <div className="flex items-center ml-4">
                  <FaChartLine className="mr-2 text-green" /> {/* Graph icon */}
                  <p className="text-gray-500">10 comments</p>
                </div>
              </div>
              <div className="mt-2">
                <button className="text-black text-sm font-semibold hover:underline flex items-center">
                  Learn More <span className="ml-1 text-blue-500">→</span> {/* Arrow in blue */}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white shadow-lg overflow-hidden border border-gray-200">
          <div className="h-80 w-full relative">
            <Image src="/practise2.png" alt="Post 2" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="px-4 py-6">
            <div className="text-gray-800 text-sm mt-2">
              <span className="text-blue-500">Google</span> Trending New
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-800 text-lg font-bold">Loudest à la Madison #1</p>
              <p className="text-gray-600 text-sm">(L&apos;Integral)</p>
              <p className="text-gray-600 text-sm mt-2">
                We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
              </p>
            </div>
            {/* Horizontal Line */}
            <div className="mt-4 text-left px-4">
              <div className="flex items-center text-sm text-gray-500">
                <FaRegClock className="mr-2 text-blue-500" /> {/* Clock in blue */}
                <p>22 April 2021</p>
                <div className="flex items-center ml-4">
                  <FaChartLine className="mr-2 text-gray-500" /> {/* Graph icon */}
                  <p className="text-gray-500">10 comments</p>
                </div>
              </div>
              <div className="mt-2">
                <button className="text-black text-sm font-semibold hover:underline flex items-center">
                  Learn More <span className="ml-1 text-blue-500">→</span> {/* Arrow in blue */}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white shadow-lg overflow-hidden border border-gray-200">
          <div className="h-80 w-full relative">
            <Image src="/practise3.png" alt="Post 3" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="px-4 py-6">
            <div className="text-gray-800 text-sm mt-2">
              <span className="text-blue-500">Google</span> Trending New
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-800 text-lg font-bold">Loudest à la Madison #1</p>
              <p className="text-gray-600 text-sm">(L&apos;Integral)</p>
              <p className="text-gray-600 text-sm mt-2">
                We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
              </p>
            </div>
            {/* Horizontal Line */}
            <div className="mt-4 text-left px-4">
              <div className="flex items-center text-sm text-gray-500">
                <FaRegClock className="mr-2 text-blue-500" /> {/* Clock in blue */}
                <p>22 April 2021</p>
                <div className="flex items-center ml-4">
                  <FaChartLine className="mr-2 text-green" /> {/* Graph icon */}
                  <p className="text-gray-500">10 comments</p>
                </div>
              </div>
              <div className="mt-2">
                <button className="text-black text-sm font-semibold hover:underline flex items-center">
                  Learn More <span className="ml-1 text-blue-500">→</span> {/* Arrow in blue */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSlide;
