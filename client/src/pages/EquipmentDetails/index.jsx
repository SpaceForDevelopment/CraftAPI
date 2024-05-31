import { useParams } from 'react-router-dom';
import { DetailsPage } from '../../components/DetailsPage';

export function EquipmentDetails() {
    const { id } = useParams();

    return <DetailsPage id={id} subject="equipment" singularSubject="Equipment" />;
}
