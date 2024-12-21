import About from "../Components/About"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Project from "../Components/Project"
import { projectData } from "../data/projectData"
import '../styles/main.css'


function Home() {
  return (
    <div className="bg-secondary">
        <Navbar />
        <Hero  />
        <About  />
        <Project projectData={projectData} />
        <Footer />
    </div>
  )
}

export default Home
