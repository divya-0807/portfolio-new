import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Projects } from "../data/Projects";
import { FaGithub } from "react-icons/fa";

const FeaturedProjects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const sectionTopRef = useRef(null); // ✅ Ref for top of section

  // Show more / show less logic
  const handleShowMore = () => {
    if (visibleCount >= Projects.length) {
      setVisibleCount(4);

      // ✅ Scroll to top of section
      if (sectionTopRef.current) {
        sectionTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  const isAllVisible = visibleCount >= Projects.length;

  return (
    <section id="section2" className="w-full min-h-screen py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Scroll target for "Show Less" */}
        <div ref={sectionTopRef}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-10 text-center"
          >
            Featured Work
          </motion.h2>
        </div>

        <div className="grid gap-12">
          {Projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7}}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-md w-full"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 w-full space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2 py-1 border border-white/20 rounded text-sm text-white"
                    >
                      {tech.icon} {tech.label}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
                    >
                      Live Preview
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more / Show less + View GitHub */}
        {Projects.length > 4 && (
          <div className="mt-10 text-center z-0 flex flex-col items-center gap-4">
            <button
              onClick={handleShowMore}
              className="cursor-pointer px-6 py-2 border border-white rounded-4xl hover:text-black hover:bg-white transition text-sm"
            >
              {isAllVisible ? "Show Less" : "Show More"}
            </button>

            {isAllVisible && (
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition text-sm"
              >
                <FaGithub /> View GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
