import { Suspense } from "react";
import { NavBar, Hero, About, Projects, Contact } from "./components/index";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fondos */}
      <div className="absolute -z-10 inset-0 h-full w-full bg-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(#00ffff15_1px,transparent_1px),linear-gradient(90deg,#00ffff15_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,#0000ff15,transparent)]"></div>
        <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-[#ff00ff10] to-transparent"></div>
      </div>

      <header className="w-full">
        <NavBar />
      </header>

      <main className="container mx-auto max-w-5xl px-6 min-h-screen">
        {" "}
        {/* Main semántico */}
        <section id="inicio">
          <Hero />
        </section>
        <section id="sobre-mi">
          {" "}
          {/* ID consistente con componentes */}
          <Suspense
            fallback={<div className="py-16 text-center">Cargando...</div>}
          >
            <About />
          </Suspense>
        </section>
        <section id="proyectos">
          <Suspense
            fallback={
              <div className="py-16 text-center">Cargando proyectos...</div>
            }
          >
            <Projects />
          </Suspense>
        </section>
      </main>

      <footer id="contacto" className="container mx-auto max-w-5xl px-6 py-10">
        {" "}
        {/* ID + container */}
        <Suspense
          fallback={
            <div className="text-center py-10">Cargando contacto...</div>
          }
        >
          <Contact />
        </Suspense>
      </footer>
    </div>
  );
}

export default App;
