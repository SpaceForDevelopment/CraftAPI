import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">Home</Link>
                <Link to="/mobs">Todos os Mobs</Link>
                <Link to="/detalhes-mob">Types</Link>
                <Link to="/detalhes-mob">Hearts</Link>
                <Link to="/detalhes-mob"></Link>
            </header>
        </>
    )
}

export default Header;