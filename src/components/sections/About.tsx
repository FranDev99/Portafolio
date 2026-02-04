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

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 px-4 md:px-8 text-white">
      <div className="w-full flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Sobre Mí
        </h1>
        <div className="w-24 h-1 bg-blue-400 rounded-full mx-auto my-4"></div>
        <p className="text-lg md:text-xl max-w-3xl text-gray-300">
          Aquí encontrarás más información sobre mí, lo que hago y mis
          habilidades actuales principalmente en términos de programación y
          tecnología.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Sección Conóceme */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">
            Conóceme
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            ¡Hola! Soy un{" "}
            <span className="font-semibold text-white">
              desarrollador frontend
            </span>{" "}
            en constante aprendizaje. Tengo como propósito aplicar mis
            conocimientos para aportar a la sociedad mi granito de arena
            combinando
            <span className="font-semibold text-white">
              {" "}
              diseño, funcionalidad y rendimiento
            </span>
            .
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            Disfruto resolviendo problemas a través del código y mejorando la
            experiencia de los usuarios con cada proyecto.
            <span className="font-semibold text-white">
              {" "}
              Mi objetivo es aportar valor real
            </span>{" "}
            a quienes utilizan mis aplicaciones, asegurándome de que cada
            detalle marque la diferencia.
          </p>
        </div>

        {/* Sección Tecnologías y Formación */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-blue-300">Tecnologías</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mt-6">
            {[
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
                icon: <SiExpress className="text-black-400 text-2xl" />,
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
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-700 px-4 py-1 rounded-lg text-lg transition hover:scale-105 cursor-default"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Sección Formación */}
          <div className="mt-6 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-300">Formación</h2>
            <div className="py-2 rounded-lg">
              <p className="text-lg text-white font-semibold">
                Ingeniero Multimedia
              </p>
              <p className="text-gray-300">Universidad Autónoma de Occidente</p>
              <p className="text-gray-400 text-sm">
                - Graduado el 5 de octubre de 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
