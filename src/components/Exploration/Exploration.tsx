import { Button } from "../Button/Button";
import styles from "./Exploration.module.scss";
import type { Exploration } from "../../interfaces/location";
import SlickSlider from "../Slider/Slider";
import { useState } from "react";
import CardHorizontal from "../CardHorizontal/CardHorizontal";


interface ExplorationProps {
    id: string;
    data: Exploration;
}

const Exploration: React.FC<ExplorationProps> = ({ id, data }) => {
    const [isHighlights, setIsHighlights] = useState(true);
    const { name, descr, features, highlights, stay } = data;
    return (
        <div className={styles.container}>
            <span className={styles.id}>{id}</span>
            <div className={styles.region}>
                <div className={styles.heading}>
                    <h2 className={styles.title}>{name}</h2>
                    {features.length && (
                        <ul className={styles.features}>
                            {features.map((item, i) => (<li key={i}>{item}</li>))}
                        </ul>
                    )}
                </div>

                <p>{descr}</p>
            </div>
            {
                isHighlights
                    ? (
                        <div className={styles.list}>
                            <span className={styles.dot}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.96412 10.875C7.37619 10.2566 8.50658 9.12619 9.125 7.71412C9.74343 9.12619 10.8738 10.2566 12.2859 10.875C10.8738 11.4934 9.74342 12.6238 9.125 14.0359C8.50657 12.6238 7.37619 11.4934 5.96412 10.875Z" stroke="white" strokeWidth="1.25" />
                                    <path d="M13.3949 4.5257C13.4178 4.41078 13.5822 4.41078 13.6051 4.5257C13.7938 5.46893 14.5311 6.20621 15.4743 6.39486C15.5892 6.41784 15.5892 6.58215 15.4743 6.60514C14.5311 6.79379 13.7938 7.53107 13.6051 8.4743C13.5822 8.58922 13.4178 8.58922 13.3949 8.4743C13.2062 7.53107 12.4689 6.79379 11.5257 6.60514C11.4108 6.58215 11.4108 6.41784 11.5257 6.39486C12.4689 6.20621 13.2062 5.46893 13.3949 4.5257Z" fill="white" />
                                </svg>
                            </span>
                            <div className={`${styles.heading} ${styles.row}`}>
                                <h3>Region highlights</h3>
                                <Button outline label="Show daily plan" onClick={() => { setIsHighlights(false) }} icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="9.75" y="9.75" width="2.5" height="2.5" rx="1.25" fill="black" stroke="black" strokeWidth="0.5" />
                                    <rect x="9.75" y="14.75" width="2.5" height="2.5" rx="1.25" fill="black" stroke="black" strokeWidth="0.5" />
                                    <rect x="9.75" y="19.75" width="2.5" height="2.5" rx="1.25" fill="black" stroke="black" strokeWidth="0.5" />
                                    <rect x="15" y="10" width="7" height="2" fill="black" />
                                    <rect x="15" y="15" width="7" height="2" fill="black" />
                                    <rect x="15" y="20" width="7" height="2" fill="black" />
                                </svg>
                                } />
                            </div>
                            <SlickSlider items={highlights} />
                        </div>
                    )
                    : (
                        <div className={styles.list}>
                            <span className={styles.dot}>
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.791667" y="0.791667" width="2.08333" height="2.08333" rx="1.04167" fill="white" stroke="white" stroke-width="0.416667" />
                                    <rect x="0.791667" y="4.95829" width="2.08333" height="2.08333" rx="1.04167" fill="white" stroke="white" stroke-width="0.416667" />
                                    <rect x="0.791667" y="9.12504" width="2.08333" height="2.08333" rx="1.04167" fill="white" stroke="white" stroke-width="0.416667" />
                                    <rect x="5.58341" y="1.41667" width="5" height="0.833333" fill="white" stroke="white" stroke-width="0.833333" />
                                    <rect x="5.58341" y="5.58329" width="5" height="0.833333" fill="white" stroke="white" stroke-width="0.833333" />
                                    <rect x="5.58341" y="9.75004" width="5" height="0.833333" fill="white" stroke="white" stroke-width="0.833333" />
                                </svg>
                            </span>
                            <div className={`${styles.heading} ${styles.row}`}>
                                <h3>2 days plan</h3>
                                <Button outline label="Show highlights" onClick={() => { setIsHighlights(true) }} icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.94976 16.625C11.9267 15.7592 13.5092 14.1767 14.375 12.1998C15.2408 14.1767 16.8233 15.7592 18.8002 16.625C16.8233 17.4908 15.2408 19.0733 14.375 21.0502C13.5092 19.0733 11.9267 17.4908 9.94976 16.625Z" stroke="black" stroke-width="1.75" />
                                    <path d="M20.3528 7.73598C20.385 7.57509 20.615 7.57509 20.6472 7.73598C20.9113 9.0565 21.9435 10.0887 23.264 10.3528C23.4249 10.385 23.4249 10.615 23.264 10.6472C21.9435 10.9113 20.9113 11.9435 20.6472 13.264C20.615 13.4249 20.385 13.4249 20.3528 13.264C20.0887 11.9435 19.0565 10.9113 17.736 10.6472C17.5751 10.615 17.5751 10.385 17.736 10.3528C19.0565 10.0887 20.0887 9.0565 20.3528 7.73598Z" fill="black" />
                                </svg>
                                } />
                            </div>
                            <div className={styles.row}>
                                <h3>Day 1</h3>
                                <Button label="40m" className={styles.label} icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71527 9.6798C4.43386 10.9612 4.43386 13.0388 5.71527 14.3202L9.67976 18.2847C10.9612 19.5661 13.0387 19.5661 14.3202 18.2847L18.2846 14.3202C19.5661 13.0388 19.5661 10.9612 18.2847 9.6798L14.3202 5.7153C13.0387 4.43389 10.9612 4.43389 9.67977 5.7153L5.71527 9.6798ZM6.82012 13.2153C6.14891 12.5441 6.14891 11.4559 6.82012 10.7846L10.7846 6.82015C11.4558 6.14894 12.5441 6.14894 13.2153 6.82015L17.1798 10.7847C17.851 11.4559 17.851 12.5441 17.1798 13.2153L13.2153 17.1798C12.5441 17.851 11.4558 17.851 10.7846 17.1798L9.7812 16.1764V14.4999C9.7812 13.5507 10.5507 12.7812 11.5 12.7812H13.6138L10.9575 15.4375H13.1672L16.6048 11.9999L13.1674 8.5625H10.9577L13.6138 11.2187H11.5C9.68777 11.2187 8.2187 12.6878 8.2187 14.4999V14.6139L6.82012 13.2153Z" fill="#3C3C43" fill-opacity="0.8" />
                                </svg>
                                } />
                                <button className={styles.tools}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C12 16.8284 11.3284 17.5 10.5 17.5C9.67157 17.5 9 16.8284 9 16C9 15.1716 9.67157 14.5 10.5 14.5C11.3284 14.5 12 15.1716 12 16ZM17.5 16C17.5 16.8284 16.8284 17.5 16 17.5C15.1716 17.5 14.5 16.8284 14.5 16C14.5 15.1716 15.1716 14.5 16 14.5C16.8284 14.5 17.5 15.1716 17.5 16ZM21.5 17.5C22.3284 17.5 23 16.8284 23 16C23 15.1716 22.3284 14.5 21.5 14.5C20.6716 14.5 20 15.1716 20 16C20 16.8284 20.6716 17.5 21.5 17.5Z" fill="#3C3C43" fill-opacity="0.5" />
                                    </svg>
                                </button>
                            </div>
                            {
                                highlights.filter(item => item.day === 1).map((item) => (<CardHorizontal key={item.id} data={item} />))
                            }
                            <div className={styles.row}>
                                <h3>Day 2</h3>
                                <Button label="40m" className={styles.label} icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71527 9.6798C4.43386 10.9612 4.43386 13.0388 5.71527 14.3202L9.67976 18.2847C10.9612 19.5661 13.0387 19.5661 14.3202 18.2847L18.2846 14.3202C19.5661 13.0388 19.5661 10.9612 18.2847 9.6798L14.3202 5.7153C13.0387 4.43389 10.9612 4.43389 9.67977 5.7153L5.71527 9.6798ZM6.82012 13.2153C6.14891 12.5441 6.14891 11.4559 6.82012 10.7846L10.7846 6.82015C11.4558 6.14894 12.5441 6.14894 13.2153 6.82015L17.1798 10.7847C17.851 11.4559 17.851 12.5441 17.1798 13.2153L13.2153 17.1798C12.5441 17.851 11.4558 17.851 10.7846 17.1798L9.7812 16.1764V14.4999C9.7812 13.5507 10.5507 12.7812 11.5 12.7812H13.6138L10.9575 15.4375H13.1672L16.6048 11.9999L13.1674 8.5625H10.9577L13.6138 11.2187H11.5C9.68777 11.2187 8.2187 12.6878 8.2187 14.4999V14.6139L6.82012 13.2153Z" fill="#3C3C43" fill-opacity="0.8" />
                                </svg>
                                } />
                                <button className={styles.tools}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C12 16.8284 11.3284 17.5 10.5 17.5C9.67157 17.5 9 16.8284 9 16C9 15.1716 9.67157 14.5 10.5 14.5C11.3284 14.5 12 15.1716 12 16ZM17.5 16C17.5 16.8284 16.8284 17.5 16 17.5C15.1716 17.5 14.5 16.8284 14.5 16C14.5 15.1716 15.1716 14.5 16 14.5C16.8284 14.5 17.5 15.1716 17.5 16ZM21.5 17.5C22.3284 17.5 23 16.8284 23 16C23 15.1716 22.3284 14.5 21.5 14.5C20.6716 14.5 20 15.1716 20 16C20 16.8284 20.6716 17.5 21.5 17.5Z" fill="#3C3C43" fill-opacity="0.5" />
                                    </svg>
                                </button>
                            </div>
                            {
                                highlights.filter(item => item.day === 2).map((item) => (<CardHorizontal key={item.id} data={item} />))
                            }
                        </div>
                    )
            }

            <div className={styles.list}>
                <span className={styles.dot}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.78125 7.65625C5.78125 6.62072 6.62072 5.78125 7.65625 5.78125H12.3438C13.3793 5.78125 14.2188 6.62072 14.2188 7.65625V8.62283C14.8396 8.89408 15.2734 9.51356 15.2734 10.2344V13.75H14.1016V12.9297H5.89844V13.75H4.72656V10.2344C4.72656 9.51356 5.16042 8.89408 5.78125 8.62283V7.65625ZM9.53125 8.47656H7.1875V7.65625C7.1875 7.39737 7.39737 7.1875 7.65625 7.1875H9.0625C9.32138 7.1875 9.53125 7.39737 9.53125 7.65625V8.47656ZM12.8125 8.47656H10.4688V7.65625C10.4688 7.39737 10.6786 7.1875 10.9375 7.1875H12.3438C12.6026 7.1875 12.8125 7.39737 12.8125 7.65625V8.47656ZM14.1016 11.7578H5.89844V10.2344C5.89844 9.91077 6.16077 9.64844 6.48438 9.64844H13.5156C13.8392 9.64844 14.1016 9.91077 14.1016 10.2344V11.7578Z" fill="white" />
                    </svg>
                </span>
                <div className={styles.heading}>
                    <h3>Where to stay</h3>
                </div>
                <SlickSlider items={stay} />
            </div>
        </div>
    )
}

export default Exploration;