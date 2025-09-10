import React from 'react'

import emailjs from "emailjs-com";

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

  return (
<form
  onSubmit={sendEmail}
  className="max-w-lg mx-auto p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg space-y-5"
>
  <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400">
    We Value Your Feedback 💬
  </h2>
  <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
    Help us improve by sharing your thoughts below.
  </p>

  {/* Name */}
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

  {/* Email */}
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

  {/* Feedback */}
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

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700"
  >
    Send Feedback
  </button>
</form>

  );
}




export default Contact