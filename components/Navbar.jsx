"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAddressCard,
  faHandshake,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "../public/Logo.png";

const navbarVariants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        return;
      }

      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-black px-6 py-4 border-b-2 bg-gradient-to-r from-[#144a9c] to-black border-b-white">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-white md:text-3xl">
          <Link href="/">
            <Image width="80" src={Logo} />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} color="white" />
          </button>
          <div ref={node}>
            <motion.div
              className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden w-64 z-20"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={navbarVariants}
              transition={{ duration: 0.8, type: "spring", bounce: 0.35 }}
            >
              <div className="py-2">
                <Link
                  href="#about"
                  className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon className="mr-2" icon={faHandshake} />
                  About
                </Link>
                <Link
                  href="#what"
                  className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon className="mr-2" icon={faStar} />
                  What we do
                </Link>
                <Link
                  href="#contact"
                  className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon className="mr-2" icon={faAddressCard} />
                  Contact
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-10">
          <Link
            className="text-sm font-medium text-white hover:text-[#ffa500]"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-white hover:text-[#ffa500]"
            href="#what"
          >
            What
          </Link>
          <Link
            className="text-sm font-medium text-white hover:text-[#ffa500]"
            href="#contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
