// import React, { useState } from 'react';

// import { 
//   BookOpen, 
//   GraduationCap, 
//   Users, 
//   Award, 
//   ChevronRight, 
//   Menu, 
//   X,
//   Download,
//   Star,
//   CheckCircle,
//   Lightbulb,
//   Calendar,
//   Mail,
//   Phone,
//   MapPin
// } from 'lucide-react';

// import { Link } from 'react-router-dom';

// const AiGen = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const features = [
//     {
//       icon: <BookOpen className="w-8 h-8 text-blue-600" />,
//       title: "Comprehensive Study Materials",
//       description: "Access to all BDS first-year textbooks, lecture notes, and reference materials in one place."
//     },
//     {
//       icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
//       title: "Practical Kits",
//       description: "Complete dental instrument kits tailored for first-year practical sessions."
//     },
  
//   ];

//   const testimonials = [
  
//   ];



//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
//       {/* Header */}
//       {/* Hero Section */}
//       <section id="home" className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-12 md:mb-0">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
//                 Your Complete <span className="text-blue-600">BDS First Year</span> Companion
//               </h1>
//               <p className="text-lg text-gray-800 mb-8 max-w-lg">
//                 Everything a BDS first-year student needs - study materials, practical kits, and expert guidance - all in one place.
//               </p>
//               <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                   <Link  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center" to="/products"> Explore Our Kits <ChevronRight className="ml-2 h-5 w-5" /> </Link>
//                 <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
//                   View Resources
//                 </button>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-center">
//               <div className="relative">
//                 <div className="bg-blue-100 rounded-2xl w-80 h-80 md:w-96 md:h-96 flex items-center justify-center p-6 shadow-xl">
//                   <div className="bg-white rounded-xl w-full h-full flex items-center justify-center p-4 shadow-inner">
//                     <div className="grid grid-cols-2 gap-4 w-full">
//                       <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
//                         <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
//                         <span className="text-sm font-medium text-center">Study Materials</span>
//                       </div>
//                       <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
//                         <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
//                         <span className="text-sm font-medium text-center">Practical Kits</span>
//                       </div>
      
                     
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-8  right-1 flex  items-center  bg-white rounded-xl shadow-lg p-4 w-48">
//                   <div className="flex   items-center">
//                     <div className="bg-green-100 p-2 rounded-lg mr-3">
//                       <CheckCircle className="h-6 w-6 text-green-600" />
//                     </div>
//                     <div className=''>
//                       <p className="font-bold text-gray-800">All-in-One Solution</p>
//                       <p className="text-sm text-gray-600">For BDS First Year</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose DentBuddy?</h2>
//             <p className="text-gray-700 max-w-2xl mx-auto">
//               “We provide study material and practical kits that every BDS first-year student needs a single platform to get everything in one place.”
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div 
//                 key={index} 
//                 className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}
    

//       {/* Testimonials */}
//       <section id="testimonials" className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Students Say</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Hear from BDS students who have benefited from DentBuddy's resources and support.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div 
//                 key={index} 
//                 className="bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center text-blue-800 font-bold text-xl mr-4">
//                     {testimonial.avatar}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
//                     <p className="text-blue-600">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic">"{testimonial.content}"</p>
//                 <div className="flex mt-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Excel in Your First Year?</h2>
//           <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
//             Join thousands of BDS students who are already using DentBuddy to simplify their studies and practicals.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
//               Get Started Today
//             </button>
//             <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
//               Schedule a Demo
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Have questions about our resources or kits? Our team is here to help.
//             </p>
//           </div>
          
//           <div className="flex flex-col md:flex-row gap-12">
//             <div className="md:w-1/2">
//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
//                   <textarea 
//                     id="message" 
//                     rows={4}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="How can we help you?"
//                   ></textarea>
//                 </div>
//                 <button 
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
            
//             <div className="md:w-1/2">
//               <div className="bg-blue-50 rounded-2xl p-8 h-full">
//                 <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                       <Mail className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-blue-900 mb-1">Email Us</h4>
//                       <p className="text-gray-600">support@dentbuddy.com</p>
//                       <p className="text-gray-600">info@dentbuddy.com</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                       <Phone className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-blue-900 mb-1">Call Us</h4>
//                       <p className="text-gray-600">+91 98765 43210</p>
//                       <p className="text-gray-600">+91 98765 43211</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                       <MapPin className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-blue-900 mb-1">Visit Us</h4>
//                       <p className="text-gray-600">Dental Education Complex</p>
//                       <p className="text-gray-600">123 Medical Campus</p>
//                       <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                       <Calendar className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-blue-900 mb-1">Office Hours</h4>
//                       <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
//                       <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

 
//     </div>
//   );
// };

