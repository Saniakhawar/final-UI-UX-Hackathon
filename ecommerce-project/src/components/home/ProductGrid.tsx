import React from 'react';
import NewProduct from './NewProduct';

const ProductGrid = () => {
  const products = [
    { key: 1, img: '/grid1.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 2, img: '/grid2.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 3, img: '/grid3.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 4, img: '/grid4.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 5, img: '/grid5.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 6, img: '/grid6.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 7, img: '/grid7.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 8, img: '/grid8.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
  ];

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold text-gray-600">FEATURED PRODUCT</h3>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">BEST SELLER PRODUCT</h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <NewProduct
            key={product.key}
            img={product.img}
            title={product.title}
            desc={product.desc}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
