import React from 'react';
import NewProduct from './Product';

const ProductGrid = () => {
  const products = [
    { key: 1, img: '/shop1.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 2, img: '/shop2.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 3, img: '/shop3.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 4, img: '/shop4.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 5, img: '/shop5.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 6, img: '/shop6.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 7, img: '/shop7.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 8, img: '/shop8.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 9, img: '/shop9.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 10, img: '/shop10.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 11, img: '/shop11.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 12, img: '/shop12.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
  ];

  return (
    <div
      className="mx-auto px-4 sm:px-6 lg:px-8"
      style={{
        width: '100%', // Make width 100% for responsiveness
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
      {products.map((product) => (
  <div key={product.key} className="flex justify-center"> 
    <NewProduct
      img={product.img}
      title={product.title}
      desc={product.desc}
      price={product.price}
      originalPrice={product.originalPrice}
    />
  </div>


        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
