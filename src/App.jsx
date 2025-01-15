import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
  return (
    <main className={"max-w-7xl mx-auto"}>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
