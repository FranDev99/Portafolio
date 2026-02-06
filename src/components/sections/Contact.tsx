import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SocialLink from "../ui/SocialLink";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-10 px-5 text-center text-white"
      aria-labelledby="contact-title"
    >
      <header className="mb-6">
        {" "}
        {/* Semántico */}
        <h2
          id="contact-title"
          className="text-4xl md:text-5xl font-bold text-blue-400"
        >
          Contacto
        </h2>
        <div
          className="w-24 h-1 bg-blue-400 rounded-full mx-auto my-4"
          aria-hidden="true"
        ></div>
      </header>

      <address className="not-italic">
        {" "}
        {/* Semántico: contacto */}
        <p className="mt-4 text-lg">
          Envíame un mensaje a{" "}
          <a
            href="mailto:francisco.m.ocampo99@gmail.com"
            className="text-blue-400 hover:underline"
            aria-label="Enviar email a Francisco Mejía"
          >
            francisco.m.ocampo99@gmail.com
          </a>
        </p>
      </address>

      <div
        className="flex justify-center mt-6 gap-6 text-3xl"
        role="list"
        aria-label="Enlaces sociales"
      >
        <SocialLink
          href="https://github.com/FranDev99"
          icon={<FaGithub />}
          label="Perfil de GitHub de Francisco Mejía"
        />
        <SocialLink
          href="https://www.linkedin.com/in/frandev99"
          icon={<FaLinkedin />}
          label="Perfil de LinkedIn de Francisco Mejía"
        />
        <SocialLink
          href="https://mail.google.com/mail/?view=cm&fs=1&to=francisco.m.ocampo99@gmail.com"
          icon={<FaEnvelope />}
          label="Enviar email a Francisco Mejía"
        />
      </div>
    </section>
  );
}
