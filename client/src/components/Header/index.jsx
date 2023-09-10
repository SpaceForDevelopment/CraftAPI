import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import block from '../../assets/images/HeaderIcons/block.png';
import logo from '../../assets/images/logo.png';
import sword from '../../assets/images/HeaderIcons/sword.webp';
import diamond from '../../assets/images/HeaderIcons/diamond.webp';


function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link to="/"><img src={block} alt="Imagem do bloco de terra" className={styles.header_icons} />Home</Link>
                <Link to="/mobs"> <img src={logo} alt="Imagem do creeper" className={styles.header_icons} />Mobs</Link>
                <Link to="/equipamentos"> <img src={sword} alt="Imagem da espada" className={styles.header_icons} />Equipamentos</Link>
                <Link to="/minerios"> <img src={diamond} alt="Imagem do minério de diamante" className={styles.header_icons} />Minérios</Link>
            </header>
        </>
    );
}

export default Header;