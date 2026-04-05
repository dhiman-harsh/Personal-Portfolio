import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"
import { useState } from 'react'
import Button from './Button.jsx'
import { useFormStatus } from 'react-dom'

const ButtonComponent = () => {
    const { theme } = useContext(ThemeContext)
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            className={`py-2 px-4 rounded-md text-white active:scale-95 md:w-fit cursor-pointer ${pending ? `bg-[#404040]` : `${theme == 'light' ? 'bg-[#059669] text-[#FFFFFF]' : 'bg-[#059669] text-[#FFFFFF] hover:bg-[#10B981]'}`}`}
            disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
        </button>
    )
}

const ContactForm = () => {

    const { theme } = useContext(ThemeContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const URL = 'https://script.google.com/macros/s/AKfycbz7SizZ_Ck7Kat5gECFX4Tv_ZQkijTvT0mg6_rRhQusMbH3k3SSKDPZstpRlymdrlWh/exec'
    const ID = 'AKfycbz7SizZ_Ck7Kat5gECFX4Tv_ZQkijTvT0mg6_rRhQusMbH3k3SSKDPZstpRlymdrlWh'

    const sendToGoogleScript = async (formData) => {
        const SCRIPT_URL = URL
        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(formData),
            });
            alert("Message sent!");

        } catch (error) {
            console.error("Submission error:", error);
        }
    }

    const actionHandler = async () => {
        const formData = {
            name: name,
            email: email,
            message: message
        }
        await sendToGoogleScript(formData)
        setName("")
        setEmail("")
        setMessage("")
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    return (
        <form action={actionHandler} className={`flex flex-col gap-4 mt-4 py-6 px-4 md:p-10 border rounded-md ${theme == 'light' ? 'border-[#E2E8F0]' : 'border-[#404040]'}`}>
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-1 md:w-1/2">
                    <label htmlFor="name" className={`hidden md:block cursor-pointer ${theme == 'light' ? 'text-[#0F172A]' : 'text-[#F5F5F5]'}`}>Name</label>
                    <input id="name" type="text" placeholder="Your Name" value={name} onChange={(e) => { handleName(e) }} className={`flex-1 border px-4 py-2 rounded-md ${theme == 'light' ? 'bg-[#FFFFFF] text-[#0F172A] border-[#E2E8F0]' : 'bg-[#262626] border-[#404040] text-[#F5F5F5]'}`} required />
                </div>
                <div className="flex flex-col gap-1 md:w-1/2">
                    <label htmlFor="email" className={`hidden md:block cursor-pointer ${theme == 'light' ? 'text-[#0F172A]' : 'text-[#F5F5F5]'}`}>Email</label>
                    <input id="email" type="email" placeholder="Your Email" value={email} onChange={(e) => { handleEmail(e) }} className={`flex-1 border px-4 py-2 rounded-md ${theme == 'light' ? 'bg-[#FFFFFF] text-[#0F172A] border-[#E2E8F0]' : 'bg-[#262626] border-[#404040] text-[#F5F5F5]'}`} required />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="message" className={`hidden md:block cursor-pointer ${theme == 'light' ? 'text-[#0F172A]' : 'text-[#F5F5F5]'}`}>Message</label>
                <textarea rows="5" id="message" placeholder="Your Message" value={message} onChange={(e) => { handleMessage(e) }} className={`flex-1 border px-4 py-2 rounded-md ${theme == 'light' ? 'bg-[#FFFFFF] text-[#0F172A] border-[#E2E8F0]' : 'bg-[#262626] border-[#404040] text-[#F5F5F5]'}`} required ></textarea>
            </div>
            <ButtonComponent />
        </form>
    )
}

export default ContactForm