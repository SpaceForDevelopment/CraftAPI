import './ProfileCard.style.css';
import { FaGithub } from 'react-icons/fa6';
import { BsGlobe } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

export function ProfileCard({
    profilePhoto,
    name,
    githubLink,
    portfolioLink,
    linkedinLink,
}) {
    return (
        <div className="card_content">
            <img src={profilePhoto} alt={name} className="photos" />
            <div>
                <p className="names">{name}</p>

                <div className="card_content_icons">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="card_icons" />
                    </a>
                    <a
                        href={portfolioLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGlobe className="card_icons" />
                    </a>
                    <a
                        href={linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn className="card_icons" />
                    </a>
                </div>
            </div>
        </div>
    );
}
