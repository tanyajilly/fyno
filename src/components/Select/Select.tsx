import { useState } from 'react';
import styles from "./Select.module.scss";

type Option = {
    value: number;
};

type CustomSelectProps = {
    value: number;
    label?: string;
    options: Option[];
    onChange: (selectedOption: Option) => void;
};

const CustomSelect: React.FC<CustomSelectProps> = ({ value, label, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>({ value });

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    };

    return (
        <div className={styles.select}>
            <div className={styles.opener} onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? `${selectedOption.value} days` : 'Select an option'}
                <svg className={styles.chevron} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.5623 8.94116L16.0017 9.43943L12 12.9965L7.99828 9.43943L7.43772 8.94116L6.44118 10.0623L7.00173 10.5605L11.5017 14.5605L12 15.0035L12.4983 14.5605L16.9983 10.5605L17.5588 10.0623L16.5623 8.94116Z" fill="#3C3C43" fill-opacity="0.5" />
                </svg>
            </div>
            {isOpen && (
                <ul className={styles.list}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={styles.item}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
