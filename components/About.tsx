"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";






const About = () => {
  return (
    <section
      id="about"
      className=" pt-10 max-w-6xl h-screen mx-auto "
    >
      {/* <h2 className="text-xl font-bold text-center mb-16 ">
        About Me
      </h2> */}
      <SectionHeading title="About Me" />

      <div className="grid md:grid-cols-2 gap-16 items-center my-4">

        {/* ===== Animated Circular Image ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-72 h-72 md:w-80 md:h-80"
          >
            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-2xl"></div>

            {/* Circular Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
              <Image
                src="/photo.jpg"  // put this exact image in public folder as photo.jpg
                alt="Pushkar Prajapat"
                fill
                priority
                className="object-cover object-[50%_10%]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ===== Description ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg leading-8">
            Backend-focused Full Stack Developer specializing in building scalable,
            secure, and high-performance web applications using Node.js, Express,
            MongoDB, PostgreSQL, and Redis.
          </p>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            Strong foundation in Data Structures & Algorithms (150+ LeetCode)
            and system design fundamentals. Passionate about writing clean,
            production-ready code.
          </p>
          <p>
            My journey has been about constant learning — from building real-time apps like Excalidraw -The collaborative app, Instamart-clone and My-Brain
          </p>
          
        </motion.div>

      </div>
    </section>
  );
};

export default About;
