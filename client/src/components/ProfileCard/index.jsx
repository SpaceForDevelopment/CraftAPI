import styles from './ProfileCard.module.css';
import github from '../../assets/images/Icons/github.png';
import webIcon from '../../assets/images/Icons/web.png';
import linkedin from "../../assets/images/Icons/linkedin.png";


// eslint-disable-next-line react/prop-types
function ProfileCard({ profilePhoto, name, githubLink, portfolioLink, linkedinLink }) {
    return (
        <>
            <div className={styles.card_content}>
                <img src={profilePhoto} alt={name} className={styles.photos} />
                <div>
                    <p className={styles.names}>{name}</p>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={github} alt="Link do GitHub" className={styles.card_icons} /></a>
                    <a href={portfolioLink} target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="Link do site Portfólio" className={styles.card_icons} /></a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Link do LinkedIn" className={styles.card_icons} /></a>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;