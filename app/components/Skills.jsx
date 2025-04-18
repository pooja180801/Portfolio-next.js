import { technologies, tools } from "@/assets/assets";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Skills = () => {
  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h2
        className="text-center text-5xl font-ovo mb-8 text-purple-900"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="rounded-lg p-6">
        <motion.h4
          className="text-center mt-5 mb-10 text-3xl font-ovo font-bold"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Languages, Frameworks & Libraries
        </motion.h4>
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {technologies.map(({ name, icon }, index) => (
            <motion.li
              key={index}
              className="group relative flex flex-row items-center justify-center gap-3 hover:-translate-y-1 duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-md p-2 shadow-sm group-hover:bg-purple-900 transition-colors duration-200 border-l-4 border-purple-900">
                <img src={icon} alt={name} className="w-15 h-15" />
              </div>
              <span className="opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 transition-opacity duration-200">
                {name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="rounded-lg p-6">
        <motion.h4
          className="text-center mt-5 mb-10 text-3xl font-ovo font-bold"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tools I Use
        </motion.h4>
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {tools.map(({ name, icon }, index) => (
            <motion.li
              key={index}
              className="group relative flex items-center justify-center gap-3 font-ovo hover:-translate-y-1 duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-md p-2 shadow-sm group-hover:bg-purple-900 transition-colors duration-200 border-l-4 border-purple-900">
                <img src={icon} alt={name} className="w-15 h-15" />
              </div>
              <span className="opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 transition-opacity duration-200">
                {name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Skills;
