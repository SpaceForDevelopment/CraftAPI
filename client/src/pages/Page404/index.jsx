import './Page404.style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Page404() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/erro-404');
    }, []);

    return (
        <>
            <Header />
            <div className="page404_container">
                <h1 className="text_404">Erro 404</h1>
                <h2 className="subtitle">Page Not Found</h2>
            </div>
            <Footer />
        </>
    );
}
