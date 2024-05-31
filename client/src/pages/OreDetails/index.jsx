import { useParams } from 'react-router-dom';
import { DetailsPage } from '../../components/DetailsPage';

function OreDetails() {
    const { id } = useParams();

    return <DetailsPage id={id} subject="ores" singularSubject="Ore" />;
}

export default OreDetails;
