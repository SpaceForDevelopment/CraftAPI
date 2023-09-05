import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import pickaxe from '../../assets/images/pickaxe.png'
import sword from '../../assets/images/sword.png'
import CraftAPI from '../../assets/images/creeper.png'
import ax from '../../assets/images/ax.png'

function Header() {
    return (
        <>

            <header className={styles.header}>
                <logo>
                    <Link to="/"><img src={CraftAPI} alt="logoCraftAPI" className={styles.logoCraftAPI} />CraftAPI</Link>
                </logo>

                <Link to="/"><img src={ax} alt="ax" className={styles.iconesHeader} />
                   Home</Link>
                <Link to="/mobs"><img src={sword} alt="sword" className={styles.iconesHeader} />
                   Mob List</Link>
                <Link to="/detalhes-mob"><img src={pickaxe} alt="pickaxe" className={styles.iconesHeader} />
                   Details</Link>
            </header>
        </>
    )
}

export default Header;