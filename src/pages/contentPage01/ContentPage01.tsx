import { Link } from "react-router-dom";
import styles from './ContentPage01.module.css';

import GreenAppleSVG from '../../assets/img/green_apple.svg';

const ContentPage01 = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <p>Haz Escojido Manzana Verde!</p>
            <img className={styles.img} src={GreenAppleSVG} alt="Green Apple"/>
            <Link className={styles.link} to={'/'}>Creo que cambié de opinión</Link>
        </div>
    );
};

export default ContentPage01;