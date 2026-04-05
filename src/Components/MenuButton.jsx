import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const MenuButton = ({ value, link }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <a className={`cursor-pointer hover:scale-110 font-medium ${theme == 'light' ? 'text-[#0F172A] hover:text-[#000] hover:text-[#059669]' : 'text-[#F5F5F5] hover:text-[#10B981]'}`} href={link}>{value}</a>

    )
}

export default MenuButton