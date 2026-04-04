import { useState } from 'react'
import Button from './Button.jsx'
import { useFormStatus } from 'react-dom'

const ButtonComponent = () => {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            className={`py-2 px-4 rounded-sm text-white active:scale-95 md:w-fit cursor-pointer ${pending ? `bg-neutral-600` : `bg-blue-700`}`}
            disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
        </button>
    )
}

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [Error, setError] = useState(false)
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
        <form action={actionHandler} className="flex flex-col gap-4 mt-4 py-6 px-4 md:p-10 border border-neutral-600 rounded-md">
            {
                Error ? <div className="text-red-600 bg-red-300 border border-red-600 px-4 py-2 rounded-sm font-medium">All fields are mandatory!</div> : null
            }
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-1 md:w-1/2">
                    <label htmlFor="name" className="hidden md:block cursor-pointer">Name</label>
                    <input id="name" type="text" placeholder="Your Name" value={name} onChange={(e) => { handleName(e) }} className="flex-1 border border-neutral-600 px-4 py-2 rounded-sm bg-[#222]" required />
                </div>
                <div className="flex flex-col gap-1 md:w-1/2">
                    <label htmlFor="email" className="hidden md:block cursor-pointer">Email</label>
                    <input id="email" type="email" placeholder="Your Email" value={email} onChange={(e) => { handleEmail(e) }} className="flex-1 border border-neutral-600 px-4 py-2 rounded-sm bg-[#222]" required />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="hidden md:block cursor-pointer">Message</label>
                <textarea rows="5" id="message" placeholder="Your Message" value={message} onChange={(e) => { handleMessage(e) }} className="flex-1 border border-neutral-600 px-4 py-2 rounded-sm bg-[#222]" required ></textarea>
            </div>
            <ButtonComponent />
        </form>
    )
}

export default ContactForm