// export default AiGen;



// import React, { useState } from "react";
// import {
//   BookOpen,
//   GraduationCap,
//   Users,
//   Award,
//   ChevronRight,
//   Menu,
//   X,
//   Download,
//   Star,
//   CheckCircle,
//   Lightbulb,
//   Calendar,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// import { Link } from "react-router-dom";
// import Products from "./Products";

// const AiGen = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const features = [
//     {
//       icon: <BookOpen className="w-8 h-8 text-blue-600" />,
//       title: "Comprehensive Study Materials",
//       description:
//         "Access to all BDS first-year textbooks, lecture notes, and reference materials in one place.",
//     },
//     {
//       icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
//       title: "Practical Kits",
//       description:
//         "Complete dental instrument kits tailored for first-year practical sessions.",
//     },
//   ];

//   const testimonials = [];

//   return (
//     // <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
//     //   {/* Hero Section */}
//     //   <section id="home" className="py-12 md:py-20">
//     //     <div className="container mx-auto px-4">
//     //       <div className="flex flex-col md:flex-row items-center gap-10">
//     //         {/* Left Content */}
//     //         <div className="md:w-1/2 text-center md:text-left">
//     //           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-snug mb-6">
//     //             Your Complete{" "}
//     //             <span className="text-blue-600">BDS First Year</span> Companion
//     //           </h1>
//     //           <p className="text-base md:text-lg text-gray-800 mb-8 max-w-lg mx-auto md:mx-0">
//     //             Everything a BDS first-year student needs - study materials,
//     //             practical kits, and expert guidance - all in one place.
//     //           </p>
//     //           <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
//     //             <Link
//     //               className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//     //               to="/products"
//     //             >
//     //               Explore Our Kits{" "}
//     //               <ChevronRight className="ml-2 h-5 w-5 inline" />
//     //             </Link>
//     //             <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-lg transition-colors">
//     //               View Resources
//     //             </button>
//     //           </div>
//     //         </div>

//     //         {/* Right Content (Card Display) */}
//     //         <div className="md:w-1/2 flex justify-center">
//     //           <div className="relative w-full max-w-sm md:max-w-md">
//     //             <div className="bg-blue-100 rounded-2xl aspect-square flex items-center justify-center p-6 shadow-xl">
//     //               <div className="bg-white rounded-xl w-full h-full flex items-center justify-center p-4 shadow-inner">
//     //                 <div className="grid grid-cols-2 gap-4 w-full">
//     //                   <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
//     //                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
//     //                     <span className="text-sm font-medium text-center">
//     //                       Study Materials
//     //                     </span>
//     //                   </div>
//     //                   <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
//     //                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
//     //                     <span className="text-sm font-medium text-center">
//     //                       Practical Kits
//     //                     </span>
//     //                   </div>
//     //                 </div>
//     //               </div>
//     //             </div>

//     //             {/* Floating Info Box */}
//     //             <div className="absolute -bottom-8 right-2 flex items-center bg-white rounded-xl shadow-lg p-4 w-44 sm:w-52">
//     //               <div className="flex items-center">
//     //                 <div className="bg-green-100 p-2 rounded-lg mr-3">
//     //                   <CheckCircle className="h-6 w-6 text-green-600" />
//     //                 </div>
//     //                 <div>
//     //                   <p className="font-bold text-gray-800 text-sm sm:text-base">
//     //                     All-in-One Solution
//     //                   </p>
//     //                   <p className="text-xs text-gray-600">
//     //                     For BDS First Year
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>

//     //   {/* Features */}
//     //   <section id="features" className="py-12 md:py-20 bg-white">
//     //     <div className="container mx-auto px-4">
//     //       <div className="text-center mb-12 md:mb-16">
//     //         <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
//     //           Why Choose DentBuddy?
//     //         </h2>
//     //         <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
//     //           “We provide study material and practical kits that every BDS
//     //           first-year student needs on a single platform.”
//     //         </p>
//     //       </div>

           

//     //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
//     //         {features.map((feature, index) => (
//     //           <div
//     //             key={index}
//     //             className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center sm:text-left"
//     //           >
//     //             <div className="mb-4 flex justify-center sm:justify-start">
//     //               {feature.icon}
//     //             </div>
//     //             <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
//     //               {feature.title}
//     //             </h3>
//     //             <p className="text-gray-600 text-sm md:text-base">
//     //               {feature.description}
//     //             </p>
//     //           </div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </section>

