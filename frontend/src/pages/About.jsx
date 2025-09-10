// import React from "react";
// import { motion } from "framer-motion";

// const About = ({ darkMode }) => {
//   return (

//       <div  className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-20">
//     <div
//           className=" py-12 md:py-20 px-5"
//     >
    
//       {/* Header */}
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-center mb-8 flex justify-center items-center flex-col"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <span>About </span>
//         <span className="text-blue-500"><span className="text-gray-200">Dent</span>Buddy</span>
//       </motion.h1>

//       {/* Intro Section */}
//       <motion.div
//         className="max-w-5xl mx-auto text-lg leading-relaxed text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <p className="mb-6">
//           DentBuddy was born out of a deep understanding of the struggles dental
//           students face — endless lectures, piles of notes, costly kits, and the
//           pressure of practical exams. As a dedicated BDS student, our founder
//           experienced these challenges firsthand and envisioned a platform that
//           could bridge the gap between learning and practical application.
//         </p>
//         <p>
//           DentBuddy is more than just a brand — it’s a trusted partner in your
//           journey through dentistry. We provide{" "}
//           <span className="font-semibold text-blue-500">
//             practical kits, concise notes, and essential tools
//           </span>{" "}
//           designed to make learning simpler, smarter, and more accessible for
//           every dental student.
//         </p>
//       </motion.div>

//       {/* Mission & Vision */}
//       <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
//         <motion.div
//           className={`p-8 rounded-2xl shadow-lg transition ${
//             darkMode ? "bg-gray-800" : "bg-gray-100"
//           }`}
//           whileHover={{ scale: 1.03 }}
//         >
//           <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
//           <p>
//             To <strong>simplify dental education</strong> by offering
//             well-curated resources, practical support, and affordable tools,
//             enabling students to focus more on skill-building and less on
//             stress.
//           </p>
//         </motion.div>

//         <motion.div
//           className={`p-8 rounded-2xl shadow-lg transition ${
//             darkMode ? "bg-gray-800" : "bg-gray-100"
//           }`}
//           whileHover={{ scale: 1.03 }}
//         >
//           <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
//           <p>
//             A future where every dental student has{" "}
//             <strong>
//               easy access to the right tools, guidance, and resources
//             </strong>{" "}
//             to excel — without being overwhelmed by the traditional barriers of
//             learning.
//           </p>
//         </motion.div>
//       </div>

//       {/* Founder Message */}
//       <motion.div
//         className="max-w-4xl mx-auto mt-16 text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <blockquote
//           className={`italic text-lg md:text-xl border-l-4 pl-6 ${
//             darkMode ? "border-blue-400" : "border-blue-600"
//           }`}
//         >
//           "As a dental student myself, I know how tough it can be to manage
//           endless notes, kits, and exams. That’s why I started DentBuddy — to
//           make learning dentistry simpler, smarter, and more enjoyable for every
//           student."
//         </blockquote>
//         <p className="mt-4 font-semibold text-blue-500">— [Founder’s Name]</p>
//         <p className="text-sm opacity-70">Founder & BDS Student</p>
//       </motion.div>

