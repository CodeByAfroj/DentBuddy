

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tooth from "../assets/toothwhite.png";
import InstaImage from "../assets/DentBuddyInsta.jpg"
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
          className="grid w-full gap-8 sm:flex sm:justify-between md:grid-cols-3"
          data-aos="fade-up"
        >
          {/* Brand + Description */}
          <div>
            <Link onClick={scrollToTop} to="/" className="-ml-5 flex items-center h-10 p-1">
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



           <div className="min-md:flex gap-20">



             <p className="mt-5 text-blue-200 dark:text-gray-400 max-w-xs leading-relaxed">
              Empowering BDS students with comprehensive resources and support
              for academic excellence.
            </p>

       {/* Instagram Section */}
<div className="mt-6 w-full">
  <p className="text-blue-200 dark:text-gray-400 mb-2 text-sm sm:text-base">
    Follow us on Instagram
  </p>
  <a
    href="https://www.instagram.com/dentbuddyy"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full max-w-full"
  >
    <img
      src={InstaImage}
      alt="DentBuddy Instagram"
      className="w-full max-w-[100px]   h-auto 
                 rounded-lg shadow-lg object-cover
                 hover:scale-105 hover:shadow-xl transition-transform duration-300"
    />
  </a>
</div>

           </div>

            <div className="relative flex space-x-4 mt-4">

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

                { Icon: Phone, link: "tel:+919921928678", external: true },
                { Icon: Info, link: "/about", external: false },
                { Icon: BsInstagram, link: "https://www.instagram.com/dentbuddyy", external: true }

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
              <Link onClick={scrollToTop} to="/" className="text-blue-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link onClick={scrollToTop} to="/about" className="text-blue-200 hover:text-white transition-colors">
                About
              </Link>
              <Link onClick={scrollToTop} to="/contact" className="text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
              <Link onClick={scrollToTop} to="/products" className="text-blue-200 hover:text-white transition-colors">
                Practical Kits
              </Link>
            </FooterLinkGroup>
          </div>

          {/* Resources */}
          <div data-aos="fade-up" data-aos-delay="200">
            <FooterTitle title="Resources" className="text-white" />
            <FooterLinkGroup col>
              <Link onClick={scrollToTop} to="/materials" className="text-blue-200 hover:text-white transition-colors">
                Study Materials
              </Link>
              <Link onClick={scrollToTop} to="/products" className="text-blue-200 hover:text-white transition-colors">
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

              { Icon: Phone, link: "tel:+919921928678", external: true },
              { Icon: Info, link: "/about", external: false },
              { Icon: BsInstagram, link: "https://www.instagram.com/dentbuddyy", external: true },

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




