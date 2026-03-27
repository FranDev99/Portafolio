import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Análisis de Ventas Retail",
    description:
      "Análisis de datos de ventas para identificar patrones de consumo, productos más vendidos y oportunidades de mejora en ingresos.",
    image: "/images/retail.webp",
    technologies: ["Excel", "Power BI"],
    learning:
      "Identificación de productos más rentables y detección de tendencias mensuales para optimizar decisiones comerciales.",
    liveDemo: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "Análisis de Datos de Clientes",
    description:
      "Exploración de datos de clientes para segmentación y detección de comportamientos de compra.",
    image: "/images/clientes.webp",
    technologies: ["SQL", "Excel"],
    learning:
      "Segmentación de clientes y análisis de frecuencia de compra para mejorar estrategias de marketing.",
    liveDemo: "#",
    repo: "#",
  },
  {
    id: 3,
    title: "Dashboard de KPIs",
    description:
      "Creación de dashboard interactivo para visualización de métricas clave de negocio.",
    image: "/images/dashboard.webp",
    technologies: ["Power BI"],
    learning:
      "Diseño de dashboards enfocados en toma de decisiones con métricas claras y visualizaciones efectivas.",
    liveDemo: "#",
    repo: "#",
  },
];
