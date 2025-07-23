import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaJava, FaPython, FaDatabase, FaDocker, FaCloud } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMysql, SiAdobeaftereffects, SiAdobelightroom, SiAdobepremierepro, SiCanva, SiMongodb, SiPostgresql, SiFirebase, SiRedis, SiApachekafka, SiSpring, SiSpringboot, SiOracle } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { BiLogoMongodb, BiLogoCPlusPlus } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { BsCloud } from "react-icons/bs";

export const techStack = [
  {
    heading: "Frontend",
    stack: [
      { label: "HTML", icon: <FaHtml5 className="text-3xl hover:text-[#E34F26]" /> },
      { label: "CSS", icon: <FaCss3Alt className="text-3xl hover:text-[#264DE4]" /> },
      { label: "Tailwind", icon: <SiTailwindcss className="text-3xl hover:text-[#61DBFB]" /> },
      { label: "Framer-Motion", icon: <FiFramer className="text-3xl hover:text-[#C41277]" /> },
      { label: "Javascript", icon: <SiJavascript className="text-3xl hover:text-[#ffea60]" /> },
      { label: "React Js", icon: <FaReact className="text-3xl hover:text-[#61DAFB]" /> },
      { label: "Next Js", icon: <TbBrandNextjs className="text-3xl hover:text-[#3F51B5]" /> },
    ],
  },
  {
    heading: "Backend",
    stack: [
      { label: "Node Js", icon: <IoLogoNodejs className="text-3xl hover:text-[#68A063]" /> },
      { label: "Express Js", icon: <SiExpress className="text-3xl hover:text-[#F29111]" /> },
      { label: "Next Auth", icon: <TbBrandNextjs className="text-3xl hover:text-[#3F51B5]" /> },
      { label: "Spring", icon: <SiSpring className="text-3xl hover:text-[#6DB33F]" /> },
      { label: "Spring Boot", icon: <SiSpringboot className="text-3xl hover:text-[#6DB33F]" /> },
      { label: "Java", icon: <FaJava className="text-3xl hover:text-[#f89820]" /> },
    ],
  },
  {
    heading: "Database",
    stack: [
      { label: "MySQL", icon: <SiMysql className="text-3xl hover:text-[#00758F]" /> },
      { label: "MongoDB", icon: <BiLogoMongodb className="text-3xl hover:text-[#4DB33D]" /> },
      { label: "PostgreSQL", icon: <SiPostgresql className="text-3xl hover:text-[#336791]" /> },
      { label: "Oracle", icon: <SiOracle className="text-3xl hover:text-[#F80000]" /> },
      { label: "Firebase", icon: <SiFirebase className="text-3xl hover:text-[#FFCA28]" /> },
      { label: "Redis", icon: <SiRedis className="text-3xl hover:text-[#DC382D]" /> },
    ],
  },
  {
    heading: "Others",
    stack: [
      { label: "Python", icon: <FaPython className="text-3xl hover:text-[#3776AB]" /> },
      { label: "C++", icon: <BiLogoCPlusPlus className="text-3xl hover:text-[#00599C]" /> },
      { label: "Docker", icon: <FaDocker className="text-3xl hover:text-[#0db7ed]" /> },
      { label: "Kafka", icon: <SiApachekafka className="text-3xl hover:text-[#231F20]" /> },
      { label: "AWS", icon: <BsCloud className="text-3xl hover:text-[#FF9900]" /> },
    ],
  },
  {
    heading: "Creative",
    stack: [
      { label: "PremierePro", icon: <SiAdobepremierepro className="text-3xl hover:text-[#6178fa]" /> },
      { label: "AfterEffects", icon: <SiAdobeaftereffects className="text-3xl hover:text-[#CF96FD]" /> },
      { label: "LightRoom", icon: <SiAdobelightroom className="text-3xl hover:text-[#4da3bd]" /> },
      { label: "Figma", icon: <FaFigma className="text-3xl hover:text-[#B4C4F4]" /> },
      { label: "Canva", icon: <SiCanva className="text-3xl hover:text-[#20C4CB]" /> },
    ],
  },
  
];
