import Logo from './Logo'
import Menu from './Menu'
import Hemburner from './Hemburner'
import MenuButton from './MenuButton.jsx'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="flex justify-between px-4 md:px-8 py-3 md:py-4 items-center sticky top-0 bg-[#222] border-b border-neutral-600">
            <Logo />
            <Menu />
            <Hemburner menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {
                menuOpen ?
                    <div className="absolute z-10 top-full left-0 right-0 py-4 justify-between flex flex-col gap-4 items-center border-y border-neutral-600 backdrop-blur-md bg-[#222]/[.8]">
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