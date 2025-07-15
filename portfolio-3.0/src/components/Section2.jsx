import React, { useState, useRef, useEffect } from "react";
import { Projects } from "../data/Projects";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedProjects = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // Handle scroll to change current project index
  const handleScroll = () => {
    const container = containerRef.current;
    const scrollPos = container.scrollTop;
    const height = container.clientHeight;
    const newIndex = Math.round(scrollPos / height);
    setCurrent(newIndex);
  };

  // Allow scroll to next section when last iframe is reached
  useEffect(() => {
    const container = containerRef.current;
    const handleWheel = (e) => {
      const isAtBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - 5;

      if (isAtBottom && e.deltaY > 0) {
        // Let the scroll pass to the rest of the page
        container.blur();
      }
    };

    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section id="section2" className="py-20 px-6 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Featured Work</h2>

      <div className="flex flex-col md:flex-row gap-10 scale-110">
        {/* Left: Iframe stack with hidden scrollbar */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="w-full md:w-1/2 h-[350px] overflow-y-scroll snap-y snap-mandatory space-y-4 border rounded-xl"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          <style>{`
            #section2 ::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {Projects.map((project, index) => (
            <motion.div
              key={index}
              className="h-[350px] snap-start rounded-xl overflow-hidden relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-full overflow-hidden rounded-xl">
                {/* iframe preview */}
                <iframe
                  src={project.liveUrl}
                  className="w-full h-full border-none pointer-events-none"
                  loading="lazy"
                  title={project.title}
                  scrolling="no"
                  style={{
                    overflow: "hidden",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "none",
                  }}
                />
                {/* Transparent clickable layer */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  title="Click to open project"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Project info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-semibold">{Projects[current].title}</h3>
              <p className="mt-2 text-gray-300">{Projects[current].description}</p>
              <div className="mt-4 flex flex-wrap gap-4 items-center">
                {Projects[current].stack.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {tech.icon}
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={Projects[current].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-white hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
