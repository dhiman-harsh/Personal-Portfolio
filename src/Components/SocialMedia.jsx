import SocialMediaIcon from "./SocialMediaIcon"

const SocialMedia = () => {
    return (
        <div className="flex gap-4 items-center justify-center mx-10 my-4 md:m-10">
            <SocialMediaIcon path="https://s.magecdn.com/social/mb-github.svg" url="https://www.linkedin.com/in/dhiman-harsh" />
            <SocialMediaIcon path="https://s.magecdn.com/social/mb-linkedin.svg" url="https://github.com/dhiman-harsh" />
        </div>
    )
}

export default SocialMedia