//     //   {/* Testimonials */}
//     //   <section id="testimonials" className="py-12 md:py-20 bg-white">
//     //     <div className="container mx-auto px-4">
//     //       <div className="text-center mb-12 md:mb-16">
//     //         <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
//     //           What Students Say
//     //         </h2>
//     //         <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
//     //           Hear from BDS students who have benefited from DentBuddy's
//     //           resources and support.
//     //         </p>
//     //       </div>

//     //       {/* Empty state - you can later map testimonials */}
//     //       <div className="text-center text-gray-500 italic">
//     //         No testimonials added yet.
//     //       </div>
//     //     </div>
//     //   </section>

//     //   {/* CTA */}
//     //   <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-center">
//     //     <div className="container mx-auto px-4">
//     //       <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
//     //         Ready to Excel in Your First Year?
//     //       </h2>
//     //       <p className="text-blue-100 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-lg">
//     //         Join thousands of BDS students who are already using DentBuddy to
//     //         simplify their studies and practicals.
//     //       </p>
//     //       <div className="flex flex-col sm:flex-row justify-center gap-4">
//     //         <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105">
//     //           Get Started Today
//     //         </button>
//     //         <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-colors">
//     //           Schedule a Demo
//     //         </button>
//     //       </div>
//     //     </div>
//     //   </section>

//     //   {/* Contact */}
//     //   <section id="contact" className="py-12 md:py-20 bg-white">
//     //     <div className="container mx-auto px-4">
//     //       <div className="text-center mb-12 md:mb-16">
//     //         <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
//     //           Get In Touch
//     //         </h2>
//     //         <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
//     //           Have questions about our resources or kits? Our team is here to
//     //           help.
//     //         </p>
//     //       </div>

//     //       <div className="flex flex-col md:flex-row gap-10 md:gap-12">
//     //         {/* Form */}
//     //         <div className="md:w-1/2">
//     //           <form className="space-y-5 md:space-y-6">
//     //             <div>
//     //               <label
//     //                 htmlFor="name"
//     //                 className="block text-gray-700 mb-1 md:mb-2"
//     //               >
//     //                 Full Name
//     //               </label>
//     //               <input
//     //                 type="text"
//     //                 id="name"
//     //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
//     //                 placeholder="Your name"
//     //               />
//     //             </div>
//     //             <div>
//     //               <label
//     //                 htmlFor="email"
//     //                 className="block text-gray-700 mb-1 md:mb-2"
//     //               >
//     //                 Email Address
//     //               </label>
//     //               <input
//     //                 type="email"
//     //                 id="email"
//     //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
//     //                 placeholder="your.email@example.com"
//     //               />
//     //             </div>
//     //             <div>
//     //               <label
//     //                 htmlFor="message"
//     //                 className="block text-gray-700 mb-1 md:mb-2"
//     //               >
//     //                 Message
//     //               </label>
//     //               <textarea
//     //                 id="message"
//     //                 rows={4}
//     //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
//     //                 placeholder="How can we help you?"
//     //               ></textarea>
//     //             </div>
//     //             <button
//     //               type="submit"
//     //               className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors text-sm md:text-base"
//     //             >
//     //               Send Message
//     //             </button>
//     //           </form>
//     //         </div>

//     //         {/* Contact Info */}
//     //         <div className="md:w-1/2">
//     //           <div className="bg-blue-50 rounded-2xl p-6 md:p-8 h-full">
//     //             <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">
//     //               Contact Information
//     //             </h3>

//     //             <div className="space-y-6 text-sm md:text-base">
//     //               <div className="flex items-start">
//     //                 <div className="bg-blue-100 p-3 rounded-lg mr-4">
//     //                   <Mail className="h-6 w-6 text-blue-600" />
//     //                 </div>
//     //                 <div>
//     //                   <h4 className="font-bold text-blue-900 mb-1">Email Us</h4>
//     //                   <p className="text-gray-600">support@dentbuddy.com</p>
//     //                   <p className="text-gray-600">info@dentbuddy.com</p>
//     //                 </div>
//     //               </div>

//     //               <div className="flex items-start">
//     //                 <div className="bg-blue-100 p-3 rounded-lg mr-4">
//     //                   <Phone className="h-6 w-6 text-blue-600" />
//     //                 </div>
//     //                 <div>
//     //                   <h4 className="font-bold text-blue-900 mb-1">Call Us</h4>
//     //                   <p className="text-gray-600">+91 98765 43210</p>
//     //                   <p className="text-gray-600">+91 98765 43211</p>
//     //                 </div>
//     //               </div>

