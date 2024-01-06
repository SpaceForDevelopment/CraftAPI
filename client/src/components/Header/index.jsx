import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import home from '../../assets/images/HeaderIcons/home.png';
import creeper from '../../assets/images/HeaderIcons/creeper.png';
import sword from '../../assets/images/HeaderIcons/sword.png';
import pickaxe from '../../assets/images/HeaderIcons/pickaxe.png';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/"><img src={home} alt="Imagem do bloco de terra" className={styles.header_icons} />Home</Link>
            <Link to="/mobs"> <img src={creeper} alt="Imagem do creeper" className={styles.header_icons} />Mobs</Link>
            <Link to="/equipamentos"> <img src={sword} alt="Imagem da espada" className={styles.header_icons} />Equipamentos</Link>
            <Link to="/minerios"> <img src={pickaxe} alt="Imagem do minério de diamante" className={styles.header_icons} />Minérios</Link>
        </header>
    );
}

export default Header;