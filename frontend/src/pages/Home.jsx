// import React from "react";
// import Loader from "../components/Loader";
// import CardComponent from "../components/CardComponent";


// import TextType from "../components/TextType";
// import { motion } from "framer-motion";

// const Home = () => {


//   const products = [
//     { id: 1, name: "Smart Watch", price: "$199", img: "https://picsum.photos/300/300?random=1" },
//     { id: 2, name: "Wireless Earbuds", price: "$99", img: "https://picsum.photos/300/300?random=2" },
//     { id: 3, name: "Sneakers", price: "$149", img: "https://picsum.photos/300/300?random=3" },
//     { id: 4, name: "Backpack", price: "$79", img: "https://picsum.photos/300/300?random=4" },
//   ];





//   return (
//     <>
//       {/* Optional Components */}
//       {/* <Loader /> */}
//       {/* <CardComponent /> */}
//       {/* <FooterComponent /> */}


//       <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
//         {/* Navbar */}


//         {/* Hero Section */}
//         <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-50">
//           <motion.h1
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//             className="text-5xl p-2 font-extrabold "
//           >
//             🦷 Your One-Stop Destination for BDS Dental Kits
//           </motion.h1>
//           <p className="mt-4 text-lg text-gray-600 max-w-xl">

//           <TextType 
//           className="text-3xl font-bold "
//               text={["One Kit."," Every Instrument."," Zero Hassle."]}
//               typingSpeed={75}
//               pauseDuration={1500}
//               showCursor={true}
//               cursorCharacter="|"
//             />
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-8 px-8 py-3 rounded-full bg-gray-800 text-white text-lg font-semibold shadow hover:shadow-lg transition-all duration-300"
//           >
//             Start Shopping
//           </motion.button>
//         </section>

//         {/* Product Section */}
//         <section className="px-10 py-16">
//           <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
//             Featured Products
//           </h2>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {products.map((product) => (
//               <motion.div
//                 key={product.id}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 cursor-pointer group relative overflow-hidden transition-all duration-300"
//               >
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="rounded-md w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
//                   <p className="text-gray-500 font-medium">{product.price}</p>
//                 </div>
//                 {/* Subtle overlay effect */}
//                 <div className="absolute inset-0 bg-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="text-center py-8 border-t border-gray-200 text-gray-500 bg-white">
//           © {new Date().getFullYear()} ShopSphere. All rights reserved.
//         </footer>


//       </div>
//     </>
//   );
// };

// export default Home;




// import React, { useState, useEffect } from "react";
// import Loader from "../components/Loader";
// import CardComponent from "../components/CardComponent";
// import TextType from "../components/TextType";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
// import { AiOutlineEdit } from "react-icons/ai";
// import SearchBar from "./SearchBar";

// const Home = () => {
//   // Blog state
//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   // Fetch all blogs
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/showall")
//       .then((response) => {
//         setProducts(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   // Search functionality with debounce
//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (query.length > 1) {
//         axios
//           .get(`http://localhost:3000/api/search?q=${encodeURIComponent(query)}`)
//           .then((res) => {
//             setResults(res.data);
//           })
//           .catch((err) => console.error(err));
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [query]);

//   const blogsToDisplay = results.length > 0 ? results : products;

//   // Product section

//   return (
//     <>
//       {/* Optional Components */}
//       {/* <Loader /> */}
//       {/* <CardComponent /> */}

//       <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
//         {/* Hero Section */}
//         <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-50">
//           <motion.h1
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//             className="text-5xl p-2 font-extrabold"
//           >
//             🦷 Your One-Stop Destination for BDS Dental Kits
//           </motion.h1>
//           <p className="mt-4 text-lg text-gray-600 max-w-xl">
//             <TextType
//               className="text-3xl font-bold"
//               text={["One Kit.", " Every Instrument.", " Zero Hassle."]}
//               typingSpeed={75}
//               pauseDuration={1500}
//               showCursor={true}
//               cursorCharacter="|"
//             />
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-8 px-8 py-3 rounded-full bg-gray-800 text-white text-lg font-semibold shadow hover:shadow-lg transition-all duration-300"
//           >
//             Start Shopping
//           </motion.button>
//         </section>

