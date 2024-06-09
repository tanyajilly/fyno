import styles from "./Curator.module.scss";

interface CuratorProps {
    curator: {
        name: string;
        info: string;
        photo: string;
    }
}

const Curator: React.FC<CuratorProps> = ({ curator }) => {
    const { name, info, photo } = curator;
    return (
        <div className={styles.holder}>
            <img className={styles.image} src={`./assets/authors/${photo}`} alt={name} />
            <strong className={styles.title}>Curated by {name}</strong>
            <span className={styles.info}>{info}</span>
        </div>
    )
}

export default Curator;