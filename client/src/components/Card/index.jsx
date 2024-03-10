import styles from './Card.module.css';

export function Card({ image, name, type }) {
    return (
        <section className={styles.card}>
            <div>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <hr />
                <h4>Tipo: {type}</h4>
            </div>
        </section>
    );
}