import { FaReact, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "GuitarLA",
    description:
      "Primer acercamiento a React, desarrollando un carrito de compras para una tienda de guitarras.",
    image: "/src/assets/images/projects/guitarla.webp",
    technologies: [
      <FaReact key="react" />,
      <FaJs key="js" />,
      <FaCss3Alt key="css" />,
    ],
    learning: "Gestión de componentes, props, useState y useEffect.",
    liveDemo: "https://resplendent-raindrop-62ab38.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/guitarla",
  },
  {
    title: "Calculadora de Propinas",
    description:
      "Proyecto con TypeScript y Tailwind CSS para mejorar estructura y diseño.",
    image: "/src/assets/images/projects/calculadora_propinas.webp",
    technologies: [
      <FaReact key="react" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    learning:
      "Introducción a TypeScript, hooks personalizados y optimización con useMemo.",
    liveDemo: "https://venerable-hotteok-ce6433.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/calculadora_propinas",
  },
  {
    title: "Contador de Calorías",
    description:
      "Registra calorías consumidas y gastadas para evaluar el déficit calórico.",
    image: "/src/assets/images/projects/contador_calorias.webp",
    technologies: [
      <FaReact key="react" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    learning:
      "Formularios avanzados, useReducer y almacenamiento en Local Storage.",
    liveDemo: "https://ornate-truffle-d0cd61.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/contador_calorias",
  },
  {
    title: "Controlador de Presupuesto",
    description:
      "Registra gastos y visualiza el presupuesto total mediante gráficos.",
    image: "/src/assets/images/projects/controlador_presupuesto.webp",
    technologies: [
      <FaReact key="react" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    learning: "useContext, gráficos y gestión de listas dinámicas.",
    liveDemo: "https://gleeful-empanada-e0bfb2.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/control_presupuesto",
  },
  {
    title: "Cocktail",
    description:
      "Este proyecto permite buscar bebidas según sus ingredientes y categorías, además de agregarlas a favoritos y visualizarlas en una página aparte.",
    image: "/src/assets/images/projects/bebidas.webp",
    technologies: [
      <FaReact key="react" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    learning:
      "React Router DOM, Zustand, Stores y Slices, Zod, APIs externas con Axios.",
    liveDemo: "https://jocular-dasik-b1eb40.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/Bebidas",
  },
  {
    title: "Recetas",
    description:
      "Este proyecto permite buscar recetas según sus ingredientes y categorías, a partir de una Api externa.",
    image: "/src/assets/images/projects/recetas.webp",
    technologies: [
      <FaReact key="react" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    learning: "Zustand, Stores y Slices, Zod, APIs externas con Axios.",
    liveDemo: "https://profound-strudel-d4f295.netlify.app/",
    repo: "https://github.com/FranDev99/Proyectos/tree/main/recetas_api",
  },
];
