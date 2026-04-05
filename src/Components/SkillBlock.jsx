import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const SkillBlock = ({ value, skill }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`flex flex-col gap-2 items-center rounded-sm py-2 px-4 h-40 justify-center border hover:scale-105 hover:border-2 shadow-lg ${theme == 'light' ? 'bg-[#FFFFFF] border-[#E2E8F0]' : 'bg-[#222] border-neutral-600'}`}>
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`} className="h-16 w-16" />
            <span className={`font-medium ${theme == 'light' ? 'text-[#0F172A]' : 'text-[#eee]'}`}>{value}</span>
        </div>
    )
}

export default SkillBlock