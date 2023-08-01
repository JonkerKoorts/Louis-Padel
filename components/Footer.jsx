import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Logo from "../public/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer bg-black px-6 py-4 border-t-2 bg-gradient-to-r from-[#144a9c] to-black border-t-white">
      <div className="flex flex-col md:flex-row justify-between items-center text-center">
        <div className="logo text-2xl font-bold text-white mb-4 md:mb-0">
          <Link href="/">
            {" "}
            <Image alt="Logo" loading="eager" width="80" src={Logo} />
          </Link>
        </div>
        <div className="contact-details text-white">
          <div className="flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <p>Email: louis@lanzaconstruction.com</p>
          </div>
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <p>Phone: 073 424 5280</p>
          </div>
        </div>
        <div className="social-media flex justify-center">
          <Link
            href="https://www.instagram.com/laznaconstruction/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-[#ffa500]"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            href="https://www.facebook.com/Laznacon/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-[#ffa500]"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
