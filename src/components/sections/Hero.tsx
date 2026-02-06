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
      {/* Iconos sociales */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-300 text-3xl hidden lg:flex flex-col gap-6">
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

      {/* Imagen optimizada */}
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <img
          src="/images/personaje.webp"
          srcSet="/images/personaje.webp 480w, /images/personaje.webp 768w, /images/personaje.webp 1200w" // Nuevo: responsive
          sizes="(max-width: 768px) 56w, (max-width: 1024px) 72w, 96w"
          alt="Ilustración de Francisco Mejía"
          loading="lazy"
          className="sm:w-56 md:w-72 lg:w-96 animate-[float_3s_ease-in-out_infinite] hover:scale-105 transition-transform duration-300 rounded-full"
          width={384}
          height={384}
        />
      </div>

      {/* Contenido */}
      <div className="w-full max-w-2xl flex flex-col items-center md:items-start text-center md:text-left space-y-4 mt-6 md:mt-0">
        <h2 className="text-4xl md:text-5xl font-semibold">¡Hola!</h2>
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold">
          Soy <span className="text-blue-400">Francisco Mejía</span>
        </h2>
        <p className="text-lg text-gray-300 md:text-xl max-w-xl">
          Ingeniero de Multimedia
        </p>
        <div className="flex items-center gap-2 text-lg text-gray-300 md:text-xl">
          <FaMapMarkerAlt />
          <p>Cali, Colombia.</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4 mt-4">
          <div className="flex flex-row justify-center md:justify-start gap-2 w-full">
            <a
              href="/documents/francisco_mejia_cv.pdf"
              download="francisco_mejia_cv.pdf"
              className="px-4 py-2 bg-gray-700 border-2 text-white rounded-lg font-semibold 
                hover:bg-gray-600 hover:scale-105 transition-transform duration-300 w-auto"
            >
              Descargar CV
            </a>
            <button
              onClick={() => scrollToId("proyectos")}
              className="px-4 py-2 rounded-lg cursor-pointer font-semibold bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white transition-transform duration-300 w-auto"
            >
              Ver Proyectos
            </button>
          </div>
        </div>
      </div>

      {/* Flecha */}
      <button
        onClick={() => scrollToId("sobre-mi")}
        aria-label="Ir a Sobre mí"
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 text-blue-400 text-4xl cursor-pointer hover:text-blue-300 hover:scale-110 transition-transform duration-300 ${
          isHeroVisible ? "animate-bounce" : "hidden"
        } hidden sm:block`}
      >
        <FaChevronDown />
      </button>
    </section>
  );
}
