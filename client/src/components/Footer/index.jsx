import styles from './Footer.module.css'
import logocotemig from '../../assets/images/logocotemig.png'

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                by: Artur Bomtempo and Letícia França <br />
                <a href="https://www.cotemig.com.br/" target="_blank" rel="noopener noreferrer"><img src={logocotemig} alt="logoCotemig" className={styles.logocotemig}/></a>
            </footer>
        </>
    )
}

export default Footer;