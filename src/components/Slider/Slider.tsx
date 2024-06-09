import Card from "../Card/Card";
import styles from "./Slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Highlight, Stay } from "../../interfaces/location";
import Slider from "react-slick";
import classNames from "classnames";

interface SliderProps {
    items: Highlight[] | Stay[]
}

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={classNames(className, styles.arrow)}
            onClick={onClick}
        >
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8H16M16 8L9.2 1M16 8L9.2 15" stroke="black" strokeWidth="2" />
            </svg>
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={classNames(className, styles.arrow)}
            onClick={onClick}
        >
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8H16M16 8L9.2 1M16 8L9.2 15" stroke="black" strokeWidth="2" />
            </svg>
        </div>
    );
}

const SlickSlider: React.FC<SliderProps> = ({ items }) => {
    const settings = {
        infinite: false,
        className: styles.slider,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {items.map((item) => (<Card key={item.id} data={item} />))}
        </Slider>

        // <Slider {...settings}>
        //     <div>
        //         <h3>1</h3>
        //     </div>
        //     <div>
        //         <h3>2</h3>
        //     </div>
        //     <div>
        //         <h3>3</h3>
        //     </div>
        //     <div>
        //         <h3>4</h3>
        //     </div>
        //     <div>
        //         <h3>5</h3>
        //     </div>
        //     <div>
        //         <h3>6</h3>
        //     </div>
        // </Slider>
    )
}

export default SlickSlider;