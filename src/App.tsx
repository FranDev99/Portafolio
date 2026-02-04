import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fondos y efectos visuales */}
      <div className="absolute -z-10 inset-0 h-full w-full bg-gray-950"><div className="absolute inset-0 bg-[linear-gradient(#00ffff15_1px,transparent_1px),linear-gradient(90deg,#00ffff15_1px,transparent_1px)] bg-[size:40px_40px]"></div><div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,#0000ff15,transparent)]"></div><div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-[#ff00ff10] to-transparent"></div></div>

      {/* Contenido principal */}
      <header className="w-full">
        <NavBar />
      </header>
      <div className="container mx-auto max-w-5xl px-6">
        <main className="min-h-screen">
          <section id="inicio">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
      </div>
      <footer id="contact">
        <Contact />
      </footer>
    </div>
  );
}

export default App;
