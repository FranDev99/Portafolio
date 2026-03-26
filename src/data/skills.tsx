import { FaDatabase, FaGitAlt, FaGithub, FaChartBar } from "react-icons/fa";
import { SiPython, SiPandas } from "react-icons/si";

export const skills = [
  {
    icon: <FaDatabase className="text-blue-600 text-2xl" />,
    name: "SQL",
  },
  {
    icon: <FaChartBar className="text-green-600 text-2xl" />,
    name: "Excel",
  },
  {
    icon: <FaChartBar className="text-yellow-500 text-2xl" />,
    name: "Power BI",
  },
  {
    icon: <SiPython className="text-blue-500 text-2xl" />,
    name: "Python",
  },
  {
    icon: <SiPandas className="text-gray-700 text-2xl" />,
    name: "Pandas",
  },
  {
    icon: <FaGitAlt className="text-orange-500 text-2xl" />,
    name: "Git",
  },
  {
    icon: <FaGithub className="text-gray-800 text-2xl" />,
    name: "GitHub",
  },
];
