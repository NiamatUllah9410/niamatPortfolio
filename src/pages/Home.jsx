import Education from "../components/Education"
import Contact from "../components/Contact"
import About from "../components/About"
import HeroSection from "../components/HeroSection"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const Home = () => {
  return (
  <div className='bg-white'>
    <HeroSection />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    <Education />
    </div>
  )
}

export default Home
