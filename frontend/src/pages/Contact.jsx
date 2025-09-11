import React from 'react'

import emailjs from "emailjs-com";
 import { motion } from "framer-motion";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72innvp",
        "template_xurnl1e",
        e.target,
        "KQmRqRad-nZh4mllW"
      )
      .then(
        (result) => {
          alert("Feedback Submitted");
        },
        (error) => {
          alert("Failed to send: " + error.text);
        }
      );
  };


 
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

  return (




<>
{/* <form
  onSubmit={sendEmail}
  className="max-w-lg mx-auto p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg space-y-5"
>
  <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400">
    We Value Your Feedback 💬
  </h2>
  <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
    Help us improve by sharing your thoughts below.
  </p>


  <div>
    <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-1">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Enter your name"
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800"
      required
    />
  </div>


  <div>
    <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-1">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800"
      required
    />
  </div>


  <div>
    <label htmlFor="feedback" className="block text-gray-700 dark:text-gray-200 mb-1">
      Your Feedback
    </label>
    <textarea
      id="feedback"
      name="feedback"
      placeholder="Write your feedback here..."
      rows="4"
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800"
      required
    ></textarea>
  </div>

 
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700"
  >
    Send Feedback
  </button>
</form> */}



<div className=" max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Left: Contact Info */}
  <motion.div
    className="space-y-10"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl lg:mt-50  font-bold text-gray-800 dark:text-gray-100">
      Get in Touch
    </h2>
    <p className="text-gray-600 dark:text-gray-400">
      Have questions or need assistance? Reach out to us through the form or
      use the details below.
    </p>

    <div className="space-y-6">
      {/* Phone */}
      <motion.div
        className="flex items-start space-x-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="p-1 bg-green-100 dark:bg-green-900 rounded-lg">
         <div className="p-1 bg-green-100 dark:bg-green-900 rounded-lg">
  <svg
    className="w-6 h-6 text-green-600 dark:text-green-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.667 4.998a1 1 0 01-.217 1.02L8.664 11.664a16.014 16.014 0 006.672 6.672l1.958-1.958a1 1 0 011.02-.217l4.998 1.667a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C8.954 21 3 15.046 3 8V5z"
    />
  </svg>
</div>

        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-gray-100">
            Call Us
          </h4>
          <p className="text-gray-600 dark:text-gray-200">+91 9921928678</p>
        </div>
      </motion.div>

      {/* Email */}
      <motion.div
        className="flex items-start space-x-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
       <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-purple-600 dark:text-purple-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 12H8m0 0l-4-4m4 4l-4 4m16-4h-8M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z"
    />
  </svg>
</div>

        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
            Email Us
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            dentbuddy01@gmail.com
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>

  {/* Right: Contact Form */}
  <motion.form
    onSubmit={sendEmail}
    className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-6"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <h3 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400">
      Send Us a Message
    </h3>

    {/* Name & Email in Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-200">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
          text-gray-800 dark:text-gray-100"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
          text-gray-800 dark:text-gray-100"
          required
        />
      </div>
    </div>

    {/* Subject */}
    <div>
      <label className="block text-sm text-gray-700 dark:text-gray-200">
        Subject
      </label>
      <input
        type="text"
        name="subject"
        placeholder="How can we help you?"
        className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
        focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
        text-gray-800 dark:text-gray-100"
        required
      />
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm text-gray-700 dark:text-gray-200">
        Message
      </label>
      <textarea
        name="message"
        rows="5"
        placeholder="Write your message..."
        className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
        focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
        text-gray-800 dark:text-gray-100"
        required
      ></textarea>
    </div>

    {/* Button */}
    <motion.button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 
      rounded-lg shadow-md"
      whileHover={{ scale: 1.05,}}
      transition={{ type: "spring", stiffness: 120 }}
    >
      Send Message
    </motion.button>
  </motion.form>
</div>




</>

  );
}




export default Contact