//         {/* Product Section */}
//         <section className="px-10 py-16">
//           <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
//             Featured Products
//           </h2>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {products.map((product) => (
//               <motion.div
//                 key={product.id}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 cursor-pointer group relative overflow-hidden transition-all duration-300"
//               >
//                 <img
//                    src={product.imageUrl} // ✅ correct field from backend
//                    alt={product.title} 
//                   className="rounded-md w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {product.title}
//                   </h3>
//                   <p className="text-gray-500 font-medium">₹{product.price}</p>
//                 </div>
//                 <div className="absolute inset-0 bg-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Blog Section */}
//         <section className="px-10 py-16 bg-white">
//           <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
//             Latest Blogs
//           </h2>

//           {/* Search Bar */}
//           <div className="flex justify-center mb-8">
//             <SearchBar query={query} setQuery={setQuery} />
//           </div>

//           {/* Blog Cards */}
//           <div className="flex flex-wrap gap-4 justify-center relative">
//             <Link to="/create">
//               <MdOutlineAddBox className="text-5xl absolute -top-14 right-10" />
//             </Link>
//             {blogsToDisplay.map((data) => (
//               <div
//                 key={data._id}
//                 className="text-start p-5 w-80 h-50 justify-between m-2 outline-2 outline-purple-400 rounded-xl flex items-center shadow-sm bg-gray-50"
//               >
//                 <div>
//                   <h2 className="text-xl">Title: {data.title}</h2>
//                   <p>{data.price}</p>
//                 </div>
//                 <div className="flex flex-col gap-4">
//                   <Link to={`/show/${data._id}`}>
//                     <BsInfoCircle className="text-3xl" />
//                   </Link>
//                   <Link to={`/edit/${data._id}`}>
//                     <AiOutlineEdit className="text-3xl" />
//                   </Link>
//                   <Link to={`/delete/${data._id}`}>
//                     <MdOutlineDelete className="text-3xl" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="text-center py-8 border-t border-gray-200 text-gray-500 bg-white">
//           © {new Date().getFullYear()} ShopSphere. All rights reserved.
//         </footer>
//       </div>
//     </>
//   );
// };

// export default Home;





/////////

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
// import { AiOutlineEdit } from "react-icons/ai";
// import SearchBar from "./SearchBar";
// import TextType from "../components/TextType";
// import About from "./About";
// import Products from "./Products";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   // Fetch all products
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/showall")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // Search with debounce
//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (query.length > 1) {
//         axios
//           .get(`http://localhost:3000/api/search?q=${encodeURIComponent(query)}`)
//           .then((res) => setResults(res.data))
//           .catch((err) => console.error(err));
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [query]);

//   const blogsToDisplay = results.length > 0 ? results : products;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans">
    
      
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-r from-blue-50 to-teal-50">
//         <motion.h1
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className=" "
//         >
//           <h1 className="text-6xl font-extrabold leading-tight text-gray-900 text-wrap" >🦷 Premium Dental Kits for Professionals</h1>

//         </motion.h1>
//         <p className="mt-6 text-lg text-gray-600 max-w-2xl">
//           <TextType
//             className="text-2xl font-semibold text-blue-700"
//             text={["One Kit.", " Every Instrument.", " Zero Hassle."]}
//             typingSpeed={70}
//             pauseDuration={1500}
//             showCursor={true}
//             cursorCharacter="|"
//           />
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="mt-10 px-10 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
//         >
//           Start Shopping
//         </motion.button>
//       </section>

//       {/* Product Section */}
//       <section className="px-10 py-20">
//         <h2 className="text-4xl font-bold mb-14 text-center text-gray-900">
//           Featured Products
//         </h2>
//         <Products products={products} />
         
//         {/* <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
         
//           {products.map((product) => (
//             <motion.div
//               key={product._id}
//               whileHover={{ scale:1 }}
//               className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 cursor-pointer group relative overflow-hidden hover:shadow-xl transition-all duration-300"
//             >
             
//               <div className="overflow-hidden rounded-lg">
//                 <img
//                   src={product.imageUrl}
//                   alt={product.title}
//                   className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               <div className="mt-5">
//                 <h3 className="text-xl font-bold text-gray-900">
//                   {product.title}
//                 </h3>
//                 <p className="text-blue-600 font-semibold text-lg mt-2">
//                   ₹ {Number(product.price).toLocaleString("en-IN")}
//                 </p>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </motion.div>
//           ))}
//         </div> */}
//       </section>

