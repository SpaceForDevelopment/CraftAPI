import styles from './Footer.module.css';
import cotemigLogo from '../../assets/images/Icons/cotemig.png';

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                Desenvolvido por Artur Bomtempo e Letícia França <br />
                <a href="https://www.cotemig.com.br/" target="_blank" rel="noopener noreferrer"><img src={cotemigLogo} alt="Logo do Cotemig" className={styles.logo_cotemig} /></a>
            </footer>
        </>
    );
}

export default Footer;