const SocialMediaIcon = ({path, url}) => {
    return (
        <a href={url} target="_blank" className="rounded-md overflow-hidden h-6 w-6 bg-[#fff]">
            <img src={path} className="object-cover" />
        </a>
    )
}

export default SocialMediaIcon