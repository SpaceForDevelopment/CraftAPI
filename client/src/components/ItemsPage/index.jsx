import styles from './ItemsPage.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { PageTitle } from '../PageTitle';

export function ItemsPage({ subject, singularSubject, pluralSubject }) {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const loadDataAPI = async () => {
            try {
                const response = await fetch(`https://server-craftapi.vercel.app/${subject}`);

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setApiData(data[subject]);
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        loadDataAPI();
    }, []);
    
    return (
        <>
            <PageTitle title={pluralSubject} />
            {
                apiData.length > 0 ? (
                    <div className={styles.cards_container}>
                        {apiData.map((item) => (
                            <Link key={item._id} to={`/detalhes-${singularSubject}/${item._id}`} className={styles.card_link}>
                                <Card
                                    key={item._id}
                                    image={item.image}
                                    name={item.name}
                                    type={item.type}
                                />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className={styles.message}>Carregando {pluralSubject}...</p>
                )
            }
        </>
    );
}