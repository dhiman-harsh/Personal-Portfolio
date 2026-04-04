import ContactForm from '../Components/ContactForm.jsx'
import SocialMedia from '../Components/SocialMedia.jsx'
import { useContext } from "react"
import { ThemeContext } from "../Components/Context/ThemeContext"

export const Contact = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="flex flex-col px-4 md:px-8 " id="contact">
            <h1 className={`font-semibold text-2xl ${theme == 'light' ? 'text-[#111]' : 'text-[#eee]'}`}>Contact</h1>
            <ContactForm />
            <SocialMedia />
        </div>
    )
}
