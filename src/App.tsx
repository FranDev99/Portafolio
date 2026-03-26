import { Suspense } from "react";
import { NavBar, Hero, About, Projects, Contact } from "./components/index";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Layout limpio y profesional */}

      <header className="w-full border-b border-gray-200 bg-white">
        <NavBar />
      </header>

      <main className="container mx-auto max-w-5xl px-6 space-y-10">
        <section id="inicio">
          <Hero />
        </section>

        <section id="sobre-mi" className="border-t border-gray-200">
          <Suspense fallback={<div className=" text-center">Cargando...</div>}>
            <About />
          </Suspense>
        </section>

        <section id="proyectos" className=" border-t border-gray-200">
          <Suspense
            fallback={<div className="text-center">Cargando proyectos...</div>}
          >
            <Projects />
          </Suspense>
        </section>
      </main>

      <footer id="contacto" className="border-t border-gray-200 bg-white mt-10">
        <div className="container mx-auto max-w-5xl px-6 py-10">
          <Suspense
            fallback={
              <div className="text-center py-10">Cargando contacto...</div>
            }
          >
            <Contact />
          </Suspense>
        </div>
      </footer>
    </div>
  );
}

export default App;
