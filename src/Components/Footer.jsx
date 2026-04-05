import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"

const Footer = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`mx-4 md:mx-10 p-4 md:px-10 md:py-10 flex flex-col items-center border-t ${theme == 'light' ? 'text-[#475569] border-[#E2E8F0]' : 'text-[#eee] border-neutral-600'}`}>
            <div>&copy; 2026 Harsh Dhiman. All rights reserved.</div>
            <div>Built with {theme == 'light' ? '❤️' : '🤍'} using React and Tailwind CSS</div>
        </div>
    )
}

export default Footer