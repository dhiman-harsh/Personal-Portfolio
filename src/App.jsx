import { Contact } from "./Sections/Contact"
import { Home } from "./Sections/Home"
import { Skills } from "./Sections/Skills"
import Navbar from './Components/Navbar.jsx'
import Footer from "./Components/Footer.jsx"

const App = () => {
  return (
    <div className="max-w-[1536px] mx-auto">
      <div className="open-sans text-white bg-neutral-900 relative w-full">
        <Navbar />
        <Home />
        <Skills />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App