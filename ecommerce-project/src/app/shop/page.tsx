'use client'
import Link from 'next/link';
import Header from "@/components/Header";
import Navbar from "@/components/Navbar"
import Carditem from '@/components/ShopSection/Carditem';
import SponsorsSection from '@/components/ShopSection/SponsorsSection';
import ProductList from '@/components/ShopSection/ProductList';
import Pagination from '@/components/ShopSection/Pagination';

const  shopPage =()=>{
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-8">
        {/* Page Container */}
        <div className="py-2 bg-[green] hidden sm:block">
          <Header />
        </div>
        <Navbar/>
        {/* Carditem Section */}
        <div className="mb-8">
          <Carditem />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Sponsors Section */}
          <div className="mb-8">
            <SponsorsSection />
          </div>

          {/* Product Grid */}
          <section className="mb-8">
            <ProductList />
          </section>

        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <Pagination />
        </div>
      </main>

   
    </div>
  );
}
export default shopPage;
