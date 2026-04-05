import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const Button = ({ value, link = "" }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <a href={link}>
            <button className={`py-2 px-4 rounded-md active:scale-95 md:w-fit cursor-pointer ${theme == 'light' ? 'bg-[#2E8B57] text-white' : 'bg-[#059669] text-[#FFFFFF] hover:bg-[#10B981]'}`}>{value}</button>
        </a>
    )
}

export default Button