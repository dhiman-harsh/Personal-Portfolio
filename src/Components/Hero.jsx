import Button from "./Button"

const Hero = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-10 my-6 md:my-20">
            <div className="top flex items-start flex-col gap-6 md:flex-row md:gap-12">
                <div className="size-60 border border-neutral-600 rounded-sm mx-auto"></div>
                <div className="px-4 md:px-0">
                    <div className="type text-lg md:text-xl font-medium text-[#aaa]">Hello, I am</div>
                    <div className="type text-2xl md:text-3xl font-medium">Harsh Dhiman</div>
                    <div className="type text-3xl md:text-4xl font-medium my-2">A Front End Developer</div>
                    <div className="max-w-[360px] text-[#aaa]">
                        Frontend Developer building interactive web apps with React and efficient JavaScript. I create smooth, responsive experiences using clean, maintainable code that solves real-world problems.
                    </div>
                </div>
            </div>
            <div className="flex gap-6">
                <Button value="Download CV" />
                <Button value="Hire Me" link="#contact" />
            </div>
        </div>
    )
}

export default Hero