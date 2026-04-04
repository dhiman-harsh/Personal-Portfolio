import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const Button = ({ value, link = "" }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <button className={`py-2 px-4 rounded-sm active:scale-95 md:w-fit cursor-pointer ${theme == 'light' ? 'bg-[#2E8B57] text-white' : 'bg-[#2E8B57] text-white'}`}>{value}</button>
    )
}

export default Button