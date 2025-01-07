// components/EditorsPick.tsx
import React from "react";
import Image from "next/image";

const Product: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
        EDITOR’S PICK
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Problems trying to resolve the conflict between
      </p>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* MEN */}
        <div className="relative group">
          <Image
            src="/card1.png"
            alt="Men"
            width={510}
            height={510}
            className="object-cover w-full h-full rounded-md"
          />
          
        </div>

        {/* WOMEN */}
        <div className="relative group">
          <Image
            src="/card2.png"
            alt="Women"
            width={510}
            height={510}
            className="object-cover w-full h-full rounded-md"
          />
         
        </div>

        {/* ACCESSORIES & KIDS combined */}
        <div className="space-y-6">
          {/* ACCESSORIES */}
          <div className="relative group">
            <Image
              src="/card3.png"
              alt="Accessories"
              width={240}
              height={240}
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-md shadow-md">
              ACCESSORIES
            </div>
          </div>

          {/* KIDS */}
          <div className="relative group">
            <Image
              src="/card4.png"
              alt="Kids"
              width={240}
              height={240}
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-md shadow-md">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