//       {/* Blog Section */}
//       <section className="px-10 py-20 bg-white border-t border-gray-200">
//         <h2 className="text-4xl font-bold mb-14 text-center text-gray-900">
//           Latest Blogs
//         </h2>

//         {/* Search Bar */}
//         <div className="flex justify-center mb-10">
//           <SearchBar query={query} setQuery={setQuery} />
//         </div>

//         {/* Blog Cards */}
//         <div className="flex flex-wrap gap-6 justify-center relative">
//           <Link to="/create">
//             <MdOutlineAddBox className="text-6xl text-blue-600 absolute -top-16 right-12 hover:text-blue-800 transition-colors duration-300 cursor-pointer" />
//           </Link>
//           {blogsToDisplay.map((data) => (
//             <div
//               key={data._id}
//               className="flex justify-between items-start p-6 w-96 rounded-2xl shadow-sm border border-gray-100 bg-gray-50 hover:shadow-md transition-all duration-300"
//             >
//               <div>
//                 <h3 className="text-lg font-bold text-gray-800">
//                   {data.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 mt-2">
//                   ₹ {Number(data.price).toLocaleString("en-IN")}
//                 </p>
//               </div>
//               <div className="flex flex-col gap-4 text-gray-600">
//                 <Link to={`/show/${data._id}`}>
//                   <BsInfoCircle className="text-2xl hover:text-blue-600" />
//                 </Link>
//                 <Link to={`/edit/${data._id}`}>
//                   <AiOutlineEdit className="text-2xl hover:text-green-600" />
//                 </Link>
//                 <Link to={`/delete/${data._id}`}>
//                   <MdOutlineDelete className="text-2xl hover:text-red-600" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-10 border-t border-gray-200 bg-gray-50 text-gray-600">
//         <p className="text-sm">
//           © {new Date().getFullYear()} <span className="font-bold">DentBuddy</span>.
//           All rights reserved. Made with ❤️ for professionals.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import SearchBar from "./SearchBar";
import TextType from "../components/TextType";
import Products from "./Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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

  // Search with debounce
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 1) {
        axios
          .get(`http://localhost:3000/api/search?q=${encodeURIComponent(query)}`)
          .then((res) => setResults(res.data))
          .catch((err) => console.error(err));
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const blogsToDisplay = results.length > 0 ? results : products;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-r from-blue-50 to-teal-50">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold leading-tight text-gray-900 text-wrap">
            🦷 Premium Dental Kits for Professionals
          </h1>
        </motion.h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          <TextType
            className="text-2xl font-semibold text-blue-700"
            text={["One Kit.", " Every Instrument.", " Zero Hassle."]}
            typingSpeed={70}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-10 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Start Shopping
        </motion.button>
      </section>

      {/* Product Section */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold mb-14 text-center text-gray-900">
          Featured Products
        </h2>
        <Products products={products.slice(0, 8)} />
      </section>

      {/* Blog Section */}
      <section className="px-10 py-20 bg-white border-t border-gray-200">
        <h2 className="text-4xl font-bold mb-14 text-center text-gray-900">
          Latest Blogs
        </h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <SearchBar query={query} setQuery={setQuery} />
        </div>

        {/* Blog Cards */}
        <div className="flex flex-wrap gap-6 justify-center relative">
          <Link to="/create">
            <MdOutlineAddBox className="text-6xl text-blue-600 absolute -top-16 right-12 hover:text-blue-800 transition-colors duration-300 cursor-pointer" />
          </Link>
          {blogsToDisplay.map((data) => (
            <div
              key={data._id}
              className="flex justify-between items-start p-6 w-96 rounded-2xl shadow-sm border border-gray-100 bg-gray-50 hover:shadow-md transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  ₹ {Number(data.price).toLocaleString("en-IN")}
                </p>
              </div>
              <div className="flex flex-col gap-4 text-gray-600">
                <Link to={`/show/${data._id}`}>
                  <BsInfoCircle className="text-2xl hover:text-blue-600" />
                </Link>
                <Link to={`/edit/${data._id}`}>
                  <AiOutlineEdit className="text-2xl hover:text-green-600" />
                </Link>
                <Link to={`/delete/${data._id}`}>
                  <MdOutlineDelete className="text-2xl hover:text-red-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;




