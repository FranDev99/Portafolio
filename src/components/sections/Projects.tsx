import { projects } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-16 px-4 md:px-8 text-gray-800"
      aria-labelledby="projects-title"
    >
      <div className="text-center mb-12">
        <h2
          id="projects-title"
          className="text-3xl md:text-5xl font-bold text-blue-600"
        >
          Proyectos
        </h2>

        <div
          className="w-24 h-1 bg-blue-600 rounded-full mx-auto my-4"
          aria-hidden="true"
        ></div>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Proyectos enfocados en análisis de datos, visualización y generación
          de insights según problemas reales de negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto" role="list">
        {projects.map((project) => (
          <ProjectCard key={project.id || project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
