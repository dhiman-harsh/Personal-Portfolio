import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const SkillHeading = ({ value }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`font-medium text-xl ${theme == 'light' ? 'text-[#111]' : 'text-[#eee]'}`}>{value}</div>
    )
}

export default SkillHeading