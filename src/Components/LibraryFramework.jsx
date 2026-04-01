import SkillBlock from './SkillBlock.jsx'
import SkillHeading from './SkillHeading.jsx'

const LibraryFramework = () => {
    return (
        <div className="flex flex-col gap-3">
            <SkillHeading value="Library and Framework" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 flex-1">
                <SkillBlock value="React" skill="react" />
                <SkillBlock value="Tailwind CSS" skill="tailwindcss" />
            </div>
        </div>
    )
}

export default LibraryFramework