import Button from './Button.jsx'

const ContactForm = () => {
    return (
        <form action="" className="flex flex-col gap-4 my-4 py-6 px-4 md:p-10 border border-neutral-600 rounded-md">
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-1 md:w-1/2">
                    <label htmlFor="name" className="hidden md:block">Name</label>
                    <input id="name" type="text" placeholder="Your Name" className="flex-1 border border-neutral-600 px-4 py-2 rounded-sm bg-[#222]" />
                </div>
                <div className="flex flex-col gap-1 md:w-1/2">
                    <label htmlFor="email" className="hidden md:block">Email</label>
                    <input id="email" type="email" placeholder="Your Email" className="flex-1 border border-neutral-600 px-4 py-2 rounded-sm bg-[#222]" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="hidden md:block">Message</label>
                <textarea rows="5" id="message" placeholder="Your Message" className="flex-1 border border-neutral-600 px-4 py-2 rounded-sm bg-[#222]" ></textarea>
            </div>
            <Button value="Send Message" className="md:w-fit" onClick={(event) => { event.preventDefault() }} />
        </form>
    )
}

export default ContactForm