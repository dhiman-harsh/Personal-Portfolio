import SocialMediaIcon from "./SocialMediaIcon"

const SocialMedia = () => {
    return (
        <div className="flex gap-4 items-center justify-center mx-10 mb-4 md:mb-20">
            <SocialMediaIcon img="linkedin" url="https://www.linkedin.com/in/dhiman-harsh" />
            <SocialMediaIcon img="github" url="https://github.com/dhiman-harsh" />
        </div>
    )
}

export default SocialMedia