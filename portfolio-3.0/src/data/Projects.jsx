import Interview from "../assets/Cards/Interview.png";
import Reader from "../assets/Cards/ClumsyReader.png";
import Dashboard from "../assets/Cards/Admin.png";
import ClumsyChats from "../assets/Cards/ClumsyChats.png";

import { FaReact, FaGithub, FaDatabase } from "react-icons/fa";
import { 
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiFirebase,
  SiMysql,
  SiNextdotjs,
  SiLangchain,
  SiClerk,
  SiRedux,
  SiMongodb,
  SiChartdotjs
} from "react-icons/si";

export const Projects = [
  {
    title: "ClumsyInterviews",
    description:
      "ClumsyInterviews is an AI-based mock interview platform that uses Google Gemini AI and Clerk authentication to simulate real-time technical interviews. Users can practice with realistic questions, get instant feedback, and analyze their performance using an intuitive UI. Built on Next.js with MySQL backend, it's a tool designed for serious interview prep.",
    stack: [
      { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { label: "MySQL", icon: <SiMysql className="text-yellow-300" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
      { label: "Clerk", icon: <SiClerk className="text-blue-400" /> },
    ],
    liveUrl: "https://clumsyinterviews.vercel.app/",
    githubUrl: "https://github.com/BOSON-18/clumsyinterviews-next",
    image: Interview,
  },
  {
    title: "ClumsyReader",
    description:
      "ClumsyReader is a powerful PDF summarizer app leveraging LangChain and Google Gemini AI. It processes and summarizes large documents using Pinecone embeddings and Firebase for user auth. Designed for students and researchers, it enables deep insights into complex PDFs in seconds.",
    stack: [
      { label: "LangChain", icon: <SiLangchain className="text-purple-300" /> },
      { label: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
      { label: "Pinecone", icon: <FaDatabase className="text-green-500" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
    ],
    liveUrl: "https://clumsyreader.vercel.app/",
    githubUrl: "https://github.com/BOSON-18/ClumsyReader",
    image: Reader,
  },
  {
    title: "Study-Stream",
    description:
      "Study-Stream is a chat-based study tool built with Clerk and Stream for authentication and messaging. The app supports real-time collaborative learning through interactive sessions, customizable channels, and a clean, minimal UI. Perfect for group study, team projects, or classroom chat.",
    stack: [
      { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { label: "Clerk", icon: <SiClerk className="text-blue-400" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
    ],
    liveUrl: "https://clumsy-chats.vercel.app/",
    githubUrl: "https://github.com/BOSON-18/clumsyChats",
    image: ClumsyChats,
  },
  {
    title: "Attendance Dashboard",
    description:
      "A feature-rich admin dashboard for managing attendance records. Built using ReactJS, Redux, Node.js, and MongoDB, this project includes real-time analytics with Chart.js, responsive design, and user management. Great for educational institutions and company HR use cases.",
    stack: [
      { label: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { label: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Chart.js", icon: <SiChartdotjs className="text-red-400" /> },
    ],
    liveUrl: "", // No live site
    githubUrl: "https://github.com/BOSON-18/newDash",
    image: Dashboard,
  },
    {
    title: "ClumsyInterviews",
    description:
      "ClumsyInterviews is an AI-based mock interview platform that uses Google Gemini AI and Clerk authentication to simulate real-time technical interviews. Users can practice with realistic questions, get instant feedback, and analyze their performance using an intuitive UI. Built on Next.js with MySQL backend, it's a tool designed for serious interview prep.",
    stack: [
      { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { label: "MySQL", icon: <SiMysql className="text-yellow-300" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
      { label: "Clerk", icon: <SiClerk className="text-blue-400" /> },
    ],
    liveUrl: "https://clumsyinterviews.vercel.app/",
    githubUrl: "https://github.com/BOSON-18/clumsyinterviews-next",
    image: Interview,
  },
  {
    title: "ClumsyReader",
    description:
      "ClumsyReader is a powerful PDF summarizer app leveraging LangChain and Google Gemini AI. It processes and summarizes large documents using Pinecone embeddings and Firebase for user auth. Designed for students and researchers, it enables deep insights into complex PDFs in seconds.",
    stack: [
      { label: "LangChain", icon: <SiLangchain className="text-purple-300" /> },
      { label: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
      { label: "Pinecone", icon: <FaDatabase className="text-green-500" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
    ],
    liveUrl: "https://clumsyreader.vercel.app/",
    githubUrl: "https://github.com/BOSON-18/ClumsyReader",
    image: Reader,
  },
  {
    title: "Study-Stream",
    description:
      "Study-Stream is a chat-based study tool built with Clerk and Stream for authentication and messaging. The app supports real-time collaborative learning through interactive sessions, customizable channels, and a clean, minimal UI. Perfect for group study, team projects, or classroom chat.",
    stack: [
      { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { label: "Clerk", icon: <SiClerk className="text-blue-400" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
    ],
    liveUrl: "https://clumsy-chats.vercel.app/",
    githubUrl: "https://github.com/BOSON-18/clumsyChats",
    image: ClumsyChats,
  },
  {
    title: "Attendance Dashboard",
    description:
      "A feature-rich admin dashboard for managing attendance records. Built using ReactJS, Redux, Node.js, and MongoDB, this project includes real-time analytics with Chart.js, responsive design, and user management. Great for educational institutions and company HR use cases.",
    stack: [
      { label: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { label: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
      { label: "Chart.js", icon: <SiChartdotjs className="text-red-400" /> },
    ],
    liveUrl: "", // No live site
    githubUrl: "https://github.com/BOSON-18/newDash",
    image: Dashboard,
  },
];
