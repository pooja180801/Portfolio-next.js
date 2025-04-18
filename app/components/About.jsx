import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h2
        className="text-center text-5xl font-ovo mb-8 text-purple-900"
        initial={{ opacity: 0.2, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-start gap-20 my-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none my-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.p
          className="max-w-2xl font-ovo"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          I'm a passionate software engineering student with a deep interest in
          full-stack development. I enjoy building scalable and modern web
          applications using a wide range of tools and technologies, including
          both frontend and backend frameworks. Over the past six months, I’ve
          further honed my skills through a hands-on internship, where I worked
          on real-world projects, collaborated with cross-functional teams, and
          gained valuable experience in writing clean, efficient code and
          deploying production-ready applications. This experience has
          strengthened my problem-solving abilities and deepened my enthusiasm
          for creating impactful digital solutions.
        </motion.p>
      </motion.div>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {infoList.map(({ icon, title, description }, index) => (
          <motion.li
            key={index}
            className="bg-white rounded-lg shadow-md p-3 cursor-pointer transition duration-300 ease-in-out hover:shadow-lg border-l-4 border-purple-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-1 hover:text-white">
              {icon && (
                <div className="rounded-full bg-gray-200 p-1 transition duration-300 ease-in-out hover:bg-purple-200">
                  <img src={icon} alt={title} className="w-3 h-3" />
                </div>
              )}
              <div className="flex items-center justify-between w-full">
                <h3 className="font-semibold text-md text-gray-800">{title}</h3>
                <p className="text-gray-600 text-[14px]">{description}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default About;
