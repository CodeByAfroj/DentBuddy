

import React from "react";
import { motion } from "framer-motion";
import "../App.css"
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
        {/* <motion.div
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
        </motion.div> */}

        {/* Intro */}
<motion.div
  className="dark:bg-gray-900  max-w-5xl mx-auto text-lg leading-relaxed text-center space-y-6"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <p className=" dark:bg-gray-800  p-4 rounded-xl shadow-sm">
    DentBuddy was born out of a deep understanding of the struggles dental students face —
    endless lectures, piles of notes, costly kits, and the pressure of practical exams. 
    As a dedicated BDS student, our founder experienced these challenges firsthand and envisioned 
    a platform that could bridge the gap between learning and practical application.
  </p>

 <p>
  DentBuddy is more than just a brand — it’s a trusted partner in your journey through dentistry. 
  We provide{" "}
  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 gradient-animate">
    practical kits, concise notes, and essential tools
  </span>{" "}
  designed to make learning simpler, smarter, and more accessible for every dental student.
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
          <p className="mt-4 font-semibold text-blue-500 text-md">— Alfiya Patel</p>
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

    
      </div>
    </div>
  );
};

export default About;
