import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">Home</Link>
                <Link to="/mobs">Mobs of Minecraft</Link>
                <Link to="/detalhes-mob">Details</Link>
            </header>
        </>
    )
}

export default Header;