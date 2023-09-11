import styles from './Footer.module.css';
import cotemig from '../../assets/images/Icons/cotemig.png';


function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="https://www.cotemig.com.br/" target="_blank" rel="noopener noreferrer"><img src={cotemig} alt="Logo do Cotemig" className={styles.logo_cotemig} /></a> <br />
            Desenvolvido por Artur Bomtempo e Letícia França
        </footer>
    );
}

export default Footer;