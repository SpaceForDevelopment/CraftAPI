import styles from './DetailsPage.module.css';
import { useEffect, useState } from 'react';


function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

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

                if (data?.name) {
                    data.name = removeAccents(data.name);
                }
                
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
            <h1 className={styles.nomeDetalhes}>{apiData?.name}</h1>
            <br />
            <hr className={styles.hrDetails} />
            <p><b>Tipo:</b> {apiData?.type}</p>
            <br />
            {subject === 'mobs' && apiData && (
                <>
                    <p><b>Função:</b> {apiData.role}</p>
                    <br />
                    <p><b>Quantidade de vida :</b> {apiData.hitPoints}</p>
                    <br />
                    <p><b>Possui na edição java? :</b> {apiData.javaEdition}</p>
                    <br />
                    <p><b>Possui na edição bedrock? :</b> {apiData.bedrockEdition}</p>
                    <br />
                    <p><b>Possui na edição education? :</b> {apiData.educationEdition}</p>
                    <br /> 
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

            <hr className={styles.hrDetails} />
            <img src={apiData?.image} className={styles.imageDetails} alt={apiData?.name} />
        </div>
    );
}

export default DetailsPage;