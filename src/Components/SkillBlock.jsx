import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const SkillBlock = ({ value, skill }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`flex flex-col gap-2 items-center rounded-md py-2 px-4 h-40 justify-center border hover:scale-105 hover:border-2 shadow-lg ${theme == 'light' ? 'bg-[#FFFFFF] border-[#E2E8F0]' : 'bg-[#262626] border-[#404040] shadow-[0 0 15px rgba(16, 185, 129, 0.1)]'}`}>
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`} className="h-16 w-16" />
            <span className={`font-medium ${theme == 'light' ? 'text-[#0F172A]' : 'text-[#F5F5F5]'}`}>{value}</span>
        </div>
    )
}

export default SkillBlock