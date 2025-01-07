import React from "react";
import Hero from "@/components/home/Hero"
import Productcard from "@/components/home/Productcard"
import ProductGrid from "@/components/home/ProductGrid";
import Summer from "@/components/home/Summer";
import Universe from "@/components/home/Universe";
import Practise from "@/components/home/Practise";

const HomePage = () => {
  return (
    <div className="homepage-container">
        <Hero/>
      <Productcard />
      {/* Product Grid */}
      <div className="mb-12">
        <ProductGrid />
      </div>

      {/* Summer Slide */}
      <div className="mb-12">
        <Summer />
      </div>

      {/* Univers Slide */}
      <div className="mb-12">
        <Universe />
      </div>

      {/* Practise Slide */}
      <div className="mb-12">
        <Practise />
      </div>

     
   
    </div>
  );
};

export default HomePage;
