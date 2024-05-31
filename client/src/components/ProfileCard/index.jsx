import styles from './ProfileCard.module.css';
import { FaGithub } from 'react-icons/fa6';
import { BsGlobe } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

export function ProfileCard({ profilePhoto, name, githubLink, portfolioLink, linkedinLink }) {
    return (
        <div className={styles.card_content}>
            <img src={profilePhoto} alt={name} className={styles.photos} />
            <div>
                <p className={styles.names}>{name}</p>

                <div className={styles.card_content_icons}>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.card_icons} />
                    </a>
                    <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
                        <BsGlobe className={styles.card_icons} />
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className={styles.card_icons} />
                    </a>
                </div>
            </div>
        </div>
    );
}
