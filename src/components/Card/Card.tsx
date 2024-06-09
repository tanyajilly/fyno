import type { Highlight, Stay } from "../../interfaces/location";
import styles from "./Card.module.scss";

interface CardProps {
    data: Highlight | Stay;
}

const Card: React.FC<CardProps> = ({ data }) => {
    const { name, pick, image } = data;
    const isHighlight = (data: Highlight | Stay): data is Highlight => {
        return (data as Highlight).type instanceof Array;
    };
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={`./assets/iceland/${image}`} alt={name} />
                {pick && <span className={styles.label}>Curator's pick</span>}
                <button className={styles.save}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10.77C8 9.11814 8 8.29221 8.31637 7.65906C8.60675 7.07792 9.07792 6.60675 9.65906 6.31637C10.2922 6 11.1181 6 12.77 6H19.23C20.8819 6 21.7078 6 22.3409 6.31637C22.9221 6.60675 23.3933 7.07792 23.6836 7.65906C24 8.29221 24 9.11814 24 10.77V26L16 21.3655L8 26V10.77Z" fill="black" fill-opacity="0.1" />
                        <path d="M23.7494 26.4326L24.5 26.8675V26V10.77V10.7482C24.5 9.94074 24.5 9.30464 24.4588 8.79246C24.4169 8.26999 24.3297 7.83334 24.1309 7.43557C23.7921 6.75758 23.2424 6.20787 22.5644 5.86909L22.3418 6.31472L22.5644 5.86909C22.1667 5.67034 21.73 5.58314 21.2075 5.54115C20.6954 5.49999 20.0593 5.5 19.2518 5.5H19.23H12.77H12.7482C11.9407 5.5 11.3046 5.49999 10.7925 5.54115C10.27 5.58314 9.83334 5.67034 9.43557 5.86909C8.75758 6.20787 8.20787 6.75758 7.86909 7.43557C7.67034 7.83334 7.58314 8.26999 7.54115 8.79246C7.49999 9.30464 7.5 9.94073 7.5 10.7482V10.77V26V26.8675L8.25064 26.4326L16 21.9434L23.7494 26.4326Z" stroke="#3C3C43" stroke-opacity="0.18" />
                        <path d="M15.4987 20.5002L9 24.265V10.77C9 9.92785 9.00075 9.35538 9.03633 8.91262C9.071 8.48124 9.13386 8.26024 9.21091 8.10604C9.4045 7.71862 9.71862 7.4045 10.106 7.21091C10.2602 7.13386 10.4812 7.071 10.9126 7.03633C11.3554 7.00075 11.9279 7 12.77 7H19.23C20.0721 7 20.6446 7.00075 21.0874 7.03633C21.5188 7.071 21.7398 7.13386 21.894 7.21091C22.2814 7.4045 22.5955 7.71862 22.7891 8.10604C22.8661 8.26024 22.929 8.48124 22.9637 8.91262C22.9992 9.35538 23 9.92785 23 10.77V24.265L16.5013 20.5002L16 20.2098L15.4987 20.5002Z" fill="black" fill-opacity="0.1" stroke="white" strokeWidth="2" />
                    </svg>

                </button>
            </div>
            <div className={styles.content}>
                <h4 className={styles.name}>{name}</h4>
                {
                    isHighlight(data)
                        ? (<div className={styles.details}>{data.time}h · {data.type.join(', ')}</div>)
                        : (
                            <>
                                <div className={styles.rating}>{data.rating}/10</div>
                                <div className={styles.details}>${data.price}+ · {data.type}</div>
                            </>
                        )
                }

            </div>

        </div>
    )
}

export default Card;