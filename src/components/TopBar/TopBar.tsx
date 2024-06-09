import { Dispatch, SetStateAction } from "react";
import styles from "./TopBar.module.scss";
import { Button } from "../Button/Button";
import Select from "../Select/Select";

interface TopBarProps {
    country: string;
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

const options = [
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
];

const TopBar: React.FC<TopBarProps> = ({ country, duration, setDuration }) => {
    const handleSelectChange = (selectedOption: { value: number }) => {
        console.log('Selected option:', selectedOption);
        setDuration(selectedOption.value);
    };
    return (
        <div className={styles['top-bar']}>
            <ul className={styles.breadcrumbs}>
                <li>Trips</li>
                <li>{country}</li>
                <li>
                    <Select label="days" value={duration} options={options} onChange={handleSelectChange} />
                </li>
            </ul>
            <Button className={styles['btn-side']} outline label="Create" onClick={() => setDuration(duration)} icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.5V18.5M5.5 12L18.5 12" stroke="black" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
            } />
        </div>
    )
}

export default TopBar;