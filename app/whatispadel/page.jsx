"use client";

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [investment, setInvestment] = useState(null);
  const [years, setYears] = useState([]);
  const [profits, setProfits] = useState([]);

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

  useEffect(() => {
    if (investment && Array.isArray(years)) {
      const newProfits = years.map((year) => year * investment * 0.2);
      setProfits(newProfits);
    }
  }, [investment, years]);

  const handleInvestmentChange = (e) => {
    const inv = Number(e.target.value);
    setInvestment(inv);

    if (inv) {
      const newYears = Array.from({ length: 10 }, (_, i) => i + 1);
      setYears(newYears);
    } else {
      setYears([]);
      setProfits([]);
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

  return (
    <InView triggerOnce>
      {({ inView, ref, entry }) => (
        <>
          <Navbar />
          <motion.div
            ref={ref}
            className="bg-[#191919] text-white px-4 md:px-8 py-6 md:py-20 mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-center text-[40px] font-bold mb-20"
              variants={childVariants}
            >
              What is Padel?
            </motion.h2>
            <motion.p
              className="text-sm md:text-base font-light mb-4"
              variants={childVariants}
            >
              Padel is a racquet sport that combines the elements of tennis,
              squash and badminton. It is only played in doubles and is
              practiced outdoors as much as indoors. The game was invented by
              Enrique Corcuera of Mexico, who created the first Padel club in
              Marbella, Spain in 1974.
            </motion.p>
            <motion.p
              className="text-sm md:text-base font-light mb-4"
              variants={childVariants}
            >
              Padel is growing rapidly worldwide, including in South Africa.
              Investing in a Padel court can be a lucrative venture as the sport
              attracts both beginners and professional players. In addition to
              the profits generated from court fees, there are also
              opportunities for revenue from training, equipment sales, and
              events.
            </motion.p>
            <motion.input
              type="number"
              placeholder="Enter investment amount"
              onChange={handleInvestmentChange}
              className="mt-4 bg-gradient-to-r from-red-500 to-[#ffa500] text-white px-4 py-2 font-bold rounded hover:bg-gradient-to-r hover:from-[#ffa500] hover:to-red-500 hover:scale-125 hover:transition-all transition-all hover:duration-1000 duration-1000"
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
        </>
      )}
    </InView>
  );
};

export default WhatIsPadel;
