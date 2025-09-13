
import React, { useState, useEffect } from "react";
import { BsArrowBarDown, BsArrowDown, BsArrowDownRightSquare, BsGraphDownArrow } from "react-icons/bs";
import { products } from "../assets/ProductAssets";

const FeatureBox = ({ products = [] }) => {



  return (
   <>



<div className="w-full px-4 py-6">
  {products.length > 0 ? (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {products.map((item, idx) => (
        <div
          key={item._id || idx}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 hover:shadow-xl dark:hover:shadow-gray-600 transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center"
>
          <div className="w-full aspect-[4/5] overflow-hidden rounded-t-xl">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

         
          <h3 className="mt-2 mb-1 px-2 text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500 dark:text-gray-300 text-center text-lg">
      No products available
    </p>
  )}
</div>


  </>


  );
};

const Products = () => {

 const scrolldown=()=>{
      window.scrollTo({
     top: document.body.scrollHeight,
      behavior: "smooth", // smooth scrolling
    });
 }

 



  return (
    <div className="flex flex-col  items-center justify-center gap-8 px-6 py-12">
    
<div className="text-center space-y-3">
  {/* Heading */}
  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
    Looking to buy? <span className="text-blue-500">Get in touch with us!</span>
  </h2>

  {/* Subtext + Scroll Button */}
  <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300">
    <span className="text-lg">Contact details are below</span>
    <span
      onClick={scrolldown}
      className="p-2 dark:bg-gray-800  rounded-full cursor-pointer
                 shadow-md"
    >
      <BsArrowDown className="w-5 h-5  text-blue-400" />
    </span>
  </div>
</div>

      {/* First Box */}
      <FeatureBox products={products} />

     
    </div>
  );
};

export default Products;
