import { Button } from "../Button/Button";
import styles from "./TripInfo.module.scss";

interface TripInfoProps {
    duration: number;
    regions: number;
    from: string;
    flightDuration: string
}

const TripInfo: React.FC<TripInfoProps> = ({ duration, regions, from, flightDuration }) => {
    return (
        <div className={styles.box}>
            <div className={styles.col}>
                <span className={styles.title}>Trip duration</span>
                <strong>{duration} days</strong>
            </div>
            <div className={styles.col}>
                <span className={styles.title}>Exploration</span>
                <strong>{regions} regions</strong>
            </div>
            <div className={styles.col}>
                <span className={styles.title}>Flight</span>
                <strong>{flightDuration} from {from}</strong>
            </div>
            <Button className={styles.btn} label="View itinerary" url="#itinerary" />
        </div>
    )
}

export default TripInfo;