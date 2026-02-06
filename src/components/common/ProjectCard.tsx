import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = memo(({ project }: ProjectCardProps) => (
  <article
    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col min-h-[400px] group"
    role="article"
    aria-labelledby={`project-title-${project.id || project.title}`}
  >
    <figure className="m-0">
      <img
        id={`project-img-${project.id || project.title}`}
        src={project.image}
        srcSet={`
          ${project.image.replace(/(\.\w+)$/, "-sm$1")} 400w,
          ${project.image} 800w
        `}
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={`${project.title}: ${project.description.slice(0, 50)}...`}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width={800}
        height={160}
      />
    </figure>
    <div className="p-4 flex flex-col flex-grow">
      <h3
        id={`project-title-${project.id || project.title}`}
        className="text-lg font-semibold text-blue-300"
      >
        {project.title}
      </h3>
      <p className="text-gray-300 text-sm mt-2">{project.description}</p>

      <div className="mt-3">
        <h4 className="text-sm font-semibold text-white">Tecnologías:</h4>
        <ul
          className="flex gap-2 mt-1 text-blue-400 text-lg flex-wrap"
          role="list"
        >
          {project.technologies.map((tech, i) => (
            <li key={i} className="bg-gray-700 px-2 py-1 rounded text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3">
        <h4 className="text-sm font-semibold text-white">Lo aprendido:</h4>
        <p className="text-gray-300 text-sm">{project.learning}</p>
      </div>

      <div className="mt-auto flex justify-end gap-3 pt-4">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-gray-700 text-white border-2 rounded-lg hover:bg-gray-600 flex items-center gap-2 text-sm transition-all"
          aria-label={`Repositorio de ${project.title}`}
        >
          <FaGithub /> Código
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-all"
          aria-label={`Demo en vivo de ${project.title}`}
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  </article>
));

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
