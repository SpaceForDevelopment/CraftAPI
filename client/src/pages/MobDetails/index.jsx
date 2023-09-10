import styles from './MobDetails.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function MobDetails() {
    const { id } = useParams();
    const [mobData, setMobData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const loadMobsAPI = async () => {
            try {
                const response = await fetch(`https://craft-api.onrender.com/mobs?id=${id}`);

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setMobData(data);
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        loadMobsAPI();
    }, [id]);
    
    return (
        <>
            <h1>{mobData?.name}</h1>
            <p>Tipo: {mobData?.type}</p>
            <p>Função: {mobData?.role}</p>
            <p>Pontos de vida: {mobData?.hitPoints}</p>
            <p>Disponível na Edição Java: {mobData?.javaEdition}</p>
            <p>Disponível na Edição Bedrock: {mobData?.bedrockEdition}</p>
            <p>Disponível na Edição Educacional: {mobData?.educationEdition}</p>
            <img src={mobData?.image} alt={mobData?.name} />
        </>
    );
}

export default MobDetails;