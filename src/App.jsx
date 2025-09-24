import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import WhatsAppFloat from "./components/contact/WhatsAppFloat.jsx";

function App() {
  return (
    <main className={"max-w-7xl mx-auto"}>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Clients /> */}
      <WorkExperience />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

export default App;
