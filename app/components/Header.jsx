import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2">
      {/* Add animation to the profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-28 h-25 mt-10"
        />
      </motion.div>

      {/* Add animation to the greeting text */}
      <motion.h3
        style={{ fontFamily: "var(--font-ovo)" }}
        className="flex items-end gap-2 text-xl mf:text-2xl mb-3"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hi! I'm Pooja Kulachelvam
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      {/* Add animation to the role title */}
      <motion.h2
        style={{ fontFamily: "var(--font-ovo)" }}
        className="text-xl sm:text:2xl lg:text-[55px] text-purple-900"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Full Stack Developer.
      </motion.h2>

      {/* Add animation to the description */}
      <motion.p
        style={{ fontFamily: "var(--font-ovo)" }}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        I am a Detail-oriented and passionate final year Software Engineering
        undergraduate with a strong interest in full-stack development.
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <a
          href="https://github.com/pooja180801"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 text-purple-900 hover:scale-110 transition hover:text-black" />
        </a>
        <a
          href="https://www.linkedin.com/in/pooja-kulachelvam-b02255246/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 text-purple-900 hover:scale-110 transition hover:text-black" />
        </a>
        <a
          href="https://www.hackerrank.com/profile/kulampooja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank className="w-6 h-6 text-purple-900 hover:scale-110 transition hover:text-black" />
        </a>
      </motion.div>

      {/* Add animation to buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-purple-900 text-white flex items-center gap-2 hover:bg-black"
        >
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/CV-Pooja Kulachelvam.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
