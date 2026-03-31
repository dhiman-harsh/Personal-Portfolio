const SkillBlock = ({value, skill}) => {
    return (
        <div className="bg-[#222] flex flex-col gap-2 items-center rounded-sm py-2 px-4 h-40 justify-center">
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`} className="h-16 w-16" />
            <span className="text-white">{value}</span>
        </div>
    )
}

export default SkillBlock