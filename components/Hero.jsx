"use client";

import React from "react";
import heroImage from "../public/padelbackground.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Animation from "../public/tennisball.json";

const Hero = () => {
  const router = useRouter();

  const handleAbout = () => {
    router.push("/whatispadel");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { x: "-5vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "easeInOut",
        duration: 2,
      },
    },
  };

  const buttonVariants = {
    hidden: { x: "-100vw", opacity: 0, y: "100vw" },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "easeInOut",
        delay: 2.8,
        duration: 0,
      },
    },
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Hero image"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <motion.div
        className="z-10 max-w-xl px-8 py-6 mr-auto ml-1 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-[40px] font-bold bg-gradient-to-r from-[#ffa500] to-red-500 text-transparent bg-clip-text"
          variants={childVariants}
        >
          Welcome to Padel Pro
        </motion.h2>

        <br className="hidden md:block" />
        <br />

        <motion.p
          className="text-sm md:text-base font-light"
          variants={childVariants}
        >
          Your premier destination for professional Padel court construction. We
          specialize in creating top-notch Padel court facilities tailored to
          your unique needs. With a team of skilled engineers and designers, we
          bring your vision to life, ensuring superior quality and unmatched
          attention to detail.
        </motion.p>
        <br />
        <motion.p
          className="text-sm md:text-base font-light"
          variants={childVariants}
        >
          Whether you are a sports club, private residence, or recreational
          facility, we provide turnkey solutions that exceed expectations. Our
          commitment to excellence, innovative design, and use of premium
          materials set us apart as the industry leaders in Padel court
          construction.
        </motion.p>
        <br />
        <motion.p
          className="text-sm md:text-base font-light font-bold"
          variants={childVariants}
        >
          Elevate your game and experience the thrill of Padel with Padel Pro.
        </motion.p>
        <br />
        <motion.button
          onClick={handleAbout}
          className="mt-4 bg-gradient-to-r from-red-500 to-[#ffa500] text-white px-4 py-2 font-bold rounded hover:bg-gradient-to-r hover:from-[#ffa500] hover:to-red-500 hover:transition-all transition-all hover:duration-1000 duration-1000"
          variants={buttonVariants}
        >
          Why Padel
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
