import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiAxios, SiJavascript } from "react-icons/si";

export const Projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React, showcasing work and animation effects.",
    stack: [
      { label: "React", icon: <FaReact className="text-cyan-400" /> },
      { label: "Tailwind", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
    ],
    liveUrl: "https://chatbot-ppzx.onrender.com/",
    githubUrl: "https://github.com/yourname/portfolio",
  },
  {
    title: "Weather App",
    description: "Weather forecast app using OpenWeatherMap API with real-time updates.",
    stack: [
      { label: "React", icon: <FaReact className="text-cyan-400" /> },
      { label: "Axios", icon: <SiAxios className="text-indigo-400" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    ],
    liveUrl: "https://chatbot-ppzx.onrender.com/",
    githubUrl: "https://github.com/yourname/weather-app",
  }
];
