import type { Highlight } from "../../interfaces/location";
import styles from "./CardHorizontal.module.scss";

interface CardProps {
    data: Highlight;
}

const CardHorizontal: React.FC<CardProps> = ({ data }) => {
    const { name, pick, image } = data;
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={`./assets/iceland/${image}`} alt={name} />
            </div>
            <div className={styles.content}>
                <h4 className={styles.name}>{name}</h4>
                {pick && <span className={styles.label}>Curator's pick</span>}
                <div className={styles.details}>{data.time}h · {data.type.join(', ')}</div>
            </div>
            <div className={styles.btns}>
                <button className={styles.tools}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.5H23V12.5H9V14.5ZM9 19.5H23V17.5H9V19.5Z" fill="#3C3C43" fill-opacity="0.5" />
                    </svg>
                </button>
                <button className={styles.tools}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C12 16.8284 11.3284 17.5 10.5 17.5C9.67157 17.5 9 16.8284 9 16C9 15.1716 9.67157 14.5 10.5 14.5C11.3284 14.5 12 15.1716 12 16ZM17.5 16C17.5 16.8284 16.8284 17.5 16 17.5C15.1716 17.5 14.5 16.8284 14.5 16C14.5 15.1716 15.1716 14.5 16 14.5C16.8284 14.5 17.5 15.1716 17.5 16ZM21.5 17.5C22.3284 17.5 23 16.8284 23 16C23 15.1716 22.3284 14.5 21.5 14.5C20.6716 14.5 20 15.1716 20 16C20 16.8284 20.6716 17.5 21.5 17.5Z" fill="#3C3C43" fill-opacity="0.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CardHorizontal;