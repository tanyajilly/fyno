import classNames from 'classnames';
import styles from "./Button.module.scss";
interface ButtonProps {
    label: string,
    outline?: boolean,
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    url?: string;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, icon, outline, onClick, url, className }) => {
    const buttonClass = classNames(styles.btn, {
        [styles['btn-outline']]: outline,
    }, className)
    if (url) {
        return (
            <a href={url} className={buttonClass}>
                {icon ?? icon}
                {label}
            </a>
        )
    } else if (onClick) {
        return (
            <button onClick={onClick} className={buttonClass}>
                {icon ?? icon}
                {label}
            </button>
        )
    } else {
        return (
            <span className={buttonClass}>
                {icon ?? icon}
                {label}
            </span>
        )
    }

}
