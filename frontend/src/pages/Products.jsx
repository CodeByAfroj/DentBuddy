

import React, { useState, useEffect } from "react";

import axios from "axios";
import { BsArrowBarDown, BsArrowDown, BsArrowDownRightSquare, BsGraphDownArrow } from "react-icons/bs";


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


 {/* fianal */}

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
 const products = [
  {
    title: "H&E Pencils",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757089376/uploads/wmff1u6acg4urmonm5xf.jpg"
  },
  {
    title: "Knife",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608718/uploads/ioblvhqr0qhsufnfo4ze.jpg"
  },
  {
    title: "Enamel Tray",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757337273/uploads/b0dcs4bg2qixw6dvz2ai.jpg"
  },
  {
    title: "Lacron Carver",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757607730/uploads/uwalgghklsnpvbqaha4t.jpg"
  },
  {
    title: "Bond papers",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608295/uploads/khobrwisyfv7tuoy0sii.webp"
  },
  {
    title: "Wax",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608467/uploads/i68xdwkhcyixgvwjclgf.webp"
  },
  {
    title: "Straight and Curved Spatula",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608571/uploads/mheyzo6ljhkqxfqhwjdc.webp"
  },
  {
    title: "Spacer Wax",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608617/uploads/uv8tlbzkxjpy6gesf4yb.webp"
  },
  {
    title: "Cotton Gauze",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608667/uploads/aek77lclojoemizthrzw.webp"
  },
  {
    title: "Gloves",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608837/uploads/fhy8hl6jz26zejbdindy.jpg"
  },
  {
    title: "Rubber Bowls",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608876/uploads/arg4x9a56dqsfwutvafh.jpg"
  },
  {
    title: "Rubber Bowl with S&C Spatula",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608911/uploads/f6v0b4ylk80bgg5ziwgs.jpg"
  },
  {
    title: "Mackintosh Sheet",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757608987/uploads/dxd5jdzpejx1rfrnjzyd.jpg"
  },
  {
    title: "Modeling Wax",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757609041/uploads/qbzsnejpjkkahhd1ndcs.jpg"
  },
  {
    title: "Wax Knife",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757609087/uploads/kxawle2ldq9vw8mzgo57.jpg"
  },
  {
    title: "Hot Plate",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757609180/uploads/qcefdbrkhlnmjbbqgvlb.jpg"
  },
  {
    title: "Bond Papers",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757609222/uploads/xhx58zojerth90tjpkii.jpg"
  },
  {
    title: "Carver",
    imageUrl: "https://res.cloudinary.com/dlsobs4zm/image/upload/v1757609349/uploads/ompyoriaxxyzv2emlxew.jpg"
  }
];

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
