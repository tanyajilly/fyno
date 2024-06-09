import styles from "./Itinerary.module.scss";
import classNames from 'classnames';


interface ItineraryProps {
    flight: {
        from: string;
        fromAirport: string;
        to: string;
        toAirport: string;
        duration: string;
    },
    dates: {
        start: string;
        end: string;
    },
    travellers: number;
    country: string;
}

const Itinerary: React.FC<ItineraryProps> = ({ flight, dates, travellers, country }) => {
    return (
        <div className={styles.container} id="itinerary">
            <h2 className={styles.title}>{country} itinerary</h2>
            <form className={styles.box}>
                <div className={styles.group}>
                    <input className={styles.input} type="text" name="from" id="from" defaultValue={`${flight.from}, ${flight.fromAirport}`} />
                    <svg className={styles.planeIcon} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.625 14.125L14.125 8.125L12.25 8.125L14.5 14.5L10.75 14.875L9.625 12.25H8.125V19.75H9.625L10.75 17.125L14.5 17.5L12.25 23.875H14.125L18.625 17.875C19.75 17.875 20.875 17.875 22 17.875C23.0355 17.875 23.875 17.0355 23.875 16C23.875 14.9645 23.0355 14.125 22 14.125C20.875 14.125 19.75 14.125 18.625 14.125Z" fill="black" />
                    </svg>
                    <input className={styles.input} type="text" name="to" id="to" defaultValue={`${flight.to}, ${flight.toAirport}`} />
                </div>
                <input className={classNames(styles.input, styles.datepicker)} type="text" name="dates" id="dates" defaultValue={`${dates.start} - ${dates.end}`} />
                <input className={classNames(styles.input, styles.passengers)} type="number" name="passengers" id="passengers" defaultValue={travellers} />
            </form>
        </div>
    )
}

export default Itinerary;