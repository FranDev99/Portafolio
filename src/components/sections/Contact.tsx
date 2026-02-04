import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="py-10 px-5 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-400">Contacto</h2>
      <div className="w-24 h-1 bg-blue-400 rounded-full mx-auto my-4"></div>
      <p className="mt-4 text-lg">
        Envíame un mensaje a <span className="text-blue-400">francisco.m.ocampo99@gmail.com</span>
      </p>

      <div className="flex justify-center mt-6 gap-6 text-3xl">
        <SocialLink href="https://github.com/FranDev99" icon={<FaGithub />} />
        <SocialLink href="https://www.linkedin.com/in/frandev99" icon={<FaLinkedin />} />
        <SocialLink href="https://mail.google.com/mail/?view=cm&fs=1&to=francisco.m.ocampo99@gmail.com" icon={<FaEnvelope />} />
      </div>
    </section>
  );
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-400 transition-all duration-300 hover:scale-110"
  >
    {icon}
  </a>
);
