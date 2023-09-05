import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import pickaxe from '../../assets/images/HeaderIcons/pickaxe.png';
import sword from '../../assets/images/HeaderIcons/sword.png';
import logo from '../../assets/images/logo.png';
import axe from '../../assets/images/HeaderIcons/axe.png';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link to="/"> <img src={logo} alt="Logo da CraftAPI" className={styles.logo} />CraftAPI</Link>
                <Link to="/"> <img src={axe} alt="Imagem do machado" className={styles.iconesHeader} />Home</Link>
                <Link to="/mobs"> <img src={sword} alt="Imagem da espada" className={styles.iconesHeader} />Lista de mobs</Link>
                <Link to="/detalhes-mob"> <img src={pickaxe} alt="Imagem da picareta" className={styles.iconesHeader} />Detalhes</Link>
            </header>
        </>
    );
}

export default Header;