import Chatbot from "../assets/Cards/chatbot.png";
import Chatapp from "../assets/Cards/chatapplication.png";
import Spendora from "../assets/Cards/financly.png";
import Todo from "../assets/Cards/todo.png";
import Swiggy from "../assets/Cards/swiggy.png";
import Webwise from "../assets/Cards/webwise.png";

import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiFirebase,
  SiRedux,
  SiMongodb,
  SiChartdotjs,
} from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";

export const Projects = [
  {
    title: "BEANIE - AI Powered ChatBot",
    description:
      "Architected a SaaS-based AI chatbot using the Gemini API, enabling users to sign up, log in, and interact in real-time with an intelligent assistant through a fully accessible web interface. Integrated secure 6-digit OTP-based password recovery via email, persistent chat history management, and message deletion features. Elevated UX with interactive 3D elements using Three.js, delivering a modern, visually engaging interface.",
    stack: [
      { label: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { label: "Express.js", icon: <FaGithub className="text-gray-300" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Three.js", icon: <SiThreedotjs className="text-white" /> },
    ],
    liveUrl: "https://chatbot-ppzx.onrender.com/",
    githubUrl: "https://github.com/divya-0807/Chatbot",
    image: Chatbot,
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app supporting modern authentication, responsive design, and instant messaging. Built with React (Vite), Express, and MongoDB. Used Socket.IO for live message delivery and JWT for secure login. Features include user profile management, avatar support, dark/light themes, and API-driven architecture.",
    stack: [
      { label: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { label: "Express.js", icon: <FaGithub className="text-gray-300" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
    ],
    liveUrl: "https://chat-applicatiom.onrender.com/login",
    githubUrl: "https://github.com/divya-0807/chat-Applicatiom",
    image: Chatapp,
  },
  {
    title: "SPENDORA - Finance Tracker",
    description:
      "Spendora helps users monitor income, expenses, and savings. Features Google-based auth, transaction history, categorized analytics, and real-time charts. Built with React, Firebase, and Redux for seamless data flow and UI state management. UI styled with Shadcn and Tailwind CSS for responsive, modern layout.",
    stack: [
      { label: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { label: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Chart.js", icon: <SiChartdotjs className="text-red-400" /> },
    ],
    liveUrl: "https://spendora-9e2c3.web.app/",
    githubUrl: "https://github.com/divya-0807/Spendora",
    image: Spendora,
  },
  {
    title: "TODO List Backend API",
    description:
      "RESTful backend API for managing to-do lists. Built using Node.js, Express, and MongoDB with Mongoose. Provides CRUD operations with strong validation, modular route handling, and clean REST principles. Tested using Postman for robust and scalable integration in frontend systems.",
    stack: [
      { label: "Express.js", icon: <FaGithub className="text-gray-300" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { label: "Node.js", icon: <FaGithub className="text-green-400" /> },
    ],
    liveUrl: "https://github.com/divya-0807/To-do-LisT--Backend-API",
    githubUrl: "https://github.com/divya-0807/To-do-LisT--Backend-API",
    image: Todo,
  },
  {
    title: "Swiggy Clone",
    description:
      "Swiggy clone with restaurant browsing, cart management, and mock API-based menus. Built using ReactJS, Tailwind CSS, and Redux for consistent state handling. Implements routing via React Router and modular components for scalability and smooth UI transitions.",
    stack: [
      { label: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { label: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "React Router", icon: <FaGithub className="text-blue-300" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    ],
    liveUrl: "https://github.com/divya-0807/Swiggy-Clone",
    githubUrl: "https://github.com/divya-0807/Swiggy-Clone",
    image: Swiggy,
  },
  {
    title: "WebWise - Frontend Project",
    description:
      "Interactive frontend for a digital agency using ReactJS, Tailwind CSS, and Framer Motion. Designed for responsive performance and polished transitions. Features clean animations, intuitive layout, and scalable component-based structure to ensure seamless UX across devices.",
    stack: [
      { label: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
    ],
    liveUrl: "https://webwise-beryl.vercel.app/",
    githubUrl: "https://github.com/divya-0807/Webwise",
    image: Webwise,
  },
];
