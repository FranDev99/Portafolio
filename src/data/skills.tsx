import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

export const skills = [
  // Extrae array para reutilización/claridad
  {
    icon: <FaHtml5 className="text-orange-500 text-2xl" />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
    name: "CSS",
  },
  {
    icon: <FaJs className="text-yellow-400 text-2xl" />,
    name: "JavaScript",
  },
  {
    icon: <FaReact className="text-blue-400 text-2xl" />,
    name: "React",
  },
  {
    icon: <SiTypescript className="text-blue-500 text-2xl" />,
    name: "TypeScript",
  },
  {
    icon: <SiNodedotjs className="text-green-400 text-2xl" />,
    name: "Node",
  },
  {
    icon: <SiExpress className="text-gray-400 text-2xl" />, // Corregido: gray en lugar de black
    name: "Express",
  },
  {
    icon: <SiTailwindcss className="text-blue-300 text-2xl" />,
    name: "Tailwind",
  },
  {
    icon: <FaGitAlt className="text-red-500 text-2xl" />,
    name: "Git",
  },
  {
    icon: <FaGithub className="text-white text-2xl" />,
    name: "GitHub",
  },
];
