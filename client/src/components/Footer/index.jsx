import './Footer.style.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            Copyright &copy; {currentYear}{' '}
            <a href="https://gf-company.vercel.app/" target="_blank">
                GF Company
            </a>
            . Todos os direitos reservados.
        </footer>
    );
}
