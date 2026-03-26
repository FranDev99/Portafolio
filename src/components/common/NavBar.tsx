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
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

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
        scrolling
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <ul className="flex flex-row space-x-8 md:space-x-10 text-gray-600 uppercase text-sm md:text-base font-medium">
          {sections.map(({ id, label }) => (
            <li key={id} className="relative">
              <button
                onClick={() => handleNavClick(id)}
                className={`transition-all duration-200 cursor-pointer ${
                  activeSection === id
                    ? "text-blue-600 font-semibold"
                    : "hover:text-gray-900"
                }`}
              >
                {label}
              </button>

              {activeSection === id && (
                <div className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
