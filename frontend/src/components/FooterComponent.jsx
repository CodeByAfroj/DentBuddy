

// "use client";
// import tooth from"../assets/tooth.png"

// import {
//   Footer,
//   FooterBrand,
//   FooterCopyright,
//   FooterDivider,
//   FooterIcon,
//   FooterLink,
//   FooterLinkGroup,
//   FooterTitle,
// } from "flowbite-react";
// import {
//   BsFacebook,
//   BsGithub,
//   BsInstagram,
//   BsTwitter,
//   BsLinkedin,
// } from "react-icons/bs";

// function FooterComponent() {
//   return (
//     <Footer container className="bg-blue-900 text-white rounded-none pt-16 pb-8">
//       <div className="w-full">
//         {/* Top Section */}
//         <div className="grid w-full gap-8 sm:flex sm:justify-between md:grid-cols-4">
//           {/* Brand + Description */}
//           <div>
            
//             <FooterBrand href="/" className="-ml-5 flex items-center h-10 p-1 ">
//   <div className="flex items-center justify-center  h-12 w-10 rounded-md bg-white shadow-md ">
//    <div className="bg-white  rounded-xl ">
//           <img
//       src={ tooth}
//       alt="DentBuddy Logo"
//       className=" h-12 w-9 rounded-md bg-white shadow-md  "
//     />
//    </div>
//   </div>
//   <span className="text-2xl ml-2  font-bold tracking-wide ">
//     Dent<span className="text-blue-500">Buddy</span>
//   </span>
// </FooterBrand>

          
//             <p className="mt-5 text-blue-200">
//               Empowering BDS students with comprehensive resources and support
//               for academic excellence.
//             </p>
//           </div>
//            <div className="flex space-x-4">
//                 <div className="bg-blue-800 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
//                   <div className="w-5 h-5 bg-white rounded-full"></div>
//                 </div>
//                 <div className="bg-blue-800 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
//                   <div className="w-5 h-5 bg-white rounded-full"></div>
//                 </div>
//                 <div className="bg-blue-800 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
//                   <div className="w-5 h-5 bg-white rounded-full"></div>
//                 </div>
//               </div>

//           {/* Quick Links */}
//           <div>
//             <FooterTitle title="Quick Links" className="text-white" />
//             <FooterLinkGroup col>
//               <FooterLink href="/" className="text-blue-200 hover:text-white">
//                 Home
//               </FooterLink>
//               <FooterLink href="/about" className="text-blue-200 hover:text-white">
//                 About
//               </FooterLink>
//               <FooterLink href="/contact" className="text-blue-200 hover:text-white">
//                 Contact
//               </FooterLink>
//               <FooterLink href="#resources" className="text-blue-200 hover:text-white">
//                  Pracical Kits
//               </FooterLink>
            
//             </FooterLinkGroup>
//           </div>

//           {/* Resources */}
//           <div>
//             <FooterTitle title="Resources" className="text-white" />
//             <FooterLinkGroup col>
//               <FooterLink href="#" className="text-blue-200 hover:text-white">
//                 Study Materials
//               </FooterLink>
//               <FooterLink href="#" className="text-blue-200 hover:text-white">
//                 Practical Kits
//               </FooterLink>
            
//             </FooterLinkGroup>
//           </div>

//           {/* Newsletter */}
        
            
          
//         </div>

//         {/* Divider */}
//         <FooterDivider className="border-blue-800 my-8" />

//         {/* Bottom Section */}
//         <div className="w-full sm:flex sm:items-center sm:justify-between text-blue-300">
//           <FooterCopyright
//             href="/"
//             by="DentBuddy™"
//             year={new Date().getFullYear()}
//             className="text-blue-300"
//           />
//           <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
//             <FooterIcon
//               href="#"
//               icon={BsFacebook}
//               className="text-white hover:text-blue-400"
//             />
//             <FooterIcon
//               href="#"
//               icon={BsInstagram}
//               className="text-white hover:text-blue-400"
//             />
//             <FooterIcon
//               href="#"
//               icon={BsTwitter}
//               className="text-white hover:text-blue-400"
//             />
//             <FooterIcon
//               href="#"
//               icon={BsGithub}
//               className="text-white hover:text-blue-400"
//             />
//             <FooterIcon
//               href="#"
//               icon={BsLinkedin}
//               className="text-white hover:text-blue-400"
//             />
//           </div>
//         </div>
//       </div>
//     </Footer>
//   );
// }

// export default FooterComponent;




// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import tooth from "../assets/toothwhite.png";

// import {
//   Footer,
//   FooterBrand,
//   FooterCopyright,
//   FooterDivider,
//   FooterIcon,
//   FooterLink,
//   FooterLinkGroup,
//   FooterTitle,
// } from "flowbite-react";

