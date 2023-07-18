"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

const What = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(null);
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

  const handleAbout = () => {
    router.push("/whatispadel");
  };

  return (
    <InView triggerOnce>
      {({ inView, ref, entry }) => (
        <motion.div
          ref={ref}
          className="bg-black text-white px-4 md:px-8 py-6 md:py-20 mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-[40px] font-bold mb-20">
              What We Do
            </h1>
            <div className="gap-4 md:gap-8 flex flex-col md:flex-row justify-between content-center items-center">
              <div className="flex flex-col w-full md:w-1/2">
                <motion.h1
                  className="text-[25px] md:text-[40px] font-bold mb-6 bg-gradient-to-l from-[#ffa500] to-red-500 bg-clip-text text-transparent"
                  variants={childVariants}
                >
                  The Perfect Time to Invest in Padel
                </motion.h1>
                <motion.p
                  className="text-sm md:text-base font-light mb-4"
                  variants={childVariants}
                >
                  Padel is one of the fastest growing sports in the world. As a
                  result, there is an increasing demand for high-quality padel
                  courts. Investing in a padel court not only adds value to your
                  property but also promotes a healthy and social lifestyle.
                </motion.p>
              </div>
              <div className="w-full md:w-1/2">
                <Accordion type="single" collapsible className="mt-4 md:mt-0">
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      onClick={() =>
                        setActiveItem(activeItem === "item-1" ? null : "item-1")
                      }
                    >
                      <div
                        className={`font-bold ${
                          activeItem === "item-1"
                            ? "bg-gradient-to-l from-[#ffa500] to-red-500 bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        Expertise in Padel Courts
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      What Construction prides itself in building world-class
                      Padel courts with meticulous attention to detail.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger
                      onClick={() => setActiveItem("item-2")}
                      onClose={() => setActiveItem(null)}
                    >
                      <div
                        className={`font-bold ${
                          activeItem === "item-2"
                            ? "bg-gradient-to-l from-[#ffa500] to-red-500 bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        Quality and Durability
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      We ensure the best in quality and durability, matching
                      international standards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger
                      onClick={() => setActiveItem("item-3")}
                      onClose={() => setActiveItem(null)}
                    >
                      <div
                        className={`font-bold ${
                          activeItem === "item-3"
                            ? "bg-gradient-to-l from-[#ffa500] to-red-500 bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        Customised Solutions
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      Our team of experts provides customised solutions to cater
                      to the specific needs of our clients.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger
                      onClick={() => setActiveItem("item-4")}
                      onClose={() => setActiveItem(null)}
                    >
                      <div
                        className={`font-bold ${
                          activeItem === "item-4"
                            ? "bg-gradient-to-l from-[#ffa500] to-red-500 bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        I am not sure what Padel is
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <button
                        onClick={handleAbout}
                        className="mt-4 bg-gradient-to-r from-red-500 to-[#ffa500] text-white px-4 py-2 font-bold rounded hover:bg-gradient-to-r hover:from-[#ffa500] hover:to-red-500 hover:scale-125 hover:transition-all transition-all hover:duration-1000 duration-1000"
                      >
                        Click Here
                      </button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default What;
