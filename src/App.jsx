import { Contact } from "./Sections/Contact"
import { Home } from "./Sections/Home"
import { Skills } from "./Sections/Skills"
import Navbar from './Components/Navbar.jsx'
import Footer from "./Components/Footer.jsx"

const App = () => {
  return (
    <div className="open-sans text-white bg-neutral-900 relative">
      <Navbar />
      <Home />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App