//       {/* Why Choose Us */}
//       <div className="max-w-6xl mx-auto mt-20">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Why Choose DentBuddy?
//         </h2>
//         <div className="grid md:grid-cols-4 gap-6">
//           {[
//             {
//               title: "Student-Centric Approach",
//               desc: "Designed by dental students, for dental students.",
//             },
//             {
//               title: "Comprehensive Resources",
//               desc: "From practical kits to concise notes, we’ve got you covered.",
//             },
//             {
//               title: "Affordable & Accessible",
//               desc: "Quality resources that don’t break the bank.",
//             },
//             {
//               title: "Community Support",
//               desc: "Join a growing network of like-minded dental students.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className={`p-6 rounded-xl shadow-md transition ${
//                 darkMode ? "bg-gray-800" : "bg-gray-100"
//               }`}
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
//               <p className="text-sm opacity-80">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Join Section */}
//       <motion.div
//         className="text-center mt-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h2 className="text-3xl font-bold mb-4">Join the DentBuddy Community</h2>
//         <p className="max-w-2xl mx-auto opacity-80 mb-6">
//           Whether you’re preparing for exams, setting up your first clinical
//           kit, or just starting your journey in dentistry, DentBuddy is here to
//           make the path less overwhelming and more rewarding.
//         </p>
//         <button
//           className={`px-6 py-3 rounded-full font-semibold shadow-lg transition ${
//             darkMode
//               ? "bg-blue-500 hover:bg-blue-400 text-white"
//               : "bg-blue-600 hover:bg-blue-500 text-white"
//           }`}
//         >
//           Get Started
//         </button>
//       </motion.div>
//     </div>

//     </div>
//   );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800  py-8 transition-colors duration-500">
      <div className="px-5 md:px-10">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <span className="block">About</span>
          <span className="text-blue-500">
            <span className="dark:text-gray-200">Dent</span>Buddy
          </span>
        </motion.h1>

        {/* Intro */}
        <motion.div
          className="max-w-5xl mx-auto text-lg leading-relaxed text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6">
            DentBuddy was born out of a deep understanding of the struggles
            dental students face — endless lectures, piles of notes, costly
            kits, and the pressure of practical exams. As a dedicated BDS
            student, our founder experienced these challenges firsthand and
            envisioned a platform that could bridge the gap between learning
            and practical application.
          </p>
          <p>
            DentBuddy is more than just a brand — it’s a trusted partner in your
            journey through dentistry. We provide{" "}
            <span className="font-semibold text-blue-500">
              practical kits, concise notes, and essential tools
            </span>{" "}
            designed to make learning simpler, smarter, and more accessible for
            every dental student.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Our Mission",
              desc: "To simplify dental education by offering well-curated resources, practical support, and affordable tools, enabling students to focus more on skill-building and less on stress.",
            },
            {
              title: "Our Vision",
              desc: "A future where every dental student has easy access to the right tools, guidance, and resources to excel — without being overwhelmed by the traditional barriers of learning.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-800 transition-all hover:scale-105 hover:shadow-2xl"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Founder Message */}
        <motion.div
          className="max-w-4xl mx-auto mt-20 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <blockquote className="italic text-lg md:text-xl border-l-4 pl-6 border-blue-600 dark:border-blue-400">
            "As a dental student myself, I know how tough it can be to manage
            endless notes, kits, and exams. That’s why I started DentBuddy — to
            make learning dentistry simpler, smarter, and more enjoyable for
            every student."
          </blockquote>
          <p className="mt-4 font-semibold text-blue-500">— Alfiya Patel</p>
          <p className="text-sm opacity-70">Founder & BDS Student</p>
        </motion.div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose DentBuddy?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Student-Centric",
                desc: "Designed by dental students, for dental students.",
              },
              {
                title: "Comprehensive Resources",
                desc: "From practical kits to concise notes, we’ve got you covered.",
              },
              {
                title: "Affordable & Accessible",
                desc: "Quality resources that don’t break the bank.",
              },
              {
                title: "Community Support",
                desc: "Join a network of like-minded dental students.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 transition hover:scale-105 hover:shadow-lg"
                whileHover={{ rotate: 0.5 }}
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0}}
        >
          <h2 className="text-3xl font-bold mb-4">Join the DentBuddy Community</h2>
          <p className="max-w-2xl mx-auto opacity-80 mb-6">
            Whether you’re preparing for exams, setting up your first clinical
            kit, or just starting your journey in dentistry, DentBuddy is here
            to make the path less overwhelming and more rewarding.
          </p>
          <motion.button
            className="px-6 py-3 rounded-full font-semibold shadow-lg bg-blue-600 hover:bg-blue-500 text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
