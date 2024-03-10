import { useParams } from 'react-router-dom';
import { DetailsPage } from '../../components/DetailsPage';

function MobDetails() {
    const { id } = useParams();
    
    return (
        <DetailsPage
            id={id}
            subject='mobs'
            singularSubject='Mob'
        />
    );
}

export default MobDetails;