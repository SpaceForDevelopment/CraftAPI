import './Footer.style.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            Copyright &copy; {currentYear}{' '}
            <a
                href="https://spacefordevelopment.vercel.app"
                target="_blank"
                rel="noreferrer"
            >
                Space For Development
            </a>
            . Todos os direitos reservados.
        </footer>
    );
}
