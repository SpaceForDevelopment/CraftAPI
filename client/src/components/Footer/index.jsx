import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            All rights reserved © by<a href="https://gf-company.vercel.app/" target="_blank" rel="noopener noreferrer"> GF Company</a>.
        </footer>
    );
}