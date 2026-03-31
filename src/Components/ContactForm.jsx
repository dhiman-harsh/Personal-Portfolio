import Button from './Button.jsx'

const ContactForm = () => {
    return (
        <form action="" className="flex flex-col gap-4 my-4 md:px-10">
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-1 md:w-1/2">
                    <label htmlFor="name" className="hidden md:block">Name</label>
                    <input id="name" type="text" placeholder="Your Name" className="flex-1 border border-neutral-600 px-4 py-2 rounded-sm" />
                </div>
                <div className="flex flex-col gap-1 md:w-1/2">
                    <label htmlFor="email" className="hidden md:block">Email</label>
                    <input id="email" type="email" placeholder="Your Email" className="flex-1 border border-neutral-600 px-4 py-2 rounded-sm" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="hidden md:block">Message</label>
                <textarea rows="5" id="message" placeholder="Your Message" className="flex-1 border border-neutral-600 px-4 py-2 rounded-sm" ></textarea>
            </div>
            <Button value="Send Message" onClick={(event) => { event.preventDefault() }} />
        </form>
    )
}

export default ContactForm