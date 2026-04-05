const SocialMediaIcon = ({path, url}) => {
    return (
        <a href={url} target="_blank" className="rounded-sm overflow-hidden h-6 w-6">
            <img src={path} className="object-cover" />
        </a>
    )
}

export default SocialMediaIcon