import { Link } from 'react-router-dom';
import styles from './ContentPage02.module.css';

import RedAppleSVG from '../../assets/img/red_apple.svg';

const ContentPage02 = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <p>Haz Escojido Manzana Roja!</p>
            <img className={styles.img} src={RedAppleSVG} alt="Green Apple"/>
            <Link className={styles.link} to={'/'}>Creo que cambié de opinión</Link>
        </div>
    );
};

export default ContentPage02;