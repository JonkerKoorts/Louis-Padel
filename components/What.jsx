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
import { Player } from "video-react"; // import the video-react components
import "video-react/dist/video-react.css";
import Lottie from "lottie-react";
import Construction from "../public/constructionlottie.json";
import Image from "next/image";
import PaddleCourt from "../public/Paddlecourt.jpg";
import PaddleCourt1 from "../public/paddlecourt1.jpg";
import PaddleCourt2 from "../public/paddlecourt2.jpg";

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
          className="bg-[#e6e6e6] text-black px-4 md:px-8 py-6 md:py-20 mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-[40px] font-bold mb-20">
              What We Do
            </h1>
            <div className="gap-4 md:gap-8 flex flex-col md:flex-row justify-between content-center ">
              <div className="flex flex-col w-full md:w-1/2">
                <motion.h1
                  className="text-[25px] md:text-[40px] font-bold mb-6 bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent"
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
                  courts. Courtside Constructions is a South African enterprise
                  that takes immense pride in crafting, producing, and setting
                  up top-tier padel courts to industry standards. By harnessing
                  locally sourced materials, Courtside Constructions presents
                  Padel Solutions, a comprehensive service that delivers the
                  required expertise for the installation of personalised court
                  structures.
                </motion.p>
                <br className="hide-on-mobile" />
                <br className="hide-on-mobile" />
                <div className=" decoration-white">
                  <Lottie animationData={Construction} />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div>
                  <div className="text-[25px] md:text-[40px] font-bold mb-6 bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent">
                    Take a look at our Comprehensive packages.
                    <p className="text-sm text-black md:text-base font-light mb-4">
                      Packages are tailored to fit any person looking to invest
                      form our most basic to most comprehensive, find what is
                      right for you.
                      <br />{" "}
                      <span className="font-extrabold bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent">
                        Designing with you for you
                      </span>
                    </p>
                  </div>
                  <Accordion type="single" collapsible className="mt-4 md:mt-0">
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        onClick={() =>
                          setActiveItem(
                            activeItem === "item-1" ? null : "item-1"
                          )
                        }
                      >
                        <div
                          className={`font-bold ${
                            activeItem === "item-1"
                              ? "bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent"
                              : "text-black"
                          }`}
                        >
                          Outdoor Basic
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Introducing Mod. BASIC – a straightforward pillar
                        structure measuring 100 x 50 mm, designed with
                        cost-effectiveness in mind. Ideal for indoor
                        installations, this model offers a budget-friendly
                        option. For enhanced stability, we strongly advise
                        opting for our frame construction (check out mod. BASIC
                        PRO / PREMIUM). The frame ensures solid support for the
                        glass walls on all four sides. Enjoy a hassle-free
                        experience as the project is supplied and built as a
                        complete turnkey solution.
                        <Image
                          alt="Padel Court"
                          loading="eager"
                          src={PaddleCourt}
                        />
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
                              ? "bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent"
                              : "text-black"
                          }`}
                        >
                          Basic Pro
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Presenting the ultimate Panoramic Padel Court,
                        unrivalled in the market. This extraordinary court
                        boasts exceptional structural strength, offering
                        unparalleled resistance against wind loads. Its
                        spectacularly robust design ensures an elevated Padel
                        experience, allowing you to indulge in the highest level
                        of gameplay. With optimal visibility from the inside,
                        spectators can enjoy an unobstructed view of the playing
                        surface. Ideal for both outdoor and indoor
                        installations, it serves as a perfect Centre Court
                        within any Padel environment. As always, we provide a
                        seamless turnkey project experience, from supply to
                        construction.
                        <Image
                          alt="Padel Court"
                          loading="eager"
                          src={PaddleCourt1}
                        />
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
                              ? "bg-gradient-to-l from-[#144a9c] to-black bg-clip-text text-transparent"
                              : "text-black"
                          }`}
                        >
                          Panoramic
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Experience the epitome of professional Padel with our
                        spectacularly designed court, crafted to elevate your
                        game to the highest level. Enjoy an unobstructed view of
                        the playing surface, providing viewers with an optimal
                        inside perspective. This court is ideally suited for
                        indoor installations, but it can also be set up outdoors
                        in wind-protected areas. As always, we offer a seamless
                        turnkey project, handling everything from supply to
                        construction. Get ready to immerse yourself in the
                        ultimate Padel experience with our exceptional court
                        design.
                        <Image
                          alt="Padel Court"
                          loading="eager"
                          src={PaddleCourt2}
                        />
                      </AccordionContent>
                    </AccordionItem>
                    <div className="flex justify-between content-center items-center my-5 flex-wrap">
                      <p>What is my Return on investment?</p>
                      <button
                        onClick={handleAbout}
                        className="mt-4 bg-gradient-to-r from-black to-[#144a9c] text-white px-4 py-2 font-bold rounded hover:bg-gradient-to-r hover:from-[#144a9c] hover:to-black hover:transition-all transition-all hover:duration-1000 duration-1000"
                      >
                        Calculate
                      </button>
                    </div>
                  </Accordion>
                </div>
                <Player
                  src="/padelconstruction.mp4"
                  autoPlay
                  muted
                  playsInline
                  fluid={true}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default What;
