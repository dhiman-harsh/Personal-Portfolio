import ContactForm from '../Components/ContactForm.jsx'
import SocialMedia from '../Components/SocialMedia.jsx'

export const Contact = () => {
    return (
        <div className="bg-neutral-900 flex flex-col px-4 md:px-8" id="contact">
            <h1 className="text-semibold text-2xl">Contact</h1>
            <ContactForm />
            <SocialMedia />
        </div>
    )
}