//     //               <div className="flex items-start">
//     //                 <div className="bg-blue-100 p-3 rounded-lg mr-4">
//     //                   <MapPin className="h-6 w-6 text-blue-600" />
//     //                 </div>
//     //                 <div>
//     //                   <h4 className="font-bold text-blue-900 mb-1">Visit Us</h4>
//     //                   <p className="text-gray-600">Dental Education Complex</p>
//     //                   <p className="text-gray-600">123 Medical Campus</p>
//     //                   <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
//     //                 </div>
//     //               </div>

//     //               <div className="flex items-start">
//     //                 <div className="bg-blue-100 p-3 rounded-lg mr-4">
//     //                   <Calendar className="h-6 w-6 text-blue-600" />
//     //                 </div>
//     //                 <div>
//     //                   <h4 className="font-bold text-blue-900 mb-1">
//     //                     Office Hours
//     //                   </h4>
//     //                   <p className="text-gray-600">
//     //                     Monday - Friday: 9:00 AM - 6:00 PM
//     //                   </p>
//     //                   <p className="text-gray-600">
//     //                     Saturday: 10:00 AM - 4:00 PM
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>
//     // </div>
//      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
//   {/* Hero Section */}
//   <section id="home" className="py-12 md:py-20">
//     <div className="container mx-auto px-4">
//       <div className="flex flex-col md:flex-row items-center gap-10">
//         {/* Left Content */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-blue-400 leading-snug mb-6">
//             Your Complete{" "}
//             <span className="text-blue-600 dark:text-blue-300">BDS First Year</span> Companion
//           </h1>
//           <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
//             Everything a BDS first-year student needs - study materials, practical kits, and expert guidance - all in one place.
//           </p>
//           <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
//             <Link
//               className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//               to="/products"
//             >
//               Explore Our Kits{" "}
//               <ChevronRight className="ml-2 h-5 w-5 inline" />
//             </Link>
//             <button className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-lg transition-colors">
//               View Resources
//             </button>
//           </div>
//         </div>

//         {/* Right Content (Card Display) */}
//         <div className="md:w-1/2 flex justify-center">
//           <div className="relative w-full max-w-sm md:max-w-md">
//             <div className="bg-blue-100 dark:bg-gray-700 rounded-2xl aspect-square flex items-center justify-center p-6 shadow-xl dark:shadow-gray-800">
//               <div className="bg-white dark:bg-gray-800 rounded-xl w-full h-full flex items-center justify-center p-4 shadow-inner dark:shadow-gray-900">
//                 <div className="grid grid-cols-2 gap-4 w-full">
//                   <div className="bg-blue-50 dark:bg-gray-600 rounded-lg p-4 flex flex-col items-center">
//                     <div className="bg-gray-200 dark:bg-gray-500 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
//                     <span className="text-sm font-medium text-center dark:text-gray-200">
//                       Study Materials
//                     </span>
//                   </div>
//                   <div className="bg-blue-50 dark:bg-gray-600 rounded-lg p-4 flex flex-col items-center">
//                     <div className="bg-gray-200 dark:bg-gray-500 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
//                     <span className="text-sm font-medium text-center dark:text-gray-200">
//                       Practical Kits
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Info Box */}
//             <div className="absolute -bottom-8 right-2 flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900 p-4 w-44 sm:w-52">
//               <div className="flex items-center">
//                 <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg mr-3">
//                   <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
//                     All-in-One Solution
//                   </p>
//                   <p className="text-xs text-gray-600 dark:text-gray-300">
//                     For BDS First Year
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

//   {/* Features */}
//   <section id="features" className="py-12 md:py-20 bg-white dark:bg-gray-900">
//     <div className="container mx-auto px-4">
//       <div className="text-center mb-12 md:mb-16">
//         <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-400 mb-4">
//           Why Choose DentBuddy?
//         </h2>
//         <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
//           “We provide study material and practical kits that every BDS first-year student needs on a single platform.”
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-gray-700 transition-all duration-300 transform hover:-translate-y-2 text-center sm:text-left"
//           >
//             <div className="mb-4 flex justify-center sm:justify-start">
//               {feature.icon}
//             </div>
//             <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">
//               {feature.title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>

//   {/* Rest sections (Testimonials, CTA, Contact) */}
//   {/* Apply the same dark:bg-* and dark:text-* classes accordingly */}
// </div>




//   );
// };

// export default AiGen;



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






