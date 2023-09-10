import styles from './ItemsPage.module.css';
import Card from '../Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
function Items({ subject, singularSubject, pageTitle }) {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const loadDataAPI = async () => {
            try {
                const response = await fetch(`https://craft-api.onrender.com/${subject}`);

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setApiData(data);
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        loadDataAPI();
    }, []);
    
    return (
        <>
            <h1 className={styles.title}>{pageTitle}</h1>
            {
                apiData.length > 0 ? (
                    <div className={styles.cards_container}>
                        {apiData.map((item) => (
                            <Link key={item.id} to={`/detalhes-${singularSubject}/${item.id}`} className={styles.card_link}>
                                <Card
                                    key={item.id}
                                    image={item.image}
                                    name={item.name}
                                    type={item.type}
                                />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className={styles.message}>Carregando {subject}...</p>
                )
            }
        </>
    );
}

export default Items;