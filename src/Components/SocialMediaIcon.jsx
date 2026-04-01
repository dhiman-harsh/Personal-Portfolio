const SocialMediaIcon = ({img, url}) => {
    return (
        <a href={url} target="_blank" className="rounded-sm bg-[#222]">
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${img.toLowerCase()}/${img.toLowerCase()}-original.svg`} alt={img} className="h-6 w-6" />
        </a>
    )
}

export default SocialMediaIcon