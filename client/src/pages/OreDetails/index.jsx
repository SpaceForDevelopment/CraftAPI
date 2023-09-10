import { useParams, useNavigate } from 'react-router-dom';
import DetailsPage from '../../components/DetailsPage';
import { useEffect } from 'react';


function OreDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id < 1 || id > 11) {
            navigate('/erro-404');
        }
    }, [id, navigate]);
    
    return (
        <DetailsPage
            id={id}
            subject='ores'
        />
    );
}

export default OreDetails;