import { FaHtml5 ,FaCss3Alt,FaReact ,FaFigma } from "react-icons/fa";
import { SiTailwindcss,SiJavascript,SiExpress ,SiMysql,SiAdobepremierepro ,SiAdobelightroom , SiAdobeaftereffects,SiCanva  } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { BiLogoTypescript,BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";

export const techStack = [
  {
    heading: "Frontend",
    stack: [
      { label: "HTML", icon: <FaHtml5 className="text-3xl hover:text-[#E34F26]" /> },
      {label:"CSS",icon:<FaCss3Alt className="text-3xl hover:text-[#264DE4]"/>},
      {label:"Tailwind",icon:<SiTailwindcss className="text-3xl hover:text-[#61DBFB]"/>},
      {label:"Framer-Motion",icon:<FiFramer className="text-3xl  hover:text-[#C41277]"/>},
      {label:"Javascript",icon:<SiJavascript className="text-3xl  hover:text-[#ffea60]"/>},
      // {label:"Typescript",icon:<BiLogoTypescript className="text-3xl  hover:text-[#007ACC]"/>},
      {label:"React Js",icon:<FaReact className="text-3xl  hover:text-[#61DAFB] "/>},
      {label:"Next Js",icon:<TbBrandNextjs className="text-3xl  hover:text-[#3F51B5]"/>},
    ],
  },
  {
    heading: "Backend",
    stack: [{label:"Node Js",icon:<IoLogoNodejs className="text-3xl  hover:text-[#68A063]"/>}, {label:"Express Js",icon:<SiExpress className="text-3xl  hover:text-[#F29111]"/>}, {label:"Next Auth",icon:<TbBrandNextjs className="text-3xl  hover:text-[#3F51B5]"/>}],
  },
  {
    heading: "Database",
    stack: [{label:"MySql",icon:<SiMysql className="text-3xl  hover:text-[#F29111]"/>}, {label:"MongoDB",icon:<BiLogoMongodb className="text-3xl  hover:text-[#4DB33d]"/>}],
  },{
    heading:"Creative",
    stack:[{label:"PremierePro",icon:<SiAdobepremierepro className="text-3xl hover:text-[#6178fa]"/>},{label:"AfterEffects",icon:<SiAdobeaftereffects className="text-3xl hover:text-[#CF96FD]"/>},{label:"LightRoom",icon:<SiAdobelightroom className="text-3xl hover:text-[#4da3bd]"/>},{label:"Figma",icon:<FaFigma className="text-3xl hover:text-[#B4C4F4]"/>},{label:"Canva",icon:<SiCanva className="text-3xl hover:text-[#20C4CB]"/>},]
  }
];
