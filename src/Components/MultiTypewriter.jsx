import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"
import { useEffect, useState } from "react"

const MultiTypewriter = ({
    words = ["A Front-End Developer", "A Problem Solver", "A React Developer"],
    typeSpeed = 100,
    deleteSpeed = 50,
    delay = 2000
}) => {

    const { theme } = useContext(ThemeContext)

    const [displayText, setDisplayText] = useState("")
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[wordIndex]
        const handleTyping = () => {
            if (!isDeleting) { // type
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.substring(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), delay)
                }
            } else { // delete
                if (displayText.length > 0) {
                    setDisplayText(currentWord.substring(0, displayText.length - 1))
                } else {
                    setIsDeleting(false)
                    setWordIndex((wordIndex + 1) % (words.length))
                    // INDEX UPDATION: if not last then next, if last then first
                }
            }
        }

        const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed)

        return () => clearTimeout(timer)
    }, [displayText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay])

    return (
        <span className={`border-r ${theme == 'light' ? 'border-[#059669]' : 'border-[#10B981]'}`}>{displayText}</span>
    )
}

export default MultiTypewriter