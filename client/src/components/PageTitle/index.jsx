import styles from './PageTitle.module.css';


// eslint-disable-next-line react/prop-types
function PageTitle({ title }) {
    return (
        <h1 className={styles.title}>{title}</h1>
    );
}

export default PageTitle;