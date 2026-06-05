import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import HpcExperience from "./components/HpcExperience"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"
import LookingFor from "./components/LookingFor"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Reveal from "./components/Reveal"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <HpcExperience />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <LookingFor />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
