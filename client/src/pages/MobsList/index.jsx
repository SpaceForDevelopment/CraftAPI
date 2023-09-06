import styles from './MobsList.module.css';
import MobCard from '../../components/MobCard';
import { useEffect, useState } from 'react';


function MobsList() {
    const [mobsData, setMobsData] = useState([]);

    useEffect(() => {
        const loadMobsAPI = async () => {
            try {
                const response = await fetch('https://craft-api.onrender.com/mobs');

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setMobsData(data);
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        loadMobsAPI();
    }, []);
    
    return (
        <>
            <h1 className={styles.titleListMobs}>Lista de Mobs</h1>
            {
                mobsData.length > 0 ? (
                    <div className={styles.mobs_cards_container}>
                        {mobsData.map((mob) => (
                            <MobCard
                                key={mob.id}
                                image={mob.image}
                                name={mob.name}
                                type={mob.type}
                            />
                        ))}
                    </div>
                ) : (
                    <p className={styles.message}>Carregando mobs...</p>
                )
            }
        </>
    );
}

export default MobsList;