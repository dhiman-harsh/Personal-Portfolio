import SkillBlock from './SkillBlock.jsx'
import SkillHeading from './SkillHeading.jsx'

const Languages = () => {
    return (
        <div className="flex flex-col gap-3">
            <SkillHeading value="Languages" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 flex-1">
                <SkillBlock value="JavaScript" skill="javascript" />
                <SkillBlock value="HTML 5" skill="html5" />
                <SkillBlock value="CSS 3" skill="css3" />
                <SkillBlock value="Python" skill="python" />
                <SkillBlock value="C++" skill="cplusplus" />
                <SkillBlock value="Java" skill="java" />
            </div>
        </div>
    )
}

export default Languages