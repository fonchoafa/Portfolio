import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Home from "./components/Home/Home"


function App() {
  return (
    <>
    <Navbar />
<Routes>
  <Route path="/" element= {<Home />} />
  <Route path="/projects" element = {<Projects />} />
  <Route path="/about" element = {<About />} />
  <Route path="/contact" element = {<Contact />} />
</Routes>

    <Footer />
    </>
  )
}

export default App
