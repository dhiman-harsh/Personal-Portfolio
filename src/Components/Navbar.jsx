import Logo from './Logo'
import Menu from './Menu'
import Hemburner from './Hemburner'
import MenuButton from './MenuButton.jsx'
import { useState } from 'react'
import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"
import ThemeButton from './ThemeButton.jsx'

const Navbar = () => {
    const { theme } = useContext(ThemeContext)
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className={`flex justify-between px-4 md:px-8 py-3 md:py-4 items-center sticky top-0 z-10 ${!menuOpen ? 'border-b' : ''} backdrop-blur-md ${theme == 'light' ? 'border-neutral-500 bg-[#C3CC9B]/80' : 'border-neutral-600 bg-[#222]/80'}`}>
            <Logo />
            <Menu />
            <div className="flex gap-4 md:hidden">
                <ThemeButton />
                <Hemburner menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
            {
                menuOpen ?
                    <div className={`absolute z-10 top-full left-0 right-0 py-4 justify-between flex flex-col gap-4 items-center border-b backdrop-blur-md ${theme == 'light' ? 'border-neutral-500 bg-[#C3CC9B]/80' : 'border-neutral-600 bg-[#222]/80'}`}>
                        <MenuButton value="Home" link="#home" />
                        <MenuButton value="Skills" link="#skills" />
                        <MenuButton value="Projects" link="#projects" />
                        <MenuButton value="Contact" link="#contact" />
                    </div> : null
            }
        </div>
    )
}

export default Navbar