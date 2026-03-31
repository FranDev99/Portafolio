import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useHeroVisibility } from "../../hooks/useHeroVisibility";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import SocialLink from "../ui/SocialLink";

export default function Hero() {
  const { isHeroVisible } = useHeroVisibility("inicio");
  const { scrollToId } = useSmoothScroll();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:gap-10"
    >
      {/* Redes sociales */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl hidden lg:flex flex-col gap-6">
        <SocialLink
          href="https://github.com/FranDev99"
          icon={<FaGithub />}
          label="GitHub"
        />
        <SocialLink
          href="https://www.linkedin.com/in/frandev99"
          icon={<FaLinkedin />}
          label="LinkedIn"
        />
        <SocialLink
          href="https://mail.google.com/mail/?view=cm&fs=1&to=francisco.m.ocampo99@gmail.com"
          icon={<FaEnvelope />}
          label="Email"
        />
      </div>

      {/* Imagen */}
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <img
          src="/images/character.png"
          alt="Francisco Mejía"
          className="sm:w-48 md:w-64 lg:w-100 rounded-full shadow-md"
        />
      </div>

      {/* Contenido */}
      <div className="w-full max-w-2xl flex flex-col items-center md:items-start space-y-4 mt-6 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold">Francisco Mejía</h1>

        <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
          Analista de Datos
        </h2>

        <p className="text-gray-600 text-lg max-w-xl">
          Transformo datos en insights accionables mediante análisis,
          visualización y modelado.
        </p>

        <div className="flex items-center gap-2 text-gray-500">
          <FaMapMarkerAlt />
          <span>Cali, Colombia</span>
        </div>

        {/* Botones */}
        <div className="flex gap-3 mt-4">
          <a
            href="/documents/francisco_mejia_cv.pdf"
            download="francisco_mejia_cv.pdf"
            className="px-5 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition"
          >
            Descargar CV
          </a>

          <button
            onClick={() => scrollToId("proyectos")}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Ver Proyectos
          </button>
        </div>
      </div>

      {/* Flecha */}
      <button
        onClick={() => scrollToId("sobre-mi")}
        aria-label="Ir a Sobre mí"
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-3xl cursor-pointer hover:text-gray-700 transition ${
          isHeroVisible ? "animate-bounce" : "hidden"
        } hidden sm:block`}
      >
        <FaChevronDown />
      </button>
    </section>
  );
}
