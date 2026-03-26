import { skills } from "../../data/skills";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-16 px-4 md:px-8 text-gray-800"
      aria-labelledby="about-title"
    >
      <div className="w-full flex flex-col items-center text-center mb-16">
        <h1
          id="about-title"
          className="text-4xl md:text-5xl font-bold text-blue-600"
        >
          Sobre Mí
        </h1>
        <div
          className="w-24 h-1 bg-blue-600 rounded-full mx-auto my-4"
          aria-hidden="true"
        ></div>
        <p className="text-lg md:text-xl max-w-3xl text-gray-600">
          Conoce mi enfoque en análisis de datos, las herramientas que utilizo y
          cómo transformo información en valor para la toma de decisiones.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Sección Conóceme */}
        <article className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">
            Enfoque Profesional
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Soy{" "}
            <span className="font-semibold text-gray-800">
              analista de datos
            </span>{" "}
            con formación en ingeniería multimedia, enfocado en transformar
            datos en información útil para la toma de decisiones.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            Trabajo con herramientas como{" "}
            <span className="font-semibold text-gray-800">
              SQL, Excel y Power BI
            </span>{" "}
            para limpiar, analizar y visualizar datos, generando insights claros
            y accionables.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            Mi enfoque combina pensamiento analítico, claridad en la
            visualización y una base técnica que me permite entender los datos
            desde una perspectiva estructurada.
          </p>
        </article>

        {/* Sección Tecnologías y Formación */}
        <aside className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Herramientas</h2>

          <ul
            role="list"
            aria-label="Tecnologías y herramientas"
            className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mt-6"
          >
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-2 bg-gray-200 px-4 py-1 rounded-lg text-gray-700 text-sm transition hover:scale-105 cursor-default"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>

          {/* Formación */}
          <div className="mt-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-500">Formación</h2>

            <div className="py-2">
              <p className="text-lg text-gray-800 font-semibold">
                Ingeniero Multimedia
              </p>
              <p className="text-gray-600">Universidad Autónoma de Occidente</p>
              <p className="text-gray-500 text-sm">
                Graduado en octubre de 2024
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
