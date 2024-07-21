import PropTypes from 'prop-types';
import './Card.style.css';

export function Card({ image, name, type }) {
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

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
