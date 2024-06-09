import styles from "./PhotoGallery.module.scss";
import { Button } from "../Button/Button";

interface PhotoGalleryProps {
    images: string[]
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
    return (
        <div className={styles.wrapper}>
            {images.slice(0, 5).map((image) => <img key={image} className={styles.image} src={`./assets/iceland/${image}`} alt="Image description" />)}
            <Button className={styles['btn-all']} label="All photos" onClick={() => { }} icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="2" height="2" fill="white" />
                <rect x="10" y="15" width="2" height="2" fill="white" />
                <rect x="10" y="20" width="2" height="2" fill="white" />
                <rect x="15" y="10" width="2" height="2" fill="white" />
                <rect x="15" y="15" width="2" height="2" fill="white" />
                <rect x="15" y="20" width="2" height="2" fill="white" />
                <rect x="20" y="10" width="2" height="2" fill="white" />
                <rect x="20" y="15" width="2" height="2" fill="white" />
                <rect x="20" y="20" width="2" height="2" fill="white" />
            </svg>
            } />
        </div>
    )
}

export default PhotoGallery;