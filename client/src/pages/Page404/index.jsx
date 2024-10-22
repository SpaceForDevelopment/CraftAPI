import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Common/Footer';
import { Header } from '../../components/Common/Header';
import './Page404.style.css';

export function Page404() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/erro-404');
    }, [navigate]);

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
