import styles from './PageTitle.module.css';

function PageTitle({ title }) {
    return (
        <h1 className={styles.title}>{title}</h1>
    );
}

export default PageTitle;