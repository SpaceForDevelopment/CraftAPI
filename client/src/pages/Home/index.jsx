import styles from './Home.module.css';
import github from '../../assets/images/Icons/github.png';
import webIcon from '../../assets/images/Icons/web.png';
import linkedin from "../../assets/images/Icons/linkedin.png";
import leticiaPhoto from '../../assets/images/Developers/leticia.jpg';
import arturPhoto from '../../assets/images/Developers/artur.png';

function Home() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.div_content}>
                    <p>
                        Olá! Somos Artur e Letícia, criadores deste projeto! Tudo bem para você? <br />
                        Este site foi desenvolvido com a intenção de realizar um trabalho escolar, e consiste na construção
                        de uma API e consumação dela em uma página da web. <br />
                        Esperamos que você goste!
                    </p>
                </div>
                <div className={styles.all_cards}>
                    <div className={styles.cards_content}>
                        <img src={arturPhoto} alt="Foto de perfil do Artur" className={styles.photos} />
                        <div>
                            <p className={styles.names}>Artur Bomtempo</p>
                            <a href="https://github.com/ArturColen" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className={styles.card_icons} /></a>
                            <a href="https://arturbomtempo.vercel.app" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="Portfólio" className={styles.card_icons} /></a>
                            <a href="https://www.linkedin.com/in/artur-bomtempo/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className={styles.card_icons} /></a>
                        </div>
                    </div>
                    <div className={styles.cards_content}>
                        <img src={leticiaPhoto} alt="Foto de perfil da Letícia" className={styles.photos} />
                        <div>
                            <p className={styles.names}>Letícia França</p>
                            <a href="https://github.com/LeticiaSFranca" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className={styles.card_icons} /></a>
                            <a href="https://lsfranca.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={webIcon} alt="Portfólio" className={styles.card_icons} /></a>
                            <a href="https://www.linkedin.com/in/leticiasfranca/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className={styles.card_icons} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;