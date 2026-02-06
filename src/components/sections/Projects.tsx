import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 px-4 md:px-8 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-400">
          Proyectos
        </h2>
        <div className="w-24 h-1 bg-blue-400 rounded-full mx-auto my-4"></div>
        <p className="text-base md:text-lg text-gray-300">
          Algunos proyectos en los que he trabajado aplicando React.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col min-h-[400px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-blue-300">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                {project.description}
              </p>

              <div className="mt-3">
                <h4 className="text-sm font-semibold text-white">
                  Tecnologías:
                </h4>
                <div className="flex gap-2 mt-1 text-blue-400 text-lg">
                  {project.technologies}
                </div>
              </div>

              <div className="mt-3">
                <h4 className="text-sm font-semibold text-white">
                  Lo aprendido:
                </h4>
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
