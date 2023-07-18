"use client";

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Navbar from "@/components/Navbar";
import Lottie from "lottie-react";
import TennisBall from "../../public/tennisball.json";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

ChartJS.register(
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const WhatIsPadel = () => {
  const [investment, setInvestment] = useState(null);
  const [years, setYears] = useState([]);
  const [profits, setProfits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [breakEvenYear, setBreakEvenYear] = useState(null);
  const [showContact, setShowContact] = useState(false); // Add this line

  const handleContactClick = () => {
    // Add this function
    setShowContact(true);
  };

  const TOTAL_COST = 10000000;
  const COST_PER_HOUR = 500;
  const HOURS_PER_DAY = 16;
  const DAYS_PER_YEAR = 365;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3,
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

  const handleInvestmentChange = (e) => {
    const inv = Number(e.target.value);
    setInvestment(inv);

    if (inv) {
      const numberOfCourts = inv / TOTAL_COST;
      const dailyIncome = numberOfCourts * COST_PER_HOUR * HOURS_PER_DAY;
      const yearlyIncome = dailyIncome * DAYS_PER_YEAR;

      const newYears = Array.from({ length: 20 }, (_, i) => i + 1);
      const newProfits = newYears.map((year) => yearlyIncome * year);

      setYears(newYears);
      setProfits(newProfits);

      const breakEven = newProfits.findIndex((profit) => profit >= inv);
      setBreakEvenYear(breakEven !== -1 ? breakEven + 1 : null);
    } else {
      setYears([]);
      setProfits([]);
      setBreakEvenYear(null);
    }
  };

  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        title: {
          display: true,
          text: "Profits in ZAR",
          color: "#FFF",
          font: {
            size: 14,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Years",
          color: "#FFF",
          font: {
            size: 14,
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const buttonVariants = {
    hidden: { x: "-100vw", opacity: 0, y: "100vw" },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "easeInOut",
        delay: 0,
        duration: 0,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="text-black px-4 md:px-8 py-6 md:py-20 mx-auto">
        {isLoading ? (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white">
            <div className="decoration-white">
              <Lottie animationData={TennisBall} />
            </div>
          </div>
        ) : (
          <InView triggerOnce>
            {({ inView, ref, entry }) => (
              <>
                <motion.div
                  ref={ref}
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <motion.h2
                    className="text-center text-[40px] font-bold"
                    variants={childVariants}
                  >
                    What is Padel?
                    <p className="text-xs font-bold bg-gradient-to-r from-red-500 to-[#ffa500] bg-clip-text text-transparent mt-[-10px]">
                      And how do I profit?
                    </p>
                  </motion.h2>
                  <br />
                  <br className="hide-on-mobile" />
                  <motion.p
                    className="text-sm md:text-base font-light mb-4"
                    variants={childVariants}
                  >
                    Padel is a racquet sport that combines the elements of
                    tennis, squash and badminton. It is only played in doubles
                    and is practiced outdoors as much as indoors. The game was
                    invented by Enrique Corcuera of Mexico, who created the
                    first Padel club in Marbella, Spain in 1974.
                  </motion.p>
                  <motion.p
                    className="text-sm md:text-base font-light mb-4"
                    variants={childVariants}
                  >
                    Padel is growing rapidly worldwide, including in South
                    Africa. Investing in a Padel court can be a lucrative
                    venture as the sport attracts both beginners and
                    professional players. In addition to the profits generated
                    from court fees, there are also opportunities for revenue
                    from training, equipment sales, and events.
                  </motion.p>
                  <motion.input
                    type="number"
                    placeholder="Enter investment amount"
                    onChange={handleInvestmentChange}
                    className="mt-4 text-black px-4 py-2 border-[#ffa500] border-[1px] font-bold rounded "
                    variants={childVariants}
                  />

                  {Array.isArray(years) && Array.isArray(profits) && (
                    <div className="h-64 md:h-96 w-full mt-6">
                      <Line
                        data={{
                          labels: years,
                          datasets: [
                            {
                              label: "ROI in ZAR",
                              data: profits,
                              fill: false,
                              backgroundColor: "rgb(75, 192, 192)",
                              borderColor: "rgba(75, 192, 192, 0.2)",
                            },
                          ],
                        }}
                        options={options}
                      />
                    </div>
                  )}
                </motion.div>
                <motion.p
                  className="text-sm md:text-base font-light mt-4 md:mt-8"
                  variants={childVariants}
                >
                  This chart shows the expected return on investment (ROI) over
                  the next 20 years based on the amount you have invested in
                  Padel courts. The green line represents the accumulated
                  profits from the courts over time.
                  {breakEvenYear
                    ? ` Based on your current investment, you are expected to break even in year ${breakEvenYear}.`
                    : ` With the current investment, it's not projected to break even within 20 years.`}
                </motion.p>
                <p className="text-xs font-base mt-2 md:mt-4">
                  Please note that all these calculations are purely speculative
                  and can vary based on numerous variables.
                </p>
              </>
            )}
          </InView>
        )}
      </div>
      <motion.button
        onClick={handleContactClick}
        className="mt-4 mb-6 md:mb-12 bg-gradient-to-r ml-8 from-red-500 to-[#ffa500] text-white px-4 py-2 font-bold rounded hover:bg-gradient-to-r hover:from-[#ffa500] hover:to-red-500 hover:transition-all transition-all hover:duration-1000 duration-1000"
        variants={buttonVariants}
      >
        Contact NOW
      </motion.button>
      {showContact && <Contact bgColor="#999999" textColor="black" />}
      <Footer />
    </>
  );
};

export default WhatIsPadel;
