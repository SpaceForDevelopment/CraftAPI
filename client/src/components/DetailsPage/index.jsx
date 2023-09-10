import styles from './DetailsPage.module.css';
import { useEffect, useState } from 'react';

function DetailsPage({ id, subject }) {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const loadApiData = async () => {
            try {
                const response = await fetch(`https://craft-api.onrender.com/${subject}?id=${id}`);

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

        loadApiData();
    }, [id, subject]);

    return (
        <div className={styles.container}>
            <h1>{apiData?.name}</h1>
            <p>Tipo: {apiData?.type}</p>
            {subject === 'mobs' && apiData && (
                <>
                    <p>Função: {apiData.role}</p>
                    <p>Quantidade de vida: {apiData.hitPoints}</p>
                    <p>Possui na edição java? {apiData.javaEdition}</p>
                    <p>Possui na edição bedrock? {apiData.bedrockEdition}</p>
                    <p>Possui na edição education? {apiData.educationEdition}</p>
                </>
            )}
            {subject === 'equipment' && apiData && (
                <>
                    <p>Função: {apiData.role}</p>
                    <p>Materiais para criação: {apiData.materials}</p>
                    <p>Durabilidade: {apiData.durability}</p>
                    <p>Raridade: {apiData.rarity}</p>
                    <p>É renovável? {apiData.renewable}</p>
                </>
            )}
            {subject === 'ores' && apiData && (
                <>
                    <p>Disponível no(a): {apiData.availability}</p>
                    <p>Descrição: {apiData.description}</p>
                    <p>Picareta mínima para quebrar: {apiData.minimumPickaxe}</p>
                    <p>Nível de resistência à explosão: {apiData.explosionResistance}</p>
                </>
            )}
            <img src={apiData?.image} alt={apiData?.name} />
        </div>
    );
}

export default DetailsPage;