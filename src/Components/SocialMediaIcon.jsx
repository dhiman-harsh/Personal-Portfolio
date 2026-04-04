const SocialMediaIcon = ({path, url}) => {
    return (
        <a href={url} target="_blank" className="rounded-sm bg-[#fff]">
            <img src={path} className="h-6 w-6" />
        </a>
    )
}

export default SocialMediaIcon