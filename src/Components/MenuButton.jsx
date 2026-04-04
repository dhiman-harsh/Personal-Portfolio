import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const MenuButton = ({ value, link }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <a className={`cursor-pointer hover:scale-110 font-medium ${theme == 'light' ? 'text-[#111] hover:text-[#000]' : 'text-[#eee] hover:text-[#fff]'}`} href={link}>{value}</a>

    )
}

export default MenuButton