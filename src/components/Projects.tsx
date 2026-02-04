import { FaReact, FaGithub, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "GuitarLA",
    description:
      "Primer acercamiento a React, desarrollando un carrito de compras para una tienda de guitarras.",
    image: "/guitarla.webp",
    technologies: [<FaReact key="react" />, <FaJs key="js" />, <FaCss3Alt key="css" />],
    learning: "Gestión de componentes, props, useState y useEffect.",
    liveDemo: "https://resplendent-raindrop-62ab38.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/guitarla",
  },
  {
    title: "Calculadora de Propinas",
    description:
      "Proyecto con TypeScript y Tailwind CSS para mejorar estructura y diseño.",
    image: "/calculadora_propinas.webp",
    technologies: [<FaReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tailwind" />],
    learning: "Introducción a TypeScript, hooks personalizados y optimización con useMemo.",
    liveDemo: "https://venerable-hotteok-ce6433.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/calculadora_propinas",
  },
  {
    title: "Contador de Calorías",
    description:
      "Registra calorías consumidas y gastadas para evaluar el déficit calórico.",
    image: "/contador_calorias.webp",
    technologies: [<FaReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tailwind" />],
    learning: "Formularios avanzados, useReducer y almacenamiento en Local Storage.",
    liveDemo: "https://ornate-truffle-d0cd61.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/contador_calorias",
  },
  {
    title: "Controlador de Presupuesto",
    description:
      "Registra gastos y visualiza el presupuesto total mediante gráficos.",
    image: "/controlador_presupuesto.webp",
    technologies: [<FaReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tailwind" />],
    learning: "useContext, gráficos y gestión de listas dinámicas.",
    liveDemo: "https://gleeful-empanada-e0bfb2.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/control_presupuesto",
  },
  {
    title: "Cocktail",
    description:
      "Este proyecto permite buscar bebidas según sus ingredientes y categorías, además de agregarlas a favoritos y visualizarlas en una página aparte.",
    image: "/bebidas.webp",
    technologies: [<FaReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tailwind" />],
    learning: "React Router DOM, Zustand, Stores y Slices, Zod, APIs externas con Axios.",
    liveDemo: "https://jocular-dasik-b1eb40.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/Bebidas",
  },
  {
    title: "Recetas",
    description:
      "Este proyecto permite buscar recetas según sus ingredientes y categorías, a partir de una Api externa.",
    image: "/recetas.webp",
    technologies: [<FaReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tailwind" />],
    learning: "Zustand, Stores y Slices, Zod, APIs externas con Axios.",
    liveDemo: "https://profound-strudel-d4f295.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/recetas_api",
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 px-4 md:px-8 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-400">Proyectos</h2>
        <div className="w-24 h-1 bg-blue-400 rounded-full mx-auto my-4"></div>
        <p className="text-base md:text-lg text-gray-300">
          Algunos proyectos en los que he trabajado aplicando React.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col min-h-[400px]">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-blue-300">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>

              <div className="mt-3">
                <h4 className="text-sm font-semibold text-white">Tecnologías:</h4>
                <div className="flex gap-2 mt-1 text-blue-400 text-lg">{project.technologies}</div>
              </div>

              <div className="mt-3">
                <h4 className="text-sm font-semibold text-white">Lo aprendido:</h4>
                <p className="text-gray-300 text-sm">{project.learning}</p>
              </div>

              {/* Botones alineados abajo */}
              <div className="mt-auto flex justify-end gap-3 pt-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-gray-700 text-white border-2 rounded-lg hover:bg-gray-600 flex items-center gap-2 text-sm"
                >
                  <FaGithub /> Código
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  Ver Proyecto
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
