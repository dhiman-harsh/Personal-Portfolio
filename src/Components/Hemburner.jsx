import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"
import { useState } from "react"

const Hemburner = ({ menuOpen, setMenuOpen }) => {
    const { theme } = useContext(ThemeContext)
    function menuHandler() {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="md:hidden" onClick={() => { menuHandler() }}>
            {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={`${theme == 'light' ? '#0F172A' : '#eee'}`}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg> :
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={`${theme == 'light' ? '#0F172A' : '#eee'}`}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>}
        </div>
    )
}

export default Hemburner