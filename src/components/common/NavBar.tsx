import { useState, useEffect, useCallback } from "react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre Mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 50);

    let lastVisibleSection = "inicio";

    for (let section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          lastVisibleSection = section.id;
        }
      }
    }

    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

    if (atBottom) {
      lastVisibleSection = "contacto";
    }

    setActiveSection(lastVisibleSection);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolling ? "backdrop-blur-md bg-gray-900/70 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        {/* Menú siempre visible en todas las resoluciones */}
        <ul className="flex flex-row space-x-8 md:flex-row md:space-y-0 md:space-x-10 text-gray-300 uppercase text-sm md:text-base">
          {sections.map(({ id, label }) => (
            <li key={id} className="relative text-center md:text-left">
              <button
                onClick={() => handleNavClick(id)}
                className={`hover:text-blue-400 transition-all cursor-pointer hover:scale-105 duration-300 ${
                  activeSection === id ? "text-blue-400 font-bold" : ""
                }`}
              >
                {label}
              </button>
              {activeSection === id && (
                <div className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-blue-400"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
