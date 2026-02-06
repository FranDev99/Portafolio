import { projects } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-16 px-4 md:px-8 text-white"
      aria-labelledby="projects-title"
    >
      <div className="text-center mb-10">
        <h2
          id="projects-title"
          className="text-3xl md:text-5xl font-bold text-blue-400"
        >
          Proyectos
        </h2>
        <div
          className="w-24 h-1 bg-blue-400 rounded-full mx-auto my-4"
          aria-hidden="true"
        ></div>
        <p className="text-base md:text-lg text-gray-300">
          Algunos proyectos en los que he trabajado aplicando React.
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        role="list"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id || project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
