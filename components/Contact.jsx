"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("HDYc48bYLOHynCmye");
import { useToast } from "@/components/ui/use-toast";

const Contact = ({ bgColor = "#f2f2f2", textColor = "black" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const { toast } = useToast();

  const submitForm = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      to_name: "Your Name",
      message: `${message}\n\nContact Number: ${number}\nEmail: ${email}`,
      reply_to: email,
    };

    emailjs
      .send("service_yb48z7t", "template_4lc2rna", templateParams)
      .then(() =>
        toast({
          title: "Email Sent",
          description: "We will be in toutch shortly",
        })
      )
      .catch(() =>
        toast({
          title: "Failed",
          description:
            "Please try again and make sure all details are filled in",
        })
      );

    setName("");
    setEmail("");
    setMessage("");
    setNumber("");
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
        duration: 0.8,
      },
    },
  };

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className="text-white px-4 md:px-8 py-6 md:py-20 mx-auto"
          style={{ backgroundColor: bgColor }}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-center text-[40px] font-bold mb-20"
            style={{ color: textColor }}
            variants={childVariants}
          >
            Contact us
          </motion.h1>
          <form
            onSubmit={submitForm}
            className="flex flex-col justify-center items-center gap-4"
          >
            <motion.input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full md:w-60 px-2 py-1 bg-white text-black rounded"
              variants={childVariants}
            />
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full md:w-60 px-2 py-1 bg-white text-black rounded"
              variants={childVariants}
            />
            <motion.input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Your Number"
              className="w-full md:w-60 px-2 py-1 bg-white text-black rounded"
              variants={childVariants}
            />
            <motion.textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full md:w-60 px-2 py-1 bg-white text-black rounded"
              variants={childVariants}
            />
            <motion.button
              type="submit"
              className="mt-4 bg-gradient-to-r from-black to-[#144a9c] text-white px-4 py-2 font-bold rounded hover:bg-gradient-to-r hover:from-[#144a9c] hover:to-black hover:scale-125 hover:transition-all transition-all hover:duration-1000 duration-1000"
              variants={childVariants}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      )}
    </InView>
  );
};

export default Contact;
