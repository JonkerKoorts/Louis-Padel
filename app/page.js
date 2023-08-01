"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import What from "@/components/What";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Construction from "../public/constructionlottie.json";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white">
          <div className=" decoration-white">
            <Lottie animationData={Construction} />
          </div>
        </div>
      ) : (
        <motion.div
          className="flex flex-col min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main className="flex flex-col justify-between">
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="What">
              <What />
            </section>
            <section id="contact">
              <Contact />
            </section>
            {/* <div className="w-72 sticky bottom-0 mt-[-300px] ml-[85%] hide-on-mobile">
              <Lottie animationData={Tennisball} />
            </div> */}
            <Footer />
          </main>
        </motion.div>
      )}
    </>
  );
}
