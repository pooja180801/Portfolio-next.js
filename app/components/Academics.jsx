import { certificatesData, educationData, infoList } from "@/assets/assets";
import { motion } from "framer-motion";
import React from "react";

const Academics = () => {
  return (
    <div id="academics" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h2
        className="text-center text-5xl font-ovo mb-8 text-purple-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Academics
      </motion.h2>

      {/* Education Section */}
      <motion.div
        className="p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h4 className="text-center text-3xl font-bold font-ovo text-gray-800 mb-10">
          Education
        </h4>
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {educationData.map(({ level, school, result, date }, index) => (
            <motion.li
              key={index}
              className="bg-white rounded-md shadow-sm border-l-4 border-purple-900 py-6 px-6 transition-transform duration-300 hover:shadow-md hover:-translate-x-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {level}
                    </h3>
                    <span className="text-sm text-gray-500">{date}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{school}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{result}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Certifications Section */}
      {certificatesData && certificatesData.length > 0 && (
        <motion.div
          className="p-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-center text-3xl font-bold font-ovo text-gray-800 mb-10">
            Certifications
          </h4>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {certificatesData.map(
              ({ title, issuer, date, credentialURL }, index) => (
                <motion.li
                  key={index}
                  className="bg-white rounded-md shadow-sm border-l-4 border-purple-900 py-6 px-6 transition-transform duration-300 hover:shadow-md hover:-translate-x-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Issuer: {issuer}
                      </p>
                      <p className="text-sm text-gray-500">{date}</p>
                    </div>
                    {credentialURL && (
                      <a
                        href={credentialURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-purple-900 hover:underline text-sm font-medium"
                      >
                        View Credential
                      </a>
                    )}
                  </div>
                </motion.li>
              )
            )}
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
};

export default Academics;
