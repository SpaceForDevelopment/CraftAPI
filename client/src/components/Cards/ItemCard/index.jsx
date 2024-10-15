import PropTypes from 'prop-types';
import './ItemCard.style.css';

export function ItemCard({ image, name, type }) {
    return (
        <section className="card">
            <div>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <hr />
                <h4>Tipo: {type}</h4>
            </div>
        </section>
    );
}

ItemCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