// import {
//   BsFacebook,
//   BsGithub,
//   BsInstagram,
//   BsTwitter,
//   BsLinkedin,
// } from "react-icons/bs";

// function FooterComponent() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true, offset: 80, easing: "ease-in-out" });
//   }, []);

//   return (
//     <Footer
//       container
//       className="bg-blue-900 dark:bg-gray-900 text-white dark:text-gray-200 rounded-none pt-16 pb-8 transition-colors duration-300"
//     >
//       <div className="w-full">
//         {/* Top Section */}
//         <div
//           className="grid w-full gap-8 sm:flex sm:justify-between md:grid-cols-4"
//           data-aos="fade-up"
//         >
//           {/* Brand + Description */}
//           <div>
//             <FooterBrand href="/" className="-ml-5 flex items-center h-10 p-1">
//               <div className="flex items-center justify-center h-12 w-10 rounded-md shadow-mdbg-gray-800 transition-colors">
//                 <img
//                   src={tooth}
//                   alt="DentBuddy Logo"
//                   className="h-12 w-9 rounded-md"
//                 />
//               </div>
//               <span className="text-2xl ml-2 font-bold tracking-wide text-white dark:text-gray-100">
//                 Dent<span className="text-blue-500">Buddy</span>
//               </span>
//             </FooterBrand>

//             <p className="mt-5 text-blue-200 dark:text-gray-400 max-w-xs leading-relaxed">
//               Empowering BDS students with comprehensive resources and support
//               for academic excellence.
//             </p>

//             {/* Social Icons Row */}
//             <div className="flex space-x-4 mt-4">
//               <div className="bg-blue-800 dark:bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-blue-700 dark:hover:bg-gray-600 transition-colors">
//                 <BsFacebook className="text-white w-5 h-5" />
//               </div>
//               <div className="bg-blue-800 dark:bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-blue-700 dark:hover:bg-gray-600 transition-colors">
//                 <BsInstagram className="text-white w-5 h-5" />
//               </div>
//               <div className="bg-blue-800 dark:bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-blue-700 dark:hover:bg-gray-600 transition-colors">
//                 <BsTwitter className="text-white w-5 h-5" />
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div data-aos="fade-up" data-aos-delay="100">
//             <FooterTitle title="Quick Links" className="text-white" />
//             <FooterLinkGroup col>
//               <FooterLink href="/" className="text-blue-200 hover:text-white">
//                 Home
//               </FooterLink>
//               <FooterLink
//                 href="/about"
//                 className="text-blue-200 hover:text-white"
//               >
//                 About
//               </FooterLink>
//               <FooterLink
//                 href="/contact"
//                 className="text-blue-200 hover:text-white"
//               >
//                 Contact
//               </FooterLink>
//               <FooterLink
//                 href="#resources"
//                 className="text-blue-200 hover:text-white"
//               >
//                 Practical Kits
//               </FooterLink>
//             </FooterLinkGroup>
//           </div>

//           {/* Resources */}
//           <div data-aos="fade-up" data-aos-delay="200">
//             <FooterTitle title="Resources" className="text-white" />
//             <FooterLinkGroup col>
//               <FooterLink href="#" className="text-blue-200 hover:text-white">
//                 Study Materials
//               </FooterLink>
//               <FooterLink href="#" className="text-blue-200 hover:text-white">
//                 Practical Kits
//               </FooterLink>
//             </FooterLinkGroup>
//           </div>
//         </div>

//         {/* Divider */}
//         <FooterDivider className="border-blue-800 dark:border-gray-700 my-8" />

//         {/* Bottom Section */}
//         <div
//           className="w-full sm:flex sm:items-center sm:justify-between text-blue-300 dark:text-gray-400"
         
//         >
//           <FooterCopyright
//             href="/"
//             by="DentBuddy™"
//             year={new Date().getFullYear()}
//             className="text-blue-300 dark:text-gray-400"
//           />
//           <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
//             <FooterIcon
//               href="#"
//               icon={BsFacebook}
//               className="text-white hover:text-blue-400 dark:hover:text-blue-500"
//             />
//             <FooterIcon
//               href="#"
//               icon={BsInstagram}
//               className="text-white hover:text-pink-400 dark:hover:text-pink-500"
//             />
//             <FooterIcon
//               href="#"
//               icon={BsTwitter}
//               className="text-white hover:text-blue-400 dark:hover:text-blue-500"
//             />
//             <FooterIcon
//               href="#"
//               icon={BsGithub}
//               className="text-white hover:text-gray-300 dark:hover:text-gray-200"
//             />
//             <FooterIcon
//               href="#"
//               icon={BsLinkedin}
//               className="text-white hover:text-blue-400 dark:hover:text-blue-500"
//             />
//           </div>
//         </div>
//       </div>
//     </Footer>
//   );
// }

