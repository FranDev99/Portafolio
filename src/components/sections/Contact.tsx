import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SocialLink from "../ui/SocialLink";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-16 px-5 text-center text-gray-800"
      aria-labelledby="contact-title"
    >
      <header className="mb-8">
        <h2
          id="contact-title"
          className="text-4xl md:text-5xl font-bold text-blue-600"
        >
          Contacto
        </h2>

        <div
          className="w-24 h-1 bg-blue-600 rounded-full mx-auto my-4"
          aria-hidden="true"
        ></div>

        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Estoy disponible para oportunidades como analista de datos. Si buscas
          apoyo en análisis, visualización o interpretación de datos, puedes
          contactarme directamente.
        </p>
      </header>

      {/* Redes sociales */}
      <div
        className="flex justify-center mt-8 gap-6 text-2xl text-gray-500"
        role="list"
        aria-label="Enlaces sociales"
      >
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
    </section>
  );
}
