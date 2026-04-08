import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"
import MultiTypewriter from "./MultiTypewriter"

const Role = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`text-3xl md:text-4xl font-semibold my-1 min-h-11 md:min-w-99 ${theme == 'light' ? 'text-[#059669]' : 'text-[#10B981]'}`}>
            <MultiTypewriter />
            {/* <span className={`w-2 h-xl border-r-2 animate-pulse ${theme == 'light' ? 'border-[059669]' : 'border-[10B981]'}`}></span> */}
        </div>
    )
}

export default Role