import SocialMediaIcon from "./SocialMediaIcon"
import githubLogo from '../assets/images/github.png';
import linkedinLogo from '../assets/images/linkedin.png';

const SocialMedia = () => {
    return (
        <div className="flex gap-4 items-center justify-center mx-10 my-4 md:m-10">
            <SocialMediaIcon path={githubLogo} url="https://github.com/dhiman-harsh" />
            <SocialMediaIcon path={linkedinLogo} url="https://www.linkedin.com/in/dhiman-harsh" />
        </div>
    )
}

export default SocialMedia