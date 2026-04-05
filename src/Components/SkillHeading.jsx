import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const SkillHeading = ({ value }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`font-medium text-xl ${theme == 'light' ? 'text-[#0F172A]' : 'text-[#F5F5F5]'}`}>{value}</div>
    )
}

export default SkillHeading