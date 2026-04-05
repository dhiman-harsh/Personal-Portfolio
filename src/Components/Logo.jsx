import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const Logo = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <h1 className={`font-medium text-xl md:text-2xl font-mono cursor-pointer hover:scale-105 ${theme == 'light' ? 'text-[#059669]' : 'text-[#10B981]'}`}>&lt;Harsh /&gt;</h1>
    )
}

export default Logo