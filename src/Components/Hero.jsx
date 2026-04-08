import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"
import Button from "./Button"
import Role from "./Role.jsx"

const Hero = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-10 my-6 md:my-20">
            <div className="top flex items-start flex-col gap-6 md:flex-row md:gap-12">
                <div className={`size-60 rounded-md mx-auto shadow-lg ${theme == 'light' ? 'border-4 border-[#FFFFFF]' : 'border border-neutral-600'} profile-picture`}></div>
                <div className="px-4 md:px-0">
                    <div className={`type text-lg md:text-xl font-medium ${theme == 'light' ? 'text-[#475569]' : 'text-[#A3A3A3]'}`}>Hello, I am</div>
                    <div className={`type text-2xl md:text-3xl font-medium ${theme == 'light' ? 'text-[#0F172A]' : 'text-[#F5F5F5]'}`}>Harsh Dhiman</div>
                    <Role />
                    <div className={`max-w-[360px] ${theme == 'light' ? 'text-[#475569]' : 'text-[#A3A3A3]'}`}>
                        Frontend Developer building interactive web apps with React and Tailwind CSS. I create smooth, responsive experiences using clean, maintainable code that solves real-world problems.
                    </div>
                </div>
            </div>
            <div className="flex gap-6">
                <Button value="Download CV" link="#contact"/>
                <Button value="Hire Me" link="#contact" />
            </div>
        </div>
    )
}

export default Hero