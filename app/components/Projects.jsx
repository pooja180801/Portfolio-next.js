import { projectData } from "@/assets/assets";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20 mx-auto">
      <div className="p-6">
        <motion.h4
          className="text-center text-3xl font-bold font-ovo text-gray-900 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h4>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {projectData.map((project, index) => (
            <motion.li
              key={index}
              className="bg-white rounded-md shadow-sm border-l-4 border-purple-900 py-6 px-6 transition-transform duration-300 hover:shadow-md hover:-translate-x-1 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 italic mb-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-900 text-white py-1 px-3 rounded-full text-xs mr-2 mb-2 inline-block"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
                <p className="text-sm text-gray-800 mb-10">
                  {project.description}
                </p>
              </div>
              <div className="text-right mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-900 text-sm hover:underline"
                >
                  Source Code
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Projects;
