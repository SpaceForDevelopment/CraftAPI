import styles from './EquipmentDetails.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function EquipmentDetails() {
    const { id } = useParams();
    const [equipmentData, setEquipmentData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const loadEquipmentAPI = async () => {
            try {
                const response = await fetch(`https://craft-api.onrender.com/equipment?id=${id}`);

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setEquipmentData(data);
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        loadEquipmentAPI();
    }, [id]);
    
    return (
        <>
            <h1>{equipmentData?.name}</h1>
            <p>Tipo: {equipmentData?.type}</p>
            <p>Função: {equipmentData?.role}</p>
            <p>Materiais para criação: {equipmentData?.materials}</p>
            <p>Durabilidade: {equipmentData?.durability}</p>
            <p>Raridae: {equipmentData?.rarity}</p>
            <p>É renovável? {equipmentData?.renewable}</p>
            <img src={equipmentData?.image} alt={equipmentData?.name} />
        </>
    );
}

export default EquipmentDetails;