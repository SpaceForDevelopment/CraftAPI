import styles from './Footer.module.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            Copyright &copy; {currentYear} GF Company. Todos os direitos reservados.
        </footer>
    );
}