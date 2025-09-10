

import React, { useState, useEffect } from "react";

import axios from "axios";


const FeatureBox = ({ products = [] }) => {



  return (
   <>


      {/* <div className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="bg-blue-200 rounded-2xl aspect-square flex items-center justify-center p-4 sm:p-6 shadow-xl">
        <div className="bg-white rounded-xl w-full h-auto flex items-center justify-center p-4 shadow-inner">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 w-full">
              {products.map((item, idx) => (
                <div
                  key={item._id || idx}
                  className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center hover:bg-blue-100 transition group"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="aspect-square w-60 object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-md"
                  />
                  <span className="text-sm font-medium mt-2 truncate w-full">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No products available</p>
          )}
        </div>
      </div>
    </div> */}
  
      {/* Playground */}

       {/* <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="bg-blue-200 rounded-2xl aspect-square flex items-center justify-center p-4 sm:p-6 shadow-xl">
        <div className="bg-white rounded-xl w-full h-auto flex items-center justify-center p-4 shadow-inner">
          {products.length > 0 ? (
            <div className="grid max-sm:grid-cols-2 min-md:grid-cols-3 gap-2 w-full">
              {products.map((item, idx) => (
                <div
                  key={item._id || idx}
                  className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center hover:bg-blue-100 transition group"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="aspect-square w-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-md"
                  />
                  <span className="text-sm font-medium mt-2 truncate w-full">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No products available</p>
          )}
        </div>
      </div>
    </div>
    */}

{/* v2 */}
    {/* <div className=" w-full">
  {/* Outer wrapper only visible on mobile */}
  {/* <div className="block md:hidden w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
    <div className="bg-blue-200 rounded-2xl aspect-square flex items-center justify-center p-4 sm:p-6 shadow-xl">
      <div className="bg-white rounded-xl w-full h-auto flex items-center justify-center p-4 shadow-inner">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 w-full">
            {products.map((item, idx) => (
              <div
                key={item._id || idx}
                className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center hover:bg-blue-100 transition group"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="aspect-square w-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-md"
                />
                <span className="text-sm font-medium mt-2 truncate w-full">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No products available</p>
        )}
      </div>
    </div>
  </div> */}

  {/* Inline grid for tablets & desktops */}
  {/* <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
    {products.map((item, idx) => (
      <div
        key={item._id || idx}
        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center group"
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="aspect-square w-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
        />
        <span  className="text-base font-semibold mt-2 text-center break-words whitespace-normal">
          {item.title}
        </span>
      </div>
    ))}
  </div> */}
{/* </div> */} 


{/* 
    <div className="w-full px-4 py-6">
      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map((item, idx) => (
            <div
              key={item._id || idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center p-4"
            >
            
              <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-md
             transition-transform duration-700 ease-in-out
             hover:scale-110"
                />

              </div>

              
              <h3 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-900 line-clamp-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg">No products available</p>
      )}
    </div> */}


{/* 
 <div className="w-full px-4 py-6">
      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map((item, idx) => (
            <div
              key={item._id || idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 hover:shadow-xl dark:hover:shadow-gray-600 transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center p-4"
            >
            
              <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-md transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

           
              <h3 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
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
    </div> */}




<div className="w-full px-4 py-6">
  {products.length > 0 ? (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {products.map((item, idx) => (
        <div
          key={item._id || idx}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 hover:shadow-xl dark:hover:shadow-gray-600 transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center"
        >
          {/* Product Image (fills container) */}
          <div className="w-full aspect-[4/5] overflow-hidden rounded-t-xl">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          {/* Product Title */}
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
 const [products, setProducts] = useState([]);
  // Fetch all products
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/showall")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12">
      {/* First Box */}
      <FeatureBox products={products} />

     
    </div>
  );
};

export default Products;
