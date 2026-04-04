import { useContext } from "react"
import { ThemeContext } from "./Components/Context/ThemeContext"
import { Contact } from "./Sections/Contact"
import { Home } from "./Sections/Home"
import { Skills } from "./Sections/Skills"
import Navbar from './Components/Navbar.jsx'
import Footer from "./Components/Footer.jsx"

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="max-w-[1536px] mx-auto">
      <div className={`open-sans relative w-full ${theme == 'light' ? 'bg-[#E4DFB5] text-neutral-900' : 'bg-neutral-900'}`}>
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