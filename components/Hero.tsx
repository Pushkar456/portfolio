"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container relative z-10 px-4 sm:px-6">
        <p
          className="text-xl sm:text-2xl md:text-3xl mb-3 text-neutral-300 font-light tracking-wide"
          style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}
        >
          Hi, I’m
        </p>
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-linear-to-r from-neutral-400 via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-2 leading-tight"
          style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}
        >
          Pushkar Prajapat
        </h1>
        <h2
          className="text-2xl sm:text-5xl md:text-6xl lg:text-5xl font-bold bg-linear-to-r from-neutral-500 via-neutral-300 to-neutral-500 bg-clip-text text-transparent leading-tight"
          style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}
        >
          Aspiring Software Engineer
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl mt-6 text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed"
          style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}
        >
          Building scalable, reliable web solutions with modern tech.
        </p>
      </div>
    </section>
  );
};

export default Hero;
