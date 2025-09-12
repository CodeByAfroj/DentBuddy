
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BookOpen,
  GraduationCap,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const AiGen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80, easing: "ease-in-out" });
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Comprehensive Study Materials",
      description:
        "Access all BDS first-year textbooks, lecture notes, and reference materials in one place.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Practical Kits",
      description:
        "Complete dental instrument kits tailored for first-year practical sessions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      
      {/* Hero Section */}
      <section id="home" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            
            {/* Left Content */}
            <div
              className="md:w-1/2 text-center md:text-left"
              data-aos="fade-right"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-blue-400 leading-snug mb-6">
                Your Complete{" "}
                <span className="text-blue-600 dark:text-blue-300">
                  BDS First Year
                </span>{" "}
                Companion
              </h1>
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
                Everything a BDS first-year student needs – study materials, practical kits, and expert guidance – all in one place.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-center  gap-4">
                <Link
                  to="/products"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  data-aos="zoom-in"
                >
                  Explore Our Kits{" "}
                  <ChevronRight className="ml-2 h-5 w-5 inline" />
                </Link>
               
              </div>
            </div>

            {/* Right Content */}
            <div
              className="md:w-1/2 flex justify-center"
              data-aos="fade-left"
            >
              <div className="relative w-full max-w-sm md:max-w-md">
                <div className="bg-blue-100 dark:bg-gray-700 rounded-2xl aspect-square flex items-center justify-center p-6 shadow-xl dark:shadow-gray-800">
                  <div className="bg-white dark:bg-gray-800 rounded-xl w-full h-full flex items-center justify-center p-4 shadow-inner dark:shadow-gray-900">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-blue-50 dark:bg-gray-600 rounded-lg p-4 flex flex-col items-center">
                        <div className="bg-gray-200 dark:bg-gray-500 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
                        <span className="text-sm font-medium text-center dark:text-gray-200">
                          Study Materials
                        </span>
                      </div>
                      <div className="bg-blue-50 dark:bg-gray-600 rounded-lg p-4 flex flex-col items-center">
                        <div className="bg-gray-200 dark:bg-gray-500 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
                        <span className="text-sm font-medium text-center dark:text-gray-200">
                          Practical Kits
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Info Box */}
                <div
                  className="absolute -bottom-8 right-2 flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900 p-4 w-44 sm:w-52"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="flex items-center">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg mr-3">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        All-in-One Solution
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        For BDS First Year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12 md:mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-400 mb-4">
              Why Choose DentBuddy?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              “We provide study material and practical kits that every BDS first-year student needs on a single platform.”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-gray-700 transition-all duration-300 transform hover:-translate-y-2 text-center sm:text-left"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="mb-4 flex justify-center sm:justify-start">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiGen;






