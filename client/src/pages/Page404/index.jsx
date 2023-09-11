import styles from './Page404.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Page404() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/erro-404');
    }, []);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.text_404}>Erro 404</h1>
                <h2 className={styles.subtitle}>Page Not Found</h2>
            </div>
            <Footer />
        </>
    );
}

export default Page404;