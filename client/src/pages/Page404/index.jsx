import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.css';
import { useEffect } from 'react';

function Page404() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/erro-404');
    }, []);

    return (
        <h1>Erro 404: Page Not Found</h1>
    );
}

export default Page404;