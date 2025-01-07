import React from 'react';
import Image from 'next/image';

const Summer2020Slide: React.FC = () => {
  return (
    <section className="w-full h-screen border bg-[#23856D] flex justify-center items-center px-6 sm:px-12 mt-10 mx-auto">
      <div className="text-white w-full sm:w-1/2 text-center sm:text-left">
        <h3 className="text-xl font-bold">Summer 2020</h3>
        <h2 className="text-3xl font-bold mt-2 text-center sm:text-left">
          Vita Classics Product
        </h2>
        <p className="text-sm mt-4 text-center sm:text-left">
          We know how large objects will act...
        </p>
        <div className="flex justify-center sm:justify-start items-center mt-4">
          <div className="text-2xl font-bold">$16.48</div>
          <button className="bg-[#2DC071] text-white px-6 py-2 ml-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex justify-center items-center mt-6 sm:mt-0">
        <Image
          src="/summer.png"
          alt="Summer 2020 Product"
          width={510}
          height={585}
          className="object-contain max-h-full rounded-md"
        />
      </div>
    </section>
  );
};

export default Summer2020Slide;
