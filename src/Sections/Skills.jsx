import Languages from '../Components/Languages.jsx'
import Tools from '../Components/Tools.jsx'
import LibraryFramework from '../Components/LibraryFramework.jsx'
import { useContext } from "react"
import { ThemeContext } from "../Components/Context/ThemeContext"

export const Skills = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="px-4 md:px-8 flex flex-col pt-12" id="skills">
            <h1 className={`font-semibold text-2xl ${theme == 'light' ? 'text-[#111]' : 'text-[#eee]'}`}>Skills</h1>
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-10 px-10"> */}
            <div className="flex flex-col gap-4 my-4">
                <LibraryFramework />
                <Languages />
                <Tools />
            </div>
        </div>
    )
}