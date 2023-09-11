import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.css';
import { useEffect } from 'react';
import creeper from '../../assets/images/Icons/creeperEscuro.png';

function Page404() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/erro-404');
    }, []);

    return (
        <>
            <div className={styles.texto404}>
                <h1 className={styles.t404}>Erro 4<img src={creeper} alt="creeper" className='creeper404'/>4</h1>
                <h2 className={styles.pnf}>Page Not Found</h2>
            </div>
        </>
    );
}

export default Page404;