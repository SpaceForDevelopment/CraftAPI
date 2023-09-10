import styles from './OreDetails.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function OreDetails() {
    const { id } = useParams();
    const [oreData, setOreData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const loadOresAPI = async () => {
            try {
                const response = await fetch(`https://craft-api.onrender.com/ores?id=${id}`);

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setOreData(data);
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        loadOresAPI();
    }, [id]);
    
    return (
        <>
            <h1>{oreData?.name}</h1>
            <p>Tipo: {oreData?.type}</p>
            <p>Disponibilidade: {oreData?.availability}</p>
            <p>Descrição: {oreData?.description}</p>
            <p>Picareta mínima para minerar: {oreData?.minimumPickaxe}</p>
            <p>Resistência à explosão: {oreData?.explosionResistance}</p>
            <img src={oreData?.image} alt={oreData?.name} />
        </>
    );
}

export default OreDetails;