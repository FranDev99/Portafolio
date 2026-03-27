import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = memo(({ project }: ProjectCardProps) => (
  <article
    className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition"
    role="article"
    aria-labelledby={`project-title-${project.id || project.title}`}
  >
    {/* Imagen */}
    <figure className="md:w-1/3 w-full">
      <img
        id={`project-img-${project.id || project.title}`}
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover md:h-full"
        loading="lazy"
      />
    </figure>

    {/* Contenido */}
    <div className="p-6 flex flex-col md:w-2/3">
      {/* Título */}
      <h3
        id={`project-title-${project.id || project.title}`}
        className="text-xl font-semibold text-gray-900"
      >
        {project.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 text-sm mt-2">{project.description}</p>

      {/* Herramientas */}
      <div className="mt-4">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Herramientas
        </h4>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Resultado (clave) */}
      <div className="mt-4">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Resultado
        </h4>

        <p className="text-gray-600 text-sm mt-1">{project.learning}</p>
      </div>

      {/* Acciones */}
      <div className="mt-auto flex justify-between items-center pt-6">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800 text-sm flex items-center gap-1 transition"
          aria-label={`Repositorio de ${project.title}`}
        >
          <FaGithub />
          Código
        </a>

        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
          aria-label={`Ver proyecto ${project.title}`}
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  </article>
));

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
