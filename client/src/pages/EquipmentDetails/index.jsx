import { useParams } from 'react-router-dom';
import { DetailsPage } from '../../components/DetailsPage';

function EquipmentDetails() {
    const { id } = useParams();

    return <DetailsPage id={id} subject="equipment" singularSubject="Equipment" />;
}

export default EquipmentDetails;
