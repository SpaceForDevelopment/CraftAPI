import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">Home</Link>
                <Link to="/mobs">Lista de mobs</Link>
                <Link to="/detalhes-mob">.</Link>
            </header>
        </>
    )
}

export default Header;