// export default FooterComponent;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tooth from "../assets/toothwhite.png";
import { Link } from "react-router-dom";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

import { Mail, Phone, MapPin, Info, FileText } from "lucide-react";

import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

function FooterComponent() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80, easing: "ease-in-out" });
  }, []);


   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <Footer
      container
      className="bg-blue-900 dark:bg-gray-900 text-white dark:text-gray-200 rounded-none pt-16 pb-8 transition-colors duration-300 px-9"
    >

   
      <div className="w-full">
        {/* Top Section */}
        <div
          className="grid w-full gap-8 sm:flex sm:justify-between md:grid-cols-4"
          data-aos="fade-up"
        >
          {/* Brand + Description */}
          <div>
       <Link  onClick={scrollToTop} to="/" className="-ml-5 flex items-center h-10 p-1">
  <div className="flex items-center justify-center h-12 w-10 rounded-md shadow-md transition-colors">
    <img
      src={tooth}
      alt="DentBuddy Logo"
      className="h-12 w-8 rounded-md drop-shadow-lg"
    />
  </div>
  <span className="text-2xl ml-2 font-bold tracking-wide text-white dark:text-gray-100">
    Dent<span className="text-blue-500">Buddy</span>
  </span>
</Link>

            

            <p className="mt-5 text-blue-200 dark:text-gray-400 max-w-xs leading-relaxed">
              Empowering BDS students with comprehensive resources and support
              for academic excellence.
            </p>

            {/* Social Icons Row */}


<div className="flex space-x-4 mt-4">
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mulaniafroj26@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-800 dark:bg-gray-700 p-2 rounded-full cursor-pointer 
                 hover:scale-110 hover:bg-blue-700 dark:hover:bg-gray-600 
                 transition-all duration-300 ease-in-out"
>
  <Mail className="text-white w-5 h-5" />
</a>

  {[ 

    { Icon: Phone, link: "tel:+9199212928678" ,external: true },
    { Icon: Info, link: "/about",external: false },
 
  ].map(({ Icon, link }, idx) => (
    <a
      key={idx}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-800 dark:bg-gray-700 p-2 rounded-full cursor-pointer 
                 hover:scale-110 hover:bg-blue-700 dark:hover:bg-gray-600 
                 transition-all duration-300 ease-in-out"
    >
      <Icon className="text-white w-5 h-5" />
    </a>
  ))}
</div>

          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <FooterTitle title="Quick Links" className="text-white" />
            <FooterLinkGroup col>
              <Link onClick={scrollToTop}  to="/" className="text-blue-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link onClick={scrollToTop} to="/about" className="text-blue-200 hover:text-white transition-colors">
                About
              </Link>
              <Link onClick={scrollToTop}  to="/contact" className="text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
              <Link onClick={scrollToTop}  to="/products" className="text-blue-200 hover:text-white transition-colors">
                Practical Kits
              </Link>
            </FooterLinkGroup>
          </div>

          {/* Resources */}
          <div data-aos="fade-up" data-aos-delay="200">
            <FooterTitle title="Resources" className="text-white" />
            <FooterLinkGroup col>
              <Link onClick={scrollToTop}   to="/materials" className="text-blue-200 hover:text-white transition-colors">
                Study Materials
              </Link>
              <Link onClick={scrollToTop}  to="/products" className="text-blue-200 hover:text-white transition-colors">
                Practical Kits
              </Link>
            </FooterLinkGroup>
          </div>
        </div>

        {/* Divider */}
        <FooterDivider className="border-blue-800 dark:border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between text-blue-300 dark:text-gray-400">
          <FooterCopyright
            href="/"
            by="DentBuddy™"
            year={new Date().getFullYear()}
            className="text-blue-300 dark:text-gray-400"
          />

          <div className="flex space-x-4 mt-4">
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dentbuddy01@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-800 dark:bg-gray-700 p-2 rounded-full cursor-pointer 
                 hover:scale-110 hover:bg-blue-700 dark:hover:bg-gray-600 
                 transition-all duration-300 ease-in-out"
>
  <Mail className="text-white w-5 h-5" />
</a>

  {[ 

    { Icon: Phone, link: "tel:+9199212928678" ,external: true },
    { Icon: Info, link: "/about",external: false },
 
  ].map(({ Icon, link }, idx) => (
    <a
      key={idx}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-800 dark:bg-gray-700 p-2 rounded-full cursor-pointer 
                 hover:scale-110 hover:bg-blue-700 dark:hover:bg-gray-600 
                 transition-all duration-300 ease-in-out"
    >
      <Icon className="text-white w-5 h-5" />
    </a>
  ))}
</div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;




