import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="w-4xl px-[12%] py-10 scroll-mt-20 mx-auto">
      <div className="p-6">
        <motion.h4
          className="text-center text-5xl font-ovo mb-8 text-purple-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h4>

        <motion.ul
          className="grid grid-cols-1 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.li
            className="bg-white rounded-md shadow-md border-l-4 border-purple-900 py-6 px-6 transition-transform duration-300 hover:shadow-lg hover:-translate-x-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-semibold text-purple-900">
                    Intern – Digital Transformation Team
                  </h3>
                  <span className="text-sm text-gray-600">
                    Jan 2025 – Present
                  </span>
                </div>
                <p className="text-gray-600 italic text-base mb-3">
                  WSO2 LLC, Sri Lanka
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm marker:text-purple-900">
                  <li>
                    Worked on internal application development projects within
                    the team.
                  </li>
                  <li>
                    Built and deployed features using{" "}
                    <span className="font-medium text-purple-900">
                      React, Ballerina, JWT, MySQL
                    </span>
                    , and{" "}
                    <span className="font-medium text-purple-900">Choreo</span>.
                  </li>
                  <li>
                    Integrated{" "}
                    <span className="font-medium text-purple-900">
                      NetSuite
                    </span>{" "}
                    to enhance business process automation.
                  </li>
                  <li>
                    Participated in product demos and gathered client feedback.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver secure,
                    scalable solutions.
                  </li>
                </ul>
              </div>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Experience;
