import Languages from '../Components/Languages.jsx'
import Tools from '../Components/Tools.jsx'
import LibraryFramework from '../Components/LibraryFramework.jsx'

export const Skills = () => {
    return (
        <div className="px-4 md:px-8 flex flex-col" id="skills">
            <h1 className="text-semibold text-2xl">Skills</h1>
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-10 px-10"> */}
            <div className="md:px-12 flex flex-col gap-4 my-4">
                <LibraryFramework />
                <Languages />
                <Tools />
            </div>
        </div>
    )
}