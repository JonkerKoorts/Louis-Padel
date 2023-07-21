"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
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
        duration: 0.8,
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

  const handleContact = () => {
    router.push("/#contact");
  };

  return (
    <InView triggerOnce>
      {({ inView, ref, entry }) => (
        <motion.div
          ref={ref}
          className="bg-[#f2f2f2] text-black text-center md:text-left px-6 md:px-8 py-6 md:py-20 mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h1 className="text-center text-[40px] font-bold ">About us</h1>
          <br />
          <br />
          <br className="hide-on-mobile" />
          <div className="gap-4 md:gap-8 flex flex-col-reverse md:flex-row justify-around content-center items-center">
            <div className="flex flex-col">
              <motion.h1
                className="text-[25px] md:text-[40px] font-bold mb-6 hide-on-mobile"
                variants={childVariants}
              >
                Padel Solutions
              </motion.h1>
              <motion.button
                variants={buttonVariants}
                onClick={handleContact}
                className="mt-4 bg-gradient-to-r from-black to-[#144a9c] text-white px-4 py-2 font-bold rounded hover:bg-gradient-to-r hover:from-[#144a9c] hover:to-black hover:scale-125 hover:transition-all transition-all hover:duration-1000 duration-1000"
              >
                Get in touch
              </motion.button>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <div className="w-full md:w-60">
                <motion.h2
                  className="text-lg font-semibold mb-2 underline bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent"
                  variants={childVariants}
                >
                  Design and Manufacture
                </motion.h2>
                <motion.p
                  className="text-sm md:text-base font-light mb-4"
                  variants={childVariants}
                >
                  As a proudly South African establishment, we bring innovative
                  design and manufacturing to build top-tier padel courts.
                </motion.p>

                <motion.h2
                  className="text-lg font-semibold mb-2 underline bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent"
                  variants={childVariants}
                >
                  Equipment and Installation
                </motion.h2>
                <motion.p
                  className="text-sm md:text-base font-light mb-4"
                  variants={childVariants}
                >
                  Utilising locally sourced materials, we provide expert
                  solutions for the installation of your customised court.
                </motion.p>
              </div>
              <div className="w-full md:w-60">
                <motion.h2
                  className="text-lg font-semibold mb-2 underline bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent"
                  variants={childVariants}
                >
                  Support and Expansion
                </motion.h2>
                <motion.p
                  className="text-sm md:text-base font-light mb-4"
                  variants={childVariants}
                >
                  Our goal is to support and expand the game of padel in South
                  Africa by providing world-class facilities.
                </motion.p>

                <motion.h2
                  className="text-lg font-semibold mb-2 underline bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent"
                  variants={childVariants}
                >
                  Get in Touch
                </motion.h2>
                <motion.p
                  className="text-sm md:text-base font-light"
                  variants={childVariants}
                >
                  If you are considering a padel court for a new development, or
                  seeking to repurpose an existing tennis court - we are here to
                  help! Contact us today.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default About;
