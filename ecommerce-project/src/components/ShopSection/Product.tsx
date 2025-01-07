import React from 'react';
import Image from 'next/image';

interface propsType {
  img: string;
  title: string;
  desc: string;
  price: string;
  originalPrice: string; // Add original price
}

const ProductCard: React.FC<propsType> = ({ img, title, desc, price, originalPrice }) => {
  return (
    <div className="text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-2"> {/* Added responsive max-width */}
      {/* Image Section */}
      <div className="relative">
        <Image
          className="object-cover w-full h-auto"  // Make image responsive
          src={img}
          width={239} // Default width (for large screens)
          height={427} // Default height
          alt={title}
        />
      </div>

      {/* Text Section */}
      <div className="py-3 space-y-2">
        <h2 className="text-gray-800 font-semibold text-lg">{title}</h2>
        <p className="text-gray-700 text-sm">{desc}</p>

        {/* Price Section */}
        <div className="flex justify-center items-center gap-2">
          {/* Original Price */}
          <div className="text-[#BDBDBD] font-bold text-lg line-through">
            ${originalPrice}
          </div>

          {/* Discounted Price */}
          <div className="text-[#23856D] font-bold text-lg">
            ${price}
          </div>
        </div>
      </div>

      {/* Color Dots */}
      <div className="flex justify-center gap-2 mt-3">
        <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
        <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
        <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
        <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
      </div>
    </div>
  );
};

export default ProductCard;
