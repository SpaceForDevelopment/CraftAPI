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
